gdjs.mainSceneCode = {};
gdjs.mainSceneCode.GDimg_9595backGroundObjects1= [];
gdjs.mainSceneCode.GDimg_9595backGroundObjects2= [];
gdjs.mainSceneCode.GDimg_9595backGroundObjects3= [];
gdjs.mainSceneCode.GDimg_9595backGroundObjects4= [];
gdjs.mainSceneCode.GDtxt_9595debugObjects1= [];
gdjs.mainSceneCode.GDtxt_9595debugObjects2= [];
gdjs.mainSceneCode.GDtxt_9595debugObjects3= [];
gdjs.mainSceneCode.GDtxt_9595debugObjects4= [];
gdjs.mainSceneCode.GDtxt_9595debug2Objects1= [];
gdjs.mainSceneCode.GDtxt_9595debug2Objects2= [];
gdjs.mainSceneCode.GDtxt_9595debug2Objects3= [];
gdjs.mainSceneCode.GDtxt_9595debug2Objects4= [];
gdjs.mainSceneCode.GDtest_9595playerObjects1= [];
gdjs.mainSceneCode.GDtest_9595playerObjects2= [];
gdjs.mainSceneCode.GDtest_9595playerObjects3= [];
gdjs.mainSceneCode.GDtest_9595playerObjects4= [];
gdjs.mainSceneCode.GDCollisionDetectObjects1= [];
gdjs.mainSceneCode.GDCollisionDetectObjects2= [];
gdjs.mainSceneCode.GDCollisionDetectObjects3= [];
gdjs.mainSceneCode.GDCollisionDetectObjects4= [];
gdjs.mainSceneCode.GDcamTopObjects1= [];
gdjs.mainSceneCode.GDcamTopObjects2= [];
gdjs.mainSceneCode.GDcamTopObjects3= [];
gdjs.mainSceneCode.GDcamTopObjects4= [];
gdjs.mainSceneCode.GDdrawShapeObjects1= [];
gdjs.mainSceneCode.GDdrawShapeObjects2= [];
gdjs.mainSceneCode.GDdrawShapeObjects3= [];
gdjs.mainSceneCode.GDdrawShapeObjects4= [];
gdjs.mainSceneCode.GDcamBottomObjects1= [];
gdjs.mainSceneCode.GDcamBottomObjects2= [];
gdjs.mainSceneCode.GDcamBottomObjects3= [];
gdjs.mainSceneCode.GDcamBottomObjects4= [];
gdjs.mainSceneCode.GDcamRightObjects1= [];
gdjs.mainSceneCode.GDcamRightObjects2= [];
gdjs.mainSceneCode.GDcamRightObjects3= [];
gdjs.mainSceneCode.GDcamRightObjects4= [];
gdjs.mainSceneCode.GDcamLeftObjects1= [];
gdjs.mainSceneCode.GDcamLeftObjects2= [];
gdjs.mainSceneCode.GDcamLeftObjects3= [];
gdjs.mainSceneCode.GDcamLeftObjects4= [];
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects1= [];
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects2= [];
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects3= [];
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects4= [];
gdjs.mainSceneCode.GDimg_9595earthObjects1= [];
gdjs.mainSceneCode.GDimg_9595earthObjects2= [];
gdjs.mainSceneCode.GDimg_9595earthObjects3= [];
gdjs.mainSceneCode.GDimg_9595earthObjects4= [];
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects1= [];
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects2= [];
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects3= [];
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects4= [];


gdjs.mainSceneCode.mapOfGDgdjs_9546mainSceneCode_9546GDCollisionDetectObjects2Objects = Hashtable.newFrom({"CollisionDetect": gdjs.mainSceneCode.GDCollisionDetectObjects2});
gdjs.mainSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.mainSceneCode.GDtest_9595playerObjects2, gdjs.mainSceneCode.GDtest_9595playerObjects3);

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mainSceneCode.GDtest_9595playerObjects3.length !== 0 ? gdjs.mainSceneCode.GDtest_9595playerObjects3[0] : null), true, "Player", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CollisionDetect"), gdjs.mainSceneCode.GDCollisionDetectObjects2);
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].separateFromObjectsList(gdjs.mainSceneCode.mapOfGDgdjs_9546mainSceneCode_9546GDCollisionDetectObjects2Objects, false);
}
}}

}


};gdjs.mainSceneCode.userFunc0x901598 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
//Definiciones
const player = objects[0];
const tdbug = runtimeScene.getObjects("txt_debug")[0];
const offset = 200;

