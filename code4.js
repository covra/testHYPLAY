gdjs.testParallaxCode = {};
gdjs.testParallaxCode.localVariables = [];
gdjs.testParallaxCode.GDimg_9595backGroundObjects1= [];
gdjs.testParallaxCode.GDimg_9595backGroundObjects2= [];
gdjs.testParallaxCode.GDimg_9595backGroundObjects3= [];
gdjs.testParallaxCode.GDimg_9595backGroundObjects4= [];
gdjs.testParallaxCode.GDtxt_9595debugObjects1= [];
gdjs.testParallaxCode.GDtxt_9595debugObjects2= [];
gdjs.testParallaxCode.GDtxt_9595debugObjects3= [];
gdjs.testParallaxCode.GDtxt_9595debugObjects4= [];
gdjs.testParallaxCode.GDtxt_9595debug2Objects1= [];
gdjs.testParallaxCode.GDtxt_9595debug2Objects2= [];
gdjs.testParallaxCode.GDtxt_9595debug2Objects3= [];
gdjs.testParallaxCode.GDtxt_9595debug2Objects4= [];
gdjs.testParallaxCode.GDtest_9595playerObjects1= [];
gdjs.testParallaxCode.GDtest_9595playerObjects2= [];
gdjs.testParallaxCode.GDtest_9595playerObjects3= [];
gdjs.testParallaxCode.GDtest_9595playerObjects4= [];
gdjs.testParallaxCode.GDCollisionDetectObjects1= [];
gdjs.testParallaxCode.GDCollisionDetectObjects2= [];
gdjs.testParallaxCode.GDCollisionDetectObjects3= [];
gdjs.testParallaxCode.GDCollisionDetectObjects4= [];
gdjs.testParallaxCode.GDcamTopObjects1= [];
gdjs.testParallaxCode.GDcamTopObjects2= [];
gdjs.testParallaxCode.GDcamTopObjects3= [];
gdjs.testParallaxCode.GDcamTopObjects4= [];
gdjs.testParallaxCode.GDdrawShapeObjects1= [];
gdjs.testParallaxCode.GDdrawShapeObjects2= [];
gdjs.testParallaxCode.GDdrawShapeObjects3= [];
gdjs.testParallaxCode.GDdrawShapeObjects4= [];
gdjs.testParallaxCode.GDcamBottomObjects1= [];
gdjs.testParallaxCode.GDcamBottomObjects2= [];
gdjs.testParallaxCode.GDcamBottomObjects3= [];
gdjs.testParallaxCode.GDcamBottomObjects4= [];
gdjs.testParallaxCode.GDcamRightObjects1= [];
gdjs.testParallaxCode.GDcamRightObjects2= [];
gdjs.testParallaxCode.GDcamRightObjects3= [];
gdjs.testParallaxCode.GDcamRightObjects4= [];
gdjs.testParallaxCode.GDcamLeftObjects1= [];
gdjs.testParallaxCode.GDcamLeftObjects2= [];
gdjs.testParallaxCode.GDcamLeftObjects3= [];
gdjs.testParallaxCode.GDcamLeftObjects4= [];
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects1= [];
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects2= [];
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects3= [];
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects4= [];


gdjs.testParallaxCode.mapOfGDgdjs_9546testParallaxCode_9546GDCollisionDetectObjects2Objects = Hashtable.newFrom({"CollisionDetect": gdjs.testParallaxCode.GDCollisionDetectObjects2});
gdjs.testParallaxCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.testParallaxCode.GDtest_9595playerObjects2, gdjs.testParallaxCode.GDtest_9595playerObjects3);

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.testParallaxCode.GDtest_9595playerObjects3.length !== 0 ? gdjs.testParallaxCode.GDtest_9595playerObjects3[0] : null), true, "Player", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CollisionDetect"), gdjs.testParallaxCode.GDCollisionDetectObjects2);
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].separateFromObjectsList(gdjs.testParallaxCode.mapOfGDgdjs_9546testParallaxCode_9546GDCollisionDetectObjects2Objects, false);
}
}}

}


};gdjs.testParallaxCode.userFunc0xac02c0 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.testParallaxCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);

var objects = [];
objects.push.apply(objects,gdjs.testParallaxCode.GDtest_9595playerObjects2);
gdjs.testParallaxCode.userFunc0xac02c0(runtimeScene, objects);

}


};gdjs.testParallaxCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects3);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointX("")), 0.05), "Player", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointY("")), 0.05), "Player", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointX("")) * 0.05, "Parallax_1", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointY("")) * 0.05, "Parallax_1", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointX("")) * 0.2, "Parallax_2", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointY("")) * 0.2, "Parallax_2", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointX("")) * 1.2, "CoverBack", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointY("")) * 1.2, "CoverBack", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointX("")), "debug", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.testParallaxCode.GDtest_9595playerObjects3.length === 0 ) ? 0 :gdjs.testParallaxCode.GDtest_9595playerObjects3[0].getPointY("")), "debug", 0);
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
gdjs.testParallaxCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.testParallaxCode.userFunc0x110e928 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.testParallaxCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("img_backGround"), gdjs.testParallaxCode.GDimg_9595backGroundObjects2);

