"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/**
 * @license 
 * Copyright (c) 2018, Immo Schulz-Gerlach, www.isg-software.de 
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are 
 * permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT 
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, 
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED 
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 * WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function($){function e(e){var t=e.valueInput;if("object"===(void 0===t?"undefined":_typeof(t))){if("function"==typeof t.val)return t;throw new Error("option 'valueInput' is an object, but does not have a 'val' method, i.e. it's obviously not a jQuery result object.")}return"string"==typeof t?$(t):null}var t={};$.fn.setupProgressPie=function(t,r){var n=this;$(this).each(function(){var e=$(this).data($.fn.setupProgressPie.dataKey);if(r||"object"!==(void 0===e?"undefined":_typeof(e))){var n=$.extend({},$.fn.progressPie.defaults,{update:!0},t);$(this).data($.fn.setupProgressPie.dataKey,n)}else $.extend(e,t)});var o=$.extend({},$.fn.progressPie.defaults,t),i=e(o);if(null!==i){if("string"!=typeof o.valueInputEvents)throw new Error("'valueInputEvents' has to be a string (space-separated list of event names)!");i.on(o.valueInputEvents,function(){$(n).progressPie()})}return this},$.fn.setupProgressPie.dataKey="$.fn.setupProgressPie",$.fn.progressPie=function(r){function n(e,t){if("number"==typeof e)return e;if(Array.isArray(e)&&e.length>0){if(1===e.length)return e[0];for(var r=t;r>=e.length;)r-=2;return e[r]}return 0}function o(e){return void 0===t[e]&&(t[e]=0),e+ ++t[e]}function i(e){return.02*Math.PI*e}function a(e,t){var r=eval,n=r(e);if("function"==typeof n)return n(t);throw new Error("The value of the colorFunctionAttr attribute is NOT a function: "+e)}function s(e){var t=eval,r=t(N+"."+e);if("function"==typeof r||"object"===(void 0===r?"undefined":_typeof(r))&&"function"==typeof r.draw)return r;throw new Error(e+" is not the name of a function or object in namespace "+N+"!")}function u(e){var t;if("function"==typeof e||"object"===(void 0===e?"undefined":_typeof(e))&&"function"==typeof e.draw)t=e;else{if("string"!=typeof e)throw new Error("contentPlugin option must either be a function or an object with method named 'draw' or the name of such a function or object in the namespace "+N+"!");t=s(e)}return t}function l(e){return Array.isArray(e)?$.map(e,u):[u(e)]}function d(e,t){return null===e?null:Array.isArray(e)?e[t]:0===t&&"object"===(void 0===e?"undefined":_typeof(e))?e:null}function p(e,t){return.02*Math.PI*e*t}function f(e,t,r,n,o,i){var a=document.createElementNS(R,"animate");a.setAttribute("attributeName",t),a.setAttribute("attributeType",r),a.setAttribute("from",n),a.setAttribute("to",o),a.setAttribute("fill","freeze");for(var s in i)a.setAttribute(s,i[s]);e.appendChild(a)}function c(e,t,r){var n,o;if("number"==typeof t)n=t;else{if("object"!==(void 0===t?"undefined":_typeof(t)))throw new Error("illegal option: 'strokeDashes' is neither number (count) nor object!");n=t.count,o=t.length}if(void 0===n)throw new Error("illegal option: 'strokeDashes' does not specify the 'count' property!");if(void 0===o)o=r/n/2;else if("string"==typeof o){o=o.trim();var i="%"===o.substring(o.length-1);o=Number.parseInt(o,10),i&&(o=r*o/100)}if(o*n>=r)throw new Error("Illegal options: strokeDashCount * strokeDashLength >= circumference, can't set stroke-dasharray!");var a=(r-o*n)/n,s="object"===(void 0===t?"undefined":_typeof(t))&&t.centered?1*o/2:0;"object"===(void 0===t?"undefined":_typeof(t))&&t.inverted?(e.style.strokeDasharray=a+"px, "+o+"px",e.style.strokeDashoffset=a+s+"px"):(e.style.strokeDasharray=o+"px, "+a+"px",0!==s&&(e.style.strokeDashoffset=s+"px"))}function g(e,t){if("string"==typeof t){var r=document.createElementNS(R,"title");$(r).text(t),e.appendChild(r)}}function v(e,t,r,n,o,a,s,u,l,d,v,h,m,y,b,A,S,C,P,E){"number"==typeof n&&(n=Math.min(n,r)),"number"==typeof l&&(l=Math.min(l,r));var w=-1;if("number"==typeof n&&"number"==typeof l&&n>0&&l>0&&n!==l&&u&&(v===x.RingAlign.CENTER||v===x.RingAlign.INNER)){var k=Math.max(l,n),M=Math.min(l,n);w=v===x.RingAlign.CENTER?r-k/2:r-k+M/2}var N,_,I=!1;if("number"==typeof n){_=document.createElementNS(R,"circle"),_.setAttribute("cx",0),_.setAttribute("cy",0),w>0&&n<l?N=w:(N=r-n/2,u||v!==x.RingAlign.INNER||(N-=l)),_.setAttribute("r",N),_.setAttribute("transform","rotate(-90)"),a&&c(_,a,2*Math.PI*N),I="string"==typeof o;var O=I?o:A;"string"==typeof O&&(_.style.stroke=O),"string"==typeof s&&(_.style.fill=s),_.style.strokeWidth=n,_.setAttribute("class",h),g(_,C),e.appendChild(_)}var D=l||(u||"number"!=typeof n?r:r-n);if(w>0&&l<n?N=w:(N=r-D/2,u||"number"!=typeof n||v!==x.RingAlign.OUTER||(N-=n)),100!==y||P||"string"!=typeof A){if(y>0&&y<100||(P||void 0===A)&&(0===y||100===y)){var j=document.createElementNS(R,"path"),B=y;if(P){var F=y-b,T=p(N,F),K=F<0,V,z;K?(B=b,V="0px",z=-T+"px"):(V=T+"px",z="0px");var U=p(N,B);j.setAttribute("stroke-dasharray",U+"px "+U+"px"),j.setAttribute("stroke-dashoffset",V),f(j,"stroke-dashoffset","CSS",V,z,P),d&&0===y&&f(j,"stroke-linecap","CSS","round","butt",P),S&&S!==A&&(f(j,"stroke","CSS",S,A,P),!I&&_&&(_.style.stroke=S,f(_,"stroke","CSS",S,A,P)))}var W=i(B),G=100===B?-1e-5:Math.sin(W)*N,L=Math.cos(W-Math.PI)*N,Y=B>50?"1":"0",Q="1",q=-N,H="M0,"+q;if(H+=" A"+N+","+N+" 0 "+Y+",1 "+G+","+L,j.setAttribute("d",H),j.style.fill="none","string"==typeof A&&(j.style.stroke=A),j.style.strokeWidth=D,j.style.strokeLinecap=d&&y>0?"round":"butt",E){var J="progresspie-rotation-style",X="progresspie-rotate",Z="@keyframes "+X+" {100% {transform: rotate(360deg);}}";if(!$("#"+J).length){var ee=$("head");if(ee.length){var te=document.createElement("style");te.id=J,$(te).text(Z),ee.get(0).appendChild(te)}else{var re=document.createElementNS(R,"style");re.id=J,$(re).text(Z),t.appendChild(re)}}var ne=!1===E.clockwise,oe="string"==typeof E?E:"string"==typeof E.duration?E.duration:"1s",ie="string"==typeof E.timing?E.timing:"linear";j.style.animation=X+" "+oe+" "+ie+(ne?" reverse":"")+" infinite"}j.setAttribute("class",m),g(j,C),e.appendChild(j)}}else{var ae=document.createElementNS(R,"circle");ae.setAttribute("cx",0),ae.setAttribute("cy",0),ae.setAttribute("r",N),ae.style.stroke=A,ae.style.strokeWidth=D,ae.style.fill="none",ae.setAttribute("class",m),g(ae,C),e.appendChild(ae)}}function h(t,r){var n,o=e(r);if(null!==o){if(n=o.val(),void 0!==r.valueData||void 0!==r.valueAttr||void 0!==r.valueSelector)throw new Error("options 'valueInput', 'valueData', 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least three must be undefined!")}else if("string"==typeof r.valueData){if(n=t.data(r.valueData),void 0!==r.valueAttr||void 0!==r.valueSelector)throw new Error("options 'valueData', 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least two must be undefined!")}else{if(void 0!==r.valueData)throw new Error("option 'valueData' is not of type 'string'!");if("string"==typeof r.valueAttr){if(n=t.attr(r.valueAttr),void 0!==r.valueSelector)throw new Error("options 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least one must be undefined!")}else{if(void 0!==r.valueAttr)throw new Error("option 'valueAttr' is not of type 'string'!");void 0!==r.valueSelector&&(n=$(r.valueSelector,t).text())}}return void 0===n&&(n=t.text()),n}function m(e,t){return Math.max(0,Math.min(100,t.valueAdapter(e)))}function y(e,t){var r=t.mode,n=t.color,o=void 0===n?"undefined":_typeof(n);if("undefined"!==o&&"string"!==o&&"function"!==o)throw new Error("option 'color' has to be either a function or a string, but is of type '"+o+"'!");return"function"===o?r=_.USER_COLOR_FUNC:("undefined"===o&&"string"==typeof t.colorAttr&&(n=e.attr(t.colorAttr)),"string"==typeof n?r=_.USER_COLOR_CONST:"string"==typeof t.colorFunctionAttr&&"string"==typeof(n=e.attr(t.colorFunctionAttr))&&(r=_.DATA_ATTR_FUNC)),{mode:r,color:n}}function b(e,t,r){return e===_.CSS?void 0:e===_.MASK?_.MASK.color:e===_.IMASK?_.IMASK.color:e===_.GREY?_.GREY.color:e===_.GREEN?x.colorByPercent(100):e===_.RED?x.colorByPercent(0):e===_.COLOR||void 0===t?x.colorByPercent(r):e===_.USER_COLOR_CONST?t:e===_.USER_COLOR_FUNC?t(r):e===_.DATA_ATTR_FUNC?a(t,r):"black"}function A(e,t,r){return e===_.CSS?void 0:"string"==typeof t.backgroundColor?t.backgroundColor:"function"==typeof t.backgroundColor?t.backgroundColor(r):e===_.IMASK?_.MASK.color:"none"}function S(e,t){return void 0===e.ringWidth||t&&t.fullSize}function C(e,t,r,o,i,a){var s=document.createElementNS(R,"rect");e.appendChild(s);var u=t+n(r,3),l=t+n(r,0),d=u+t+n(r,1),p=l+t+n(r,2);"number"==typeof a&&"none"!==o&&(s.setAttribute("stroke-width",a),d-=a,p-=a,u-=a/2,l-=a/2),s.setAttribute("x","-"+u),s.setAttribute("y","-"+l),s.setAttribute("width",d),s.setAttribute("height",p),s.setAttribute("stroke",o),s.setAttribute("fill",i)}function P(e,t){var r=document.createElementNS(R,"svg"),n=e+t.getPadding(3)+t.getMargin(3),o=e+t.getPadding(0)+t.getMargin(0),i=n+e+t.getPadding(1)+t.getMargin(1),a=o+e+t.getPadding(2)+t.getMargin(2),s=i,u=a;return"number"==typeof t.scale&&(s*=t.scale,u*=t.scale),r.setAttribute("width",Math.ceil(s)),r.setAttribute("height",Math.ceil(u)),r.setAttribute("viewBox","-"+n+" -"+o+" "+i+" "+a),r}function E(e,t,r){var n={};if(n.raw=h(e,t),"function"==typeof t.optionsByRawValue){var o=t.optionsByRawValue(n.raw);void 0!==o&&null!==o&&($.extend(t,o),n.raw=h(e,t))}n.p=m(n.raw,t);var i=0===r?x.prevValueDataName:x.prevInnerValueDataName;if(r>1&&(i+=r),n.prevP=e.data(i),n.isInitialValue=void 0===n.prevP,e.data(i,n.p),"number"!=typeof n.prevP&&(n.prevP=0),"function"==typeof t.optionsByPercent){var a=t.optionsByPercent(n.p);void 0!==a&&null!==a&&($.extend(t,a),n.raw=h(e,t),n.p=m(n.raw,t))}return n}var w={getMargin:function e(t){return n(this.margin,t)},getPadding:function e(t){return n(this.padding,t)}},k=$.extend({},$.fn.progressPie.defaults,r,w),M=void 0===r,R="http://www.w3.org/2000/svg",N="jQuery.fn.progressPie.contentPlugin",x=$.fn.progressPie,_=$.extend({USER_COLOR_CONST:{},USER_COLOR_FUNC:{},DATA_ATTR_FUNC:{}},x.Mode);return $(this).each(function(){var e=$(this),t=$.extend({},k);if(M){var r=$(this).data($.fn.setupProgressPie.dataKey);"object"===(void 0===r?"undefined":_typeof(r))&&(t=$.extend({},r,w))}var n=$("svg",e);if(!n.length||t.update){n.length&&t.update&&(n.remove(),t.separator="");var i=E(e,t,0),a=Math.ceil("number"==typeof t.size?t.size:e.height());0===a&&(a=20),a*=t.sizeFactor;var s=a/2,p=s,f=y(e,t),c=b(f.mode,f.color,i.p),h=A(f.mode,t,i.p),m;(!0===t.animateColor||void 0===t.animateColor&&!i.isInitialValue)&&(m=b(f.mode,f.color,i.prevP));var N=x.smilSupported()?!0===t.animate?x.defaultAnimationAttributes:"object"===_typeof(t.animate)?$.extend({},x.defaultAnimationAttributes,t.animate):null:null,_=null,I=!1,O={isFullSize:function e(){return S(t,this)},isCssMode:function e(){return"string"!=typeof this.color},color:c,percentValue:i.p,rawValue:i.raw,pieOpts:t};if(t.contentPlugin){_=l(t.contentPlugin);for(var D=0;D<_.length;D++){var j=_[D],B=d(t.contentPluginOptions,D),F=O;null!==B&&"object"===(void 0===B?"undefined":_typeof(B))&&(F=$.extend({},O,B)),"object"===(void 0===j?"undefined":_typeof(j))&&"function"==typeof j.hidesChartIfFullSize&&(I=I||t.mode!==x.Mode.MASK&&t.mode!==x.Mode.IMASK&&S(t,B)&&j.hidesChartIfFullSize(F))}}var T=P(s,t),K=document.createElementNS(R,"defs");f.mode!==x.Mode.CSS&&(T.style.verticalAlign=t.verticalAlign),e.is(":empty")?e.append(T):t.prepend?e.prepend(T,t.separator):e.append(t.separator,T),g(T,t.globalTitle);var V=null,z=T;if(!I){t.mode!==x.Mode.MASK&&t.mode!==x.Mode.IMASK||(z=document.createElementNS(R,"mask"),K.appendChild(z),V=o("pie"),z.setAttribute("id",V),t.mode===x.Mode.IMASK&&C(z,s,t.padding,"none",h));var U=t.cssClassForegroundPie,W=t.cssClassBackgroundCircle;"object"===_typeof(t.inner)&&(U+=" "+t.cssClassOuter,W+=" "+t.cssClassOuter),v(z,K,s,t.strokeWidth,t.strokeColor,t.strokeDashes,h,t.overlap,t.ringWidth,t.ringEndsRounded,t.ringAlign,W,U,i.p,i.prevP,c,m,t.title,N,t.rotation)}for(var G="number"==typeof t.ringWidth?t.ringWidth:"number"==typeof t.strokeWidth?t.strokeWidth:0,L=t.inner,Y=0;"object"===(void 0===L?"undefined":_typeof(L));){Y++,L=$.extend({},L),void 0===L.valueAdapter&&(L.valueAdapter=x.defaults.valueAdapter),void 0===L.overlap&&(L.overlap=x.defaults.overlap),void 0===L.ringAlign&&(L.ringAlign=t.ringAlign);var Q=E(e,L,Y),q=t.cssClassInner;Y>1&&(q+=Y),f=y(e,L),s="number"==typeof L.size?L.size*t.sizeFactor/2:.6*s;var H=b(f.mode,f.color,Q.p),J=null;(!0===L.animateColor||void 0===L.animateColor&&(!0===t.animateColor||void 0===t.animateColor&&Q.isInitialValue))&&(J=b(f.mode,f.color,Q.prevP)),!1!==L.animate&&x.smilSupported()?!0===L.animate&&null===N?N=x.defaultAnimationAttributes:"object"===_typeof(L.animate)&&(N=null===N?$.extend({},x.defaultAnimationAttributes,L.animate):$.extend({},N,L.animate)):N=null,I||v(z,K,s,L.strokeWidth,L.strokeColor,L.strokeDashes,h,L.overlap,L.ringWidth,L.ringEndsRounded,L.ringAlign,t.cssClassBackgroundCircle+" "+q,t.cssClassForegroundPie+" "+q,Q.p,Q.prevP,H,J,L.title,N,L.rotation),G="number"==typeof L.ringWidth?L.ringWidth:0,L=L.inner}if(null!==_){var X=s;G<s&&(X-=G);for(var Z=$.extend({newSvgElement:function e(t){var r=document.createElementNS(R,t);return ne.appendChild(r),r},newSvgSubelement:function e(t,r){var n=document.createElementNS(R,r);return t.appendChild(n),n},newDefElement:function e(t){var r=document.createElementNS(R,t);return K.appendChild(r),r},createId:o,getBackgroundRadius:function e(t){var r=this.isFullSize()?this.totalRadius:this.radius;if(!t){r-="number"==typeof this.margin?this.margin:this.isFullSize()?this.pieOpts.defaultContentPluginBackgroundMarginFullSize:this.pieOpts.defaultContentPluginBackgroundMarginInsideRing}return r},addBackground:function e(t,r){var n="string"==typeof r;if(this.backgroundColor||n){var o=this.newSvgElement("circle");o.setAttribute("cx","0"),o.setAttribute("cy","0"),o.setAttribute("r",t),this.backgroundColor&&o.setAttribute("fill",this.backgroundColor),n&&o.setAttribute("class",r)}},addBackgroundRect:function e(r,n,o){C(ne,p,t.padding,r,n,o)},getContentPlugin:u,radius:X,totalRadius:p,color:c,percentValue:i.p,rawValue:i.raw},O),ee=!0,te=0;te<_.length;te++){var re=_[te],ne=document.createElementNS(R,"g"),oe="function"==typeof re?re:re.draw,ie=Z,ae=d(t.contentPluginOptions,te);null!==ae&&"object"===(void 0===ae?"undefined":_typeof(ae))&&(ie=$.extend({},Z,ae)),oe(ie),"boolean"==typeof re.inBackground&&re.inBackground||"function"==typeof re.inBackground&&re.inBackground(ie)?($(T).prepend(ne),null!==V&&ee&&(ne.setAttribute("mask","url(#"+V+")"),ee=!1)):$(T).append(ne)}if(null!==V&&ee)throw new Error("MASK mode could not be applied since no content plug-in drew a background to be masked! You need do specify at least one content plug-in which draws into the background!")}K.hasChildNodes()&&$(T).prepend(K)}}),this},$.fn.progressPie.Mode={GREY:{color:"#888"},RED:{value:200},GREEN:{value:200},COLOR:{},CSS:{},MASK:{color:"white"},IMASK:{color:"black"}},$.fn.progressPie.colorByPercent=function(e,t){var r=$.fn.progressPie.Mode.GREEN.value,n=$.fn.progressPie.Mode.RED.value,o=e>50?r:Math.floor(r*e/50),i=e<50?n:Math.floor(n*(100-e)/50),a=i+","+o+",0";return"number"==typeof t?"rgba("+a+","+t+")":"rgb("+a+")"},$.fn.progressPie.smilSupported=function(){return void 0===$.fn.progressPie.smilSupported.cache&&($.fn.progressPie.smilSupported.cache=/SVGAnimate/.test(document.createElementNS("http://www.w3.org/2000/svg","animate").toString())),$.fn.progressPie.smilSupported.cache},$.fn.progressPie.RingAlign={OUTER:{},CENTER:{},INNER:{}},$.fn.progressPie.defaults={mode:$.fn.progressPie.Mode.GREY,margin:0,padding:0,strokeWidth:2,overlap:!0,ringAlign:$.fn.progressPie.RingAlign.OUTER,prepend:!0,separator:"&nbsp;",verticalAlign:"bottom",update:!1,valueAdapter:function e(t){return"string"==typeof t?parseFloat(t):"number"==typeof t?t:0},valueInputEvents:"change",ringEndsRounded:!1,sizeFactor:1,scale:1,defaultContentPluginBackgroundMarginFullSize:0,defaultContentPluginBackgroundMarginInsideRing:1,cssClassBackgroundCircle:"progresspie-background",cssClassForegroundPie:"progresspie-foreground",cssClassOuter:"progresspie-outer",cssClassInner:"progresspie-inner"},$.fn.progressPie.defaultAnimationAttributes={dur:"1s",calcMode:"spline",keySplines:"0.23 1 0.32 1",keyTimes:"0;1"},$.fn.progressPie.contentPlugin={},$.fn.progressPie.prevValueDataName="_progresspieSVG_prevValue",$.fn.progressPie.prevInnerValueDataName="_progresspieSVG_prevInnerValue"}(jQuery);