//Intervalo de check position
var checkCam = setInterval( () => {
    var bIsOut = false;
    var bEdgeRight = false ;
    var bEdgeLeft= false ;
    var bEdgeTop= false ;
    var bEdgeBottom = false ;

    if (player.x <= 0 && player.x < window.innerWidth) {
        bEdgeLeft = true; 
        runtimeScene.getVariables().get("bEdgeLeft").setBoolean(bEdgeLeft);
    }
    if (player.x >= window.innerWidth && player.x > 0) { 
        bEdgeRight = true;      
        runtimeScene.getVariables().get("bEdgeRight").setBoolean(bEdgeRight);
    }
    if (player.y <= 0 ) {
        bEdgeTop = true; 
        runtimeScene.getVariables().get("bEdgeTop").setBoolean(bEdgeTop);
    }
    if (player.y >= window.innerHeight) {
        bEdgeBottom = true; 
        runtimeScene.getVariables().get("bEdgeBottom").setBoolean(bEdgeBottom);
    }
    

    //tdbug.setString("playerY: " + Math.floor(player.y) + " BOTTOM: " + Math.floor(window.innerHeight) + " TOP: " + Math.floor(0));

},1);

};
gdjs.mainSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);

var objects = [];
objects.push.apply(objects,gdjs.mainSceneCode.GDtest_9595playerObjects2);
gdjs.mainSceneCode.userFunc0x901598(runtimeScene, objects);

}


};gdjs.mainSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects3);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointX("")), 0.05), "Player", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointY("")), 0.05), "Player", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointX("")) * 0.05, "Parallax_1", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointY("")) * 0.05, "Parallax_1", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointX("")) * 0.2, "Parallax_2", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointY("")) * 0.2, "Parallax_2", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointX("")) * 1.2, "CoverBack", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointY("")) * 1.2, "CoverBack", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointX("")), "debug", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.mainSceneCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.mainSceneCode.GDtest_9595playerObjects3[0].getPointY("")), "debug", 0);
}}

}


{



}


{



}


{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.mainSceneCode.userFunc0x901888 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const td = runtimeScene.getObjects("txt_debug2")[0];

//Identificacion de background
var back = objects[0];
objects.forEach((b) => {
    let id = b.getVariables().get("id").getAsNumber();
    if (id == 1) {
        back = b;
    }
});

//Get Tween behaviour
var beha = back.getBehavior("Tween");
if (beha == null) {
    Error("No encontrado tween en objeto Background");
}

//Set interval pump efecto
var timeInt = gdjs.randomFloatInRange(20,40 * 1000);
var bScalingUp = true;
funcInterval();

function funcInterval () {
    bScalingUp = !bScalingUp;
    if (bScalingUp == true) {
        beha.stopTween("scalerBack");
        beha.addObjectScaleTween3("scalerBack", 1, "linear", 40, false, true);
    } else if (bScalingUp == false) {
        beha.stopTween("scalerBack");
        beha.addObjectScaleTween3("scalerBack", 4, "linear", 40, false, true);
    }
}

var interval = setInterval( funcInterval, timeInt);


};
gdjs.mainSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("img_backGround"), gdjs.mainSceneCode.GDimg_9595backGroundObjects2);

