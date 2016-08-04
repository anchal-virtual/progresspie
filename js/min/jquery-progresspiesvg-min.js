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
!function($){"use strict";var e="$.fn.setupProgressPie";$.fn.setupProgressPie=function(t){return $(this).each(function(){var r=$(this).data(e);if("object"!=typeof r){var n=$.extend({},$.fn.progressPie.defaults,{update:!0},t);$(this).data(e,n)}else $.extend(r,t)}),this},$.fn.progressPie=function(t){function r(e){return.02*Math.PI*e}function n(e,t){var r=eval,n=r(e);if("function"==typeof n)return n(t);throw"The value of the colorFunctionAttr attribute is NOT a function: "+e}function i(e){var t=eval,r=t(m+"."+e);if("function"==typeof r)return r;throw e+" is not the name of a function in namespace "+m+"!"}function o(e){var t;if("function"==typeof e)t=e;else{if("string"!=typeof e)throw"contentPlugin option must either be a function or the name of a function in the namespace "+m+"!";t=i(e)}return t}function a(e,t){return.02*Math.PI*e*t}function s(e,t,r,n,i,o){var a=document.createElementNS(v,"animate");a.setAttribute("attributeName",t),a.setAttribute("attributeType",r),a.setAttribute("from",n),a.setAttribute("to",i),a.setAttribute("fill","freeze");for(var s in o)a.setAttribute(s,o[s]);e.appendChild(a)}function u(e,t,n,i,o,u,l,f,p,d,c,g,m,h){"number"==typeof n&&(n=Math.min(n,t)),"number"==typeof o&&(o=Math.min(o,t));var y;y=document.createElementNS(v,"circle"),y.setAttribute("cx",0),y.setAttribute("cy",0),y.setAttribute("r",t-n/2);var b="string"==typeof i?i:c;"string"==typeof b&&(y.style.stroke=b,y.style.fill="none"),y.style.strokeWidth=n,y.setAttribute("class",l),e.appendChild(y);var A=o?o:t,P=t-A/2;if(100!==p||m||"string"!=typeof c){if(p>0&&100>p||(m||"undefined"==typeof c)&&(0===p||100===p)){var C=document.createElementNS(v,"path"),S,R=p;if(m){var E=p-d,k=a(P,E),N=0>E,O,M;N?(R=d,O="0px",M=-k+"px"):(O=k+"px",M="0px");var w=a(P,R);C.setAttribute("stroke-dasharray",w+"px "+w+"px"),C.setAttribute("stroke-dashoffset",O),s(C,"stroke-dashoffset","CSS",O,M,m),u&&0===p&&s(C,"stroke-linecap","CSS","round","butt",m),g&&g!==c&&s(C,"stroke","CSS",g,c,m)}var x=r(R),_=100===R?-1e-5:Math.sin(x)*P,D=Math.cos(x-Math.PI)*P,T=R>50?"1":"0",F="1",B=-P,W="M0,"+B;if(W+=" A"+P+","+P+" 0 "+T+","+F+" "+_+","+D,C.setAttribute("d",W),C.style.fill="none","string"==typeof c&&(C.style.stroke=c),C.style.strokeWidth=A,C.style.strokeLinecap=u&&p>0?"round":"butt",h){var V=h.clockwise===!1,I="string"==typeof h?h:"string"==typeof h.duration?h.duration:"1s";S=document.createElementNS(v,"animateTransform"),S.setAttribute("attributeName","transform"),S.setAttribute("attributeType","XML"),S.setAttribute("type","rotate"),S.setAttribute("from","0"),S.setAttribute("to",V?"-360":"360"),S.setAttribute("dur",I),S.setAttribute("repeatDur","indefinite"),C.appendChild(S)}C.setAttribute("class",f),e.appendChild(C)}}else y=document.createElementNS(v,"circle"),y.setAttribute("cx",0),y.setAttribute("cy",0),y.setAttribute("r",P),y.style.stroke=c,y.style.strokeWidth=A,y.style.fill="none",y.setAttribute("class",f),e.appendChild(y)}function l(e,t){var r;if("string"==typeof t.valueData){if(r=e.data(t.valueData),"undefined"!=typeof t.valueAttr||"undefined"!=typeof t.valueSelector)throw"options 'valueData', 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least two must be undefined!"}else{if("undefined"!=typeof t.valueData)throw"option 'valueData' is not of type 'string'!";if("string"==typeof t.valueAttr){if(r=e.attr(t.valueAttr),"undefined"!=typeof t.valueSelector)throw"options 'valueAttr' and 'valueSelector' are mutually exclusive, i.e. at least one must be undefined!"}else{if("undefined"!=typeof t.valueAttr)throw"option 'valueAttr' is not of type 'string'!";"undefined"!=typeof t.valueSelector&&(r=$(t.valueSelector,e).text())}}return"undefined"==typeof r&&(r=e.text()),r}function f(e,t){return Math.max(0,Math.min(100,t.valueAdapter(e)))}function p(e,t){var r=t.mode,n=t.color,i=typeof n;if("undefined"!==i&&"string"!==i&&"function"!==i)throw"option 'color' has to be either a function or a string, but is of type '"+i+"'!";return"function"===i?r=y.USER_COLOR_FUNC:("undefined"===i&&"string"==typeof t.colorAttr&&(n=e.attr(t.colorAttr)),"string"==typeof n?r=y.USER_COLOR_CONST:"string"==typeof t.colorFunctionAttr&&(n=e.attr(t.colorFunctionAttr),"string"==typeof n&&(r=y.DATA_ATTR_FUNC))),{mode:r,color:n}}function d(e,t,r){return e===y.CSS?void 0:e===y.GREY?y.GREY.color:e===y.GREEN?h.colorByPercent(100):e===y.RED?h.colorByPercent(0):e===y.COLOR||void 0===t?h.colorByPercent(r):e===y.USER_COLOR_CONST?t:e===y.USER_COLOR_FUNC?t(r):e===y.DATA_ATTR_FUNC?n(t,r):"black"}var c=$.extend({},$.fn.progressPie.defaults,t),g="undefined"==typeof t,v="http://www.w3.org/2000/svg",m="jQuery.fn.progressPie.contentPlugin",h=$.fn.progressPie,y=$.extend({USER_COLOR_CONST:{},USER_COLOR_FUNC:{},DATA_ATTR_FUNC:{}},h.Mode);return $(this).each(function(){var t=$(this),r=c;if(g){var n=$(this).data(e);"object"==typeof n&&(r=n)}var i=$("svg",t);if(!i.length||r.update){i.length&&r.update&&(i.remove(),r.separator="");var a=l(t,r),s=f(a,r),m=t.data($.fn.progressPie.prevValueDataName);if(t.data($.fn.progressPie.prevValueDataName,s),"number"!=typeof m&&(m=0),"function"==typeof r.optionsByPercent){var h=r.optionsByPercent(s);"undefined"!=typeof h&&null!==h&&(r=$.extend({},r,h),a=l(t,r),s=f(a,r))}var y=p(t,r),b=Math.ceil("number"==typeof r.size?r.size:t.height());0===b&&(b=20),b*=r.sizeFactor;var A=Math.floor(b/2),P=A,C=P,S=document.createElementNS(v,"svg"),R=b;"number"==typeof r.scale&&(R*=r.scale),S.setAttribute("width",R),S.setAttribute("height",R),S.setAttribute("viewBox","-"+P+" -"+P+" "+b+" "+b),S.style.verticalAlign=r.verticalAlign,r.prepend?t.prepend(S,r.separator):t.append(r.separator,S);var E=r.cssClassForegroundPie;"object"==typeof r.inner&&(E+=" "+r.cssClassOuter);var k=d(y.mode,y.color,s),N;(r.animateColor===!0||"undefined"==typeof r.animateColor&&m>0)&&(N=d(y.mode,y.color,m));var O=$.fn.progressPie.smilSupported()?r.animate===!0?$.fn.progressPie.defaultAnimationAttributes:"object"==typeof r.animate?$.extend({},$.fn.progressPie.defaultAnimationAttributes,r.animate):null:null;u(S,P,r.strokeWidth,r.strokeColor,r.ringWidth,r.ringEndsRounded,r.cssClassBackgroundCircle,E,s,m,k,N,O,r.rotation);var M="number"==typeof r.ringWidth?r.ringWidth:"number"==typeof r.strokeWidth?r.strokeWidth:0;if("object"==typeof r.inner&&("undefined"==typeof r.inner.valueAdapter&&(r.inner.valueAdapter=$.fn.progressPie.defaults.valueAdapter),a=l(t,r.inner),s=f(a,r.inner),m=t.data($.fn.progressPie.prevInnerValueDataName),t.data($.fn.progressPie.prevInnerValueDataName,s),"number"!=typeof m&&(m=0),y=p(t,r.inner),P=Math.floor("number"==typeof r.inner.size?r.inner.size*r.sizeFactor/2:.6*P),k=d(y.mode,y.color,s),N=null,(r.inner.animateColor===!0||"undefined"==typeof r.inner.animateColor&&(r.animateColor===!0||"undefined"==typeof r.animateColor&&m>0))&&(N=d(y.mode,y.color,m)),u(S,P,0,void 0,r.inner.ringWidth,r.inner.ringEndsRounded,void 0,r.cssClassForegroundPie+" "+r.cssClassInner,s,m,k,N,O),M="number"==typeof r.inner.ringWidth?r.inner.ringWidth:0),r.contentPlugin){var w=o(r.contentPlugin),x=P;P>M&&(x-=M);var _={newSvgElement:function(e){var t=document.createElementNS(v,e);return S.appendChild(t),t},newSvgSubelement:function(e,t){var r=document.createElementNS(v,t);return e.appendChild(r),r},getBackgroundRadius:function(e){var t="undefined"==typeof this.pieOpts.ringWidth||this.fullSize,r=t?this.totalRadius:this.radius;if(!e){var n="number"==typeof this.margin?this.margin:t?this.pieOpts.defaultContentPluginBackgroundMarginFullSize:this.pieOpts.defaultContentPluginBackgroundMarginInsideRing;r-=n}return r},addBackground:function(e){if(this.backgroundColor){var t=this.newSvgElement("circle");t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r",e),t.setAttribute("fill",this.backgroundColor)}},getContentPlugin:o,radius:x,totalRadius:C,color:k,percentValue:s,rawValue:a,pieOpts:r};"object"==typeof r.contentPluginOptions&&$.extend(_,r.contentPluginOptions),w(_)}}}),this},$.fn.progressPie.Mode={GREY:{color:"#888"},RED:{value:200},GREEN:{value:200},COLOR:{},CSS:{}},$.fn.progressPie.colorByPercent=function(e){var t=$.fn.progressPie.Mode.GREEN.value,r=$.fn.progressPie.Mode.RED.value,n=e>50?t:Math.floor(t*e/50),i=50>e?r:Math.floor(r*(100-e)/50);return"rgb("+i+","+n+",0)"},$.fn.progressPie.smilSupported=function(){return"undefined"==typeof $.fn.progressPie.smilSupported.cache&&($.fn.progressPie.smilSupported.cache=/SVGAnimate/.test(document.createElementNS("http://www.w3.org/2000/svg","animate").toString())),$.fn.progressPie.smilSupported.cache},$.fn.progressPie.defaults={mode:$.fn.progressPie.Mode.GREY,strokeWidth:2,prepend:!0,separator:"&nbsp;",verticalAlign:"bottom",update:!1,valueAdapter:function(e){return"string"==typeof e?parseInt(e):"number"==typeof e?e:0},ringEndsRounded:!1,sizeFactor:1,scale:1,defaultContentPluginBackgroundMarginFullSize:0,defaultContentPluginBackgroundMarginInsideRing:1,cssClassBackgroundCircle:"progresspie-background",cssClassForegroundPie:"progresspie-foreground",cssClassOuter:"progresspie-outer",cssClassInner:"progresspie-inner"},$.fn.progressPie.defaultAnimationAttributes={dur:"1s",calcMode:"spline",keySplines:"0.23 1 0.32 1",keyTimes:"0;1"},$.fn.progressPie.contentPlugin={},$.fn.progressPie.prevValueDataName="_progresspieSVG_prevValue",$.fn.progressPie.prevInnerValueDataName="_progresspieSVG_prevInnerValue"}(jQuery);