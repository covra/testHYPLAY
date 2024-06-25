gdjs.splashScreenCode = {};
gdjs.splashScreenCode.localVariables = [];
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
gdjs.splashScreenCode.GDspr_9595fadeObjObjects1= [];
gdjs.splashScreenCode.GDspr_9595fadeObjObjects2= [];
gdjs.splashScreenCode.GDspr_9595fadeObjObjects3= [];
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects1= [];
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects2= [];
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects3= [];


gdjs.splashScreenCode.userFunc0x7d7410 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
//Definitions
const bk = objects[0];
const layerName = "Base layer";
const effect = "crtEffect";
const layer = runtimeScene.getLayer(layerName);
//const tit = runtimeScene.getObjects("txt_gameTitle")[0];
const tit = runtimeScene.getObjects("img_titleNeon")[0];
const tdb = runtimeScene.getObjects("txt_debug")[0];
const maxScale = 1.3;
const deltaProgress = 5;
const paramNoise = "noiseSize";
const paramLineW = "lineWidth";
const nextScene = "SplashScene";

//Starting point
var sc = 1;
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
                    /*
                    if (scT >= 1.5) {
                        scT = (scT + 0.005);
                    } else if (scT <= 1) {
                       scT = (scT + 0.001)*1.2; 
                    } else {
                        scT = (scT + 0.001)*1.001;
                    }*/
                    scT = (scT + 0.001)*1.001;
                    tit.setScale(scT, scT);
                                                                                    //tdb.setString(tit.getScale())
                    if (scT >= 2) {
                        setTimeout(()=>{                            
                            clearInterval(showTitulo);
                            superfinal();
                        },100)
                    }
                }
            ,deltaProgress)

            let scene = tit.getRuntimeScene();
            //gdjs.evtTools.window.setFullScreen(scene,true);
            
    }
,0);
 
//Super final pause 
function superfinal (){
    let op = 255;
    let opi = 255;
    let fr = 0.1;
    let inte = 0;
    let inti = 0;
    //fade out
    

    setTimeout(()=>{
        inte = setInterval(()=>{
            op = op - 5;
            tit.setOpacity(op);
                                                                //console.log(op);
            if (op <= 0) {
                clearInterval(inte);
                clearInterval(inti);
                runtimeScene.getRequestedScene()
                
                //runtimeScene.getGame().getSceneStack().step()
                if (runtimeScene.getName() != nextScene || runtimeScene.getGame().getVariables().get("bInterruptSplash").getAsBoolean() == false) {
                        runtimeScene.getGame().getSceneStack().replace(nextScene, true);

                }
                
            }
            if (runtimeScene.getGame().getVariables().get("bInterruptSplash").getAsBoolean()) {
                clearInterval(inte);
            }
        },50);
    },1000);
    
    setTimeout(()=>{
        inti = setInterval(()=>{
            opi = opi - 3;
            bk.setOpacity(opi);
        },20);
    },1500);
    
}
};
gdjs.splashScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_fadeObj"), gdjs.splashScreenCode.GDspr_9595fadeObjObjects2);
{for(var i = 0, len = gdjs.splashScreenCode.GDspr_9595fadeObjObjects2.length ;i < len;++i) {
    gdjs.splashScreenCode.GDspr_9595fadeObjObjects2[i].getBehavior("Tween").addObjectOpacityTween2("top", 0, "easeInSine", 1.5, true);
}
}}

}


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
gdjs.splashScreenCode.userFunc0x7d7410(runtimeScene, objects);

}


};gdjs.splashScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.splashScreenCode.eventsList0(runtimeScene);
}


};gdjs.splashScreenCode.asyncCallback16480108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.splashScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SplashScene", true);
}}
gdjs.splashScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.splashScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.splashScreenCode.asyncCallback16480108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.splashScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.splashScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.splashScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_gameTitle"), gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1);
{for(var i = 0, len = gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1.length ;i < len;++i) {
    gdjs.splashScreenCode.GDtxt_9595gameTitleObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}
{ //Subevents
gdjs.splashScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16480188);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{ //Subevents
gdjs.splashScreenCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.splashScreenCode.GDspr_9595fadeObjObjects1.length = 0;
gdjs.splashScreenCode.GDspr_9595fadeObjObjects2.length = 0;
gdjs.splashScreenCode.GDspr_9595fadeObjObjects3.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects1.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects2.length = 0;
gdjs.splashScreenCode.GDtxt_9595gameVersionObjects3.length = 0;

gdjs.splashScreenCode.eventsList4(runtimeScene);

return;

}

gdjs['splashScreenCode'] = gdjs.splashScreenCode;