var objects = [];
objects.push.apply(objects,gdjs.mainSceneCode.GDimg_9595backGroundObjects2);
gdjs.mainSceneCode.userFunc0x901888(runtimeScene, objects);

}


};gdjs.mainSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.mainSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("img_backGround"), gdjs.mainSceneCode.GDimg_9595backGroundObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDimg_9595backGroundObjects2.length;i<l;++i) {
    if ( gdjs.mainSceneCode.GDimg_9595backGroundObjects2[i].getVariableNumber(gdjs.mainSceneCode.GDimg_9595backGroundObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDimg_9595backGroundObjects2[k] = gdjs.mainSceneCode.GDimg_9595backGroundObjects2[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDimg_9595backGroundObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDimg_9595backGroundObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDimg_9595backGroundObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDimg_9595backGroundObjects2[i].getBehavior("Opacity").setOpacity(20);
}
}{for(var i = 0, len = gdjs.mainSceneCode.GDimg_9595backGroundObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDimg_9595backGroundObjects2[i].setColor("172;177;226");
}
}}

}


};gdjs.mainSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.mainSceneCode.userFunc0x8df648 = function GDJSInlineCode(runtimeScene) {
"use strict";
//Definitions
var timeTransition = 50;
var glowValue = 1;
var maxValueEffect = 10;
const layerName = "Parallax_2";
const effect = "GlowEffect";
const param = "outerStrength";
const param2 = "innerStrength";
const param3 = "distance"
const layer = runtimeScene.getLayer(layerName);
const wallpp = runtimeScene.getObjects("img_backGround");
var thisWallpp = null;
wallpp.forEach((w)=>
{
    if (w.getVariables().get("id").getAsNumber() == 2){
        thisWallpp = w;
    }
})
const tdb = runtimeScene.getObjects("txt_debug2")[0];

//Lerp interval loop
var changePol = 1;
var thisInterval = setInterval(()=> {
    glowValue = glowValue + (0.01 * changePol);
    setTimeout(()=> {
        layer.setEffectDoubleParameter(effect, param, clamp(glowValue, 0.5, 2.5));
        //layer.setEffectDoubleParameter(effect, param2, clamp(glowValue, 1, 3));
        //layer.setEffectDoubleParameter(effect, param3, clamp(glowValue, 10, 20));
        //other effects
        thisWallpp.rotate(1);
        layer.setCameraY(layer.getCameraY() + (glowValue * 5));
    }  ,timeTransition);
    //tdb.setString("glow: " + glowValue);
    //loop
    if (glowValue >= maxValueEffect){
        changePol = changePol * -1;
    } else if (glowValue <= 0) {
        changePol = changePol * -1;
    }
},timeTransition)

//Clamp function
function clamp (n, mn, mx){
    const clampN =  Math.min(Math.max(n, mn), mx);    
    return clampN;
}


};
gdjs.mainSceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.mainSceneCode.userFunc0x8df648(runtimeScene);

}


};gdjs.mainSceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "innerStrength", true);
}{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "color", true);
}{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "outerStrength", true);
}{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "distance", true);
}
{ //Subevents
gdjs.mainSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.mainSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12315956);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.mainSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img_backGround"), gdjs.mainSceneCode.GDimg_9595backGroundObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDimg_9595backGroundObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDimg_9595backGroundObjects2[i].getBehavior("Opacity").setOpacity(20);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].setZOrder((gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getPointY("")));
}
}
{ //Subevents
gdjs.mainSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.mainSceneCode.eventsList2(runtimeScene);
}


{


gdjs.mainSceneCode.eventsList4(runtimeScene);
}


{


gdjs.mainSceneCode.eventsList6(runtimeScene);
}


{


gdjs.mainSceneCode.eventsList9(runtimeScene);
}


};gdjs.mainSceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.8, "Player", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.mainSceneCode.eventsList12 = function(runtimeScene) {

{



}


};gdjs.mainSceneCode.eventsList13 = function(runtimeScene) {

{



}


};gdjs.mainSceneCode.eventsList14 = function(runtimeScene) {

{



}


};gdjs.mainSceneCode.eventsList15 = function(runtimeScene) {

{



}


};gdjs.mainSceneCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12329916);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDtest_9595playerObjects2[k] = gdjs.mainSceneCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDtest_9595playerObjects2[k] = gdjs.mainSceneCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDtest_9595playerObjects2[k] = gdjs.mainSceneCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDtest_9595playerObjects2[k] = gdjs.mainSceneCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( !(gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDtest_9595playerObjects2[k] = gdjs.mainSceneCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainSceneCode.GDtest_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.mainSceneCode.GDtest_9595playerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.mainSceneCode.GDtest_9595playerObjects1[k] = gdjs.mainSceneCode.GDtest_9595playerObjects1[i];
        ++k;
    }
}
gdjs.mainSceneCode.GDtest_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainSceneCode.GDtest_9595playerObjects1 */
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects1.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.mainSceneCode.eventsList17 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainSceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}
{ //Subevents
gdjs.mainSceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}
{ //Subevents
gdjs.mainSceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}
{ //Subevents
gdjs.mainSceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.mainSceneCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.mainSceneCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.mainSceneCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}
{ //Subevents
gdjs.mainSceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Player"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainSceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.mainSceneCode.eventsList18 = function(runtimeScene) {

{


gdjs.mainSceneCode.eventsList10(runtimeScene);
}


{


gdjs.mainSceneCode.eventsList17(runtimeScene);
}


};

