function t_onReady(t){"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function t_addClass(t,e){document.body.classList?t.classList.add(e):t.className+=(t.className?" ":"")+e}function t_removeClass(t,e){document.body.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function t_removeEl(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function t_outerWidth(t){var e=(t=getComputedStyle(t)).width,n=t.marginLeft;return"auto"===e&&(e=0),"auto"===n&&(n=0),"auto"===(t=t.marginRight)&&(t=0),parseInt(e)+parseInt(n)+parseInt(t)}var version;function t_throttle(t,e,n){var o,i;return e=e||250,function(){var a=n||this,r=+new Date,l=arguments;o&&r<o+e?(clearTimeout(i),i=setTimeout((function(){o=r,t.apply(a,l)}),e)):(o=r,t.apply(a,l))}}function t_onFuncLoad(t,e,n){var o,i;"function"==typeof window[t]?e():(o=Date.now(),i=new Error(t+" is undefined"),setTimeout((function a(){var r=Date.now();if("function"==typeof window[t])e();else{if("complete"===document.readyState&&5e3<r-o&&"function"!=typeof window[t])throw i;setTimeout(a,n||100)}})))}window.isSearchBot=!1,/Bot/i.test(navigator.userAgent)&&(window.isSearchBot=!0),window.isMobile=!1,window.$isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.isMobile=!0,window.$isMobile=!0),window.isTablet=/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent),window.isiOS=!1,/iPhone|iPad|iPod/i.test(navigator.userAgent)&&(window.isiOS=!0),window.isiOSChrome=!!navigator.userAgent.match("CriOS"),window.isFirefox=/firefox/i.test(navigator.userAgent),window.isOpera=!!window.opr&&!!window.opr.addons||!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"),window.isiOSVersion="",window.isiOS&&null!==(version=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&(window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]),window.isSafari=!1,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&(window.isSafari=!0),window.isIE=!!document.documentMode,window.isSafariVersion="",window.isSafari&&null!==(version=navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/))&&(window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]),window.browserLang=(window.navigator.userLanguage||window.navigator.language).toUpperCase().slice(0,2),window.tildaBrowserLang=window.browserLang,t_onReady((function(){var t,e=document.getElementById("allrecords");(t=e?e.getAttribute("data-tilda-project-lang"):t)&&(window.browserLang=t)})),t_onReady((function(){var t=window.navigator.userAgent,e=-1!==t.indexOf("Instagram"),n=-1!==t.indexOf("FBAV"),o=-1!==t.indexOf("YaSearchBrowser"),i=-1!==t.indexOf("SamsungBrowser"),a=-1!==t.indexOf("DuckDuckGo");-1!==t.indexOf("Android")&&(n||e||o||i||a)&&((t=document.createElement("p")).style.lineHeight="100px",t.style.padding="0",t.style.margin="0",t.style.height="auto",t.style.position="absolute",t.style.opacity="0.001",t.innerText="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",document.body.appendChild(t),n=100/t.getBoundingClientRect().height,t.parentNode.removeChild(t),n<.98&&document.body.insertAdjacentHTML("beforeend",'<style>.t396 [data-elem-type="text"] .tn-atom {zoom: '+100*n+"%;}</style>"))})),t_onReady((function(){setTimeout((function(){var t=document.querySelector("html"),e=document.body,n=document.querySelector(".t-tildalabel");e=Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight,t.offsetHeight);if((document.getElementById("tildacopy")||n)&&n.querySelectorAll("div"))e+70>window.innerHeight&&n&&n.setAttribute("style","display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 1 !important");else{for(var o=document.body.childNodes,i=[],a=0;a<o.length;a++){var r=o[a];8===r.nodeType&&i.push(r)}for(a=0;a<i.length;a++)-1!==i[a].nodeValue.indexOf("'t remove this l")&&document.getElementById("allrecords").insertAdjacentHTML("afterend",'<div class="t-tildalabel t-tildalabel-free" style="display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 99900 !important"><div class="t-tildalabel-free__main"><a href="https://tilda.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.tildacdn.com/img/tildacopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://tilda.cc" target="_blank" style="text-decoration: none; color:inherit;">Tilda — a website builder</a> that helps to&nbsp;create a&nbsp;website without any code</div><a href="https://tilda.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-tildalabel-free__links-wr"><a class="t-tildalabel-free__txt-link" href="https://help'+("RU"===window.browserLang?"-ru":"")+'.tilda.cc/white-label" target="_blank">'+("RU"===window.browserLang?"Как удалить этот лейбл":"How to remove this block")+"?</a></div></div>")}}),500)})),t_onReady((function(){var t=document.getElementById("allrecords");if(!window.isMobile&&t&&"yes"!==t.getAttribute("data-blocks-animationoff")&&!1===window.isSearchBot){for(var e=document.querySelectorAll(".r"),n=0;n<e.length;n++){var o=(a=e[n]).getAttribute("style");o&&-1!==o.indexOf("background-color")&&a.setAttribute("data-animationappear","off")}var i=window.isIE?document.querySelectorAll(".r:not([data-animationappear]):not([data-screen-min]):not([data-screen-max])"):document.querySelectorAll('.r:not([data-animationappear="off"]):not([data-screen-min]):not([data-screen-max])');for(n=0;n<i.length;n++){var a,r=(a=i[n]).getBoundingClientRect().top+window.pageYOffset,l=window.pageYOffset+window.innerHeight+300;t_addClass(a,1e3<r&&l<r?"r_hidden":"r_showed"),t_addClass(a,"r_anim")}function d(){if(i.length)for(var t=i.length-1;0<=t;t--){var e=i[t];e.getBoundingClientRect().top+window.pageYOffset<(e.offsetHeight<=100?window.pageYOffset+window.innerHeight:window.pageYOffset+window.innerHeight-100)&&(t_removeClass(e,"r_hidden"),t_addClass(e,"r_showed"),(i=Array.prototype.slice.call(i)).splice(t,1))}}window.addEventListener("scroll",t_throttle((function(){d()}),200)),setTimeout((function(){d()}))}t=document.querySelector("html");var s=document.body,c=("none"===t.style.display&&(t.style.display="block"),document.querySelector(".t-tildalabel"));(s=s?Math.max(s.scrollHeight,s.offsetHeight,s.clientHeight,t.offsetHeight):t.offsetHeight)+70<window.innerHeight?c&&(c.style.display="none"):c&&c.setAttribute("style","display: block !important")})),function(){function t(){window.winWidth=window.innerWidth,window.winHeight=window.innerHeight}function e(){var t,e,n,o=window.isMobile?document.documentElement.clientWidth:window.innerWidth,i=document.querySelectorAll(".r[data-screen-max], .r[data-screen-min]");-1!==navigator.userAgent.indexOf("Instagram")&&(o=screen.width);for(var a=0;a<i.length;a++){var r=i[a];if("yes"===r.getAttribute("data-connect-with-tab"))return;n=getComputedStyle(r).display,t=(t=r.getAttribute("data-screen-max"))||1e4,e=(e=r.getAttribute("data-screen-min"))||0,t=parseInt(t),(e=parseInt(e))<=t&&(o<=t&&e<o?"block"!==n&&(r.style.display="block"):"none"!==n&&(r.style.display="none"))}}t_onReady((function(){t(),e(),window.addEventListener("resize",t_throttle((function(){t()}),200)),window.addEventListener("resize",t_throttle((function(){e()}),200))}))}(),function(){var t=-1!==navigator.userAgent.indexOf("Instagram");function e(){for(var t,e,n,o,i,a=document.querySelectorAll(".t-cover__carrier"),r=0,l=0;l<a.length;l++)-1<(s=(d=a[l]).style).height.indexOf("vh")&&(r=parseInt(s.height,10)/100,(n=document.createElement("div")).id="tempDiv",n.style.cssText="position:absolute;top:0;left:0;width:100%;height:100vh;visibility:hidden;",document.body.appendChild(n),n=document.getElementById("tempDiv"),t=parseInt(getComputedStyle(n).height.replace("px","")),t_removeEl(n),e=Math.round(t*r)+"px",(n=d.closest(".t-cover"))&&(o=n.querySelector(".t-cover__filter"),i=n.querySelector(".t-cover__wrapper"),n.style.height=e),o&&(o.style.height=e),i&&(i.style.height=e),s.height=e);var d,s,c=document.querySelectorAll("[data-height-correct-vh]"),u=window.innerHeight;for(l=r=0;l<c.length;l++)-1<(s=(d=c[l]).style).height.indexOf("vh")&&(r=parseInt(s.height)/100,s.height=e=u+"px")}function n(){for(var e=t?screen.width:window.innerWidth,n=(window.isMobile&&!t&&(e=document.documentElement.clientWidth),document.querySelectorAll('.r:not([data-record-type="396"]):not([data-record-type="1003"])')),o=[],i=0;i<n.length;i++){var a=n[i],r=getComputedStyle(a);"none"!==r.display&&"hidden"!==r.visibility&&"0"!==r.opacity&&o.push(a)}for(var l=0;l<o.length;l++)for(var d=o[l],s=d.querySelectorAll('div:not([data-auto-correct-mobile-width="false"]):not(.tn-elem):not(.tn-atom):not(.tn-atom__sbs-anim-wrapper):not(.tn-atom__prx-wrapper):not(.tn-atom__videoiframe):not(.tn-atom__sticky-wrapper):not(.t-store__relevants__container):not(.t-slds__items-wrapper):not(.js-product-controls-wrapper):not(.js-product-edition-option):not(.t-product__option-variants)'),c=0;c<s.length;c++){var u=s[c],p=(d.style.wordBreak="",t_outerWidth(u));if(e<p){if("yes"===u.getAttribute("[data-customstyle]")&&"false"===u.parentNode.getAttribute("[data-auto-correct-mobile-width]"))return;console.log("Block not optimized for mobile width. Block width:"+p+" Block id:"+d.getAttribute("id")),console.log(u),d.style.overflow="auto",d.style.wordBreak=e<p-3?"break-word":""}}}function o(t){for(var e=document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'),n=0;n<e.length;n++){var o,i,a=e[n],r=a.getAttribute("style");r&&(o="rem"===a.getAttribute("data-auto-correct-font-size"),document.documentElement.clientWidth>t?(i=(i=r.replace("lineheight","line-height")).replace("fontsize","font-size"),a.setAttribute("style",i)):-1===r.indexOf("font-size")||parseInt(getComputedStyle(a).fontSize.replace("px",""))<30||(i=r.replace("line-height","lineheight"),i=o?i.replace(/font-size.*px;/gi,"font-size: 1.6rem;"):i.replace("font-size","fontsize"),a.setAttribute("style",i)))}}(window.isMobile||window.parent.isPagePreview)&&(t_onReady((function(){setTimeout(e,400)})),window.addEventListener("load",(function(){setTimeout(e,400)})),window.innerWidth<480||t&&screen.width<480?(t_onReady((function(){for(var t=document.querySelectorAll('[data-customstyle="yes"]'),e=document.querySelectorAll("[field] span, [field] strong, [field] em"),n=0;n<t.length;n++){var i=t[n];26<parseInt(getComputedStyle(i).fontSize.replace("px",""))&&(i.style.fontSize=null,i.style.lineHeight=null)}for(n=0;n<e.length;n++)i=e[n],26<parseInt(getComputedStyle(i).fontSize.replace("px",""))&&(i.style.fontSize=null);o(480),window.addEventListener("orientationchange",(function(){setTimeout((function(){o(480)}),500)}))})),window.addEventListener("load",n),window.addEventListener("orientationchange",(function(){setTimeout((function(){n()}),500)}))):(window.innerWidth<900||t&&screen.width<900)&&t_onReady((function(){for(var t=document.querySelectorAll('[data-customstyle="yes"]'),e=document.querySelectorAll("[field] span, [field] strong, [field] em"),n=0;n<t.length;n++){var o=t[n];30<parseInt(getComputedStyle(o).fontSize.replace("px",""))&&(o.style.fontSize=null,o.style.lineHeight=null)}for(n=0;n<e.length;n++)o=e[n],30<parseInt(getComputedStyle(o).fontSize.replace("px",""))&&(o.style.fontSize=null);var i=document.querySelectorAll('.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])');for(n=0;n<i.length;n++){var a=(o=i[n]).getAttribute("style");a&&-1<a.indexOf("font-size")&&30<parseInt(getComputedStyle(o).fontSize.replace("px",""))&&(a=("rem"===o.getAttribute("data-auto-correct-font-size")?a.replace(/font-size.*px;/gi,"font-size: 1.6rem;"):a.replace("font-size","fontsize")).replace("line-height","lineheight"),o.setAttribute("style",a))}})))}(),t_onReady((function(){setTimeout((function(){for(var t=document.querySelectorAll('a[href^="http"][target="_blank"]'),e=0;e<t.length;e++){var n=t[e],o=n.getAttribute("rel")||"";""===o?n.setAttribute("rel","noopener"):-1===o.indexOf("noopener")&&n.setAttribute("rel",o+" noopener")}}),2500)})),function(t){t.onerror=function(e,n,o,i,a){"object"!=typeof t.t_jserrors&&(t.t_jserrors=[]),t.t_jserrors.push({message:e,filename:n,lineno:o,colno:i,error:a})}}(window,Math);