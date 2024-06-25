gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDnameIputFakeObjects1= [];
gdjs.LeaderboardCode.GDnameIputFakeObjects2= [];
gdjs.LeaderboardCode.GDnameIputFakeObjects3= [];
gdjs.LeaderboardCode.GDnameIputFakeObjects4= [];
gdjs.LeaderboardCode.GDBlueButtonObjects1= [];
gdjs.LeaderboardCode.GDBlueButtonObjects2= [];
gdjs.LeaderboardCode.GDBlueButtonObjects3= [];
gdjs.LeaderboardCode.GDBlueButtonObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595titleObjects1= [];
gdjs.LeaderboardCode.GDtxt_9595titleObjects2= [];
gdjs.LeaderboardCode.GDtxt_9595titleObjects3= [];
gdjs.LeaderboardCode.GDtxt_9595titleObjects4= [];
gdjs.LeaderboardCode.GDIDIputFakeObjects1= [];
gdjs.LeaderboardCode.GDIDIputFakeObjects2= [];
gdjs.LeaderboardCode.GDIDIputFakeObjects3= [];
gdjs.LeaderboardCode.GDIDIputFakeObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595title2Objects1= [];
gdjs.LeaderboardCode.GDtxt_9595title2Objects2= [];
gdjs.LeaderboardCode.GDtxt_9595title2Objects3= [];
gdjs.LeaderboardCode.GDtxt_9595title2Objects4= [];
gdjs.LeaderboardCode.GDcajaObjects1= [];
gdjs.LeaderboardCode.GDcajaObjects2= [];
gdjs.LeaderboardCode.GDcajaObjects3= [];
gdjs.LeaderboardCode.GDcajaObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595posObjects1= [];
gdjs.LeaderboardCode.GDtxt_9595posObjects2= [];
gdjs.LeaderboardCode.GDtxt_9595posObjects3= [];
gdjs.LeaderboardCode.GDtxt_9595posObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595nameObjects1= [];
gdjs.LeaderboardCode.GDtxt_9595nameObjects2= [];
gdjs.LeaderboardCode.GDtxt_9595nameObjects3= [];
gdjs.LeaderboardCode.GDtxt_9595nameObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595scoreObjects1= [];
gdjs.LeaderboardCode.GDtxt_9595scoreObjects2= [];
gdjs.LeaderboardCode.GDtxt_9595scoreObjects3= [];
gdjs.LeaderboardCode.GDtxt_9595scoreObjects4= [];
gdjs.LeaderboardCode.GDfondonameObjects1= [];
gdjs.LeaderboardCode.GDfondonameObjects2= [];
gdjs.LeaderboardCode.GDfondonameObjects3= [];
gdjs.LeaderboardCode.GDfondonameObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1= [];
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects2= [];
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects3= [];
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595title3Objects1= [];
gdjs.LeaderboardCode.GDtxt_9595title3Objects2= [];
gdjs.LeaderboardCode.GDtxt_9595title3Objects3= [];
gdjs.LeaderboardCode.GDtxt_9595title3Objects4= [];
gdjs.LeaderboardCode.GDscoreInputFakeObjects1= [];
gdjs.LeaderboardCode.GDscoreInputFakeObjects2= [];
gdjs.LeaderboardCode.GDscoreInputFakeObjects3= [];
gdjs.LeaderboardCode.GDscoreInputFakeObjects4= [];
gdjs.LeaderboardCode.GDmainObjects1= [];
gdjs.LeaderboardCode.GDmainObjects2= [];
gdjs.LeaderboardCode.GDmainObjects3= [];
gdjs.LeaderboardCode.GDmainObjects4= [];
gdjs.LeaderboardCode.GDtxt_9595title4Objects1= [];
gdjs.LeaderboardCode.GDtxt_9595title4Objects2= [];
gdjs.LeaderboardCode.GDtxt_9595title4Objects3= [];
gdjs.LeaderboardCode.GDtxt_9595title4Objects4= [];
gdjs.LeaderboardCode.GDtxt_9595title5Objects1= [];
gdjs.LeaderboardCode.GDtxt_9595title5Objects2= [];
gdjs.LeaderboardCode.GDtxt_9595title5Objects3= [];
gdjs.LeaderboardCode.GDtxt_9595title5Objects4= [];
gdjs.LeaderboardCode.GDtxt_9595title6Objects1= [];
gdjs.LeaderboardCode.GDtxt_9595title6Objects2= [];
gdjs.LeaderboardCode.GDtxt_9595title6Objects3= [];
gdjs.LeaderboardCode.GDtxt_9595title6Objects4= [];
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects1= [];
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects2= [];
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects3= [];
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects4= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("playerId").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("id")));
}{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("name").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("username")));
}{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("score").setString("0");
}}

}


};gdjs.LeaderboardCode.asyncCallback16178636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects4);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "InputDataLayer");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "248;231;28");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Leaderboard");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBlueButtonObjects4.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBlueButtonObjects4[i].SetLabelText("Close", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
for (const obj of gdjs.LeaderboardCode.GDBlueButtonObjects2) asyncObjectsList.addObject("BlueButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback16178636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.userFunc0xe1e370 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Ref to score firebase collection ("scoresHyplay")
let timestamp = gdjs.evtTools.runtimeScene.getTime("timestamp");
const db = firebase.firestore();
const scoreCollection = db.collection('scoresHyplay');
//Define player data
const dplayer = runtimeScene.getVariables().get("playerDataArray").getAllChildrenArray();
const idPlayer = dplayer[0].getAsString();
const nameIn = dplayer[1].getAsString();
const scoreIn = dplayer[2].getAsNumber();

console.log(" idPlayer: " + idPlayer + " nameIn: " + nameIn + " scoreIn: " + scoreIn);

// New player data In
var playerData = {
  name: nameIn , 
  score: scoreIn
};

// New document with custom ID from playerDataStr.playerId
scoreCollection.doc(idPlayer).set(playerData)
.then(() => {
  let timestamp2 = gdjs.evtTools.runtimeScene.getTime("timestamp");
  let dif = timestamp2 - timestamp;
  console.log( ' >> Documento creado:', idPlayer, " en ", dif, " ms");
  runtimeScene.getVariables().get("callBackTestResponse").setString("ok");
  
})
.catch((error) => {
  console.error('Error al crear el documento:', error);
});


};
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{



}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


