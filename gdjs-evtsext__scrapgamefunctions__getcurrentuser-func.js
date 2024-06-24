
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


gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback9668612 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
}
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "getCurrentUser", runtimeScene.getScene().getVariables().get("response"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback9668612(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString("https://api.hyplay.com/v1/users/me");
}{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("sessionAccessToken")));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "getCurrentUser", "https://api.hyplay.com/v1/users/me", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "getCurrentUser", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "getCurrentUser", "accept", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsString(), "getCurrentUser", "x-session-authorization", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.userFunc0xdf0da0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const tbd_user = eventsFunctionContext.getObjects("txtObject")[0];
const keyString = "username";
const responseObject = runtimeScene.getVariables().get("responseObject");
tbd_user.setString(tbd_user.getString() + " >> [" + responseObject.getChildrenCount()+ "] datos");
tbd_user.setString(tbd_user.getString() + " >> [" + keyString + "]: " + responseObject.getChildNamed(keyString).getAsString());



};
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


var objects = [];
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.userFunc0xdf0da0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback17876572 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().get("response"), runtimeScene.getScene().getVariables().get("responseObject"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.asyncCallback17876572(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15276196);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().get("response"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13535796);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList4(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.func = function(runtimeScene, txtObject, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects1.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects2.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects3.length = 0;
gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.GDtxtObjectObjects4.length = 0;

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.eventsList6(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__ScrapGameFunctions__getCurrentUser.registeredGdjsCallbacks = [];