var gdjs;(function(n){n.PixiFiltersTools.registerFilterCreator("Shockwave",new class extends n.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,t){return new PIXI.filters.ShockwaveFilter([.5,.5])}updatePreRender(r,t){const e=r;e.speed!==0&&(e.time+=t.getElapsedTime()/1e3),e.center[0]=Math.round(e._centerX*t.getWidth()),e.center[1]=Math.round(e._centerY*t.getHeight())}updateDoubleParameter(r,t,e){const i=r;t==="centerX"?i._centerX=e:t==="centerY"?i._centerY=e:t==="time"?i.time=e:t==="speed"?i.speed=e:t==="amplitude"?i.amplitude=e:t==="wavelength"?i.wavelength=e:t==="brightness"?i.brightness=e:t==="radius"&&(i.radius=e)}getDoubleParameter(r,t){const e=r;return t==="centerX"?e._centerX:t==="centerY"?e._centerY:t==="time"?e.time:t==="speed"?e.speed:t==="amplitude"?e.amplitude:t==="wavelength"?e.wavelength:t==="brightness"?e.brightness:t==="radius"?e.radius:0}updateStringParameter(r,t,e){}updateColorParameter(r,t,e){}getColorParameter(r,t){return 0}updateBooleanParameter(r,t,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=shockwave-pixi-filter.js.map