gdjs.MainCode = {};
gdjs.MainCode.GDbad_9595RockObjects1_1final = [];

gdjs.MainCode.GDtxt_9595tituloObjects1= [];
gdjs.MainCode.GDtxt_9595tituloObjects2= [];
gdjs.MainCode.GDtxt_9595tituloObjects3= [];
gdjs.MainCode.GDtxt_9595tituloObjects4= [];
gdjs.MainCode.GDtxt_9595debugObjects1= [];
gdjs.MainCode.GDtxt_9595debugObjects2= [];
gdjs.MainCode.GDtxt_9595debugObjects3= [];
gdjs.MainCode.GDtxt_9595debugObjects4= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects1= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects2= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects3= [];
gdjs.MainCode.GDbtn_9595red_9595reloadObjects4= [];
gdjs.MainCode.GDtest_9595shipObjects1= [];
gdjs.MainCode.GDtest_9595shipObjects2= [];
gdjs.MainCode.GDtest_9595shipObjects3= [];
gdjs.MainCode.GDtest_9595shipObjects4= [];
gdjs.MainCode.GDtest_9595targetObjects1= [];
gdjs.MainCode.GDtest_9595targetObjects2= [];
gdjs.MainCode.GDtest_9595targetObjects3= [];
gdjs.MainCode.GDtest_9595targetObjects4= [];
gdjs.MainCode.GDtest_9595backgroundObjects1= [];
gdjs.MainCode.GDtest_9595backgroundObjects2= [];
gdjs.MainCode.GDtest_9595backgroundObjects3= [];
gdjs.MainCode.GDtest_9595backgroundObjects4= [];
gdjs.MainCode.GDbad_9595RockObjects1= [];
gdjs.MainCode.GDbad_9595RockObjects2= [];
gdjs.MainCode.GDbad_9595RockObjects3= [];
gdjs.MainCode.GDbad_9595RockObjects4= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects1= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects2= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects3= [];
gdjs.MainCode.GDbtn_9595red_9595rocksObjects4= [];
gdjs.MainCode.GDtest_9595debrisObjects1= [];
gdjs.MainCode.GDtest_9595debrisObjects2= [];
gdjs.MainCode.GDtest_9595debrisObjects3= [];
gdjs.MainCode.GDtest_9595debrisObjects4= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects1= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects2= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects3= [];
gdjs.MainCode.GDbtn_9595red_9595debrisObjects4= [];
gdjs.MainCode.GDtxt_9595scoreObjects1= [];
gdjs.MainCode.GDtxt_9595scoreObjects2= [];
gdjs.MainCode.GDtxt_9595scoreObjects3= [];
gdjs.MainCode.GDtxt_9595scoreObjects4= [];


gdjs.MainCode.asyncCallback9844036 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects2);

{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDtest_9595targetObjects1) asyncObjectsList.addObject("test_target", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback9844036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")));
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y")));
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects2);
gdjs.copyArray(runtimeScene.getObjects("test_target"), gdjs.MainCode.GDtest_9595targetObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), false);
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects2[i].setX((( gdjs.MainCode.GDtest_9595shipObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects2[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595targetObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595targetObjects2[i].setY((( gdjs.MainCode.GDtest_9595shipObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDtest_9595shipObjects2[0].getPointY("")));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects2);
{for(var i = 0, len = gdjs.MainCode.GDtest_9595shipObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595shipObjects2[i].rotateTowardPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("x")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("y")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)), runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9840628);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.userFunc0x8bbd68 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
var idInt = runtimeScene.getVariables().get("intervalID").getAsNumber();
if (idInt >= 1) {
    clearInterval(idInt);
}
console.log("cerrado interval: " + idInt);

};
gdjs.MainCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDbad_9595RockObjects3);
gdjs.MainCode.userFunc0x8bbd68(runtimeScene, objects);

}


};gdjs.MainCode.userFunc0x964a98 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
/*
var bRock = runtimeScene.getVariables().get("bisAllowedRocks").getAsBoolean();
var isRun = runtimeScene.getVariables().get("bIsRuningRocks").getAsBoolean();
var interval = null;
console.log(bRock, isRun);
if (bRock === true && isRun === false) {
    isRun = true;
    interval = setInterval(
        ()=> {
            let x1 = gdjs.randomFloat(window.innerWidth);
            let y1 = gdjs.randomFloat(window.innerHeight);
            let r = runtimeScene.createObject("bad_Rock");
            r.x = x1;
            r.y = y1;
        }
    , 2000);
    console.log("interval id: " + interval);
} else if (bRock == false && isRun == true){

}
*/
var bRock = runtimeScene.getVariables().get("bIsRuningRocks").getAsBoolean();
var interval = setInterval(
        ()=> {
            let x1 = gdjs.randomFloat(window.innerWidth) * 2;
            let y1 = gdjs.randomFloat(window.innerHeight) * 2;
            let sc = 1 - (gdjs.randomFloatInRange(0.1, 0.5));
            let rot = sc * 360;
            let r = runtimeScene.createObject("bad_Rock");
            r.x = x1;
            r.y = y1;
            r.layer = "Dynamic";
            r.setScale(sc);
            r.angle = rot;
            r.addForceTowardObject(objects[0],100,1.5);

        }
    , 2000);


