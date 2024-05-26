gdjs.MainCode = {};
gdjs.MainCode.GDbad_9595RockObjects1_1final = [];

gdjs.MainCode.GDtxt_9595tituloObjects1= [];
gdjs.MainCode.GDtxt_9595tituloObjects2= [];
gdjs.MainCode.GDtxt_9595tituloObjects3= [];
gdjs.MainCode.GDtxt_9595tituloObjects4= [];
gdjs.MainCode.GDtxt_9595tituloObjects5= [];
gdjs.MainCode.GDtxt_9595debugObjects1= [];
gdjs.MainCode.GDtxt_9595debugObjects2= [];
gdjs.MainCode.GDtxt_9595debugObjects3= [];
gdjs.MainCode.GDtxt_9595debugObjects4= [];
gdjs.MainCode.GDtxt_9595debugObjects5= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects1= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects2= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects3= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects4= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects5= [];
gdjs.MainCode.GDtest_9595shipObjects1= [];
gdjs.MainCode.GDtest_9595shipObjects2= [];
gdjs.MainCode.GDtest_9595shipObjects3= [];
gdjs.MainCode.GDtest_9595shipObjects4= [];
gdjs.MainCode.GDtest_9595shipObjects5= [];
gdjs.MainCode.GDtest_9595targetObjects1= [];
gdjs.MainCode.GDtest_9595targetObjects2= [];
gdjs.MainCode.GDtest_9595targetObjects3= [];
gdjs.MainCode.GDtest_9595targetObjects4= [];
gdjs.MainCode.GDtest_9595targetObjects5= [];
gdjs.MainCode.GDtest_9595backgroundObjects1= [];
gdjs.MainCode.GDtest_9595backgroundObjects2= [];
gdjs.MainCode.GDtest_9595backgroundObjects3= [];
gdjs.MainCode.GDtest_9595backgroundObjects4= [];
gdjs.MainCode.GDtest_9595backgroundObjects5= [];
gdjs.MainCode.GDbad_9595RockObjects1= [];
gdjs.MainCode.GDbad_9595RockObjects2= [];
gdjs.MainCode.GDbad_9595RockObjects3= [];
gdjs.MainCode.GDbad_9595RockObjects4= [];
gdjs.MainCode.GDbad_9595RockObjects5= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects1= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects2= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects3= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects4= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects5= [];
gdjs.MainCode.GDtest_9595debrisObjects1= [];
gdjs.MainCode.GDtest_9595debrisObjects2= [];
gdjs.MainCode.GDtest_9595debrisObjects3= [];
gdjs.MainCode.GDtest_9595debrisObjects4= [];
gdjs.MainCode.GDtest_9595debrisObjects5= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects1= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects2= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects3= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects4= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects5= [];
gdjs.MainCode.GDtxt_9595scoreObjects1= [];
gdjs.MainCode.GDtxt_9595scoreObjects2= [];
gdjs.MainCode.GDtxt_9595scoreObjects3= [];
gdjs.MainCode.GDtxt_9595scoreObjects4= [];
gdjs.MainCode.GDtxt_9595scoreObjects5= [];
gdjs.MainCode.GDSpaceBackground3Objects1= [];
gdjs.MainCode.GDSpaceBackground3Objects2= [];
gdjs.MainCode.GDSpaceBackground3Objects3= [];
gdjs.MainCode.GDSpaceBackground3Objects4= [];
gdjs.MainCode.GDSpaceBackground3Objects5= [];
gdjs.MainCode.GDDrawBorderObjects1= [];
gdjs.MainCode.GDDrawBorderObjects2= [];
gdjs.MainCode.GDDrawBorderObjects3= [];
gdjs.MainCode.GDDrawBorderObjects4= [];
gdjs.MainCode.GDDrawBorderObjects5= [];
gdjs.MainCode.GDPlanet2Objects1= [];
gdjs.MainCode.GDPlanet2Objects2= [];
gdjs.MainCode.GDPlanet2Objects3= [];
gdjs.MainCode.GDPlanet2Objects4= [];
gdjs.MainCode.GDPlanet2Objects5= [];
gdjs.MainCode.GDtest_9595imgRayObjects1= [];
gdjs.MainCode.GDtest_9595imgRayObjects2= [];
gdjs.MainCode.GDtest_9595imgRayObjects3= [];
gdjs.MainCode.GDtest_9595imgRayObjects4= [];
gdjs.MainCode.GDtest_9595imgRayObjects5= [];
gdjs.MainCode.GDeneryBarObjects1= [];
gdjs.MainCode.GDeneryBarObjects2= [];
gdjs.MainCode.GDeneryBarObjects3= [];
gdjs.MainCode.GDeneryBarObjects4= [];
gdjs.MainCode.GDeneryBarObjects5= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDrawBorderObjects3Objects = Hashtable.newFrom({"DrawBorder": gdjs.MainCode.GDDrawBorderObjects3});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__EdgeScrollCamera__EnableEdgeScrollCamera.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera.func(runtimeScene, ((Math.min(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene))) * 15) / 100, 20, "Background", 0, "Progressive speed", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DrawBorder"), gdjs.MainCode.GDDrawBorderObjects3);
{gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.func(runtimeScene, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDrawBorderObjects3Objects, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SpaceBackground3"), gdjs.MainCode.GDSpaceBackground3Objects3);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.MainCode.GDSpaceBackground3Objects3.length === 0 ) ? 0 :gdjs.MainCode.GDSpaceBackground3Objects3[0].getAABBLeft()), (( gdjs.MainCode.GDSpaceBackground3Objects3.length === 0 ) ? 0 :gdjs.MainCode.GDSpaceBackground3Objects3[0].getAABBTop()), (( gdjs.MainCode.GDSpaceBackground3Objects3.length === 0 ) ? 0 :gdjs.MainCode.GDSpaceBackground3Objects3[0].getAABBRight()), (( gdjs.MainCode.GDSpaceBackground3Objects3.length === 0 ) ? 0 :gdjs.MainCode.GDSpaceBackground3Objects3[0].getAABBBottom()), "Background", 0);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "Background", 0, "Player", 0, true, true, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "Background", 0, "Dynamic", 0, true, true, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "Background", 0, "Parallax", 0, true, true, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDtest_9595shipObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects2[0].getPointX("")) * 0.8, "Parallax", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.MainCode.GDtest_9595shipObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects1[0].getPointY("")) * 0.8, "Parallax", 0);
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{



}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDtest_9595shipObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDtest_9595shipObjects3[i].getBehavior("Tween").isPlaying("RotShip") ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDtest_9595shipObjects3[k] = gdjs.MainCode.GDtest_9595shipObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDtest_9595shipObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDtest_9595shipObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDtest_9595shipObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595shipObjects3[i].getBehavior("Tween").stopTween("RotShip", false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);
gdjs.copyArray(runtimeScene.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects3);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595shipObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595shipObjects3[i].getBehavior("Tween").addObjectAngleTween2("RotShip", (gdjs.MainCode.GDtest_9595shipObjects3[i].getAngleToObject((gdjs.MainCode.GDtest_9595targetObjects3.length !== 0 ? gdjs.MainCode.GDtest_9595targetObjects3[0] : null))), "easeInOutSine", gdjs.evtTools.common.clamp(((gdjs.MainCode.GDtest_9595shipObjects3[i].getAngleToObject((gdjs.MainCode.GDtest_9595targetObjects3.length !== 0 ? gdjs.MainCode.GDtest_9595targetObjects3[0] : null))) / runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()), 0.5, 2), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDtest_9595shipObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDtest_9595shipObjects3[i].getBehavior("Tween").isPlaying("GoCursor") ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDtest_9595shipObjects3[k] = gdjs.MainCode.GDtest_9595shipObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDtest_9595shipObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDtest_9595shipObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDtest_9595shipObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595shipObjects3[i].getBehavior("Tween").stopTween("GoCursor", false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects2);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595shipObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595shipObjects2[i].getBehavior("Tween").addObjectPositionTween2("GoCursor", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y")), "easeFromTo", gdjs.evtTools.common.distanceBetweenPositions((gdjs.MainCode.GDtest_9595shipObjects2[i].getPointX("")), (gdjs.MainCode.GDtest_9595shipObjects2[i].getPointY("")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y"))) / runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber(), false);
}
}
{ //Subevents
gdjs.MainCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects3);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y")));
}
}}

}


