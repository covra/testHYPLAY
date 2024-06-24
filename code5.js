gdjs.videoCode = {};
gdjs.videoCode.localVariables = [];
gdjs.videoCode.GDNewVideoObjects1= [];
gdjs.videoCode.GDNewVideoObjects2= [];
gdjs.videoCode.GDtxt_9595gameVersionObjects1= [];
gdjs.videoCode.GDtxt_9595gameVersionObjects2= [];


gdjs.videoCode.asyncCallback16154164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.videoCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}}
gdjs.videoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.videoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.videoCode.asyncCallback16154164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.videoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.videoCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.videoCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.videoCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.videoCode.GDNewVideoObjects1[i].play();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{ //Subevents
gdjs.videoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.videoCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.videoCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDNewVideoObjects1[k] = gdjs.videoCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.videoCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nodrizaArea", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nodrizaArea", false);
}}

}


};

gdjs.videoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.videoCode.GDNewVideoObjects1.length = 0;
gdjs.videoCode.GDNewVideoObjects2.length = 0;
gdjs.videoCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.videoCode.GDtxt_9595gameVersionObjects2.length = 0;

gdjs.videoCode.eventsList2(runtimeScene);

return;

}

gdjs['videoCode'] = gdjs.videoCode;
