gdjs.videoCode = {};
gdjs.videoCode.localVariables = [];
gdjs.videoCode.GDNewVideoObjects1= [];
gdjs.videoCode.GDNewVideoObjects2= [];
gdjs.videoCode.GDtxt_9595gameVersionObjects1= [];
gdjs.videoCode.GDtxt_9595gameVersionObjects2= [];


gdjs.videoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.videoCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.videoCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.videoCode.GDNewVideoObjects1[i].play();
}
}}

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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainScene", false);
}}

}


};

gdjs.videoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.videoCode.GDNewVideoObjects1.length = 0;
gdjs.videoCode.GDNewVideoObjects2.length = 0;
gdjs.videoCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.videoCode.GDtxt_9595gameVersionObjects2.length = 0;

gdjs.videoCode.eventsList0(runtimeScene);

return;

}

gdjs['videoCode'] = gdjs.videoCode;