{



}


{


gdjs.MainCode.eventsList4(runtimeScene);
}


};gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9590564);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(13), true);
}}

}


};gdjs.MainCode.asyncCallback12048452 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MainCode.asyncCallback12048452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_imgRay"), gdjs.MainCode.GDtest_9595imgRayObjects4);
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects4);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595imgRayObjects4.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595imgRayObjects4[i].setPosition((( gdjs.MainCode.GDtest_9595shipObjects4.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects4[0].getPointX("castRay")),(( gdjs.MainCode.GDtest_9595shipObjects4.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects4[0].getPointY("castRay")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_imgRay"), gdjs.MainCode.GDtest_9595imgRayObjects4);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595imgRayObjects4.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595imgRayObjects4[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(14), true);
}}

}


};gdjs.MainCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_imgRay"), gdjs.MainCode.GDtest_9595imgRayObjects4);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595imgRayObjects4.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595imgRayObjects4[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_imgRay"), gdjs.MainCode.GDtest_9595imgRayObjects4);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595imgRayObjects4.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595imgRayObjects4[i].setPosition(5000,5000);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(14), false);
}}

}


};gdjs.MainCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.MainCode.GDtest_9595imgRayObjects3 */
/* Reuse gdjs.MainCode.GDtest_9595shipObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDtest_9595imgRayObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595imgRayObjects3[i].setAngle((( gdjs.MainCode.GDtest_9595shipObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects3[0].getAngle()) + 90);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595imgRayObjects2Objects = Hashtable.newFrom({"test_imgRay": gdjs.MainCode.GDtest_9595imgRayObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595debrisObjects2Objects = Hashtable.newFrom({"test_debris": gdjs.MainCode.GDtest_9595debrisObjects2});
gdjs.MainCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(13), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eneryBar"), gdjs.MainCode.GDeneryBarObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(13), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDeneryBarObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDeneryBarObjects3[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > ((gdjs.MainCode.GDeneryBarObjects3[i].MaxValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 15) / 100 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDeneryBarObjects3[k] = gdjs.MainCode.GDeneryBarObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDeneryBarObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(13), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(16), true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_imgRay"), gdjs.MainCode.GDtest_9595imgRayObjects3);
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595imgRayObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595imgRayObjects3[i].setPosition((( gdjs.MainCode.GDtest_9595shipObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects3[0].getPointX("castRay")),(( gdjs.MainCode.GDtest_9595shipObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects3[0].getPointY("castRay")));
}
}
{ //Subevents
gdjs.MainCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("test_debris"), gdjs.MainCode.GDtest_9595debrisObjects2);
gdjs.copyArray(runtimeScene.getObjects("test_imgRay"), gdjs.MainCode.GDtest_9595imgRayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595imgRayObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595debrisObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDtest_9595debrisObjects2 */
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects2);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595debrisObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595debrisObjects2[i].addForceTowardObject((gdjs.MainCode.GDtest_9595shipObjects2.length !== 0 ? gdjs.MainCode.GDtest_9595shipObjects2[0] : null), 100, 0);
}
}}

}


};gdjs.MainCode.asyncCallback8765140 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(15), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(16), false);
}}
gdjs.MainCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback8765140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eneryBar"), gdjs.MainCode.GDeneryBarObjects2);
{for(var i = 0, len = gdjs.MainCode.GDeneryBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDeneryBarObjects2[i].SetMaxValue(100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eneryBar"), gdjs.MainCode.GDeneryBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDeneryBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDeneryBarObjects2[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDeneryBarObjects2[k] = gdjs.MainCode.GDeneryBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDeneryBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9165708);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(15), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(16), true);
}
{ //Subevents
gdjs.MainCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(15), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eneryBar"), gdjs.MainCode.GDeneryBarObjects2);
{for(var i = 0, len = gdjs.MainCode.GDeneryBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDeneryBarObjects2[i].SetValue((gdjs.MainCode.GDeneryBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(14), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eneryBar"), gdjs.MainCode.GDeneryBarObjects2);
{for(var i = 0, len = gdjs.MainCode.GDeneryBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDeneryBarObjects2[i].SetValue((gdjs.MainCode.GDeneryBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 0.6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.MainCode.GDtxt_9595debugObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtxt_9595debugObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595debugObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getAsString());
}
}}

}


};gdjs.MainCode.eventsList15 = function(runtimeScene) {

{



}


{


gdjs.MainCode.eventsList6(runtimeScene);
}


{


gdjs.MainCode.eventsList12(runtimeScene);
}


{


gdjs.MainCode.eventsList14(runtimeScene);
}


};gdjs.MainCode.userFunc0xb6a6a8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
var idInt = runtimeScene.getVariables().get("intervalID").getAsNumber();
if (idInt >= 1) {
    clearInterval(idInt);
}
console.log("cerrado interval: " + idInt);

};
gdjs.MainCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDbad_9595RockObjects3);
gdjs.MainCode.userFunc0xb6a6a8(runtimeScene, objects);

}


};gdjs.MainCode.userFunc0x886cf8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
/*
var bRock = runtimeScene.getVariables().get("bisAllowedRocks").getAsBoolean();
var isRun = runtimeScene.getVariables().get("bIsRuningRocks").getAsBoolean();
var interval = null;
console.log(bRock, isRun);
if (bRock === true && isRun === false) {
    isRun = true;
    interval = setInterval(
        ()=> {
            let x1 = gdjs.randomFloat(window.innerWidth);
            let y1 = gdjs.randomFloat(window.innerHeight);
            let r = runtimeScene.createObject("bad_Rock");
            r.x = x1;
            r.y = y1;
        }
    , 2000);
    console.log("interval id: " + interval);
} else if (bRock == false && isRun == true){

}
*/
var bRock = runtimeScene.getVariables().get("bIsRuningRocks").getAsBoolean();
var interval = setInterval(
        ()=> {
            let x1 = gdjs.randomFloat(window.innerWidth) * 2;
            let y1 = gdjs.randomFloat(window.innerHeight) * 2;
            let sc = 1 - (gdjs.randomFloatInRange(0.1, 0.5));
            let rot = sc * 360;
            let r = runtimeScene.createObject("bad_Rock");
            r.x = x1;
            r.y = y1;
            r.layer = "Dynamic";
            r.setScale(sc);
            r.angle = rot;
            r.addForceTowardObject(objects[0],100,1.5);

        }
    , 2000);


var idInterval = runtimeScene.getVariables().get("intervalID").setNumber(interval);
console.log("Nuevo intervalo : " + bRock + " " + interval + " >> " + runtimeScene.getVariables().get("intervalID").getAsNumber());
};
gdjs.MainCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDtest_9595shipObjects3);
gdjs.MainCode.userFunc0x886cf8(runtimeScene, objects);

}


};gdjs.MainCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595rocksObjects2, gdjs.MainCode.GDbtn_9595red_9595rocksObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595rocksObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595rocksObjects3[i].SetLabelText("Rocks false", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595rocksObjects2, gdjs.MainCode.GDbtn_9595red_9595rocksObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595rocksObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595rocksObjects3[i].SetLabelText("Rocks true", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9));
}}

}


};gdjs.MainCode.asyncCallback9581836 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("txt_debug"), gdjs.MainCode.GDtxt_9595debugObjects2);

