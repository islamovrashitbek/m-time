var lzld="1209_1713";function t_lazyload__init(){t_lazyload__detectwebp();var t=document.querySelector("#allrecords");t&&"yes"===t.getAttribute("data-tilda-imgoptimoff")?window.lazy_imgoptimoff="yes":window.lazy_imgoptimoff="";for(var e=document.querySelectorAll(".t156 .t-img"),i=0;i<e.length;i++)e[i].setAttribute("data-lazy-rule","skip");var n=document.querySelectorAll(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546");Array.prototype.forEach.call(n,(function(t){var e=t.querySelectorAll(".t-bgimg");Array.prototype.forEach.call(e,(function(t){t.setAttribute("data-lazy-rule","comm:resize,round:100")}))})),setTimeout((function(){lazyload_cover=new LazyLoad({elements_selector:".t-cover__carrier",show_while_loading:!1,data_src:"content-cover-bg",placeholder:"",threshold:700})}),100),setTimeout((function(){if(lazyload_img=new LazyLoad({elements_selector:".t-img",threshold:800}),lazyload_bgimg=new LazyLoad({elements_selector:".t-bgimg",show_while_loading:!1,placeholder:"",threshold:800}),lazyload_iframe=new LazyLoad({elements_selector:".t-iframe"}),window.jQuery&&$(document).bind("slide.bs.carousel",(function(){setTimeout((function(){t_lazyload_update()}),500)})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&!document.body.classList){var t=document.createElement("div");t.classList.add("t-mbfix"),document.body.appendChild(t);var e=document.querySelector(".t-mbfix");setTimeout((function(){e.classList.add("t-mbfix_hide")}),50),setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e)}),1e3)}}),500),window.addEventListener("resize",(function(){clearTimeout(window.t_lazyload_resize_timerid),window.t_lazyload_resize_timerid=setTimeout(t_lazyload__onWindowResize,1e3)})),setTimeout((function(){"object"==typeof performance&&"object"==typeof performance.timing&&(window.t_lazyload_domloaded=1*window.performance.timing.domContentLoadedEventEnd-1*window.performance.timing.navigationStart)}),0)}function t_lazyload_update(){"undefined"!=typeof lazyload_cover&&lazyload_cover.update(),"undefined"!=typeof lazyload_img&&lazyload_img.update(),"undefined"!=typeof lazyload_bgimg&&lazyload_bgimg.update(),"undefined"!=typeof lazyload_iframe&&lazyload_iframe.update()}function t_lazyload__onWindowResize(){if(t_lazyload_update(),"yes"!==window.lazy_imgoptimoff){var t=document.querySelectorAll(".t-cover__carrier, .t-bgimg, .t-img");Array.prototype.forEach.call(t,(function(t){window.t_lazyload_updateResize_elem(t)}))}}function t_lazyload__detectwebp(){var t=new Image;t.onload=t.onerror=function(){2!=t.height||(window.lazy_webp="y")},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function t_lazyLoad__appendImgStatToArr(t,e){if(void 0!==navigator.sendBeacon){var i=(new Date).getTime(),n=t.getAttribute("src");if(n){var o={time:i-e};0===n.indexOf("https://thumb.tildacdn")&&(o.th="y"),0===n.indexOf("https://static.tildacdn")&&(o.st="y"),(o.th||o.st)&&window.t_loadImgStats.push(o)}}}function t_lazyload__ping(t){var e="https://"+t+".tildacdn.com";if("static"==t){var i=document.currentScript;if("object"==typeof i&&"string"==typeof i.src&&0===i.src.indexOf(e))return;if(null===document.head.querySelector('script[src^="'+e+'"]'))return}var n=new Image;n.src=e+"/pixel.png",n.onload=function(){window["lazy_ok_"+t]="y"},setTimeout((function(){if("y"!==window["lazy_ok_"+t]){window["lazy_err_"+t]="y",console.log(t+" ping error");var i=document.querySelectorAll(".loading");Array.prototype.forEach.call(i,(function(t){var i="";i=t.lazy_loading_src,"string"==typeof str&&0===i.indexOf(e)&&(t.classList.remove("loading"),t.wasProcessed=!1)})),t_lazyload_update()}}),1e4)}!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.LazyLoad=e()}(this,(function(){var t,e,i,n,o,a,l=!1;function r(){l||(t={elements_selector:"img",container:window,threshold:300,throttle:50,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,show_while_loading:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},e=!!window.addEventListener,i=!!window.attachEvent,n=!!document.body.classList,l=!0,o=["200x151","640x712","320x356","670x744","335x372","300x225","500x375","400x301","748x832","374x416","670x502","335x251","360x234","560x622","280x311","640x416"],a=["353x245","155x151","158x164","372x495","280x272","117x117","291x280","280x269","335x241","283x283","150x156","353x233","414x730","372x362","275x206","290x322","248x207","177x136","173x173","280x308","195x214","248x191","155x196","163x203","320x444","158x162","176x203","412x700","360x88","360x616","167x167","130x144","280x233","560x314","320x299","372x275","320x178","372x242","360x352","353x294","260x182","372x310","335x344","374x432","414x500","374x360","220x338","150x146","335x239","176x176","320x302","374x260","360x568","191x221","192x192","372x558","335x188","320x358","335x258","374x575","26x26","353x360","360x206","335x248","335x322","167x256","560x364","155x172","163x216","163x181","360x257","374x561","374x243","220x212","177x148","291x324","167x160","375x749","335x387","172x172","260x302","414x700","220x254","177x172","374x519","176x169","320x352","335x233","150x203","360x207","158x121","360x396","158x131","150x98","220x169","182x202","320x179","372x413","181x226","353x200","158x153","375x628","176x271","374x364","320x492","374x247","414x833","353x393","335x218","560x399","412x264","293x164","56x56","177x204","248x382","181x181","118x118","260x346","374x497","260x202","393x251","158x158","372x200","373x414","320x229","177x177","312x175","374x312","84x84","320x329","177x194","353x350","335x503","335x446","335x326","374x200","158x182","320x237","335x221","176x196","150x229","320x224","248x276","360x299","260x289","196x216","335x279","177x272","320x426","260x172","155x194","320x369","372x350","360x302","360x402","169x186","158x242","173x199","167x185","360x238","220x123","320x308","414x265","374x350","300x333","177x170","320x222","320x311","260x169","150x173","320x246","353x265","192x222","158x151","372x414","150x144","760x502","314x176","320x208","182x182","320x211","163x163","372x279","360x202","360x252","260x252","260x286","353x392","160x104","374x281","353x353","150x231","320x267","372x372","177x197","275x154","158x175","374x374","150x167","260x146"])}function s(t,n,o){var a;e?t.addEventListener(n,o):i&&(t.attachEvent("on"+n,(a=t,function(){o.call(a,window.event)})),t=null)}function c(t,n,o){e?t.removeEventListener(n,o):i&&t.detachEvent("on"+n,o)}function d(){return(new Date).getTime()}function u(t,e){return function(){return t.apply(e,arguments)}}function f(t,e){n?t.classList.add(e):t.className+=(t.className?" ":"")+e}function x(t,e){n?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function p(t,e){return n?t.classList.contains(e):new RegExp(" "+e+" ").test(" "+t.className+" ")}function _(t,e){for(var i=t.parentNode;i&&i!==document;){if(!0===p(i,e))return i;i=i.parentNode}return null}function m(t){return null!=t}function g(t){var e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}}function h(t,e,i){var n,o,a,l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&t.closest&&t.closest(".t396__artboard_scale")&&window.tn_scale_factor||1;function r(){return window.innerWidth||n.documentElement.clientWidth||document.body.clientWidth}function s(){return window.innerHeight||n.documentElement.clientHeight||document.body.clientHeight}function c(t){return(t.getBoundingClientRect().top+o)*l-n.documentElement.clientTop}function d(t){return(t.getBoundingClientRect().left+a)*l-n.documentElement.clientLeft}return!0!==window.flag_performance_pass3000&&"object"==typeof performance&&performance.now()<3e3?i=300:window.flag_performance_pass3000=!0,n=t.ownerDocument,o=window.pageYOffset||n.body.scrollTop,a=window.pageXOffset||n.body.scrollLeft,"fixed"===t.getAttribute("data-content-cover-parallax")&&t.closest&&t.closest(".t-cover__container")&&(t=t.closest(".t-cover__container")),!((e===window?s()+o:c(e)+e.offsetHeight)<=c(t)-i||(e===window?o:c(e))>=c(t)+1200+t.offsetHeight||(e===window?r()+window.pageXOffset:d(e)+r())<=d(t)-i||(e===window?a:d(e))>=d(t)+i+t.offsetWidth)}function y(t,e,i,n){var l=e.getAttribute("data-"+n);if(l){var r,s=e.clientWidth,c=e.clientHeight;if(!p(e,"t-slds__bgimg")&&!p(e,"t-slds__img")||p(e,"t827__image")||(!1===m(r=_(e,"t-slds__container"))&&(r=_(e,"t-slds__thumbsbullet")),m(r)&&(s=r.clientWidth,c=r.clientHeight)),p(e,"tn-atom")&&p(e,"t-bgimg")&&m(r=_(e,"tn-atom__scale-wrapper"))){var d=r.getBoundingClientRect();s=(k=w("round",d.width,d.height,10))[0],c=k[1]}var u="",f="",g="",h="",y=1,v=!0,A=!1;if("yes"==window.lazy_imgoptimoff&&(v=!1),"y"!==window.lazy_err_thumb&&"y"!==window.lazy_err_static||(v=!1),"IMG"===e.tagName)g="resize";else if("undefined"!=typeof getComputedStyle){var z=getComputedStyle(e).backgroundPosition;z&&("50%"==(u=(k=z.split(" "))[0])?u="center":"0%"==u?u="left":"100%"==u&&(u="right"),"50%"==(f=k[1])?f="center":"0%"==f?f="top":"100%"==f&&(f="bottom")),g="contain"==getComputedStyle(e)["background-size"]?"contain":"cover","fixed"==getComputedStyle(e)["background-attachment"]&&(A=!0)}else A=!0;if(h=e.getAttribute("data-lazy-rule")){var O,S=h.split(",");for(O=0;O<S.length;O++)S[O].indexOf("round:")>-1&&(y=1*S[O].split(":")[1]),S[O].indexOf("comm:")>-1&&"resize"!=(g=S[O].split(":")[1])&&"cover"!=g&&"contain"!=g&&(v=!1),S[O].indexOf("skip")>-1&&(A=!0),S[O].indexOf("optimoff")>-1&&(v=!1)}if(y>1&&(s=(k=w(g,s,c,y))[0],c=k[1]),"cover"==g&&s>0&&c>0&&s<=1e3)if(s===5*Math.ceil(s/5)&&c===5*Math.ceil(c/5));else if(o.indexOf(s+"x"+c)>-1);else if(a.indexOf(s+"x"+c)>-1);else if(p(e,"tn-atom")||p(e,"tn-atom__img"));else{var k;p(e,"t-cover__carrier")||(g="resize"),s=(k=w(g,s,c,100))[0],c=k[1]}if("resize"==g&&s<30&&(A=!0),!0===v&&(l=!0===A||s>1e3||c>1e3||0==s||"IMG"!=e.tagName&&0==c?b(l):function(t,e,i,n,o,a,l,r){if("undefined"==i||null==i)return i;if(i.indexOf(".svg")>0||i.indexOf(".gif")>0||i.indexOf(".ico")>0||-1===i.indexOf("static.tildacdn.")||i.indexOf("-/empty/")>0||i.indexOf("-/resizeb/")>0)return i;if(i.indexOf("/-/")>-1)return i;if(0==n&&0==o)return i;if("y"==window.lazy_err_thumb)return i;if(i.indexOf("lib")>-1)return i;if("IMG"!=t&&"DIV"!=t&&"TD"!=t&&"A"!=t)return i;if(window.devicePixelRatio>1&&(n>0&&(n=parseInt(2*n)),o>0&&(o=parseInt(2*o))),n>1e3||o>1800)return b(i);if("resize"==e){(c=i.split("/")).splice(i.split("/").length-1,0,"-/resize/"+n+"x"+("DIV"==t&&o>0?o:"")+"/"+("y"==window.lazy_webp?"-/format/webp":""));var s=c.join("/").replace("/static.tildacdn.com","/thumb.tildacdn.com").replace("/static.tildacdn.info","/thumb.tildacdn.com")}else{if(!(n>0&&o>0))return i;var c;"left"==a||"right"==a||(a="center"),"top"==l||"bottom"==l||(l="center"),(c=i.split("/")).splice(i.split("/").length-1,0,"-/"+e+"/"+n+"x"+o+"/"+a+"/"+l+"/"+("y"==window.lazy_webp?"-/format/webp":""));s=c.join("/").replace("/static.tildacdn.com","/thumb.tildacdn.com").replace("/static.tildacdn.info","/thumb.tildacdn.com")}return s}(e.tagName,g,l,s,c,u,f)),"y"===window.lazy_err_static&&0===l.indexOf("https://static.tildacdn.com/")&&(l=l.replace("https://static.tildacdn.com/","https://static3.tildacdn.com/")),l){if("IMG"===t.tagName)t.setAttribute("src",l);else if("IFRAME"===t.tagName)t.setAttribute("src",l);else if("OBJECT"===t.tagName)t.setAttribute("data",l);else{var L;-1!==t.style.backgroundImage.indexOf("-gradient(")&&(L=t.style.backgroundImage.split("), ")[1]),L?t.style.backgroundImage="url("+l+"), "+L:(t.style.backgroundImage="url("+l+")",function(t,e){var i=t.getAttribute("data-content-cover-id");if(i){var n=e.split(".");n=n[n.length-1];var o=document.getElementById("recorddiv"+i);"svg"===n&&(o.style.backgroundImage="")}}(t,l))}e.lazy_loading_src=l}}else x(e,"loading")}function w(t,e,i,n){if("cover"==t&&e>0&&i>0){var o=e/i,a=1;o<=1?(o<=.8&&(a=.8),o<=.751&&(a=.75),o<=.667&&(a=.667),o<=.563&&(a=.562),o<=.501&&(a=.5),i=Math.ceil(i/n)*n,e=Math.ceil(i*a),e=10*Math.ceil(e/10)):(o>=1.25&&(a=1.25),o>=1.332&&(a=1.333),o>=1.5&&(a=1.5),o>=1.777&&(a=1.777),o>=2&&(a=2),e=Math.ceil(e/n)*n,i=Math.ceil(e/a),i=10*Math.ceil(i/10))}else e>0&&(e=Math.ceil(e/n)*n),i>0&&(i=Math.ceil(i/n)*n);return[e,i]}function b(t){if("undefined"==t||null==t)return t;if(t.indexOf(".svg")>0||t.indexOf(".gif")>0||t.indexOf(".ico")>0||-1===t.indexOf("static.tildacdn.")||t.indexOf("-/empty/")>0||t.indexOf("-/resizeb/")>0)return t;if(t.indexOf("/-/")>-1)return t;if(t.indexOf("lib")>-1)return t;if("y"!==window.lazy_webp)return t;if("y"===window.lazy_err_thumb)return t;var e=t.split("/");return e.splice(t.split("/").length-1,0,"-/format/webp"),e.join("/").replace("/static.tildacdn.com","/thumb.tildacdn.com").replace("/static.tildacdn.info","/thumb.tildacdn.com")}function v(t,e,i){if("string"==typeof e&&null!=e&&""!=e){if(console.log("lazy loading err"),0===e.indexOf("https://static.tildacdn.com/"))return window.lazy_err_static="y",void A(t,e.replace("https://static.tildacdn.com/","https://static3.tildacdn.com/"));if(-1!==e.indexOf("https://thumb.tildacdn.com/")&&-1!==e.indexOf("/-/")){window.lazy_err_thumb="y";var n=e.split("/"),o="",a="";if(n.length>3)for(var l=0;l<n.length;l++)""!==n[l]&&("til"==n[l].substring(0,3)&&36==n[l].length&&4==(n[l].match(/-/g)||[]).length&&(o=n[l]),l==n.length-1&&(a=n[l]));if(""!==o&&""!==a&&A(t,"https://static3.tildacdn.com/"+o+"/"+a),"function"!=typeof t_errors__sendCDNErrors){var r=document.createElement("script");r.src="https://static.tildacdn.com/js/tilda-errors-1.0.min.js",r.type="text/javascript",r.async=!0,document.body.appendChild(r)}var s=i>1?d()-i:"";"object"!=typeof window.t_cdnerrors&&(window.t_cdnerrors=[]),window.t_cdnerrors.push({url:e,time:s,debug:{domloaded:window.t_lazyload_domloaded}})}}}function A(t,e){console.log("try reload: "+e),"IMG"===t.tagName?e&&t.setAttribute("src",e):e&&(t.style.backgroundImage="url("+e+")")}function z(e){r(),this._settings=function(t,e){var i,n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,e),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=u(this.handleScroll,this),s(window,"resize",this._handleScrollFn),this.update(),this.loadAnimatedImages()}return z.prototype._showOnLoad=function(t){var e,i,n=this._settings;!t.getAttribute("src")&&n.placeholder&&t.setAttribute("src",n.placeholder),s(e=document.createElement("img"),"load",(function o(){null!==n&&(t_lazyLoad__appendImgStatToArr(e,i),n.callback_load&&n.callback_load(t),y(t,t,n.data_srcset,n.data_src),n.callback_set&&n.callback_set(t),x(t,n.class_loading),f(t,n.class_loaded),c(e,"load",o))})),s(e,"error",(function(e){x(t,n.class_loading),n.callback_error&&n.callback_error(t),void 0!==e.path?v(t,e.path[0].currentSrc,i):void 0!==e.target&&v(t,e.target.currentSrc,i)})),f(t,n.class_loading),i=d(),y(e,t,n.data_srcset,n.data_src)},z.prototype._showOnAppear=function(t){var e,i=this._settings;function n(){null!==i&&(t_lazyLoad__appendImgStatToArr(t,e),i.callback_load&&i.callback_load(t),x(t,i.class_loading),f(t,i.class_loaded),c(t,"load",n))}"IMG"!==t.tagName&&"IFRAME"!==t.tagName||(s(t,"load",n),s(t,"error",(function(o){c(t,"load",n),x(t,i.class_loading),i.callback_error&&i.callback_error(t),void 0!==o.path?v(t,o.path[0].currentSrc,e):void 0!==o.target&&v(t,o.target.currentSrc,e)})),f(t,i.class_loading)),e=d(),y(t,t,i.data_srcset,i.data_src),i.callback_set&&i.callback_set(t)},z.prototype._loopThroughElements=function(){var t,e,i=this._settings,n=this._elements,o=n?n.length:0,a=[];for(t=0;t<o;t++)e=n[t],i.skip_invisible&&e.isSkipByPosition&&e.isNotUnderScreenRange||h(e,i.container,i.threshold)&&(i.show_while_loading?this._showOnAppear(e):this._showOnLoad(e),a.push(t),e.wasProcessed=!0);for(;a.length>0;)n.splice(a.pop(),1),i.callback_processed&&i.callback_processed(n.length);0===o&&this._stopScrollHandler()},z.prototype._purgeElements=function(){var t,e=this._elements,i=e.length,n=[];for(t=0;t<i;t++)e[t].wasProcessed&&n.push(t);for(;n.length>0;)e.splice(n.pop(),1)},z.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,s(this._settings.container,"scroll",this._handleScrollFn))},z.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,c(this._settings.container,"scroll",this._handleScrollFn))},z.prototype.loadAnimatedImages=function(){var t,e,i=this._settings,n=this._elements,o=n?n.length:0,a=[];function l(t,e){var n=function(t,e){var i;if("trigger"===e){var n=t.getAttribute("data-animate-sbs-trgels");n&&(i=document.querySelector('[data-elem-id="'+n+'"]'))}else"viewport"===e&&(i=_(t,"t396"));return m(i)?g(i):null}(t,e);if(!n)return!1;var o=g(t),a=Math.abs(n.top-o.top),l=Math.abs(n.left-o.left);return a>i.threshold||l>i.threshold}for(t=0;t<o;t++)if(p(e=n[t],"tn-atom__img")||p(e,"tn-atom")){var r,s=_(e,"tn-elem"),c=s.getAttribute("data-animate-sbs-opts"),d=s.getAttribute("data-animate-sbs-event");"intoview"!==d&&"blockintoview"!==d||(r="viewport"),s.getAttribute("data-animate-sbs-trgels")||(r="trigger"),i.skip_invisible&&null===e.offsetParent||!c||l(s,r)&&(i.show_while_loading?this._showOnAppear(e):this._showOnLoad(e),a.push(t),e.wasProcessed=!0)}for(;a.length>0;)n.splice(a.pop(),1),i.callback_processed&&i.callback_processed(n.length)},z.prototype.handleScroll=function(){var t,e,i;this._settings&&(e=d(),0!==(i=this._settings.throttle)?(t=i-(e-this._previousLoopTime))<=0||t>i?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(u((function(){this._previousLoopTime=d(),this._loopTimeout=null,this._loopThroughElements()}),this),t)):this._loopThroughElements())},z.prototype.update=function(){this._elements=function(t){var e;try{e=Array.prototype.slice.call(t)}catch(a){var i,n=[],o=t.length;for(i=0;i<o;i++)n.push(t[i]);e=n}return e.forEach((function(t){t.isSkipByPosition=null===t.offsetParent&&!1===m(_(t,"t396__carrier-wrapper"))&&"fixed"!==t.getAttribute("data-content-cover-parallax");var e=_(t,"t-rec");m(e)&&(t.isNotUnderScreenRange=!1===e.hasAttribute("data-screen-max")&&!1===e.hasAttribute("data-screen-min"))})),e}(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},z.prototype.destroy=function(){c(window,"resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},z})),window.lazy="y","loading"!=document.readyState?t_lazyload__init():document.addEventListener("DOMContentLoaded",t_lazyload__init),window.t_lazyload_updateResize_elem=function(t){if(window.jQuery&&t instanceof jQuery){if(0==t.length)return;t=t.get(0)}if(null!=t){var e=t.tagName;if("IMG"==e)var i=t.getAttribute("src"),n="-/resize/";else if("undefined"!=typeof getComputedStyle){i=getComputedStyle(t)["background-image"].replace("url(","").replace(")","").replace(/"/gi,"");if("contain"==getComputedStyle(t)["background-size"])n="-/contain/";else n="-/cover/"}else n="-/cover/";if(!(null==i||-1===i.indexOf(n)||i.indexOf(".svg")>0||i.indexOf(".gif")>0||i.indexOf(".ico")>0||-1===i.indexOf("thumb.tildacdn.com")||i.indexOf("-/empty/")>0&&i.indexOf("-/resizeb/")>0)){var o=i.indexOf(n)+n.length,a=i.indexOf("/",o);if(o>0&&a>0){var l=i.slice(o,a).split("x"),r=t.clientWidth,s=t.clientHeight;if(r>0&&s>0&&(l[0]>0||l[1]>0)&&(l[0]>0&&r>l[0]||l[1]>0&&s>l[1])&&(l[0]>0&&r-l[0]>100||l[1]>0&&s-l[1]>100)){var c=i.slice(0,o)+(l[0]>0?r:"")+"x"+(l[1]>0?s:"")+i.substring(a);"IMG"==e?t.setAttribute("src",c):t.style.backgroundImage="url('"+c+"')"}}}}},window.t_loadImgStats=[];