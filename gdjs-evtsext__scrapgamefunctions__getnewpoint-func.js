
if (typeof gdjs.evtsExt__ScrapGameFunctions__getNewPoint !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__getNewPoint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__getNewPoint = {};


gdjs.evtsExt__ScrapGameFunctions__getNewPoint.userFunc0x9ca5c8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//runtimeScene.getVariables().get("bIsAddingScrap").setBoolean(true);


//setTimeout(()=> {

//Definiciones
var spawnPoint = runtimeScene.getVariables().get("scrapSpawnPoint");
const tdb4 = runtimeScene.getObjects("txt_debug4")[0];
const offSetY = - 700;
const offSetX = - 800;
const tierraCenterX = (Math.floor(runtimeScene.getObjects("img_earth")[0].getAABBCenterX())) + offSetX;
const tierraCenterY = (Math.floor(runtimeScene.getObjects("img_earth")[0].getAABBCenterY())) + offSetY;
const tierraRadio = Math.floor(runtimeScene.getObjects("img_earth")[0].getWidth() / 1.5);
var timingSpawn = 50; // cambiarlo con el tiempo
        //timingSpawn = 10000


//Intervalo de creacion de scrap
//setInterval(()=>{
    if(runtimeScene.getVariables().get("bIsAllowSpawnGlobal").getAsBoolean()) {
        //let rndB = window.innerHeight - (gdjs.randomInRange(200, 400));
        //let pointA = window.innerWidth - Math.abs((Math.floor(Math.tan(180)) * rndB));
        let tetha = gdjs.randomFloatInRange(2.8, 6);
        let pointX = tierraCenterX + (tierraRadio * Math.cos(tetha));
        let pointY = tierraCenterY + (tierraRadio * Math.sin(tetha));
        spawnPoint.getChild("x").setNumber(pointX);
        spawnPoint.getChild("y").setNumber(pointY);
        //console.log( spawnPoint.getChild("x").getAsNumber() + " <> " + spawnPoint.getChild("y").getAsNumber() );
        
        
            runtimeScene.getVariables().get("bIsAddingScrap").setBoolean(false); 
        
    }


//},250)


                                        //tdb4.setString("new point: " + spawnPoint.getChild("x").getAsNumber().toFixed(1));
//},timingSpawn);
};
gdjs.evtsExt__ScrapGameFunctions__getNewPoint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__getNewPoint.userFunc0x9ca5c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__ScrapGameFunctions__getNewPoint.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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


gdjs.evtsExt__ScrapGameFunctions__getNewPoint.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScrapGameFunctions__getNewPoint.registeredGdjsCallbacks = [];