gdjs.mainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainSceneCode.GDimg_9595backGroundObjects1.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundObjects2.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundObjects3.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundObjects4.length = 0;
gdjs.mainSceneCode.GDtxt_9595debugObjects1.length = 0;
gdjs.mainSceneCode.GDtxt_9595debugObjects2.length = 0;
gdjs.mainSceneCode.GDtxt_9595debugObjects3.length = 0;
gdjs.mainSceneCode.GDtxt_9595debugObjects4.length = 0;
gdjs.mainSceneCode.GDtxt_9595debug2Objects1.length = 0;
gdjs.mainSceneCode.GDtxt_9595debug2Objects2.length = 0;
gdjs.mainSceneCode.GDtxt_9595debug2Objects3.length = 0;
gdjs.mainSceneCode.GDtxt_9595debug2Objects4.length = 0;
gdjs.mainSceneCode.GDtest_9595playerObjects1.length = 0;
gdjs.mainSceneCode.GDtest_9595playerObjects2.length = 0;
gdjs.mainSceneCode.GDtest_9595playerObjects3.length = 0;
gdjs.mainSceneCode.GDtest_9595playerObjects4.length = 0;
gdjs.mainSceneCode.GDCollisionDetectObjects1.length = 0;
gdjs.mainSceneCode.GDCollisionDetectObjects2.length = 0;
gdjs.mainSceneCode.GDCollisionDetectObjects3.length = 0;
gdjs.mainSceneCode.GDCollisionDetectObjects4.length = 0;
gdjs.mainSceneCode.GDcamTopObjects1.length = 0;
gdjs.mainSceneCode.GDcamTopObjects2.length = 0;
gdjs.mainSceneCode.GDcamTopObjects3.length = 0;
gdjs.mainSceneCode.GDcamTopObjects4.length = 0;
gdjs.mainSceneCode.GDdrawShapeObjects1.length = 0;
gdjs.mainSceneCode.GDdrawShapeObjects2.length = 0;
gdjs.mainSceneCode.GDdrawShapeObjects3.length = 0;
gdjs.mainSceneCode.GDdrawShapeObjects4.length = 0;
gdjs.mainSceneCode.GDcamBottomObjects1.length = 0;
gdjs.mainSceneCode.GDcamBottomObjects2.length = 0;
gdjs.mainSceneCode.GDcamBottomObjects3.length = 0;
gdjs.mainSceneCode.GDcamBottomObjects4.length = 0;
gdjs.mainSceneCode.GDcamRightObjects1.length = 0;
gdjs.mainSceneCode.GDcamRightObjects2.length = 0;
gdjs.mainSceneCode.GDcamRightObjects3.length = 0;
gdjs.mainSceneCode.GDcamRightObjects4.length = 0;
gdjs.mainSceneCode.GDcamLeftObjects1.length = 0;
gdjs.mainSceneCode.GDcamLeftObjects2.length = 0;
gdjs.mainSceneCode.GDcamLeftObjects3.length = 0;
gdjs.mainSceneCode.GDcamLeftObjects4.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects1.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects2.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects3.length = 0;
gdjs.mainSceneCode.GDimg_9595backGroundSpaceObjects4.length = 0;
gdjs.mainSceneCode.GDimg_9595earthObjects1.length = 0;
gdjs.mainSceneCode.GDimg_9595earthObjects2.length = 0;
gdjs.mainSceneCode.GDimg_9595earthObjects3.length = 0;
gdjs.mainSceneCode.GDimg_9595earthObjects4.length = 0;
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects3.length = 0;
gdjs.mainSceneCode.GDtxt_9595gameVersionObjects4.length = 0;

gdjs.mainSceneCode.eventsList18(runtimeScene);

return;

}

gdjs['mainSceneCode'] = gdjs.mainSceneCode;