var idInterval = runtimeScene.getVariables().get("intervalID").setNumber(interval);
console.log("Nuevo intervalo : " + bRock + " " + interval + " >> " + runtimeScene.getVariables().get("intervalID").getAsNumber());
};
gdjs.MainCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDtest_9595shipObjects3);
gdjs.MainCode.userFunc0x964a98(runtimeScene, objects);

}


};gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595rocksObjects2, gdjs.MainCode.GDbtn_9595red_9595rocksObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595rocksObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595rocksObjects3[i].SetLabelText("Rocks false", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595rocksObjects2, gdjs.MainCode.GDbtn_9595red_9595rocksObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595rocksObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595rocksObjects3[i].SetLabelText("Rocks true", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9));
}}

}


};gdjs.MainCode.asyncCallback9689948 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("txt_debug"), gdjs.MainCode.GDtxt_9595debugObjects2);

{for(var i = 0, len = gdjs.MainCode.GDtxt_9595debugObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595debugObjects2[i].getBehavior("Text").setText("");
}
}}
gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDtxt_9595debugObjects1) asyncObjectsList.addObject("txt_debug", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainCode.asyncCallback9689948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_debug"), gdjs.MainCode.GDtxt_9595debugObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtxt_9595debugObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595debugObjects1[i].getBehavior("Text").setText("deleted rock out of window");
}
}
{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_red_rocks"), gdjs.MainCode.GDbtn_9595red_9595rocksObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDbtn_9595red_9595rocksObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbtn_9595red_9595rocksObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDbtn_9595red_9595rocksObjects2[k] = gdjs.MainCode.GDbtn_9595red_9595rocksObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbtn_9595red_9595rocksObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9645140);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDbad_9595RockObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MainCode.GDbad_9595RockObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDbad_9595RockObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbad_9595RockObjects2[i].getX() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 3 ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDbad_9595RockObjects2[k] = gdjs.MainCode.GDbad_9595RockObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbad_9595RockObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDbad_9595RockObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDbad_9595RockObjects1_1final.indexOf(gdjs.MainCode.GDbad_9595RockObjects2[j]) === -1 )
            gdjs.MainCode.GDbad_9595RockObjects1_1final.push(gdjs.MainCode.GDbad_9595RockObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDbad_9595RockObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbad_9595RockObjects2[i].getY() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 3 ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDbad_9595RockObjects2[k] = gdjs.MainCode.GDbad_9595RockObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbad_9595RockObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDbad_9595RockObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDbad_9595RockObjects1_1final.indexOf(gdjs.MainCode.GDbad_9595RockObjects2[j]) === -1 )
            gdjs.MainCode.GDbad_9595RockObjects1_1final.push(gdjs.MainCode.GDbad_9595RockObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDbad_9595RockObjects1_1final, gdjs.MainCode.GDbad_9595RockObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDbad_9595RockObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDbad_9595RockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDbad_9595RockObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.userFunc0x924de0 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
var idInt = runtimeScene.getVariables().get("intervalIDDebris").getAsNumber();
if (idInt >= 1) {
    clearInterval(idInt);
}
console.log("cerrado interval debris: " + idInt);

};
gdjs.MainCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bad_Rock"), gdjs.MainCode.GDbad_9595RockObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDbad_9595RockObjects3);
gdjs.MainCode.userFunc0x924de0(runtimeScene, objects);

}


};gdjs.MainCode.userFunc0x8bc728 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";

var bRunDebris = runtimeScene.getVariables().get("bIsAllowedDebris").getAsBoolean();
var interval = setInterval(
        ()=> {
            let x1 = gdjs.randomFloat(window.innerWidth) * 2;
            let y1 = gdjs.randomFloat(window.innerHeight) * 2;
            let sc = 1 - (gdjs.randomFloatInRange(0.1, 1));
            let rot = sc * 360;
            let r = runtimeScene.createObject("test_debris");
            r.x = x1;
            r.y = y1;
            r.layer = "Dynamic";
            r.setScale(sc);
            r.angle = rot;
            r.addForceTowardObject(objects[0],100,0.5);

        }
    , 300);