{for(var i = 0, len = gdjs.MainCode.GDtxt_9595debugObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595debugObjects2[i].getBehavior("Text").setText("");
}
}}
gdjs.MainCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDtxt_9595debugObjects1) asyncObjectsList.addObject("txt_debug", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainCode.asyncCallback9581836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.MainCode.GDtxt_9595debugObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtxt_9595debugObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595debugObjects1[i].getBehavior("Text").setText("deleted rock out of window");
}
}
{ //Subevents
gdjs.MainCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_red_rocks"), gdjs.MainCode.GDbtn_9595red_9595rocksObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDbtn_9595red_9595rocksObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbtn_9595red_9595rocksObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDbtn_9595red_9595rocksObjects2[k] = gdjs.MainCode.GDbtn_9595red_9595rocksObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbtn_9595red_9595rocksObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8220788);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDbad_9595RockObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MainCode.GDbad_9595RockObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDbad_9595RockObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbad_9595RockObjects2[i].getX() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 3 ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDbad_9595RockObjects2[k] = gdjs.MainCode.GDbad_9595RockObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbad_9595RockObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDbad_9595RockObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDbad_9595RockObjects1_1final.indexOf(gdjs.MainCode.GDbad_9595RockObjects2[j]) === -1 )
            gdjs.MainCode.GDbad_9595RockObjects1_1final.push(gdjs.MainCode.GDbad_9595RockObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDbad_9595RockObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbad_9595RockObjects2[i].getY() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 3 ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDbad_9595RockObjects2[k] = gdjs.MainCode.GDbad_9595RockObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbad_9595RockObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDbad_9595RockObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDbad_9595RockObjects1_1final.indexOf(gdjs.MainCode.GDbad_9595RockObjects2[j]) === -1 )
            gdjs.MainCode.GDbad_9595RockObjects1_1final.push(gdjs.MainCode.GDbad_9595RockObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDbad_9595RockObjects1_1final, gdjs.MainCode.GDbad_9595RockObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDbad_9595RockObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDbad_9595RockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDbad_9595RockObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.userFunc0xb57990 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
var idInt = runtimeScene.getVariables().get("intervalIDDebris").getAsNumber();
if (idInt >= 1) {
    clearInterval(idInt);
}
console.log("cerrado interval debris: " + idInt);

};
gdjs.MainCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDbad_9595RockObjects3);
gdjs.MainCode.userFunc0xb57990(runtimeScene, objects);

}


};gdjs.MainCode.userFunc0xb57d88 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
var bRunDebris = runtimeScene.getVariables().get("bIsAllowedDebris").getAsBoolean();
var interval = setInterval(
        ()=> {
            let x1 = gdjs.randomFloat(window.innerWidth) * 2;
            let y1 = gdjs.randomFloat(window.innerHeight) * 2;
            let sc = 1 - (gdjs.randomFloatInRange(0.1, 1));
            let rot = sc * 360;
            let r = runtimeScene.createObject("test_debris");
            r.x = x1;
            r.y = y1;
            r.layer = "Dynamic";
            r.setScale(sc);
            r.angle = rot;
            r.addForceTowardObject(objects[0],100,0.5);

        }
    , 300);


