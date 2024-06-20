
if (typeof gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility = {};
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDdebugTextObjects1= [];


gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.userFunc0xccfc80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.userFunc0xccfc80(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.func = function(runtimeScene, debugText, variableVisibilityControl, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"debugText": debugText
},
  _objectArraysMap: {
"debugText": gdjs.objectsListsToArray(debugText)
},
  _behaviorNamesMap: {
},
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
if (argName === "variableVisibilityControl") return variableVisibilityControl;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDdebugTextObjects1.length = 0;

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.registeredGdjsCallbacks = [];