gdjs.MainCode = {};
gdjs.MainCode.GDtxt_9595tituloObjects1= [];
gdjs.MainCode.GDtxt_9595tituloObjects2= [];
gdjs.MainCode.GDtxt_9595tituloObjects3= [];
gdjs.MainCode.GDtxt_9595debugObjects1= [];
gdjs.MainCode.GDtxt_9595debugObjects2= [];
gdjs.MainCode.GDtxt_9595debugObjects3= [];
gdjs.MainCode.GDbtn_9595red2Objects1= [];
gdjs.MainCode.GDbtn_9595red2Objects2= [];
gdjs.MainCode.GDbtn_9595red2Objects3= [];
gdjs.MainCode.GDtest_9595shipObjects1= [];
gdjs.MainCode.GDtest_9595shipObjects2= [];
gdjs.MainCode.GDtest_9595shipObjects3= [];
gdjs.MainCode.GDtest_9595targetObjects1= [];
gdjs.MainCode.GDtest_9595targetObjects2= [];
gdjs.MainCode.GDtest_9595targetObjects3= [];


gdjs.MainCode.asyncCallback9428908 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects2);

{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDtest_9595targetObjects1) asyncObjectsList.addObject("test_target", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback9428908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")));
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y")));
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects2);
gdjs.copyArray(runtimeScene.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), false);
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects2[i].setX((( gdjs.MainCode.GDtest_9595shipObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects2[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects2[i].setY((( gdjs.MainCode.GDtest_9595shipObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects2[0].getPointY("")));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8688012);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MainCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595shipObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595shipObjects1[i].rotateTowardPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)), runtimeScene);
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDtxt_9595tituloObjects1.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects2.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects3.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects1.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects2.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red2Objects1.length = 0;
gdjs.MainCode.GDbtn_9595red2Objects2.length = 0;
gdjs.MainCode.GDbtn_9595red2Objects3.length = 0;
gdjs.MainCode.GDtest_9595shipObjects1.length = 0;
gdjs.MainCode.GDtest_9595shipObjects2.length = 0;
gdjs.MainCode.GDtest_9595shipObjects3.length = 0;
gdjs.MainCode.GDtest_9595targetObjects1.length = 0;
gdjs.MainCode.GDtest_9595targetObjects2.length = 0;
gdjs.MainCode.GDtest_9595targetObjects3.length = 0;

gdjs.MainCode.eventsList4(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