var idInterval = runtimeScene.getVariables().get("intervalIDDebris").setNumber(interval);
console.log("Nuevo intervalo debris: " + bRunDebris + " " + interval + " >> " + runtimeScene.getVariables().get("intervalIDDebris").getAsNumber());
};
gdjs.MainCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDtest_9595shipObjects3);
gdjs.MainCode.userFunc0xb57d88(runtimeScene, objects);

}


};gdjs.MainCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595debrisObjects2, gdjs.MainCode.GDbtn_9595red_9595debrisObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595debrisObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595debrisObjects3[i].SetLabelText("Debris false", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595debrisObjects2, gdjs.MainCode.GDbtn_9595red_9595debrisObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595debrisObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595debrisObjects3[i].SetLabelText("Debris true", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9));
}}

}


};gdjs.MainCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_red_debris"), gdjs.MainCode.GDbtn_9595red_9595debrisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDbtn_9595red_9595debrisObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbtn_9595red_9595debrisObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDbtn_9595red_9595debrisObjects2[k] = gdjs.MainCode.GDbtn_9595red_9595debrisObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbtn_9595red_9595debrisObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10975836);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595debrisObjects1Objects = Hashtable.newFrom({"test_debris": gdjs.MainCode.GDtest_9595debrisObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595shipObjects1Objects = Hashtable.newFrom({"test_ship": gdjs.MainCode.GDtest_9595shipObjects1});
gdjs.MainCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) + 5);
}}

}


};gdjs.MainCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MainCode.GDtest_9595debrisObjects1, gdjs.MainCode.GDtest_9595debrisObjects2);

