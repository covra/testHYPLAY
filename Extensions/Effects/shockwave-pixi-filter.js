var gdjs;(function(n){n.PixiFiltersTools.registerFilterCreator("Shockwave",new class extends n.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,e){return new PIXI.filters.ShockwaveFilter([.5,.5])}updatePreRender(r,e){const t=r;t.speed!==0&&(t.time+=e.getElapsedTime()/1e3),t.center[0]=Math.round(t._centerX*e.getWidth()),t.center[1]=Math.round(t._centerY*e.getHeight())}updateDoubleParameter(r,e,t){const i=r;e==="centerX"?i._centerX=t:e==="centerY"?i._centerY=t:e==="time"?i.time=t:e==="speed"?i.speed=t:e==="amplitude"?i.amplitude=t:e==="wavelength"?i.wavelength=t:e==="brightness"?i.brightness=t:e==="radius"&&(i.radius=t)}getDoubleParameter(r,e){const t=r;return e==="centerX"?t._centerX:e==="centerY"?t._centerY:e==="time"?t.time:e==="speed"?t.speed:e==="amplitude"?t.amplitude:e==="wavelength"?t.wavelength:e==="brightness"?t.brightness:e==="radius"?t.radius:0}updateStringParameter(r,e,t){}updateColorParameter(r,e,t){}getColorParameter(r,e){return 0}updateBooleanParameter(r,e,t){}getNetworkSyncData(r){const e=r;return{cx:e._centerX,cy:e._centerY,t:e.time,s:e.speed,a:e.amplitude,w:e.wavelength,b:e.brightness,r:e.radius}}updateFromNetworkSyncData(r,e){const t=r;t._centerX=e.cx,t._centerY=e.cy,t.time=e.t,t.speed=e.s,t.amplitude=e.a,t.wavelength=e.w,t.brightness=e.b,t.radius=e.r}})})(gdjs||(gdjs={}));
//# sourceMappingURL=shockwave-pixi-filter.js.map
