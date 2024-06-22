
if (typeof gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario = {};
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.GDpointFromReferenceObjects1= [];
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.GDpointFromReferenceObjects2= [];
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.GDpointFromReferenceObjects3= [];


gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.userFunc0xd22f40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Defs
const panel = runtimeScene.getObjects("img_panel_bg_inventario")[0];
const anchorPointName = "anchor_Inv";
var anchor = {x : 100 , y : 100};
var refSprite = null;

//Get initial data
async function getData() {     
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            refSprite =  eventsFunctionContext.getObjects("pointFromReference") [0]; 
            anchor = {x : refSprite.getPointX(anchorPointName), y : refSprite.getPointY(anchorPointName)};
            resolve(true);
        },250);
    })  
}

function setMenuPosition() {
    panel.setX(anchor.x);
    panel.setY(anchor.y);
}

//Main 
let p = getData().then(()=>{ 
    setMenuPosition();
});
};
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.userFunc0xd22f40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.userFunc0xe07c08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Defs
const panel = runtimeScene.getObjects("img_inventarioTienda")[0];
const anchorPointName = "anchor_Store";
var anchor = {x : 100 , y : 100};
var refSprite = null;

//Get initial data
async function getData() {     
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            refSprite =  eventsFunctionContext.getObjects("pointFromReference") [0]; 
            anchor = {x : refSprite.getPointX(anchorPointName), y : refSprite.getPointY(anchorPointName)};
            resolve(true);
        },250);
    })  
}

function setMenuPosition() {
    panel.setX(anchor.x);
    panel.setY(anchor.y);
}

//Main 
let p = getData().then(()=>{ 
    setMenuPosition();
});
};
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.userFunc0xe07c08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("groupMenuID") : "") == "lateralMenuInv");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("groupMenuID") : "") == "lateralMenuStore");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.userFunc0x9f2cd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const panelInv = runtimeScene.getObjects("img_panel_bg_inventario")[0];
const panelStore = runtimeScene.getObjects("img_inventarioTienda")[0];

panelInv.setX(1350);
panelInv.setY(71);

panelStore.setX(-427);
panelStore.setY(71);
};
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.userFunc0x9f2cd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("bShowAll_") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("bShowAll_") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.func = function(runtimeScene, bShowAll_, pointFromReference, DirectionIsToRight, groupMenuID, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"pointFromReference": pointFromReference
},
  _objectArraysMap: {
"pointFromReference": gdjs.objectsListsToArray(pointFromReference)
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
if (argName === "bShowAll_") return bShowAll_;
if (argName === "DirectionIsToRight") return DirectionIsToRight;
if (argName === "groupMenuID") return groupMenuID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.GDpointFromReferenceObjects1.length = 0;
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.GDpointFromReferenceObjects2.length = 0;
gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.GDpointFromReferenceObjects3.length = 0;

gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScrapGameFunctions__ShowMenuInventario.registeredGdjsCallbacks = [];