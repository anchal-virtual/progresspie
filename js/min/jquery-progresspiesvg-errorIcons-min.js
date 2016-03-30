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
!function($){function t(t){if("undefined"==typeof t.pieOpts.ringWidth||t.fullSize)return t.totalRadius;var e=t.radius;return t.backgroundColor&&(e-=t.gapToRing),e}function e(t,e){if(t.backgroundColor){var n=t.newSvgElement("circle");n.setAttribute("cx","0"),n.setAttribute("cy","0"),n.setAttribute("r",e),n.setAttribute("fill",t.backgroundColor)}}function n(t,e){var n=t.newSvgElement("polygon"),r=t.borderRadius;"number"!=typeof r&&(r=0);var i=e-r,s=i*Math.sin(Math.PI/3),o=i*Math.cos(Math.PI/3);return n.setAttribute("points","0,-"+i+" "+s+","+o+" -"+s+","+o),n.setAttribute("fill",t.backgroundColor),r>0&&(n.setAttribute("stroke-width",2*r),n.setAttribute("stroke",t.backgroundColor),n.setAttribute("stroke-linejoin","round")),o+r}function r(t,e,n){var r=t.newSvgElement("line"),i=t.strokeWidth<2?1:0,s=t.strokeWidth+i;"round"!==t.lineCap&&s++;var o=t.strokeWidth<2?2:.8*t.strokeWidth,u=e+n-s-o,a=u>s,l="none"===t.lineCap?0:t.strokeWidth/2,b=-e+l,c=n-(a?s+o:0)-l;r.setAttribute("x1",0),r.setAttribute("y1",b),r.setAttribute("x2",0),r.setAttribute("y2",c),r.setAttribute("style","stroke-width: "+t.strokeWidth+"; stroke-linecap: "+t.lineCap+"; stroke: "+t.iconColor+"; fill: none");var g;if(t.animate){g="string"==typeof t.animate?t.animate:"1s";var f=t.newSvgSubelement(r,"animate");f.setAttribute("attributeName","y2"),f.setAttribute("dur",g),f.setAttribute("repeatCount","1"),f.setAttribute("calcMode","spline"),f.setAttribute("values",b+"; "+c+"; "+c),f.setAttribute("keyTimes","0; 0.9; 1"),f.setAttribute("keySplines",".5 0 .3 1; 0 0 0 0")}if(a){var d;if(0===i){var A=s/2;if(d=t.newSvgElement("circle"),d.setAttribute("cx",0),d.setAttribute("cy",n-A),d.setAttribute("r",A),d.setAttribute("fill",t.iconColor),t.animate){var p=t.newSvgSubelement(d,"animate");p.setAttribute("attributeName","r"),p.setAttribute("dur",g),p.setAttribute("repeatCount",1),p.setAttribute("calcMode","spline"),p.setAttribute("values","0; 0; "+A),p.setAttribute("keyTimes","0; 0.4; 1"),p.setAttribute("keySplines","0 0 1 1; .75 0 .25 0")}}else d=t.newSvgElement("line"),d.setAttribute("x1",0),d.setAttribute("y1",n-l-i),d.setAttribute("x2",0),d.setAttribute("y2",n-l),d.setAttribute("style","stroke-width: "+t.strokeWidth+"; stroke-linecap: "+t.lineCap+"; stroke: "+t.iconColor+"; fill: none")}}$.fn.progressPie.contentPlugin.cross=function(n){var r=$.extend({},$.fn.progressPie.contentPlugin.crossDefaults,n),i=t(r);e(r,i);var s=n.newSvgElement("path"),o=i/2.5,u="M-"+o+",-"+o+" ",a="L"+o+","+o+" ",l="M-"+o+","+o+" ",b="L"+o+",-"+o;if(s.setAttribute("d",u+a+l+b),s.setAttribute("style","stroke-width: "+r.strokeWidth+"; stroke-linecap: "+r.lineCap+"; stroke: "+r.iconColor+"; fill: none"),r.animate){var c=n.newSvgSubelement(s,"animate");c.setAttribute("attributeName","d"),c.setAttribute("dur","string"==typeof r.animate?r.animate:"1s"),c.setAttribute("repeatCount","1"),c.setAttribute("values",u+"l0,0 m0,0 l0,0; "+u+a+"m0,0 l0,0; "+u+a+l+" l0,0; "+u+a+l+b),c.setAttribute("calcMode","spline"),c.setAttribute("keyTimes","0; .45; .55; 1"),c.setAttribute("keySplines",".5 0 .3 1; 1 0 0 1; .3 0 0 1")}},$.fn.progressPie.contentPlugin.exclamationMark=function(n){var i=$.extend({},$.fn.progressPie.contentPlugin.exclamationMarkDefaults,n),s=t(i);e(i,s);var o=.6*s;r(i,o,o)},$.fn.progressPie.contentPlugin.warning=function(e){var i=$.extend({},$.fn.progressPie.contentPlugin.warningDefaults,e),s=t(i),o=.6*s,u=n(i,s)-.2*s;r(i,o,u)},$.fn.progressPie.contentPlugin.warningIconsCommonDefaults={iconColor:"white",strokeWidth:2,lineCap:"round",fullSize:!1,gapToRing:1},$.fn.progressPie.contentPlugin.crossDefaults=$.extend({},$.fn.progressPie.contentPlugin.warningIconsCommonDefaults,{backgroundColor:"red"}),$.fn.progressPie.contentPlugin.exclamationMarkDefaults=$.extend({},$.fn.progressPie.contentPlugin.warningIconsCommonDefaults,{backgroundColor:"#ea0"}),$.fn.progressPie.contentPlugin.warningDefaults=$.extend({},$.fn.progressPie.contentPlugin.exclamationMarkDefaults,{borderRadius:0})}(jQuery);