gdjs.LeaderboardCode.userFunc0xe1e370(runtimeScene);

}


{


gdjs.LeaderboardCode.eventsList2(runtimeScene);
}


{



}


{



}


};gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{



}


{



}


{


gdjs.LeaderboardCode.eventsList3(runtimeScene);
}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{


gdjs.LeaderboardCode.eventsList4(runtimeScene);
}


};gdjs.LeaderboardCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_title"), gdjs.LeaderboardCode.GDtxt_9595titleObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt_title2"), gdjs.LeaderboardCode.GDtxt_9595title2Objects2);
gdjs.copyArray(runtimeScene.getObjects("txt_title3"), gdjs.LeaderboardCode.GDtxt_9595title3Objects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595titleObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595titleObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("playerId").getAsString());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595title2Objects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595title2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("name").getAsString());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595title3Objects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595title3Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("score").getAsString());
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("IDIputFake"), gdjs.LeaderboardCode.GDIDIputFakeObjects2);
gdjs.copyArray(runtimeScene.getObjects("nameIputFake"), gdjs.LeaderboardCode.GDnameIputFakeObjects2);
gdjs.copyArray(runtimeScene.getObjects("scoreInputFake"), gdjs.LeaderboardCode.GDscoreInputFakeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("playerId").setString((( gdjs.LeaderboardCode.GDIDIputFakeObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDIDIputFakeObjects2[0].getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("name").setString((( gdjs.LeaderboardCode.GDnameIputFakeObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDnameIputFakeObjects2[0].getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("score").setString((( gdjs.LeaderboardCode.GDscoreInputFakeObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDscoreInputFakeObjects2[0].getText()));
}
{ //Subevents
gdjs.LeaderboardCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.asyncCallback16201612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects2);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "Leaderboard");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "184;233;134");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "InputDataLayer");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBlueButtonObjects2[i].SetLabelText("AddFakeScore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
gdjs.LeaderboardCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
for (const obj of gdjs.LeaderboardCode.GDBlueButtonObjects1) asyncObjectsList.addObject("BlueButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback16201612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LeaderboardCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Leaderboard");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "InputDataLayer");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBlueButtonObjects2[i].SetLabelText("AddFakeScore", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "184;233;134");
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_title4"), gdjs.LeaderboardCode.GDtxt_9595title4Objects2);
gdjs.copyArray(runtimeScene.getObjects("txt_title5"), gdjs.LeaderboardCode.GDtxt_9595title5Objects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595title4Objects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595title4Objects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595title5Objects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595title5Objects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min")));
}
}}

}


{


gdjs.LeaderboardCode.eventsList0(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBlueButtonObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBlueButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBlueButtonObjects2[k] = gdjs.LeaderboardCode.GDBlueButtonObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBlueButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "InputDataLayer");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBlueButtonObjects1[k] = gdjs.LeaderboardCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Leaderboard");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("main"), gdjs.LeaderboardCode.GDmainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDmainObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDmainObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDmainObjects1[k] = gdjs.LeaderboardCode.GDmainObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDmainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.LeaderboardCode.eventsList12 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList10(runtimeScene);
}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debujLeader"), gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1[i].setCharacterSize(20);
}
}}

}


