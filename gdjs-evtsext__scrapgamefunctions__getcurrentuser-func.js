
if (typeof gdjs.evtsExt__ScrapGameFunctions__getCurrentUser !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser = {};
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects1= [];
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects2= [];
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects3= [];
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects4= [];
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects5= [];


gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setString("");
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setString("");
}{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.getArgument("response"), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), false);
}
}}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback9668612 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
}
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "getCurrentUser", eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback9668612(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString("https://api.hyplay.com/v1/users/me");
}{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("sessionAccessToken")));
}
{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "getCurrentUser", "https://api.hyplay.com/v1/users/me", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "getCurrentUser", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "getCurrentUser", "accept", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("sessionAccessToken")), "getCurrentUser", "x-session-authorization", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList3 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("txtObject"), gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects4);
{for(var i = 0, len = gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString());
}
}}

}


{



}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback17876572 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList3(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback17876572(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15276196);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13535796);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 401;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__AdvancedHTTP__ResponseStatusCode.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 400;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("txtObject"), gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("error API");
}
}}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList5(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.func = function(runtimeScene, txtObject, response, responseObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"txtObject": txtObject
},
  _objectArraysMap: {
"txtObject": gdjs.objectsListsToArray(txtObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrapGameFunctions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrapGameFunctions"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "response") return response;
if (argName === "responseObject") return responseObject;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects1.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects2.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects3.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects4.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects5.length = 0;

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList7(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.registeredGdjsCallbacks = [];