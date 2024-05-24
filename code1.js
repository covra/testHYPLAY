gdjs.MainCode = {};
gdjs.MainCode.GDtxt_9595tituloObjects1= [];
gdjs.MainCode.GDtxt_9595tituloObjects2= [];
gdjs.MainCode.GDtxt_9595tituloObjects3= [];


gdjs.MainCode.userFunc0x8dfed8 = function GDJSInlineCode(runtimeScene) {
"use strict";
 window.resizeTo(window.screen.availWidth , window.screen.availHeight );

};
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.MainCode.userFunc0x8dfed8(runtimeScene);

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8156220);
}
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

gdjs.MainCode.eventsList2(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