{



}


{


gdjs.LeaderboardCode.eventsList11(runtimeScene);
}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDnameIputFakeObjects1.length = 0;
gdjs.LeaderboardCode.GDnameIputFakeObjects2.length = 0;
gdjs.LeaderboardCode.GDnameIputFakeObjects3.length = 0;
gdjs.LeaderboardCode.GDnameIputFakeObjects4.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595titleObjects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595titleObjects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595titleObjects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595titleObjects4.length = 0;
gdjs.LeaderboardCode.GDIDIputFakeObjects1.length = 0;
gdjs.LeaderboardCode.GDIDIputFakeObjects2.length = 0;
gdjs.LeaderboardCode.GDIDIputFakeObjects3.length = 0;
gdjs.LeaderboardCode.GDIDIputFakeObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title2Objects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title2Objects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title2Objects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title2Objects4.length = 0;
gdjs.LeaderboardCode.GDcajaObjects1.length = 0;
gdjs.LeaderboardCode.GDcajaObjects2.length = 0;
gdjs.LeaderboardCode.GDcajaObjects3.length = 0;
gdjs.LeaderboardCode.GDcajaObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595posObjects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595posObjects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595posObjects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595posObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595nameObjects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595nameObjects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595nameObjects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595nameObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595scoreObjects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595scoreObjects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595scoreObjects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595scoreObjects4.length = 0;
gdjs.LeaderboardCode.GDfondonameObjects1.length = 0;
gdjs.LeaderboardCode.GDfondonameObjects2.length = 0;
gdjs.LeaderboardCode.GDfondonameObjects3.length = 0;
gdjs.LeaderboardCode.GDfondonameObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title3Objects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title3Objects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title3Objects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title3Objects4.length = 0;
gdjs.LeaderboardCode.GDscoreInputFakeObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreInputFakeObjects2.length = 0;
gdjs.LeaderboardCode.GDscoreInputFakeObjects3.length = 0;
gdjs.LeaderboardCode.GDscoreInputFakeObjects4.length = 0;
gdjs.LeaderboardCode.GDmainObjects1.length = 0;
gdjs.LeaderboardCode.GDmainObjects2.length = 0;
gdjs.LeaderboardCode.GDmainObjects3.length = 0;
gdjs.LeaderboardCode.GDmainObjects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title4Objects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title4Objects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title4Objects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title4Objects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title5Objects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title5Objects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title5Objects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title5Objects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title6Objects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title6Objects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title6Objects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595title6Objects4.length = 0;
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects3.length = 0;
gdjs.LeaderboardCode.GDtxt_9595gameVersionObjects4.length = 0;

gdjs.LeaderboardCode.eventsList12(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
