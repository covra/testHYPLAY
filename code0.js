gdjs.SplashSceneCode = {};
gdjs.SplashSceneCode.GDbackgroundDottedObjects1= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects2= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects3= [];
gdjs.SplashSceneCode.GDTabalotIconObjects1= [];
gdjs.SplashSceneCode.GDTabalotIconObjects2= [];
gdjs.SplashSceneCode.GDTabalotIconObjects3= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects1= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects2= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects3= [];


gdjs.SplashSceneCode.userFunc0x75b018 = function GDJSInlineCode(runtimeScene) {
"use strict";
var iframe = document.createElement("form");
var oauth2EndPoint = "https://hyplay.com/oauth/authorize/?appId=ae6b8795-169f-40c9-bf60-a3736dceeffc&chain=HYCHAIN_TESTNET&responseType=token&redirectUri=https://covra.github.io/testHYPLAY/index.html"
var oauth2EndPointRURI = "https://covra.github.io/testHYPLAY/index.html";
iframe.setAttribute("width", "1080");
iframe.setAttribute("height", "720");
iframe.align = "center";
window.open(oauth2EndPoint);

iframe.setAttribute('method', 'GET');
iframe.setAttribute('action', oauth2EndPoint);

let params = {
    "appId":"ae6b8795-169f-40c9-bf60-a3736dceeffc",
    "chain":"HYCHAIN_TESTNET",
    "responseType":"",
    "redirectUri":"https://gd.games/covra/hyplay-test"
}

//iframe.src = "https://hyplay.com/oauth/authorize/?appId=ae6b8795-169f-40c9-bf60-a3736dceeffc&chain=HYCHAIN_TESTNET&responseType=token&redirectUri=https://gd.games/covra/hyplay-test";

document.body.appendChild(iframe);

iframe.style.position = "absolute";
iframe.style.zIndex = 1000;

};
gdjs.SplashSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.SplashSceneCode.userFunc0x75b018(runtimeScene);

}


{



}


{



}


{



}


};gdjs.SplashSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "IconLayer");
}
{ //Subevents
gdjs.SplashSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8989092);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplashSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SplashSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashSceneCode.GDbackgroundDottedObjects1.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects2.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects3.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects1.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects2.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects3.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects3.length = 0;

gdjs.SplashSceneCode.eventsList2(runtimeScene);

return;

}

gdjs['SplashSceneCode'] = gdjs.SplashSceneCode;
