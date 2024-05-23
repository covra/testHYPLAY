gdjs.SplashSceneCode = {};
gdjs.SplashSceneCode.GDbackgroundDottedObjects1= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects2= [];
gdjs.SplashSceneCode.GDbackgroundDottedObjects3= [];
gdjs.SplashSceneCode.GDTabalotIconObjects1= [];
gdjs.SplashSceneCode.GDTabalotIconObjects2= [];
gdjs.SplashSceneCode.GDTabalotIconObjects3= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects1= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects2= [];
gdjs.SplashSceneCode.GDtxt_9595debugObjects3= [];


gdjs.SplashSceneCode.userFunc0x7d08b8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
    var appId = "ae6b8795-169f-40c9-bf60-a3736dceeffc";
    var redirectUri = encodeURIComponent("https://covra.github.io/testHYPLAY/redirect.html"); // Add an empty html file at this URL, and add it to your hyplay app
    var url = "https://hyplay.com/oauth/authorize/?appId=" + appId + "&chain=HYCHAIN&responseType=token&redirectUri=" + redirectUri;

    // Open a new popup window
    const popup = window.open(url, "PopupWindow", "width=600,height=600");
    //const popup = window.open(url, "PopupWindow", "width=600,height=600");

    // Function to check URL changes
    var checkUrlChange = function() {
        try {
            objects[0].setString("Checking auth....");
            // Check if popup was closed
            if (popup.closed) {
                console.log("Popup has been closed.");
                //clearInterval(interval);
            } else {

                // Do something if URL meets certain criteria
                var hash = popup.location.hash.substring(1);
                var params = new URLSearchParams(hash);
                var accessToken = params.get('token');

                if (accessToken) {
                    console.log('Access token:', accessToken);
                    // However gdevelop wants you to send a message bacn to your game
                    popup.close();
                    // Checking 
                    objects[0].setString("Token succesful: " + accessToken);
                    runtimeScene.setBackgroundColor(0,204,100);
                }
            }
        } catch (e) {
            // Errors are thrown if the popup navigates to a different origin
            console.error("Error accessing popup URL: ", e);
        }
    };

    // Set interval to check URL every 500 milliseconds
    var interval = setInterval(checkUrlChange, 500);


};
gdjs.SplashSceneCode.userFunc0x8aac48 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

};
gdjs.SplashSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.SplashSceneCode.GDtxt_9595debugObjects2);

var objects = [];
objects.push.apply(objects,gdjs.SplashSceneCode.GDtxt_9595debugObjects2);
gdjs.SplashSceneCode.userFunc0x7d08b8(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
}

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
}

}


{


gdjs.SplashSceneCode.userFunc0x8aac48(runtimeScene);

}


};gdjs.SplashSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "IconLayer");
}
{ //Subevents
gdjs.SplashSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SplashSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8989092);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplashSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SplashSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashSceneCode.GDbackgroundDottedObjects1.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects2.length = 0;
gdjs.SplashSceneCode.GDbackgroundDottedObjects3.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects1.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects2.length = 0;
gdjs.SplashSceneCode.GDTabalotIconObjects3.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects1.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects2.length = 0;
gdjs.SplashSceneCode.GDtxt_9595debugObjects3.length = 0;

gdjs.SplashSceneCode.eventsList2(runtimeScene);

return;

}

gdjs['SplashSceneCode'] = gdjs.SplashSceneCode;
