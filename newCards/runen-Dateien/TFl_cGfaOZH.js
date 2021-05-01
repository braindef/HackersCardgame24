if (self.CavalryLogger) { CavalryLogger.start_js(["Z2gzn"]); }

__d("CometPhotoGrid.react",["CometAspectRatioContainer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function i(a,b){return a<2&&b%3===2}function a(a){var c=a.spacing,d=c===void 0?"narrow":c;c=babelHelpers.objectWithoutPropertiesLoose(a,["spacing"]);a=h.Children.toArray(c.children);var e=a.length;return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"display-1":"j83agx80","flex-direction-1":"btwxx1t3","flex-wrap-1":"lhclo0ds"},d==="narrow"?{"margin-top-1":"hop8lmos","margin-end-1":"nkwizq5d","margin-bottom-1":"scwd0bx6","margin-start-1":"roh60bw9"}:null,d==="wide"?{"margin-top-1":"s89635nw","margin-end-1":"c4xchbtz","margin-bottom-1":"dco85op0","margin-start-1":"by2jbhx6"}:null),children:h.Children.map(a,function(a,c){return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"box-sizing-1":"rq0escxv","flex-basis-1":"kuivcneq"},d==="wide"?{"padding-top-1":"linoseic","padding-end-1":"ihtri3yf","padding-bottom-1":"pby63qed","padding-start-1":"e9o6kcyi"}:null,d==="narrow"?{"padding-top-1":"jwdofwj8","padding-end-1":"n8tt0mok","padding-bottom-1":"r8blr3vg","padding-start-1":"hyh9befq"}:null,i(c,e)?{"flex-basis-1":"hkbzh7o3"}:null),children:h.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:1,children:a})})})})}}),null);
__d("CometImageCover.react",["BaseImage_DEPRECATED.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){a.alt;var c=a.loading,d=a.onLoad,e=a.src,f=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","loading","onLoad","src","style"]);var h=g.useState(null),i=h[0],j=h[1],k=g.useRef();h=g.useCallback(function(){var a=k.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;j(a.src);d!=null&&d()},[d]);return i!=null?g.jsx("div",{className:"k4urcfbm bixrwtb6 datstx6m q9uorilb",style:babelHelpers["extends"]({backgroundImage:"url("+i+")",backgroundPosition:"center center",backgroundSize:"cover"},f)}):g.jsx(b("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},a,{className:"ttbfdpzt do00u71z",loading:c||void 0,onLoad:h,ref:k,src:e,style:f}))}function c(a){return g.jsx(b("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({className:"k4urcfbm bixrwtb6 datstx6m q9uorilb"},a))}f=d?c:a;e.exports=f}),null);
__d("CometOnOutsideClick.react",["React","useOnOutsideClick"],(function(a,b,c,d,e,f){"use strict";e.exports=a;b("React");function a(a){var c=a.children;a=a.onOutsideClick;a=b("useOnOutsideClick")(a);return c(a)}}),null);
__d("GroupsCometAdminMembershipQuestionsStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=g._("Add Question");f.ADD_QUESTION=a}),null);
__d("MqttState.bs",[],(function(a,b,c,d,e,f){"use strict";a="Connected";b="Disconnected";c="Connecting";f.connected=a;f.disconnected=b;f.connecting=c}),null);
__d("URLScraper",["ArbiterMixin","DataStore","Event","URLMatcher","mixin"],(function(a,b,c,d,e,f){var g="scraperLastPermissiveMatch";a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c){var d;d=a.call(this)||this;d.input=b;d.enable();d.getValueFn=c;return d}var d=c.prototype;d.reset=function(){b("DataStore").set(this.input,g,null)};d.enable=function(){if(this.events)return;var a=function(a){window.setTimeout(this.check.bind(this,a),30)};this.events=b("Event").listen(this.input,{paste:a.bind(this,!1),keydown:a.bind(this,!0)})};d.disable=function(){if(!this.events)return;for(var a in this.events)this.events[a].remove();this.events=null};d.check=function(a){var d=this.getValueFn?this.getValueFn():this.input.value;if(a&&c.trigger(d))return;a=c.match(d);d=b("URLMatcher").permissiveMatch(d);d&&d!=b("DataStore").get(this.input,g)&&(b("DataStore").set(this.input,g,d),this.inform("match",{url:a||d,alt_url:d}))};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a;Object.assign(a,b("URLMatcher"))}),null);
__d("isTruthy",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a!=null&&Boolean(a)}}),null);
__d("MessengerWebQuickLogModule",[],(function(a,b,c,d,e,f){a=Object.freeze({COMPOSER_INTERACTION:25296900,FETCH_MORE_THREAD_LIST:25296906,FETCH_THREAD_INFO:25296904,FETCH_THREAD_LIST:25296905,FIRSTCHATTABOPEN_WWW:25296897,GROUP_INPUT_INDIVIDUAL_TAB_OPEN_WWW:25296899,GROUP_INPUT_TAB_OPEN_WWW:25296898,LS_INIT:25305590,PAGE_LOAD_MDOTCOM_WWW:25296901,SEND_MESSAGE:25296903,THREAD_LOAD_MDOTCOM_WWW:25296902});e.exports=a}),null);