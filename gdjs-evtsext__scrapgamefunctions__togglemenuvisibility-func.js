
if (typeof gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility = {};
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDdebugTextObjects1= [];
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDdebugTextObjects2= [];
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1= [];
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects2= [];


gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.toggleVariableBoolean(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0));
}{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.getArgument("variableVisibilityControl"), false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("menuButton"), gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("outlineEnable", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("menuButton"), gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("outlineEnable", true);
}
}}

}


};

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.func = function(runtimeScene, debugText, variableVisibilityControl, menuButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"debugText": debugText
, "menuButton": menuButton
},
  _objectArraysMap: {
"debugText": gdjs.objectsListsToArray(debugText)
, "menuButton": gdjs.objectsListsToArray(menuButton)
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
if (argName === "variableVisibilityControl") return variableVisibilityControl;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDdebugTextObjects1.length = 0;
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDdebugTextObjects2.length = 0;
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects1.length = 0;
gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.GDmenuButtonObjects2.length = 0;

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScrapGameFunctions__ToggleMenuVisibility.registeredGdjsCallbacks = [];