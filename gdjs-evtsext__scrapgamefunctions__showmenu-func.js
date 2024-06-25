
if (typeof gdjs.evtsExt__ScrapGameFunctions__ShowMenu !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__ShowMenu.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__ShowMenu = {};
gdjs.evtsExt__ScrapGameFunctions__ShowMenu.GDpointFromReferenceObjects1= [];


gdjs.evtsExt__ScrapGameFunctions__ShowMenu.userFunc0xd0d5a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Defs
const tbd = runtimeScene.getObjects("txt_debug3")[0]; 
const bool = eventsFunctionContext.getArgument("bShowAll_");
var btnsGroup = [];
var btnHeight = 100;
const anchorPointName = "anchor_Menu";
var hudSprite = null;
var anchor = {x : 200, y : 200};

//Get initial data
async function getData() {     
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            btnsGroup = runtimeScene.getObjects("btn_menuGame");
            btnHeight =  btnsGroup[0].getHeight();
            hudSprite =  eventsFunctionContext.getObjects("pointFromReference") [0]; 
            anchor = {x : hudSprite.getPointX(anchorPointName), y : hudSprite.getPointY(anchorPointName)};
            resolve(true);
        },250);
    })  
}

//Show labels
function setInitButons() {
    btnsGroup.forEach((b)=>{
        let lbl = b.getVariables().get("label").getAsString();
        b.SetLabelText(lbl);           
    });
    return true;
}

//Toggle visibility :: ease Show
async function easeButons (bIn){
    let offset = 0;
    let visible = false;
    return new Promise ((resolve, reject) =>{
        btnsGroup.forEach((b)=>{
            if (bIn) {
                let bh = b.getBehavior("Tween");
                let str = b.getVariables().get("id").getAsString();
                let newY = anchor.y + offset;
                bh.addObjectPositionTween2(str,anchor.x, newY, "easeInSine",0.5,false);
                offset = offset + btnHeight;    
                visible = true;
            } else if (bIn == false ) {
                b.setY(anchor.y + (window.innerHeight * 2));
                visible = false;
            }

        });
        runtimeScene.getVariables().get("bIsVisibleMenuGame").setBoolean(visible);
        resolve(visible);
    });
}

//Main 
let p = getData().then(()=>{  
    //runtimeScene.getVariables().get("bDebounceMenu").setBoolean(true);
    let isEnd1 = setInitButons();
    let isEnd2 = easeButons(eventsFunctionContext.getArgument("bShowAll_")).then(() =>{
        //fin
        //runtimeScene.getVariables().get("bDebounceMenu").setBoolean(false);
    });
})






};
gdjs.evtsExt__ScrapGameFunctions__ShowMenu.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__ShowMenu.userFunc0xd0d5a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScrapGameFunctions__ShowMenu.func = function(runtimeScene, bShowAll_, pointFromReference, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrapGameFunctions__ShowMenu.GDpointFromReferenceObjects1.length = 0;

gdjs.evtsExt__ScrapGameFunctions__ShowMenu.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScrapGameFunctions__ShowMenu.registeredGdjsCallbacks = [];