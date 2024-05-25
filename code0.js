gdjs.SplashSceneCode = {};
gdjs.SplashSceneCode.GDskipObjects1_1final = [];

gdjs.SplashSceneCode.GDbackgroundDottedObjects1= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects2= [];
gdjs.SplashSceneCode.GDTabalotIconObjects1= [];
gdjs.SplashSceneCode.GDTabalotIconObjects2= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects1= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects2= [];
gdjs.SplashSceneCode.GDloginObjects1= [];
gdjs.SplashSceneCode.GDloginObjects2= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects1= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects2= [];
gdjs.SplashSceneCode.GDskipObjects1= [];
gdjs.SplashSceneCode.GDskipObjects2= [];


gdjs.SplashSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9809604);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.SplashSceneCode.GDtxt_9595debugObjects1);
{for(var i = 0, len = gdjs.SplashSceneCode.GDtxt_9595debugObjects1.length ;i < len;++i) {
    gdjs.SplashSceneCode.GDtxt_9595debugObjects1[i].getBehavior("Text").setText("v0.25");
}
}}

}


};gdjs.SplashSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.SplashSceneCode.GDskipObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SplashSceneCode.GDskipObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.SplashSceneCode.GDskipObjects2);
for (var i = 0, k = 0, l = gdjs.SplashSceneCode.GDskipObjects2.length;i<l;++i) {
    if ( gdjs.SplashSceneCode.GDskipObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.SplashSceneCode.GDskipObjects2[k] = gdjs.SplashSceneCode.GDskipObjects2[i];
        ++k;
    }
}
gdjs.SplashSceneCode.GDskipObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SplashSceneCode.GDskipObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashSceneCode.GDskipObjects1_1final.indexOf(gdjs.SplashSceneCode.GDskipObjects2[j]) === -1 )
            gdjs.SplashSceneCode.GDskipObjects1_1final.push(gdjs.SplashSceneCode.GDskipObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SplashSceneCode.GDskipObjects1_1final, gdjs.SplashSceneCode.GDskipObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.SplashSceneCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.SplashSceneCode.eventsList0(runtimeScene);
}


{


gdjs.SplashSceneCode.eventsList1(runtimeScene);
}


};

gdjs.SplashSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashSceneCode.GDbackgroundDottedObjects1.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects2.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects1.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects2.length = 0;
gdjs.SplashSceneCode.GDloginObjects1.length = 0;
gdjs.SplashSceneCode.GDloginObjects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects2.length = 0;
gdjs.SplashSceneCode.GDskipObjects1.length = 0;
gdjs.SplashSceneCode.GDskipObjects2.length = 0;

gdjs.SplashSceneCode.eventsList2(runtimeScene);

return;

}

gdjs['SplashSceneCode'] = gdjs.SplashSceneCode;
