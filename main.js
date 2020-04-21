THREE.Cache.enabled = true;
var count = 0;
var loader = new THREE.FileLoader();
var fshader, vshader;


loader.load('shaders/vertShader.vert',
    // onLoad callback
    function (data) {
        console.log(data); // output the text to the console
        vshader = data;
        count += 1;
        addCoolCube(2,0); // we will write this method
    },
    // onProgress callback
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // onError callback
    function (err) {
        console.error('An error happened');
    });

loader.load('shaders/fragmentShader.frag',
    // onLoad callback
    function (data) {
        console.log(data); // output the text to the console
        fshader = data;
        count += 1;
        addCoolCube(2,0); // we will write this method
    },
    // onProgress callback
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // onError callback
    function (err) {
        console.error('An error happened');
    });

let vsh, fsh;
let g2 = 0;

loader.load('shaders/vertShader-2.vert',
    // onLoad callback
    function (data) {
        console.log(data); // output the text to the console
        vshader = data;
        count += 1;
        addCoolCube(2,0); // we will write this method
    },
    // onProgress callback
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // onError callback
    function (err) {
        console.error('An error happened');
    });

loader.load('shaders/fragShader.frag',
    // onLoad callback
    function (data) {
        console.log(data); // output the text to the console
        fshader = data;
        count += 1;
        addCoolCube(2,0); // we will write this method
    },
    // onProgress callback
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // onError callback
    function (err) {
        console.error('An error happened');
    });

// setup the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

// setup the cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshPhongMaterial({
    color: 0xdddddd,
    specular: 0x00ff00, shininess: 30
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

material = new THREE.MeshNormalMaterial();

var c2 = new THREE.Mesh(geometry, material);
c2.position.x = -2;
scene.add(c2);
// add the light
var light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(10, 10, 10);
scene.add(light);


var geometry1, material1, mesh1,geo2,mat2,mesh2;

function addCoolCube(x,y) {
    if (count == 2) {
         geometry1 = new THREE.BoxGeometry(1, 1, 1);
        if (count == 2) {
            let uniforms = {
                colorB: {
                    type: 'vec3', value: new
                    THREE.Color(0xACB6E5)
                },
                colorA: {
                    type: 'vec3', value: new
                    THREE.Color(0x74ebd5)
                }
            };

            material1 = new THREE.ShaderMaterial({
                fragmentShader: fshader,
                vertexShader: vshader, uniforms: uniforms,
                precision: "mediump"
            });


            mesh1 = new THREE.Mesh(geometry1, material1);
            mesh1.position.x = x;
            scene.add(mesh1);
        }

    }

    if (count == 4) {
        geo2 = new THREE.BoxGeometry(1, 1, 1);
        if (count == 4) {
            let uniforms = {
                colorB: {
                    type: 'vec3', value: new
                    THREE.Color(0xACB6E5)
                },
                colorA: {
                    type: 'vec3', value: new
                    THREE.Color(0x74ebd5)
                }
            };

            mat2 = new THREE.ShaderMaterial({
                fragmentShader: fshader,
                vertexShader: vshader, uniforms: uniforms,
                precision: "mediump"
            });

            console.log("in c == 4");
            mesh2 = new THREE.Mesh(geo2, mat2);
            mesh2.position.y = x;
            scene.add(mesh2);
        }

    }


}



function animate() {
    requestAnimationFrame(animate);
    geometry.rotateX(0.01);
    geometry.rotateY(0.01);

    if (geometry1) {
        geometry1.rotateX(0.01);
        geometry1.rotateY(0.01);
    }

    if (geo2) {
        geo2.rotateX(0.01);
        geo2.rotateY(0.01);
    }
    renderer.render(scene, camera);
}

animate();