var objects = [];
objects.push.apply(objects,gdjs.testParallaxCode.GDimg_9595backGroundObjects2);
gdjs.testParallaxCode.userFunc0x110e928(runtimeScene, objects);

}


};gdjs.testParallaxCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.testParallaxCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.testParallaxCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("img_backGround"), gdjs.testParallaxCode.GDimg_9595backGroundObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDimg_9595backGroundObjects2.length;i<l;++i) {
    if ( gdjs.testParallaxCode.GDimg_9595backGroundObjects2[i].getVariableNumber(gdjs.testParallaxCode.GDimg_9595backGroundObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDimg_9595backGroundObjects2[k] = gdjs.testParallaxCode.GDimg_9595backGroundObjects2[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDimg_9595backGroundObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDimg_9595backGroundObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDimg_9595backGroundObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDimg_9595backGroundObjects2[i].getBehavior("Opacity").setOpacity(120);
}
}{for(var i = 0, len = gdjs.testParallaxCode.GDimg_9595backGroundObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDimg_9595backGroundObjects2[i].setColor("172;177;226");
}
}}

}


};gdjs.testParallaxCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.testParallaxCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.testParallaxCode.userFunc0xdc1180 = function GDJSInlineCode(runtimeScene) {
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
gdjs.testParallaxCode.eventsList7 = function(runtimeScene) {

{


gdjs.testParallaxCode.userFunc0xdc1180(runtimeScene);

}


};gdjs.testParallaxCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "innerStrength", true);
}{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "color", true);
}{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "outerStrength", true);
}{gdjs.evtTools.camera.setLayerEffectBooleanParameter(runtimeScene, "Parallax_2", "GlowEffect", "distance", true);
}
{ //Subevents
gdjs.testParallaxCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.testParallaxCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17194900);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.testParallaxCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.testParallaxCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].setZOrder((gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getPointY("")));
}
}
{ //Subevents
gdjs.testParallaxCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.testParallaxCode.eventsList2(runtimeScene);
}


{


gdjs.testParallaxCode.eventsList4(runtimeScene);
}


{


gdjs.testParallaxCode.eventsList6(runtimeScene);
}


