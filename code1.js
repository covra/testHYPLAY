gdjs.MainCode = {};
gdjs.MainCode.GDtxt_9595tituloObjects1= [];
gdjs.MainCode.GDtxt_9595tituloObjects2= [];
gdjs.MainCode.GDtxt_9595tituloObjects3= [];


gdjs.MainCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MainCode.asyncCallback9477076 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "HYPLAYLogin", runtimeScene.getScene().getVariables().get("statusResponse"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.MainCode.asyncCallback9477076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{



}


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
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "HYPLAYLogin", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "HYPLAYLogin", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "HYPLAYLogin", "Content-Type", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "user_at_kKbC7274_LV1SU4bHupVLzZglUEgUcluxE9ocauom_eA0PY7r-hoPszGqke5cNRz", "HYPLAYLogin", "Authorization", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

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
