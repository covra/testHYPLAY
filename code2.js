gdjs.LeaderboardCode = {};
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


gdjs.LeaderboardCode.asyncCallback12235140 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects4);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "InputDataLayer");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "248;231;28");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Leaderboard");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBlueButtonObjects4.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBlueButtonObjects4[i].SetLabelText("Close", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LeaderboardCode.GDBlueButtonObjects2) asyncObjectsList.addObject("BlueButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback12235140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
{firebase.analytics();
}{firebase.performance();
}}

}


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
{gdjs.evtTools.firebaseTools.database.getVariable("/lista0/p1", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_title"), gdjs.LeaderboardCode.GDtxt_9595titleObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt_title2"), gdjs.LeaderboardCode.GDtxt_9595title2Objects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595titleObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595titleObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595title2Objects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595title2Objects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("id")));
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("IDIputFake"), gdjs.LeaderboardCode.GDIDIputFakeObjects2);
gdjs.copyArray(runtimeScene.getObjects("nameIputFake"), gdjs.LeaderboardCode.GDnameIputFakeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("id").setString((( gdjs.LeaderboardCode.GDIDIputFakeObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDIDIputFakeObjects2[0].getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.LeaderboardCode.GDnameIputFakeObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDnameIputFakeObjects2[0].getText()));
}
{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.asyncCallback12276988 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects2);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "Leaderboard");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "184;233;134");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "InputDataLayer");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBlueButtonObjects2[i].SetLabelText("Fake Login", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LeaderboardCode.GDBlueButtonObjects1) asyncObjectsList.addObject("BlueButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback12276988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LeaderboardCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Leaderboard");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "InputDataLayer");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBlueButtonObjects2[i].SetLabelText("Fake Login", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "184;233;134");
}}

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
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

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
gdjs.LeaderboardCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.asyncCallback10371084 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}
gdjs.LeaderboardCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback10371084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10628396);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList9 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList6(runtimeScene);
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
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) == "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_debujLeader"), gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_name"), gdjs.LeaderboardCode.GDtxt_9595nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_pos"), gdjs.LeaderboardCode.GDtxt_9595posObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_score"), gdjs.LeaderboardCode.GDtxt_9595scoreObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595debujLeaderObjects1[i].getBehavior("Text").setText("Leaderboard");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595posObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595posObjects1[i].getBehavior("Text").setText("1");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595nameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595nameObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("nombre")));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxt_9595scoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxt_9595scoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("score")));
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList8(runtimeScene);} //End of subevents
}

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

gdjs.LeaderboardCode.eventsList9(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
