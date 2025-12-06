window.addEventListener( 'resize', onWindowResize, false );

//THREE.JS 
var container = document.getElementById("threejs"); 
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, container.clientWidth / container.clientHeight, 0.1, 1000 );
var renderer = renderer = new THREE.WebGLRenderer( { antialias: true,  alpha: true  } );
renderer.setSize( container.clientWidth, container.clientHeight );
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;
container.appendChild( renderer.domElement );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.8;
controls.rotateSpeed = 0.3;

init();

function init()
{
    //Background color
    // scene.background = new THREE.Color("rgba(0, 0, 0, 0.3)");

    scene.add(camera);
    camera.position.set( 0, 0, 10 );
 
}

loadModel("Earth")

function animate()
{
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
    controls.update();
}

function loadModel(modelName)
{ 
    var loader = new THREE.GLTFLoader();
    loader.load(  'assets/earth/models/'+ modelName + '.glb', function ( gltf ) {
    
    scene.add( gltf.scene );
    var modelSize = 0.0045 ;
    gltf.scene.children[0].scale.set( modelSize , modelSize , modelSize )
    
    animate();
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}