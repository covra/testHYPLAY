gdjs.SplashSceneCode = {};
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

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

gdjs.SplashSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['SplashSceneCode'] = gdjs.SplashSceneCode;
