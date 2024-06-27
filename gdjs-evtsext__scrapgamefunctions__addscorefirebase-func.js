
if (typeof gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase !== "undefined") {
  gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase = {};


gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.userFunc0x12549d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//setTimeout(()=>{
      // Ref to score firebase collection ("scoresHyplay")
      let timestamp = gdjs.evtTools.runtimeScene.getTime("timestamp");
      const db = firebase.firestore();
      const scoreCollection = db.collection('scoresHyplay');

      //Define player data [playerDataArray]
      let globalUserStruct = runtimeScene.getGame().getVariables().get("currentUser");
      let nameIn = globalUserStruct.getChildNamed("username").getAsString();
      let scoreIn = runtimeScene.getGame().getVariables().get("player_param_totalScrap").getAsNumber();
      console.log(" Adding score to FB: idPlayer: " + nameIn + " nameIn: " + nameIn + " scoreIn: " + scoreIn);

      // New player data In
      var playerData = {
        name: nameIn , 
        maxScrap: scoreIn
      };

      // New document with custom ID from playerDataStr.playerId
      scoreCollection.doc(nameIn).set(playerData)
      .then((res) => {
        let timestamp2 = gdjs.evtTools.runtimeScene.getTime("timestamp");
        let dif = timestamp2 - timestamp;
        console.log( 'Add score FB: >> Documento creado:', nameIn, " en ", dif, " ms", res);
        runtimeScene.getGame().getVariables().get("responseFB").setString("ok");
        
      })
      .catch((error) => {
        console.error('Error al crear el documento:', error);
      });

//},700);

console.log("Timeout for add to firebase...");

};
gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.userFunc0x12549d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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


gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__ScrapGameFunctions__AddScoreFireBase.registeredGdjsCallbacks = [];