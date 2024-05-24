gdjs.MainCode = {};
gdjs.MainCode.GDtxt_9595tituloObjects1= [];
gdjs.MainCode.GDtxt_9595tituloObjects2= [];
gdjs.MainCode.GDtxt_9595tituloObjects3= [];
gdjs.MainCode.GDtxt_9595debugObjects1= [];
gdjs.MainCode.GDtxt_9595debugObjects2= [];
gdjs.MainCode.GDtxt_9595debugObjects3= [];


gdjs.MainCode.userFunc0x8da828 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
 //window.resizeTo(window.screen.availWidth , window.screen.availHeight );
 //console.log(window.screen.availWidth , window.screen.availHeight );
 objects[0].setString(window.screen.availWidth + " x " + window.screen.availHeight)

 objects[0].setString(objects[0].getString() + window.document.webkitFullscreenEnabled);

};
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.MainCode.GDtxt_9595debugObjects1);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDtxt_9595debugObjects1);
gdjs.MainCode.userFunc0x8da828(runtimeScene, objects);

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8156220);
}
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.MainCode.eventsList1(runtimeScene);
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

gdjs.MainCode.eventsList2(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
