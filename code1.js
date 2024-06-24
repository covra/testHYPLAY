gdjs.SplashSceneCode = {};
gdjs.SplashSceneCode.localVariables = [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects1= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects2= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects3= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects4= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects5= [];
gdjs.SplashSceneCode.GDTabalotIconObjects1= [];
gdjs.SplashSceneCode.GDTabalotIconObjects2= [];
gdjs.SplashSceneCode.GDTabalotIconObjects3= [];
gdjs.SplashSceneCode.GDTabalotIconObjects4= [];
gdjs.SplashSceneCode.GDTabalotIconObjects5= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects1= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects2= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects3= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects4= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects5= [];
gdjs.SplashSceneCode.GDloginObjects1= [];
gdjs.SplashSceneCode.GDloginObjects2= [];
gdjs.SplashSceneCode.GDloginObjects3= [];
gdjs.SplashSceneCode.GDloginObjects4= [];
gdjs.SplashSceneCode.GDloginObjects5= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects1= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects2= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects3= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects4= [];
gdjs.SplashSceneCode.GDtxt_9595debug2Objects5= [];
gdjs.SplashSceneCode.GDskipObjects1= [];
gdjs.SplashSceneCode.GDskipObjects2= [];
gdjs.SplashSceneCode.GDskipObjects3= [];
gdjs.SplashSceneCode.GDskipObjects4= [];
gdjs.SplashSceneCode.GDskipObjects5= [];
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects1= [];
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects2= [];
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects3= [];
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects4= [];
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects5= [];


gdjs.SplashSceneCode.userFunc0x10ac530 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
    var appId = "ae6b8795-169f-40c9-bf60-a3736dceeffc";
    var redirectUri = encodeURIComponent("https://covra.github.io/testHYPLAY/redirect.html"); // Add an empty html file at this URL, and add it to your hyplay app
    var url = "https://hyplay.com/oauth/authorize/?appId=" + appId + "&chain=HYCHAIN&responseType=token&redirectUri=" + redirectUri;
    var interval = null;

    // Open a new popup window
    const popup = window.open(url, "PopupWindow", "width=600,height=600");
    //const popup = window.open(url, "PopupWindow", "width=600,height=600");

    // Function to check URL changes
    var checkUrlChange = function() {
        try {
            objects[0].setString("Checking auth.... \n WAIT to auto-close popUp window.... \n Not gmail accounts could be problematic");
            // Check if popup was closed
            if (popup.closed) {
                console.log("Popup has been closed.");
                clearInterval(interval);
            } else {

                // Do something if URL meets certain criteria
                var hash = popup.location.hash.substring(1);
                var params = new URLSearchParams(hash);
                var accessToken = params.get('token');

                if (accessToken) {                    
                    // However gdevelop wants you to send a message bacn to your game
                    popup.close();
                    clearInterval(interval);
                    // Checking 
                    objects[0].setString(accessToken);
                    runtimeScene.setBackgroundColor(0,204,100);
                    runtimeScene.getGame().getVariables().get("sessionAccessToken").setString(accessToken);
                    console.log('Access token:', accessToken);
                }
            }
        } catch (e) {
            // Errors are thrown if the popup navigates to a different origin
            console.error("Error accessing popup URL: ", e);
        }
    };

    // Set interval to check URL every 500 milliseconds
    interval = setInterval(checkUrlChange, 500);


};
gdjs.SplashSceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("txt_debug2"), gdjs.SplashSceneCode.GDtxt_9595debug2Objects2);

var objects = [];
objects.push.apply(objects,gdjs.SplashSceneCode.GDtxt_9595debug2Objects2);
gdjs.SplashSceneCode.userFunc0x10ac530(runtimeScene, objects);

}


};gdjs.SplashSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.SplashSceneCode.GDloginObjects2, gdjs.SplashSceneCode.GDloginObjects3);