{for(var i = 0, len = gdjs.MainCode.GDtest_9595debrisObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595debrisObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595debrisObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595debrisObjects2[i].getBehavior("Tween").addObjectScaleTween3("dt", 0, "swingTo", 0.1, true, true);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\734249__okularperpendikular__simplepop1.ogg", false, 50, 1);
}
{ //Subevents
gdjs.MainCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_debris"), gdjs.MainCode.GDtest_9595debrisObjects1);
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595debrisObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595shipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8474220);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_score"), gdjs.MainCode.GDtxt_9595scoreObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtxt_9595scoreObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595scoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


};gdjs.MainCode.eventsList30 = function(runtimeScene) {

{


gdjs.MainCode.eventsList2(runtimeScene);
}


{



}


{


gdjs.MainCode.eventsList15(runtimeScene);
}


{


gdjs.MainCode.eventsList21(runtimeScene);
}


{


gdjs.MainCode.eventsList25(runtimeScene);
}


{


gdjs.MainCode.eventsList28(runtimeScene);
}


{


gdjs.MainCode.eventsList29(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDtxt_9595tituloObjects1.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects2.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects3.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects4.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects5.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects1.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects2.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects3.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects4.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects5.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects1.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects2.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects4.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects5.length = 0;
gdjs.MainCode.GDtest_9595shipObjects1.length = 0;
gdjs.MainCode.GDtest_9595shipObjects2.length = 0;
gdjs.MainCode.GDtest_9595shipObjects3.length = 0;
gdjs.MainCode.GDtest_9595shipObjects4.length = 0;
gdjs.MainCode.GDtest_9595shipObjects5.length = 0;
gdjs.MainCode.GDtest_9595targetObjects1.length = 0;
gdjs.MainCode.GDtest_9595targetObjects2.length = 0;
gdjs.MainCode.GDtest_9595targetObjects3.length = 0;
gdjs.MainCode.GDtest_9595targetObjects4.length = 0;
gdjs.MainCode.GDtest_9595targetObjects5.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects1.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects2.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects3.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects4.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects5.length = 0;
gdjs.MainCode.GDbad_9595RockObjects1.length = 0;
gdjs.MainCode.GDbad_9595RockObjects2.length = 0;
gdjs.MainCode.GDbad_9595RockObjects3.length = 0;
gdjs.MainCode.GDbad_9595RockObjects4.length = 0;
gdjs.MainCode.GDbad_9595RockObjects5.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects1.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects2.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects4.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects5.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects1.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects2.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects3.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects4.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects5.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects1.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects2.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects4.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects5.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects1.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects2.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects3.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects4.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects5.length = 0;
gdjs.MainCode.GDSpaceBackground3Objects1.length = 0;
gdjs.MainCode.GDSpaceBackground3Objects2.length = 0;
gdjs.MainCode.GDSpaceBackground3Objects3.length = 0;
gdjs.MainCode.GDSpaceBackground3Objects4.length = 0;
gdjs.MainCode.GDSpaceBackground3Objects5.length = 0;
gdjs.MainCode.GDDrawBorderObjects1.length = 0;
gdjs.MainCode.GDDrawBorderObjects2.length = 0;
gdjs.MainCode.GDDrawBorderObjects3.length = 0;
gdjs.MainCode.GDDrawBorderObjects4.length = 0;
gdjs.MainCode.GDDrawBorderObjects5.length = 0;
gdjs.MainCode.GDPlanet2Objects1.length = 0;
gdjs.MainCode.GDPlanet2Objects2.length = 0;
gdjs.MainCode.GDPlanet2Objects3.length = 0;
gdjs.MainCode.GDPlanet2Objects4.length = 0;
gdjs.MainCode.GDPlanet2Objects5.length = 0;
gdjs.MainCode.GDtest_9595imgRayObjects1.length = 0;
gdjs.MainCode.GDtest_9595imgRayObjects2.length = 0;
gdjs.MainCode.GDtest_9595imgRayObjects3.length = 0;
gdjs.MainCode.GDtest_9595imgRayObjects4.length = 0;
gdjs.MainCode.GDtest_9595imgRayObjects5.length = 0;
gdjs.MainCode.GDeneryBarObjects1.length = 0;
gdjs.MainCode.GDeneryBarObjects2.length = 0;
gdjs.MainCode.GDeneryBarObjects3.length = 0;
gdjs.MainCode.GDeneryBarObjects4.length = 0;
gdjs.MainCode.GDeneryBarObjects5.length = 0;

gdjs.MainCode.eventsList30(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