{


gdjs.testParallaxCode.eventsList9(runtimeScene);
}


};gdjs.testParallaxCode.eventsList11 = function(runtimeScene) {

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


};gdjs.testParallaxCode.eventsList12 = function(runtimeScene) {

{



}


};gdjs.testParallaxCode.eventsList13 = function(runtimeScene) {

{



}


};gdjs.testParallaxCode.eventsList14 = function(runtimeScene) {

{



}


};gdjs.testParallaxCode.eventsList15 = function(runtimeScene) {

{



}


};gdjs.testParallaxCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17204276);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDtest_9595playerObjects2[k] = gdjs.testParallaxCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDtest_9595playerObjects2[k] = gdjs.testParallaxCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDtest_9595playerObjects2[k] = gdjs.testParallaxCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDtest_9595playerObjects2[k] = gdjs.testParallaxCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("Animation").setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDtest_9595playerObjects2.length;i<l;++i) {
    if ( !(gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDtest_9595playerObjects2[k] = gdjs.testParallaxCode.GDtest_9595playerObjects2[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDtest_9595playerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects2 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testParallaxCode.GDtest_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.testParallaxCode.GDtest_9595playerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.testParallaxCode.GDtest_9595playerObjects1[k] = gdjs.testParallaxCode.GDtest_9595playerObjects1[i];
        ++k;
    }
}
gdjs.testParallaxCode.GDtest_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtest_9595playerObjects1 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects1.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.testParallaxCode.eventsList17 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.testParallaxCode.eventsList11(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}
{ //Subevents
gdjs.testParallaxCode.eventsList12(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}
{ //Subevents
gdjs.testParallaxCode.eventsList13(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}
{ //Subevents
gdjs.testParallaxCode.eventsList14(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("test_player"), gdjs.testParallaxCode.GDtest_9595playerObjects2);
{for(var i = 0, len = gdjs.testParallaxCode.GDtest_9595playerObjects2.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtest_9595playerObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}
{ //Subevents
gdjs.testParallaxCode.eventsList15(runtimeScene);} //End of subevents
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
gdjs.testParallaxCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.testParallaxCode.mapOfGDgdjs_9546testParallaxCode_9546GDtxt_95959595debug2Objects1Objects = Hashtable.newFrom({"txt_debug2": gdjs.testParallaxCode.GDtxt_9595debug2Objects1});
gdjs.testParallaxCode.eventsList18 = function(runtimeScene) {

{


gdjs.testParallaxCode.eventsList10(runtimeScene);
}


{


gdjs.testParallaxCode.eventsList17(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("txt_debug2"), gdjs.testParallaxCode.GDtxt_9595debug2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.testParallaxCode.mapOfGDgdjs_9546testParallaxCode_9546GDtxt_95959595debug2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.testParallaxCode.GDtxt_9595debug2Objects1 */
{for(var i = 0, len = gdjs.testParallaxCode.GDtxt_9595debug2Objects1.length ;i < len;++i) {
    gdjs.testParallaxCode.GDtxt_9595debug2Objects1[i].getBehavior("Text").setText("clickme");
}
}{gdjs.evtTools.window.openURL("https://covra.github.io/testHYPLAY/", runtimeScene);
}}

}


};

gdjs.testParallaxCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testParallaxCode.GDimg_9595backGroundObjects1.length = 0;
gdjs.testParallaxCode.GDimg_9595backGroundObjects2.length = 0;
gdjs.testParallaxCode.GDimg_9595backGroundObjects3.length = 0;
gdjs.testParallaxCode.GDimg_9595backGroundObjects4.length = 0;
gdjs.testParallaxCode.GDtxt_9595debugObjects1.length = 0;
gdjs.testParallaxCode.GDtxt_9595debugObjects2.length = 0;
gdjs.testParallaxCode.GDtxt_9595debugObjects3.length = 0;
gdjs.testParallaxCode.GDtxt_9595debugObjects4.length = 0;
gdjs.testParallaxCode.GDtxt_9595debug2Objects1.length = 0;
gdjs.testParallaxCode.GDtxt_9595debug2Objects2.length = 0;
gdjs.testParallaxCode.GDtxt_9595debug2Objects3.length = 0;
gdjs.testParallaxCode.GDtxt_9595debug2Objects4.length = 0;
gdjs.testParallaxCode.GDtest_9595playerObjects1.length = 0;
gdjs.testParallaxCode.GDtest_9595playerObjects2.length = 0;
gdjs.testParallaxCode.GDtest_9595playerObjects3.length = 0;
gdjs.testParallaxCode.GDtest_9595playerObjects4.length = 0;
gdjs.testParallaxCode.GDCollisionDetectObjects1.length = 0;
gdjs.testParallaxCode.GDCollisionDetectObjects2.length = 0;
gdjs.testParallaxCode.GDCollisionDetectObjects3.length = 0;
gdjs.testParallaxCode.GDCollisionDetectObjects4.length = 0;
gdjs.testParallaxCode.GDcamTopObjects1.length = 0;
gdjs.testParallaxCode.GDcamTopObjects2.length = 0;
gdjs.testParallaxCode.GDcamTopObjects3.length = 0;
gdjs.testParallaxCode.GDcamTopObjects4.length = 0;
gdjs.testParallaxCode.GDdrawShapeObjects1.length = 0;
gdjs.testParallaxCode.GDdrawShapeObjects2.length = 0;
gdjs.testParallaxCode.GDdrawShapeObjects3.length = 0;
gdjs.testParallaxCode.GDdrawShapeObjects4.length = 0;
gdjs.testParallaxCode.GDcamBottomObjects1.length = 0;
gdjs.testParallaxCode.GDcamBottomObjects2.length = 0;
gdjs.testParallaxCode.GDcamBottomObjects3.length = 0;
gdjs.testParallaxCode.GDcamBottomObjects4.length = 0;
gdjs.testParallaxCode.GDcamRightObjects1.length = 0;
gdjs.testParallaxCode.GDcamRightObjects2.length = 0;
gdjs.testParallaxCode.GDcamRightObjects3.length = 0;
gdjs.testParallaxCode.GDcamRightObjects4.length = 0;
gdjs.testParallaxCode.GDcamLeftObjects1.length = 0;
gdjs.testParallaxCode.GDcamLeftObjects2.length = 0;
gdjs.testParallaxCode.GDcamLeftObjects3.length = 0;
gdjs.testParallaxCode.GDcamLeftObjects4.length = 0;
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects3.length = 0;
gdjs.testParallaxCode.GDtxt_9595gameVersionObjects4.length = 0;

gdjs.testParallaxCode.eventsList18(runtimeScene);

return;

}

gdjs['testParallaxCode'] = gdjs.testParallaxCode;