var idInterval = runtimeScene.getVariables().get("intervalIDDebris").setNumber(interval);
console.log("Nuevo intervalo debris: " + bRunDebris + " " + interval + " >> " + runtimeScene.getVariables().get("intervalIDDebris").getAsNumber());
};
gdjs.MainCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects3);

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDtest_9595shipObjects3);
gdjs.MainCode.userFunc0x8bc728(runtimeScene, objects);

}


};gdjs.MainCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595debrisObjects2, gdjs.MainCode.GDbtn_9595red_9595debrisObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595debrisObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595debrisObjects3[i].SetLabelText("Debris false", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainCode.GDbtn_9595red_9595debrisObjects2, gdjs.MainCode.GDbtn_9595red_9595debrisObjects3);

{for(var i = 0, len = gdjs.MainCode.GDbtn_9595red_9595debrisObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDbtn_9595red_9595debrisObjects3[i].SetLabelText("Debris true", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9));
}}

}


};gdjs.MainCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_red_debris"), gdjs.MainCode.GDbtn_9595red_9595debrisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDbtn_9595red_9595debrisObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDbtn_9595red_9595debrisObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDbtn_9595red_9595debrisObjects2[k] = gdjs.MainCode.GDbtn_9595red_9595debrisObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDbtn_9595red_9595debrisObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8154844);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595debrisObjects1Objects = Hashtable.newFrom({"test_debris": gdjs.MainCode.GDtest_9595debrisObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595shipObjects1Objects = Hashtable.newFrom({"test_ship": gdjs.MainCode.GDtest_9595shipObjects1});
gdjs.MainCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) + 5);
}}

}


};gdjs.MainCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MainCode.GDtest_9595debrisObjects1, gdjs.MainCode.GDtest_9595debrisObjects2);

{for(var i = 0, len = gdjs.MainCode.GDtest_9595debrisObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595debrisObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.MainCode.GDtest_9595debrisObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDtest_9595debrisObjects2[i].getBehavior("Tween").addObjectScaleTween3("dt", 0.5, "easeInCirc", 0.5, true, true);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\734249__okularperpendikular__simplepop1.ogg", false, 50, 1);
}
{ //Subevents
gdjs.MainCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("test_debris"), gdjs.MainCode.GDtest_9595debrisObjects1);
gdjs.copyArray(runtimeScene.getObjects("test_ship"), gdjs.MainCode.GDtest_9595shipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595debrisObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDtest_95959595shipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9807740);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_score"), gdjs.MainCode.GDtxt_9595scoreObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtxt_9595scoreObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtxt_9595scoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


};gdjs.MainCode.eventsList18 = function(runtimeScene) {

{



}


{


gdjs.MainCode.eventsList3(runtimeScene);
}


{


gdjs.MainCode.eventsList9(runtimeScene);
}


{


gdjs.MainCode.eventsList13(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.MainCode.eventsList16(runtimeScene);
}


{


gdjs.MainCode.eventsList17(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDtxt_9595tituloObjects1.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects2.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects3.length = 0;
gdjs.MainCode.GDtxt_9595tituloObjects4.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects1.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects2.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects3.length = 0;
gdjs.MainCode.GDtxt_9595debugObjects4.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects1.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects2.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red_9595reloadObjects4.length = 0;
gdjs.MainCode.GDtest_9595shipObjects1.length = 0;
gdjs.MainCode.GDtest_9595shipObjects2.length = 0;
gdjs.MainCode.GDtest_9595shipObjects3.length = 0;
gdjs.MainCode.GDtest_9595shipObjects4.length = 0;
gdjs.MainCode.GDtest_9595targetObjects1.length = 0;
gdjs.MainCode.GDtest_9595targetObjects2.length = 0;
gdjs.MainCode.GDtest_9595targetObjects3.length = 0;
gdjs.MainCode.GDtest_9595targetObjects4.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects1.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects2.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects3.length = 0;
gdjs.MainCode.GDtest_9595backgroundObjects4.length = 0;
gdjs.MainCode.GDbad_9595RockObjects1.length = 0;
gdjs.MainCode.GDbad_9595RockObjects2.length = 0;
gdjs.MainCode.GDbad_9595RockObjects3.length = 0;
gdjs.MainCode.GDbad_9595RockObjects4.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects1.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects2.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red_9595rocksObjects4.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects1.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects2.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects3.length = 0;
gdjs.MainCode.GDtest_9595debrisObjects4.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects1.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects2.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects3.length = 0;
gdjs.MainCode.GDbtn_9595red_9595debrisObjects4.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects1.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects2.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects3.length = 0;
gdjs.MainCode.GDtxt_9595scoreObjects4.length = 0;

gdjs.MainCode.eventsList18(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
