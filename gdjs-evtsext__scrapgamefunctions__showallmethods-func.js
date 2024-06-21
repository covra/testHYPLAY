
if (typeof gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods = {};
gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.GDtxtDebugObjects1= [];
gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.GDtxtDebugObjects2= [];


gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.userFunc0xce2670 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const objectToGetMethods = eventsFunctionContext.getArgument("objectToGetMethods");
const tbd = eventsFunctionContext.getObjects("txtDebug")[0];

const myObjectPrototype = runtimeScene.getObjects(objectToGetMethods)[0].constructor.prototype;
const methods = Object.getOwnPropertyNames(myObjectPrototype).filter(prop => {
  return typeof myObjectPrototype[prop] === 'function';
});

if (tbd != undefined) {
  tbd.setString("Methods of 'MyObject':\n" + methods.join("\n"));
}
console.log("Methods of 'MyObject':\n" + methods.join("\n"));
};
gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("txtDebug"), gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.GDtxtDebugObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.GDtxtDebugObjects1);
gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.userFunc0xce2670(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.func = function(runtimeScene, objectToGetMethods, txtDebug, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"txtDebug": txtDebug
},
  _objectArraysMap: {
"txtDebug": gdjs.objectsListsToArray(txtDebug)
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
if (argName === "objectToGetMethods") return objectToGetMethods;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.GDtxtDebugObjects1.length = 0;
gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.GDtxtDebugObjects2.length = 0;

gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScrapGameFunctions__ShowAllMethods.registeredGdjsCallbacks = [];