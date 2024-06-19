gdjs.splashScreenCode = {};
gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1= [];
gdjs.splashScreenCode.GDtxt_9595gameTitleObjects2= [];
gdjs.splashScreenCode.GDtxt_9595gameTitleObjects3= [];
gdjs.splashScreenCode.GDimg_9595backTitleObjects1= [];
gdjs.splashScreenCode.GDimg_9595backTitleObjects2= [];
gdjs.splashScreenCode.GDimg_9595backTitleObjects3= [];
gdjs.splashScreenCode.GDtxt_9595debugObjects1= [];
gdjs.splashScreenCode.GDtxt_9595debugObjects2= [];
gdjs.splashScreenCode.GDtxt_9595debugObjects3= [];
gdjs.splashScreenCode.GDimg_9595titleNeonObjects1= [];
gdjs.splashScreenCode.GDimg_9595titleNeonObjects2= [];
gdjs.splashScreenCode.GDimg_9595titleNeonObjects3= [];
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects1= [];
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects2= [];
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects3= [];


gdjs.splashScreenCode.userFunc0xcb8b60 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
//Definitions
const bk = objects[0];
const layerName = "Base layer";
const effect = "crtEffect";
const layer = runtimeScene.getLayer(layerName);
const tit = runtimeScene.getObjects("txt_gameTitle")[0];
const tdb = runtimeScene.getObjects("txt_debug")[0];
const maxScale = 1.3;
const deltaProgress = 5;
const paramNoise = "noiseSize";
const paramLineW = "lineWidth";
const nextScene = "SplashScene";

//Starting point
var sc = 0.8;
var ease = 0;
var animIncr = 0;
var progress = 0;
var isEndGlithcs = 0;
bk.setScale(sc,sc);

//CRT effect out
var bIsEasing = true;
var bIsGlitching = false;
var finishAnim = 0;
var crtEffect = setInterval( ()=> { 
    animIncr = animIncr + 0.005;   
    if (ease >= 255){
        ease = 255;        
        bIsEasing = false;
        glicth();
    }
     ease = gdjs.evtTools.common.lerp(progress, 255, animIncr); 
    bk.setOpacity(ease);   
},deltaProgress);

//Chequea fin del fadeout y glitch
setTimeout( ()=> {
        isEndGlithcs = setInterval( ()=> {
        if (bIsEasing == false && bIsGlitching == false){
                endAnim();   
                        }
        },100);
},500)

//Small glitch
function glicth() {
    clearInterval(crtEffect)
    if (bIsEasing == false){
        bIsGlitching = true;
        //glicth
        setTimeout( ()=> {
            bk.setOpacity(0);
        },300);
        setTimeout( ()=> {
            bk.setOpacity(255);
        },400);
        //mov back
        setTimeout( ()=> {
           bk.setX(bk.getX() * 1.01);
        },100);
        setTimeout( ()=> {
           bk.setX(bk.getX() / 1.01);
        },300);
        //end
        setTimeout( ()=> {
           bIsGlitching = false;
        },400);
    }
}

//Suprime el efecto CRT
function endAnim (){
    clearInterval(isEndGlithcs);
    var progN = 0.3;
    var progL = 1;
    finishAnim = setInterval(()=> {
        progN = progN - 0.001;
        progL = progL + 0.02;
        layer.setEffectDoubleParameter(effect, paramNoise, progN);
        layer.setEffectDoubleParameter(effect, paramLineW, progL)
        //tdb.setString(progL + " >> " + progN);
        if(progL >= 5 && progN <= 0) {
            endTodo();
        }
    }, deltaProgress )
}

//FInaliza animacion
function endTodo() {
    clearInterval(finishAnim);
    layer.removeEffect(effect);
    //tdb.setString("FIN");
}

//Muestra animacion del  titulo y cambia de escena
setTimeout(
    ()=> {

            tit.setScale(0, 0);
            tit.setOpacity(255); 
            var scT = 0.01;
            var showTitulo = setInterval(
                ()=> {
                    if (scT >= 2) {
                        scT = (scT + 0.001);
                    } else if (scT <= 1) {
                       scT = (scT + 0.001)*1.1; 
                    } else {
                        scT = (scT + 0.001)*1.001;
                    }
                    tit.setScale(scT, scT);
                    tdb.setString(tit.getScale())
                    if (scT >= 2.2) {
                        setTimeout(()=>{
                            runtimeScene.getRequestedScene()
                            runtimeScene.getGame().getSceneStack().replace(nextScene, true)
                            clearInterval(showTitulo);
                        },500)
                    }
                }
            ,deltaProgress)
            
    }
,1500);
 

};
gdjs.splashScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("img_backTitle"), gdjs.splashScreenCode.GDimg_9595backTitleObjects2);
{for(var i = 0, len = gdjs.splashScreenCode.GDimg_9595backTitleObjects2.length ;i < len;++i) {
    gdjs.splashScreenCode.GDimg_9595backTitleObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("img_backTitle"), gdjs.splashScreenCode.GDimg_9595backTitleObjects1);

var objects = [];
objects.push.apply(objects,gdjs.splashScreenCode.GDimg_9595backTitleObjects1);
gdjs.splashScreenCode.userFunc0xcb8b60(runtimeScene, objects);

}


};gdjs.splashScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SplashScene", true);
}}

}


};gdjs.splashScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_gameTitle"), gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1);
{for(var i = 0, len = gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1.length ;i < len;++i) {
    gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.splashScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14427620);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.splashScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.splashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameTitleObjects2.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameTitleObjects3.length = 0;
gdjs.splashScreenCode.GDimg_9595backTitleObjects1.length = 0;
gdjs.splashScreenCode.GDimg_9595backTitleObjects2.length = 0;
gdjs.splashScreenCode.GDimg_9595backTitleObjects3.length = 0;
gdjs.splashScreenCode.GDtxt_9595debugObjects1.length = 0;
gdjs.splashScreenCode.GDtxt_9595debugObjects2.length = 0;
gdjs.splashScreenCode.GDtxt_9595debugObjects3.length = 0;
gdjs.splashScreenCode.GDimg_9595titleNeonObjects1.length = 0;
gdjs.splashScreenCode.GDimg_9595titleNeonObjects2.length = 0;
gdjs.splashScreenCode.GDimg_9595titleNeonObjects3.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects3.length = 0;

gdjs.splashScreenCode.eventsList2(runtimeScene);

return;

}

gdjs['splashScreenCode'] = gdjs.splashScreenCode;