{for(var i = 0, len = gdjs.SplashSceneCode.GDloginObjects3.length ;i < len;++i) {
    gdjs.SplashSceneCode.GDloginObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.SplashSceneCode.GDtxt_9595debugObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "IconLayer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Butons");
}{for(var i = 0, len = gdjs.SplashSceneCode.GDtxt_9595debugObjects2.length ;i < len;++i) {
    gdjs.SplashSceneCode.GDtxt_9595debugObjects2[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.SplashSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.asyncCallback15809284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashSceneCode.localVariables);
}
gdjs.SplashSceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "HYPLAYGetUser", runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.SplashSceneCode.asyncCallback15809284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.debuggerTools.log("Getting user....", "info", "");
}{gdjs.evtTools.debuggerTools.log("with access token: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), "info", "");
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "HYPLAYGetUser", "https://api.hyplay.com/v1/users/me", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), "HYPLAYGetUser", "x-session-authorization", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "HYPLAYGetUser", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.SplashSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debug2"), gdjs.SplashSceneCode.GDtxt_9595debug2Objects4);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "80;227;194");
}{for(var i = 0, len = gdjs.SplashSceneCode.GDtxt_9595debug2Objects4.length ;i < len;++i) {
    gdjs.SplashSceneCode.GDtxt_9595debug2Objects4[i].getBehavior("Text").setText("Welcome " + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("username").getAsString());
}
}{gdjs.evtTools.debuggerTools.log("username: " + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("username").getAsString(), "info", "");
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("id").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("id")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("username").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("username")));
}}

}


};gdjs.SplashSceneCode.asyncCallback15816732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashSceneCode.localVariables);
{gdjs.evtTools.debuggerTools.log("Response from hyplay: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), "info", "");
}
{ //Subevents
gdjs.SplashSceneCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.SplashSceneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.SplashSceneCode.asyncCallback15816732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1))).includes("sca_sat");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}
{ //Subevents
gdjs.SplashSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15815732);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplashSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", false);
}}

}


};gdjs.SplashSceneCode.asyncCallback15821084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashSceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("txt_debug2"), gdjs.SplashSceneCode.GDtxt_9595debug2Objects2);
{for(var i = 0, len = gdjs.SplashSceneCode.GDtxt_9595debug2Objects2.length ;i < len;++i) {
    gdjs.SplashSceneCode.GDtxt_9595debug2Objects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("username").getAsString() + " you are joining the game...");
}
}
{ //Subevents
gdjs.SplashSceneCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.SplashSceneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.SplashSceneCode.asyncCallback15821084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.SplashSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplashSceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("login"), gdjs.SplashSceneCode.GDloginObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashSceneCode.GDloginObjects2.length;i<l;++i) {
    if ( gdjs.SplashSceneCode.GDloginObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SplashSceneCode.GDloginObjects2[k] = gdjs.SplashSceneCode.GDloginObjects2[i];
        ++k;
    }
}
gdjs.SplashSceneCode.GDloginObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15806676);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplashSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.SplashSceneCode.eventsList6(runtimeScene);
}


{


gdjs.SplashSceneCode.eventsList10(runtimeScene);
}


};gdjs.SplashSceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.SplashSceneCode.GDskipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashSceneCode.GDskipObjects1.length;i<l;++i) {
    if ( gdjs.SplashSceneCode.GDskipObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SplashSceneCode.GDskipObjects1[k] = gdjs.SplashSceneCode.GDskipObjects1[i];
        ++k;
    }
}
gdjs.SplashSceneCode.GDskipObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", false);
}}

}


};gdjs.SplashSceneCode.eventsList13 = function(runtimeScene) {

{


gdjs.SplashSceneCode.eventsList11(runtimeScene);
}


{


gdjs.SplashSceneCode.eventsList12(runtimeScene);
}


};

gdjs.SplashSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashSceneCode.GDbackgroundDottedObjects1.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects2.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects3.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects4.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects5.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects1.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects2.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects3.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects4.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects5.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects3.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects4.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects5.length = 0;
gdjs.SplashSceneCode.GDloginObjects1.length = 0;
gdjs.SplashSceneCode.GDloginObjects2.length = 0;
gdjs.SplashSceneCode.GDloginObjects3.length = 0;
gdjs.SplashSceneCode.GDloginObjects4.length = 0;
gdjs.SplashSceneCode.GDloginObjects5.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects3.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects4.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debug2Objects5.length = 0;
gdjs.SplashSceneCode.GDskipObjects1.length = 0;
gdjs.SplashSceneCode.GDskipObjects2.length = 0;
gdjs.SplashSceneCode.GDskipObjects3.length = 0;
gdjs.SplashSceneCode.GDskipObjects4.length = 0;
gdjs.SplashSceneCode.GDskipObjects5.length = 0;
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects3.length = 0;
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects4.length = 0;
gdjs.SplashSceneCode.GDtxt_9595gameVersionObjects5.length = 0;

gdjs.SplashSceneCode.eventsList13(runtimeScene);

return;

}

gdjs['SplashSceneCode'] = gdjs.SplashSceneCode;
