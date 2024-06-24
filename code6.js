gdjs.testHYPLAYstorageCode = {};
gdjs.testHYPLAYstorageCode.localVariables = [];
gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects1= [];
gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects2= [];
gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects3= [];
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1= [];
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects2= [];
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects3= [];
gdjs.testHYPLAYstorageCode.GDtxt_9595gameVersionObjects1= [];
gdjs.testHYPLAYstorageCode.GDtxt_9595gameVersionObjects2= [];
gdjs.testHYPLAYstorageCode.GDtxt_9595gameVersionObjects3= [];


gdjs.testHYPLAYstorageCode.asyncCallback12136844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.testHYPLAYstorageCode.localVariables);
}
gdjs.testHYPLAYstorageCode.mapOfGDgdjs_9546testHYPLAYstorageCode_9546GDtxt_95959595currentUserObjects2Objects = Hashtable.newFrom({"txt_currentUser": gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects2});
gdjs.testHYPLAYstorageCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("txt_currentUser"), gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects2);

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.testHYPLAYstorageCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.func(runtimeScene, gdjs.testHYPLAYstorageCode.mapOfGDgdjs_9546testHYPLAYstorageCode_9546GDtxt_95959595currentUserObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.testHYPLAYstorageCode.asyncCallback12136844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.testHYPLAYstorageCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.testHYPLAYstorageCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.testHYPLAYstorageCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.testHYPLAYstorageCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.testHYPLAYstorageCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.testHYPLAYstorageCode.eventsList2(runtimeScene);
}


};gdjs.testHYPLAYstorageCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_reload"), gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1[k] = gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17495884);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "testHYPLAYstorage", true);
}}

}


};gdjs.testHYPLAYstorageCode.eventsList5 = function(runtimeScene) {

{


gdjs.testHYPLAYstorageCode.eventsList3(runtimeScene);
}


{


gdjs.testHYPLAYstorageCode.eventsList4(runtimeScene);
}


};

gdjs.testHYPLAYstorageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects1.length = 0;
gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects2.length = 0;
gdjs.testHYPLAYstorageCode.GDtxt_9595currentUserObjects3.length = 0;
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects1.length = 0;
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects2.length = 0;
gdjs.testHYPLAYstorageCode.GDbtn_9595reloadObjects3.length = 0;
gdjs.testHYPLAYstorageCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.testHYPLAYstorageCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.testHYPLAYstorageCode.GDtxt_9595gameVersionObjects3.length = 0;

gdjs.testHYPLAYstorageCode.eventsList5(runtimeScene);

return;

}

gdjs['testHYPLAYstorageCode'] = gdjs.testHYPLAYstorageCode;
