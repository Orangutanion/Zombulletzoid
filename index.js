export const createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-15, 15, -15), scene);

    camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
    const size = 6, aspect = engine.getRenderWidth() / engine.getRenderHeight();
    camera.orthoLeft   = -size * aspect;
    camera.orthoRight  =  size * aspect;
    camera.orthoTop    =  size;
    camera.orthoBottom = -size;

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // collection of boxes to check ortho
    const boxes = [];
    for(let i = 0; i < 4; i++) {
        const sub_boxes = [];
        for(let j = 0; j < 4; j++) {
            sub_boxes[j] = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);
            sub_boxes[j].position.x = 2*i - 3;
            sub_boxes[j].position.z = 2*j - 3;
        }
        boxes[i] = sub_boxes;
    }

    // Our built-in 'ground' shape.
    //var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 16, height: 6}, scene);

    return scene;
};