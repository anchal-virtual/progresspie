/**
 * @license 
 * Copyright (c) 2016, Immo Schulz-Gerlach, www.isg-software.de 
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
!function($){"use strict";var e="$.fn.setupProgressPie",t={};$.fn.setupProgressPie=function(t){return $(this).each(function(){var r=$(this).data(e);if("object"!=typeof r){var n=$.extend({},$.fn.progressPie.defaults,{update:!0},t);$(this).data(e,n)}else $.extend(r,t)}),this},$.fn.progressPie=function(r){function n(e,t){if("number"==typeof e)return e;if(Array.isArray(e)&&e.length>0){if(1===e.length)return e[0];for(var r=t;r>=e.length;)r-=2;return e[r]}return 0}function o(e){return"undefined"==typeof t[e]&&(t[e]=0),e+ ++t[e]}function i(e){return.02*Math.PI*e}function a(e,t){var r=eval,n=r(e);if("function"==typeof n)return n(t);throw"The value of the colorFunctionAttr attribute is NOT a function: "+e}function s(e){var t=eval,r=t(w+"."+e);if("function"==typeof r||"object"==typeof r&&"function"==typeof r.draw)return r;throw e+" is not the name of a function or object in namespace "+w+"!"}function u(e){var t;if("function"==typeof e||"object"==typeof e&&"function"==typeof e.draw)t=e;else{if("string"!=typeof e)throw"contentPlugin option must either be a function or an object with method named 'draw' or the name of such a function or object in the namespace "+w+"!";t=s(e)}return t}function l(e){return Array.isArray(e)?$.map(e,u):[u(e)]}function d(e,t){return null===e?null:Array.isArray(e)?e[t]:0===t&&"object"==typeof e?e:null}function f(e,t){return.02*Math.PI*e*t}function p(e,t,r,n,o,i){var a=document.createElementNS(P,"animate");a.setAttribute("attributeName",t),a.setAttribute("attributeType",r),a.setAttribute("from",n),a.setAttribute("to",o),a.setAttribute("fill","freeze");for(var s in i)a.setAttribute(s,i[s]);e.appendChild(a)}function c(e,t,r){var n,o;if("number"==typeof t)n=t;else{if("object"!=typeof t)throw"illegal option: 'strokeDashes' is neither number (count) nor object!";n=t.count,o=t.length}if("undefined"==typeof n)throw"illegal option: 'strokeDashes' does not specify the 'count' property!";if("undefined"==typeof o)o=r/n/2;else if("string"==typeof o){o=o.trim();var i="%"===o.substring(o.length-1);o=Number.parseInt(o,10),i&&(o=r*o/100)}if(o*n>=r)throw"Illegal options: strokeDashCount * strokeDashLength >= circumference, can't set stroke-dasharray!";var a=(r-o*n)/n,s="object"==typeof t&&t.centered?1*o/2:0;"object"==typeof t&&t.inverted?(e.style.strokeDasharray=""+a+"px, "+o+"px",e.style.strokeDashoffset=""+(a+s)+"px"):(e.style.strokeDasharray=""+o+"px, "+a+"px",0!==s&&(e.style.strokeDashoffset=""+s+"px"))}function g(e,t,r,n,o,a,s,u,l,d,g,h,m,y,b,v,A){"number"==typeof r&&(r=Math.min(r,t)),"number"==typeof u&&(u=Math.min(u,t));var S,C,k=!1;if("number"==typeof r){C=document.createElementNS(P,"circle"),C.setAttribute("cx",0),C.setAttribute("cy",0),S=t-r/2,C.setAttribute("r",S),C.setAttribute("transform","rotate(-90)"),o&&c(C,o,2*Math.PI*S),k="string"==typeof n;var M=k?n:y;"string"==typeof M&&(C.style.stroke=M),"string"==typeof a&&(C.style.fill=a),C.style.strokeWidth=r,C.setAttribute("class",d),e.appendChild(C)}var w=u?u:s||"number"!=typeof r?t:t-r;if(S=t-w/2,s||"number"!=typeof r||(S-=r),100!==h||v||"string"!=typeof y){if(h>0&&h<100||(v||"undefined"==typeof y)&&(0===h||100===h)){var E=document.createElementNS(P,"path"),N,R=h;if(v){var x=h-m,O=f(S,x),D=x<0,F,I;D?(R=m,F="0px",I=-O+"px"):(F=O+"px",I="0px");var _=f(S,R);E.setAttribute("stroke-dasharray",_+"px "+_+"px"),E.setAttribute("stroke-dashoffset",F),p(E,"stroke-dashoffset","CSS",F,I,v),l&&0===h&&p(E,"stroke-linecap","CSS","round","butt",v),b&&b!==y&&(p(E,"stroke","CSS",b,y,v),k||(C.style.stroke=b,p(C,"stroke","CSS",b,y,v)))}var j=i(R),B=100===R?-1e-5:Math.sin(j)*S,T=Math.cos(j-Math.PI)*S,z=R>50?"1":"0",K="1",W=-S,V="M0,"+W;if(V+=" A"+S+","+S+" 0 "+z+","+K+" "+B+","+T,E.setAttribute("d",V),E.style.fill="none","string"==typeof y&&(E.style.stroke=y),E.style.strokeWidth=w,E.style.strokeLinecap=l&&h>0?"round":"butt",A){var U=A.clockwise===!1,L="string"==typeof A?A:"string"==typeof A.duration?A.duration:"1s";N=document.createElementNS(P,"animateTransform"),N.setAttribute("attributeName","transform"),N.setAttribute("attributeType","XML"),N.setAttribute("type","rotate"),N.setAttribute("from","0"),N.setAttribute("to",U?"-360":"360"),N.setAttribute("dur",L),N.setAttribute("repeatDur","indefinite"),E.appendChild(N)}E.setAttribute("class",g),e.appendChild(E)}}else{var G=document.createElementNS(P,"circle");G.setAttribute("cx",0),G.setAttribute("cy",0),G.setAttribute("r",S),G.style.stroke=y,G.style.strokeWidth=w,G.style.fill="none",G.setAttribute("class",g),e.appendChild(G)}}function h(e,t){var r;if("string"==typeof t.valueData){if(r=e.data(t.valueData),"undefined"!=typeof t.valueAttr||"undefined"!=typeof t.valueSelector)throw"options 'valueData', 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least two must be undefined!"}else{if("undefined"!=typeof t.valueData)throw"option 'valueData' is not of type 'string'!";if("string"==typeof t.valueAttr){if(r=e.attr(t.valueAttr),"undefined"!=typeof t.valueSelector)throw"options 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least one must be undefined!"}else{if("undefined"!=typeof t.valueAttr)throw"option 'valueAttr' is not of type 'string'!";"undefined"!=typeof t.valueSelector&&(r=$(t.valueSelector,e).text())}}return"undefined"==typeof r&&(r=e.text()),r}function m(e,t){return Math.max(0,Math.min(100,t.valueAdapter(e)))}function y(e,t){var r=t.mode,n=t.color,o=typeof n;if("undefined"!==o&&"string"!==o&&"function"!==o)throw"option 'color' has to be either a function or a string, but is of type '"+o+"'!";return"function"===o?r=N.USER_COLOR_FUNC:("undefined"===o&&"string"==typeof t.colorAttr&&(n=e.attr(t.colorAttr)),"string"==typeof n?r=N.USER_COLOR_CONST:"string"==typeof t.colorFunctionAttr&&(n=e.attr(t.colorFunctionAttr),"string"==typeof n&&(r=N.DATA_ATTR_FUNC))),{mode:r,color:n}}function b(e,t,r){return e===N.CSS?void 0:e===N.MASK?N.MASK.color:e===N.IMASK?N.IMASK.color:e===N.GREY?N.GREY.color:e===N.GREEN?E.colorByPercent(100):e===N.RED?E.colorByPercent(0):e===N.COLOR||void 0===t?E.colorByPercent(r):e===N.USER_COLOR_CONST?t:e===N.USER_COLOR_FUNC?t(r):e===N.DATA_ATTR_FUNC?a(t,r):"black"}function v(e,t,r){return e===N.CSS?void 0:e===N.IMASK?N.MASK.color:"string"==typeof t.backgroundColor?t.backgroundColor:"function"==typeof t.backgroundColor?t.backgroundColor(r):"none"}function A(e,t){return"undefined"==typeof e.ringWidth||t&&t.fullSize}function S(e,t,r,o,i,a){var s=document.createElementNS(P,"rect");e.appendChild(s);var u=t+n(r,3),l=t+n(r,0),d=u+t+n(r,1),f=l+t+n(r,2);"number"==typeof a&&"none"!==o&&(s.setAttribute("stroke-width",a),d-=a,f-=a,u-=a/2,l-=a/2),s.setAttribute("x","-"+u),s.setAttribute("y","-"+l),s.setAttribute("width",d),s.setAttribute("height",f),s.setAttribute("stroke",o),s.setAttribute("fill",i)}var C={getMargin:function(e){return n(this.margin,e)},getPadding:function(e){return n(this.padding,e)}},k=$.extend({},$.fn.progressPie.defaults,r,C),M="undefined"==typeof r,P="http://www.w3.org/2000/svg",w="jQuery.fn.progressPie.contentPlugin",E=$.fn.progressPie,N=$.extend({USER_COLOR_CONST:{},USER_COLOR_FUNC:{},DATA_ATTR_FUNC:{}},E.Mode);return $(this).each(function(){var t=$(this),r=k;if(M){var n=$(this).data(e);"object"==typeof n&&(r=$.extend({},n,C))}var i=$("svg",t);if(!i.length||r.update){i.length&&r.update&&(i.remove(),r.separator="");var a=h(t,r),s=m(a,r),f=t.data(E.prevValueDataName),p="undefined"==typeof f;if(t.data(E.prevValueDataName,s),"number"!=typeof f&&(f=0),"function"==typeof r.optionsByPercent){var c=r.optionsByPercent(s);"undefined"!=typeof c&&null!==c&&(r=$.extend({},r,c),a=h(t,r),s=m(a,r))}var w=Math.ceil("number"==typeof r.size?r.size:t.height());0===w&&(w=20),w*=r.sizeFactor;var N=w/2,R=N,x=document.createElementNS(P,"svg"),O=document.createElementNS(P,"defs"),D=N+r.getPadding(3)+r.getMargin(3),F=N+r.getPadding(0)+r.getMargin(0),I=D+N+r.getPadding(1)+r.getMargin(1),_=F+N+r.getPadding(2)+r.getMargin(2),j=I,B=_;"number"==typeof r.scale&&(j*=r.scale,B*=r.scale),x.setAttribute("width",Math.ceil(j)),x.setAttribute("height",Math.ceil(B)),x.setAttribute("viewBox","-"+D+" -"+F+" "+I+" "+_);var T=y(t,r);T.mode!==E.Mode.CSS&&(x.style.verticalAlign=r.verticalAlign),t.is(":empty")?t.append(x):r.prepend?t.prepend(x,r.separator):t.append(r.separator,x);var z=r.cssClassForegroundPie,K=r.cssClassBackgroundCircle;"object"==typeof r.inner&&(z+=" "+r.cssClassOuter,K+=" "+r.cssClassOuter);var W=b(T.mode,T.color,s),V=v(T.mode,r,s),U;(r.animateColor===!0||"undefined"==typeof r.animateColor&&!p)&&(U=b(T.mode,T.color,f));var L=E.smilSupported()?r.animate===!0?E.defaultAnimationAttributes:"object"==typeof r.animate?$.extend({},E.defaultAnimationAttributes,r.animate):null:null,G=null,Y=!1;if(r.contentPlugin){G=l(r.contentPlugin);for(var Q={color:W,percentValue:s,rawValue:a,pieOpts:r},X=0;X<G.length;X++){var q=G[X],H=d(r.contentPluginOptions,X),J=Q;null!==H&&"object"==typeof H&&(J=$.extend({},Q,H)),"object"==typeof q&&"function"==typeof q.hidesChartIfFullSize&&(Y=Y||T.mode!==E.Mode.MASK&&T.mode!==E.Mode.IMASK&&A(r,H)&&q.hidesChartIfFullSize(J))}}var Z=null,ee=x;Y||(T.mode!==E.Mode.MASK&&T.mode!==E.Mode.IMASK||(ee=document.createElementNS(P,"mask"),O.appendChild(ee),Z=o("pie"),ee.setAttribute("id",Z),T.mode===E.Mode.IMASK&&S(ee,N,r.padding,"none",E.Mode.MASK.color)),g(ee,N,r.strokeWidth,r.strokeColor,r.strokeDashes,V,r.overlap,r.ringWidth,r.ringEndsRounded,K,z,s,f,W,U,L,r.rotation));for(var te="number"==typeof r.ringWidth?r.ringWidth:"number"==typeof r.strokeWidth?r.strokeWidth:0,re=r.inner,ne=1;"object"==typeof re;){"undefined"==typeof re.valueAdapter&&(re.valueAdapter=E.defaults.valueAdapter),"undefined"==typeof re.overlap&&(re.overlap=E.defaults.overlap),a=h(t,re),s=m(a,re);var oe=E.prevInnerValueDataName,ie=r.cssClassInner;ne>1&&(oe+=ne,ie+=ne),f=t.data(oe),p="undefined"==typeof f,t.data(oe,s),"number"!=typeof f&&(f=0),T=y(t,re),N="number"==typeof re.size?re.size*r.sizeFactor/2:.6*N,W=b(T.mode,T.color,s),U=null,(re.animateColor===!0||"undefined"==typeof re.animateColor&&(r.animateColor===!0||"undefined"==typeof r.animateColor&&p))&&(U=b(T.mode,T.color,f)),re.animate!==!1&&E.smilSupported()?re.animate===!0&&null===L?L=E.defaultAnimationAttributes:"object"==typeof re.animate&&(L=null===L?$.extend({},E.defaultAnimationAttributes,re.animate):$.extend({},L,re.animate)):L=null,Y||g(ee,N,re.strokeWidth,re.strokeColor,re.strokeDashes,V,re.overlap,re.ringWidth,re.ringEndsRounded,r.cssClassBackgroundCircle+" "+ie,r.cssClassForegroundPie+" "+ie,s,f,W,U,L),te="number"==typeof re.ringWidth?re.ringWidth:0,re=re.inner,ne++}if(null!==G){var ae=N;te<N&&(ae-=te);for(var se={newSvgElement:function(e){var t=document.createElementNS(P,e);return fe.appendChild(t),t},newSvgSubelement:function(e,t){var r=document.createElementNS(P,t);return e.appendChild(r),r},newDefElement:function(e){var t=document.createElementNS(P,e);return O.appendChild(t),t},isFullSize:function(){return A(r,this)},getBackgroundRadius:function(e){var t=this.isFullSize()?this.totalRadius:this.radius;if(!e){var r="number"==typeof this.margin?this.margin:this.isFullSize()?this.pieOpts.defaultContentPluginBackgroundMarginFullSize:this.pieOpts.defaultContentPluginBackgroundMarginInsideRing;t-=r}return t},addBackground:function(e){if(this.backgroundColor){var t=this.newSvgElement("circle");t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r",e),t.setAttribute("fill",this.backgroundColor)}},addBackgroundRect:function(e,t,n){S(fe,R,r.padding,e,t,n)},getContentPlugin:u,createId:o,radius:ae,totalRadius:R,color:W,percentValue:s,rawValue:a,pieOpts:r},ue=!0,le=0;le<G.length;le++){var de=G[le],fe=document.createElementNS(P,"g"),pe="function"==typeof de?de:de.draw,ce=se,ge=d(r.contentPluginOptions,le);null!==ge&&"object"==typeof ge&&(ce=$.extend({},se,ge)),pe(ce),"boolean"==typeof de.inBackground&&de.inBackground||"function"==typeof de.inBackground&&de.inBackground(ce)?($(x).prepend(fe),null!==Z&&ue&&(fe.setAttribute("mask","url(#"+Z+")"),ue=!1)):$(x).append(fe),O.hasChildNodes()&&$(x).prepend(O)}if(null!==Z&&ue)throw"MASK mode could not be applied since no content plug-in drew a background to be masked! You need do specify at least one content plug-in which draws into the background!"}}}),this},$.fn.progressPie.Mode={GREY:{color:"#888"},RED:{value:200},GREEN:{value:200},COLOR:{},CSS:{},MASK:{color:"white"},IMASK:{color:"black"}},$.fn.progressPie.colorByPercent=function(e,t){var r=$.fn.progressPie.Mode.GREEN.value,n=$.fn.progressPie.Mode.RED.value,o=e>50?r:Math.floor(r*e/50),i=e<50?n:Math.floor(n*(100-e)/50),a=i+","+o+",0";return"number"==typeof t?"rgba("+a+","+t+")":"rgb("+a+")"},$.fn.progressPie.smilSupported=function(){return"undefined"==typeof $.fn.progressPie.smilSupported.cache&&($.fn.progressPie.smilSupported.cache=/SVGAnimate/.test(document.createElementNS("http://www.w3.org/2000/svg","animate").toString())),$.fn.progressPie.smilSupported.cache},$.fn.progressPie.defaults={mode:$.fn.progressPie.Mode.GREY,margin:0,padding:0,strokeWidth:2,overlap:!0,prepend:!0,separator:"&nbsp;",verticalAlign:"bottom",update:!1,valueAdapter:function(e){return"string"==typeof e?parseFloat(e):"number"==typeof e?e:0},ringEndsRounded:!1,sizeFactor:1,scale:1,defaultContentPluginBackgroundMarginFullSize:0,defaultContentPluginBackgroundMarginInsideRing:1,cssClassBackgroundCircle:"progresspie-background",cssClassForegroundPie:"progresspie-foreground",cssClassOuter:"progresspie-outer",cssClassInner:"progresspie-inner"},$.fn.progressPie.defaultAnimationAttributes={dur:"1s",calcMode:"spline",keySplines:"0.23 1 0.32 1",keyTimes:"0;1"},$.fn.progressPie.contentPlugin={},$.fn.progressPie.prevValueDataName="_progresspieSVG_prevValue",$.fn.progressPie.prevInnerValueDataName="_progresspieSVG_prevInnerValue"}(jQuery);