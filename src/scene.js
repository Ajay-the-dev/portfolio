import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

//scene is like a container
const scene = new THREE.Scene();

//camera is like a eye
const camera = new THREE.PerspectiveCamera(
    75,//field of view
    window.innerWidth / window.innerHeight,//aspect ratio,
    0.1,//near clipping plane,
    1000//far clipping plane
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setX(-2);
camera.position.setY(-1);
camera.position.setZ(1.4);



//geometry is the shape of the object



const mytexture = new THREE.TextureLoader().load('AjayC.jpg');

const blackTexture = new THREE.TextureLoader().load('black.jpg');



const torus = new THREE.Mesh(
    new THREE.TorusGeometry(2, 0.5, 16, 100),
    new THREE.MeshPhysicalMaterial({ map: blackTexture })
);


const torus2 = new THREE.Mesh(
    new THREE.TorusGeometry(2, 0.5, 16, 100),
    new THREE.MeshPhysicalMaterial({ map: blackTexture })
);


const torus3 = new THREE.Mesh(
    new THREE.TorusGeometry(2, 0.5, 16, 100),
    new THREE.MeshPhysicalMaterial({ map: blackTexture })
);


const torus4 = new THREE.Mesh(
    new THREE.TorusGeometry(2, 0.5, 16, 100),
    new THREE.MeshPhysicalMaterial({ map: blackTexture })
);

torus2.translateZ(-7);

torus3.translateZ(-14);

torus4.translateZ(-21);


scene.add(torus);

scene.add(torus2);

scene.add(torus3);

scene.add(torus4);



const loader = new FontLoader();

let textMesh;

loader.load('fonts/helvetiker_regular.json', function (font) {
    const txt = new TextGeometry('Loading', {
        font: font,
        size: 0.3,  // Reduced size for better visibility
        depth: 0.01,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 0.2
    });

    const matLite = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
    // const txtMaterial = new THREE.MeshToonMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(txt, matLite);

    textMesh.position.set(-0.7, -0.3, 0.01); // Adjust position if needed
    textMesh.rotation.x = 0;
    textMesh.rotation.y = -1.4;
    textMesh.rotation.z = 0;


    scene.add(textMesh); // ✅ Correct way to add text to the scene
});


// const loadingMsg = new THREE.TextGeometry( text, parameters ); 

const pointLight = new THREE.PointLight(0xffffff);

pointLight.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 9);

scene.add(ambientLight);


const axesHelper = new THREE.AxesHelper(5);



const lightHelper = new THREE.PointLightHelper(pointLight);

const gridHelper = new THREE.GridHelper(200, 50);

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(axesHelper,gridHelper);





function animate(location) {
    
    // console.log(location);
    requestAnimationFrame(() => animate(location));
    torus.rotation.z += 0.01;
    torus2.rotation.z -= 0.01;
    torus3.rotation.z += 0.01;
    torus4.rotation.z -= 0.01;


    // textMesh.rotation.z += 0.1;




    switch (location) {
        case 'first':
            var zindex = {};
            zindex.from = camera.position.z;
            zindex.to = -6;

            var xindex = {}
            xindex.from = camera.position.x;
            xindex.to = -2;

            var yindex = {}
            yindex.from = camera.position.y;
            xindex.to = -1;

            setTimeout(() => {
                        moveCamera(zindex,xindex,yindex);            
            }, 2000);
            break;
    
        case 'second':
           
            var zindex = {};
            zindex.from = camera.position.z;
            zindex.to = -13;

            var xindex = {}
            xindex.from = camera.position.x;
            xindex.to = -1.5;

            setTimeout(() => {
                        moveCamera(zindex,xindex);            
            }, 2000);
            break;
        case 'third':
           


            var zindex = {};
            zindex.from = camera.position.z;
            zindex.to = -19;

            var xindex = {}
            xindex.from = camera.position.x;
            xindex.to = -1.9;

            setTimeout(() => {
                        moveCamera(zindex,xindex);            
            }, 2000);
            break;
        default:
            // console.log('ssss');
            // camera.position.set(-2,-1,1.4);
            break;
    }
    
    
    renderer.render(scene, camera);

}

function moveCamera(z,x,y) {

    console.log('x:'+camera.position.x+'y:'+camera.position.y+'z:'+camera.position.z);
    
    if(z)
    {
        if(camera.position.z <= z.from && camera.position.z > z.to )
        {
            camera.position.set(camera.position.x , camera.position.y, camera.position.z - 0.1);
        }
    }

    if(x)
    {
        if(camera.position.x <= x.from && camera.position.x >= x.to )
        {
            camera.position.set(camera.position.x - 0.1 , camera.position.y, camera.position.z);
        }
    }

    if(y)
    {
        if(camera.position.y <= y.from && camera.position.y >= y.to )
        {
            camera.position.set(camera.position.y , camera.position.y - 0.1, camera.position.z);
        }
    }
}


window.addEventListener('resize', () => {
    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});





// animate('third');

animate();



