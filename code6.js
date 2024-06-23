gdjs.videoCode = {};
gdjs.videoCode.localVariables = [];
gdjs.videoCode.GDNewVideoObjects1_1final = [];

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

gdjs.videoCode.GDNewVideoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.videoCode.GDNewVideoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.videoCode.GDNewVideoObjects2);
for (var i = 0, k = 0, l = gdjs.videoCode.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.videoCode.GDNewVideoObjects2[i].isEnded() ) {
        isConditionTrue_1 = true;
        gdjs.videoCode.GDNewVideoObjects2[k] = gdjs.videoCode.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.videoCode.GDNewVideoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.videoCode.GDNewVideoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.videoCode.GDNewVideoObjects1_1final.indexOf(gdjs.videoCode.GDNewVideoObjects2[j]) === -1 )
            gdjs.videoCode.GDNewVideoObjects1_1final.push(gdjs.videoCode.GDNewVideoObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.videoCode.GDNewVideoObjects1_1final, gdjs.videoCode.GDNewVideoObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17479756);
}
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

gdjs.videoCode.eventsList0(runtimeScene);

return;

}

gdjs['videoCode'] = gdjs.videoCode;
