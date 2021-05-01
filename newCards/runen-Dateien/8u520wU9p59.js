if (self.CavalryLogger) { CavalryLogger.start_js(["NV0hi"]); }

__d("TetraishEntityHeaderStickyBottomRow_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"TetraishEntityHeaderStickyBottomRow_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"profile_picture_for_sticky_bar",args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("CometHeaderContentArea.react",["CometRouteRenderType","CometRouterFocusRegion.react","CometSection.react","React","TetraishEntityHeaderScrollToContext","requireCond","stylex","cr:683059"],(function(a,b,c,d,e,f){"use strict";e.exports=c;var g,h=b("React");function c(c){var d=c.children,e=c.contentTestID;e=c.header;var f=c.rootTestID,i=c.scrollKey;f=c.useDeprecatedStyles;c=f===void 0?!1:f;var j=b("CometRouteRenderType").useIsPushView(),k=h.useRef(null),l=h.useRef(null),m=h.useCallback(function(c,d){var e=l.current;l.current=i;if(i!=null&&i===e)return;if(k.current==null)return;if(k.current.offsetWidth<940)return;if(c.current!=null&&k.current.contains(c.current)){e=j?-60:0;c=c.current;while(c!=null&&k.current.contains(c))e+=c.offsetTop,c=c.offsetParent;e+=(c=d)!=null?c:0;a.scrollTo(a.pageXOffset,e);b("cr:683059")&&b("cr:683059").setInitialScrollY(e)}},[j,i]);f=h.useMemo(function(){return{scrollToTop:m}},[m]);return h.jsxs(b("CometSection.react"),{className:"l9j0dhe7 dp1hu0rb cbu4d94t j83agx80",ref:k,role:"main",testid:void 0,children:[h.jsx(b("TetraishEntityHeaderScrollToContext").Provider,{value:f,children:e}),h.jsx("div",{className:(g||(g=b("stylex"))).dedupe(c?{"align-items-1":"bp9cbjyn","display-1":"j83agx80","flex-direction-1":"cbu4d94t","max-width-1":"d2edcug0"}:{"display-1":"j83agx80","flex-direction-1":"cbu4d94t"}),"data-testid":void 0,children:h.jsx(b("CometRouterFocusRegion.react"),{children:d})})]})}}),null);
__d("CometStickyHeader.react",["BaseScrollableAreaContext","CometBase.react","CometViewportMarginsContext","HiddenSubtreePassiveContext","React","intersectionObserverEntryIsIntersecting","stylex","useIntersectionObserver","useMergeRefs"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={root:{overflowAnchor:"rek2kq2y",position:"lpgh02oy"}};function a(a,c){var d=a.children,e=a.onStickyActive,f=a.onStickyChange,i=a.onStickyInactive;a.style;var j=a.topOffset;j=j===void 0?0:j;var k=a.xstyle,l=babelHelpers.objectWithoutPropertiesLoose(a,["children","onStickyActive","onStickyChange","onStickyInactive","style","topOffset","xstyle"]),m=g.useRef(null),n=g.useRef(!1),o=g.useContext(b("BaseScrollableAreaContext")),p=g.useContext(b("CometViewportMarginsContext")),q=o[o.length-1],r=g.useContext(b("HiddenSubtreePassiveContext")),s=j+(q!=null?0:p.top);o=b("useIntersectionObserver")(g.useCallback(function(a){var c=r.getCurrentState();c=c.hiddenOrBackgrounded;if(c)return;c=!b("intersectionObserverEntryIsIntersecting")(a);if(c!==n.current){f&&f(c);c?e&&e():i&&i();n.current=c;a=m.current;a!=null&&(a.style.zIndex=c?"1":"")}},[r,e,f,i]),g.useMemo(function(){return{root:function(){return q!=null?q.getDOMNode():null},rootMargin:{bottom:0,left:0,right:0,top:-s},threshold:0}},[q,s]));j=b("useMergeRefs")(m,c);return g.jsxs(g.Fragment,{children:[g.jsx(b("CometBase.react"),{ref:o}),g.jsx(b("CometBase.react"),babelHelpers["extends"]({},l,{ref:j,style:babelHelpers["extends"]({},a.style,{top:s,zIndex:n.current?"1":""}),xstyle:[h.root,k],children:d}))]})}c=g.forwardRef(a);e.exports=c}),null);
__d("CometStickyHeaderContentArea.react",["CometAppNavigationConstants","CometAppNavigationTabBarContainer.react","CometHeaderContentArea.react","CometRouteRenderType","CometStickyHeader.react","CometViewportMarginsAddonContextProvider.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={tabBar:{zIndex:"kavbgo14"}};function a(a){var c=a.headerHeight;c=c===void 0?60:c;var d=a.showTabContainerOnPushView;d=d===void 0?!1:d;a=babelHelpers.objectWithoutPropertiesLoose(a,["headerHeight","showTabContainerOnPushView"]);var e=b("CometRouteRenderType").useIsPushView();c=g.jsx(b("CometHeaderContentArea.react"),babelHelpers["extends"]({},a,{children:g.jsx(b("CometViewportMarginsAddonContextProvider.react"),{addon:c,children:a.children})}));return d&&e?g.jsxs(g.Fragment,{children:[g.jsx(b("CometStickyHeader.react"),{xstyle:h.tabBar,children:g.jsx(b("CometAppNavigationTabBarContainer.react"),{})}),g.jsx(b("CometViewportMarginsAddonContextProvider.react"),{addon:b("CometAppNavigationConstants").HEADER_HEIGHT,children:c})]}):c}}),null);
__d("CometEntityHeaderStickyBar.react",["BaseRow.react","BaseRowItem.react","CometBase.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={container:{transitionDuration:"ijkhr0an",transitionProperty:"flx89l3n",transitionTimingFunction:"nna1d5md"},containerSticky:{transform:"i9k17dj3"},fadeInTransition:{transitionDuration:"c0paw9va",transitionProperty:"l23jz15m",transitionTimingFunction:"d4752i1f"},fadeOutTransition:{transitionDuration:"dvqrsczn",transitionProperty:"l23jz15m",transitionTimingFunction:"d4752i1f"},primaryRow:{minHeight:"pxsmfnpt",opacity:"pedkr2u6",visibility:"n1dktuyu"},primaryRowSticky:{opacity:"b5wmifdl",visibility:"kr9hpln1"},root:{position:"l9j0dhe7"},stickyRow:{height:"datstx6m",opacity:"b5wmifdl",position:"pmk7jnqg",top:"i42f9fw1",visibility:"kr9hpln1",width:"k4urcfbm"},stickyRowSticky:{opacity:"pedkr2u6",visibility:"n1dktuyu"}};function j(a,b,c){b(!c).split(/\s+/).filter(Boolean).forEach(function(b){return a.classList.remove(b)}),b(c).split(/\s+/).filter(Boolean).forEach(function(b){return a.classList.add(b)})}function a(a,c){var d=a.initialSticky;d=d===void 0?!1:d;var e=a.primaryContent,f=a.stickyContent,k=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["initialSticky","primaryContent","stickyContent","xstyle"]);var l=h.useRef(d),m=h.useRef(),n=h.useRef(),o=h.useRef(),p=h.useRef(),q=function(){m.current!=null&&(window.cancelAnimationFrame(m.current),m.current=null)};h.useImperativeHandle(c,function(){return{setSticky:function(a){l.current=a,q(),m.current=window.requestAnimationFrame(function(){m.current=null;var c=n.current;c!=null&&j(c,function(a){return(g||(g=b("stylex")))(a&&i.containerSticky)},a);c=o.current;c!=null&&j(c,function(a){return(g||(g=b("stylex")))(a&&i.primaryRowSticky,a?i.fadeInTransition:i.fadeOutTransition)},a);c=p.current;c!=null&&j(c,function(a){return(g||(g=b("stylex")))(a&&i.stickyRowSticky,a?i.fadeOutTransition:i.fadeInTransition)},a)})}}});h.useEffect(function(){return q},[]);return h.jsx(b("CometBase.react"),babelHelpers["extends"]({},a,{xstyle:[i.root,k],children:h.jsxs(b("CometBase.react"),{ref:n,xstyle:[i.container,l.current&&i.containerSticky],children:[h.jsx(b("BaseRow.react"),{ref:o,xstyle:[i.primaryRow,l.current&&i.primaryRowSticky,l.current?i.fadeInTransition:i.fadeOutTransition],children:h.jsx(b("BaseRowItem.react"),{expanding:!0,children:e})}),h.jsx(b("BaseRow.react"),{ref:p,xstyle:[i.stickyRow,l.current&&i.stickyRowSticky,l.current?i.fadeOutTransition:i.fadeInTransition],children:h.jsx(b("BaseRowItem.react"),{verticalAlign:"center",children:f})})]})}))}c=h.forwardRef(a);e.exports=c}),null);
__d("CometTab.react",["CometFocusGroupContext","CometNonBreakingSpace.react","CometPressable.react","CometTextWithIcon.react","JSScheduler","React","TetraIcon.react","TetraText.react","mergeRefs","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={icon:{lineHeight:"soycq5t1"},iconLeft:{marginEnd:"cgat1ltu"},iconRight:{marginStart:"kkf49tns"},pressable:{appearance:"dwo3fsh8",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",paddingBottom:"qt6c0cv9",paddingEnd:"rz4wbd8a",paddingStart:"a8nywdso",paddingTop:"jb3vyjys",textAlign:"i1ao9s8h",backgroundColor:"g5ia77u1",backgroundImage:"mf7ej076",boxSizing:"rq0escxv",color:"gmql0nx0",cursor:"nhd2j8a9",position:"l9j0dhe7",textDecoration:"esuyzwwr",display:"j83agx80",zIndex:"tkr6xdv7"},selected:{borderTopEndRadius:"akjuzmll",borderTopStartRadius:"bub6lnnc",bottom:"i09qtzwb",end:"n7fi1qx3",height:"pmqtw6m8",position:"pmk7jnqg",start:"j9ispegn"},tab:{alignItems:"bp9cbjyn",boxSizing:"rq0escxv",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"frgo5egb",position:"l9j0dhe7"}};function a(a,c){var d=a.badge,e=a.containerRef,f=a.highlightColor,j=a.icon,k=a.iconColor;k=k===void 0?"secondary":k;var l=a.iconLocation;l=l===void 0?"right":l;var m=a.label,n=a.labelIsHidden;n=n===void 0?!1:n;var o=a.onHidden,p=a.pressableXStyle,q=a.reduceEmphasis;q=q===void 0?!1:q;var r=a.selected;r=r===void 0?!1:r;var s=a.tabRef,t=a.underlineColor,u=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["badge","containerRef","highlightColor","icon","iconColor","iconLocation","label","labelIsHidden","onHidden","pressableXStyle","reduceEmphasis","selected","tabRef","underlineColor","xstyle"]);var v=h.useState(!0),w=v[0],x=v[1],y=h.useRef(o);y.current=o;v=h.useContext(b("CometFocusGroupContext"));o=v.FocusItem;v=h.useCallback(function(a){var c=a.intersectionRatio;b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking,function(){var a=c<.5;x(a);y.current&&y.current(a)})},[]);var z=b("useIntersectionObserver")(v,{root:e?function(){return e.current}:null,threshold:.5});v=!n&&d!=null?typeof d==="number"?h.jsxs(h.Fragment,{children:[m,h.jsx(b("CometNonBreakingSpace.react"),{size:.5}),h.jsx(b("TetraText.react"),{color:r?"highlight":"secondary",type:"body4",children:d})]}):h.jsx(b("CometTextWithIcon.react"),{iconAfter:d,children:m}):n?null:m;r&&f!=null&&(v=h.jsx("span",{style:{color:f},children:v}));q?v=h.jsx(b("TetraText.react"),{color:r?"highlight":"secondary",type:"body3",children:v}):v=h.jsx(b("TetraText.react"),{color:r?"highlight":"secondary",type:"bodyLink3",children:v});d=j!=null&&l==="left"?h.jsx("div",{className:(g||(g=b("stylex")))(i.icon,i.iconLeft),children:h.jsx(b("TetraIcon.react"),{color:r?"highlight":k,icon:j})}):null;f=j!=null&&l==="right"?h.jsx("div",{className:(g||(g=b("stylex")))(i.icon,i.iconRight),children:h.jsx(b("TetraIcon.react"),{color:r?"highlight":k,icon:j})}):null;q=h.useMemo(function(){return b("mergeRefs")(z,c,s)},[z,c,s]);l=h.jsxs("div",{className:(g||(g=b("stylex")))(i.tab,u),ref:q,children:[d,v,f,h.jsx("div",{className:g(r?i.selected:null),style:{backgroundColor:r?t:void 0}})]});if(a.onPress!=null||a.linkProps!=null){k=h.jsx(b("CometPressable.react"),babelHelpers["extends"]({},a,{"aria-hidden":w,"aria-selected":r,disabled:w,display:"inline",focusable:!w,label:n?m:void 0,overlayDisabled:r,ref:q,role:"tab",xstyle:[i.pressable,p],children:l}));return o&&!w?h.jsx(o,{children:k}):k}return l}c=h.forwardRef(a);e.exports=c}),null);
__d("CometTabs.react",["ix","fbt","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometFocusGroup.react","CometKeys","CometTab.react","React","fbicon","focusScopeQueries","mergeRefs","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=b("requireDeferred")("CometTabMenu.react"),l={heightGetter:{lineHeight:"soycq5t1",position:"l9j0dhe7"},heightSetter:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",visibility:"kr9hpln1"},moreTab:{height:"cb02d2ww",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},moreWrapper:{display:"q9uorilb",height:"cb02d2ww",position:"l9j0dhe7",verticalAlign:"j1lvzwm4",width:"t4ae4g2e"},moreWrapperAdaptive:{height:"r9glsfau",maxHeight:"gbic8f20",minHeight:"tgvbjcpo",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},root:{height:"cb02d2ww",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm",zIndex:"du4w35lb"},tab:{display:"pq6dq46d","float":"bzsjyuwj",height:"cb02d2ww",verticalAlign:"j1lvzwm4"},tabsContainer:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}};function a(a){var c=a.tabs,d=a.maxTabs,e=d===void 0?c.length:d,f=a.menuSize,o=a.moreTabStyles,p=a.moreTabXStyle,q=a.tabsContainerStyle,r=a.onMoreTabPress,s=j.useRef(null),t=j.useRef([]),u=j.useRef(null);d=j.useState(function(){return Array.from({length:c.length}).map(function(a,b){return b}).filter(function(a){return a>=e})});var v=d[0],w=d[1],x=e<c.length?c.slice(0,e):c,y=e>=c.length,z=j.useMemo(function(){return v.some(function(a){return(a=c[a])==null?void 0:a.selected})},[v,c]),A=j.useCallback(function(a,c){a=b("mergeRefs")(a,u,function(a){(a==null?void 0:a.parentElement)!=null&&a.parentElement instanceof HTMLElement&&(a.parentElement.tabIndex=1)});var d=[{command:{key:b("CometKeys").DOWN},description:h._("Men\u00fc \u00f6ffnen"),handler:c}];return j.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:d,xstyle:[l.moreWrapper,y&&l.moreWrapperAdaptive],children:j.jsx(b("CometTab.react"),babelHelpers["extends"]({},o,{"aria-haspopup":"menu",icon:b("fbicon")._(g("481882"),16),label:h._("Mehr"),onPress:function(){c(),r&&r()},pressableXStyle:l.moreTab,ref:a,role:"tab",selected:z,testid:void 0,xstyle:p}))})},[y,z,o,p,r]);return j.jsx(b("CometFocusGroup.react"),{hideArrowSignifiers:!0,orientation:"horizontal",preventScrollOnFocus:!0,tabScopeQuery:b("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:function(a){return j.jsx("div",{className:(i||(i=b("stylex")))(l.root,a),role:"tablist",children:j.jsxs("div",{className:i(l.heightGetter),children:[y&&j.jsx("div",{className:(i||(i=b("stylex")))(l.heightSetter),children:x.map(function(a,c){a.linkProps;a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onPress"]);return j.createElement(b("CometTab.react"),babelHelpers["extends"]({},a,{key:c+"tab",ref:function(a){return t.current[c]=a},role:"tab",selected:a.selected,xstyle:[l.tab,a.xstyle]}))})}),j.jsxs("div",{className:i(l.tabsContainer,q),children:[j.jsx(b("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:v.map(function(a){return c[a]}).filter(Boolean),menuSize:f},popoverResource:k,children:A}),x.map(function(a,c){return j.createElement(b("CometTab.react"),babelHelpers["extends"]({},a,{containerRef:s,key:c+"tab",onHidden:function(a){w(function(b){return a?m(b,c):n(b,c)})},pressableXStyle:l.tab,ref:function(a){return t.current[c]=a},role:"tab",selected:a.selected}))})]})]})})}})}function m(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function n(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}}),null);
__d("TetraishEntityHeaderTabs.react",["CometTabs.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={entityHeaderTab:{height:"cb02d2ww",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var c=a.maxTabs,d=a.onMoreTabPress;a=a.tabs;return g.jsx(b("CometTabs.react"),{maxTabs:c,moreTabStyles:{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)"},moreTabXStyle:h.entityHeaderTab,onMoreTabPress:d,tabs:a.map(function(a){return babelHelpers["extends"]({},a,{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:h.entityHeaderTab})})})}}),null);
__d("CometEntityHeaderTabBar.react",["React","TetraishEntityHeaderTabs.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.maxTabs,d=a.tabs;a=a.tabsRouteTarget;var e=a===void 0?"self":a,f=d.findIndex(function(a){return a.isActive()});a=d.map(function(a,b){a.isActive;var c=a.linkProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["isActive","linkProps"]);return c?babelHelpers["extends"]({},a,{linkProps:babelHelpers["extends"]({},c,{routeTarget:e}),selected:b===f}):babelHelpers["extends"]({},a,{selected:b===f})});return g.jsx(b("TetraishEntityHeaderTabs.react"),{maxTabs:c,tabs:a})}}),null);
__d("TetraishEntityHeaderResponsiveRow.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={container:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},i=b("CometFeedWidthStyles").getEntityHeaderWidthStyles();function a(a,c){var d=a.children;a=a.xstyle;return g.jsx(b("BaseRow.react"),{align:"center",ref:c,xstyle:a,children:g.jsx(b("BaseRowItem.react"),{expanding:!0,xstyle:[h.container,i.container],children:d})})}c=g.forwardRef(a);e.exports=c}),null);
__d("TetraishEntityHeaderBottomRow.react",["BaseRow.react","BaseRowItem.react","React","TetraishEntityHeaderResponsiveRow.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={root:{backgroundColor:"cddn0xzi",boxShadow:"dsne8k7f"}};function a(a){var c=a.buttonGroup;a=a.tabs;return g.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{xstyle:h.root,children:g.jsxs(b("BaseRow.react"),{verticalAlign:"center",children:[g.jsx(b("BaseRowItem.react"),{expanding:!0,children:a}),g.jsx(b("BaseRowItem.react"),{children:c})]})})}}),null);
__d("TetraishEntityHeaderCoverPhotoRow.react",["BaseRow.react","BaseRowItem.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={background:{backgroundColor:"cddn0xzi"},coverPhoto:{display:"j83agx80",flexDirection:"cbu4d94t"}};function a(a){var c=a.coverPhoto,d=a.minHeight;a=a.showBackground;a=a===void 0?!0:a;return g.jsx(b("BaseRow.react"),{align:"center",xstyle:a&&h.background,children:g.jsx(b("BaseRowItem.react"),{expanding:!0,style:d!=null?{minHeight:d}:void 0,xstyle:h.coverPhoto,children:c})})}}),null);
__d("TetraishEntityHeaderDivider.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.jsx("div",{className:"l6v480f0"})}}),null);
__d("TetraishEntityStickyHeader.react",["BaseRow.react","BaseRowItem.react","CometEntityHeaderStickyBar.react","CometStickyHeader.react","React","TetraishEntityHeaderResponsiveRow.react","TetraListCell.react","stylex","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={headerHiddenByDefault:{display:"j83agx80",flexDirection:"cbu4d94t",height:"do00u71z",justifyContent:"bkfpd7mw"},headerHiddenByDefaultNotSticky:{pointerEvents:"hzruof5a",visibility:"kr9hpln1",zIndex:"enjifjd9"},headerHiddenByDefaultSticky:{position:"poy2od1o",width:"k4urcfbm"},row:{backgroundColor:"cddn0xzi",boxShadow:"dsne8k7f",flexShrink:"pfnyh3mw"}};function a(a){var c=a.headline,d=a.headlineLinkProps,e=a.headlineOnPress,f=a.hiddenByDefault;f=f===void 0?!1:f;var j=a.primaryContent,k=a.profilePhoto,l=a.profilePhotoShape,m=a.secondaryContent,n=a.url;a=babelHelpers.objectWithoutPropertiesLoose(a,["headline","headlineLinkProps","headlineOnPress","hiddenByDefault","primaryContent","profilePhoto","profilePhotoShape","secondaryContent","url"]);var o=g.useState(!1),p=o[0],q=o[1];o=g.useRef();var r=g.useRef(),s=g.useState(0),t=s[0],u=s[1];s=b("useResizeObserver")(function(a){t!==a.height&&u(a.height)});var v=function(a){q(a),r.current!=null&&r.current.setSticky(a)},w=g.useMemo(function(){return babelHelpers["extends"]({preventLocalNavigation:!0,url:n},d)},[d,n]);e=(e=e)!=null?e:i;return g.jsx(b("CometStickyHeader.react"),babelHelpers["extends"]({},a,{onStickyChange:v,ref:o,topOffset:f?t:0,xstyle:[f&&h.headerHiddenByDefault,f&&(p?h.headerHiddenByDefaultSticky:h.headerHiddenByDefaultNotSticky)],children:g.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{ref:s,xstyle:h.row,children:g.jsxs(b("BaseRow.react"),{verticalAlign:"center",children:[g.jsx(b("BaseRowItem.react"),{expanding:!0,children:g.jsx(b("CometEntityHeaderStickyBar.react"),{primaryContent:j,ref:r,stickyContent:g.jsx(b("BaseRow.react"),{align:"start",children:g.jsx(b("BaseRowItem.react"),{children:g.jsx(b("TetraListCell.react"),{addOnPrimary:k!=null?{shape:l,size:40,source:{uri:k},type:"profile-photo"}:void 0,headline:c,headlineLineLimit:1,level:3,linkProps:w,onPress:e})})})})}),m!=null&&g.jsx(b("BaseRowItem.react"),{verticalAlign:"center",children:typeof m==="function"?m({sticky:p}):m})]})})}))}function i(a){a.preventDefault(),scrollTo({behavior:"smooth",left:0,top:0})}}),null);
__d("TetraishEntityHeaderStickyBottomRow.react",["CometRelay","CometStickyHeader.react","React","TetraishEntityStickyHeader.react","TetraListCell.react","recoverableViolation","TetraishEntityHeaderStickyBottomRow_entity.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c,d=a.entity,e=a.headline;a=babelHelpers.objectWithoutPropertiesLoose(a,["entity","headline"]);d=b("CometRelay").useFragment(g!==void 0?g:g=b("TetraishEntityHeaderStickyBottomRow_entity.graphql"),d);c=(c=d.profile_picture_for_sticky_bar)==null?void 0:c.uri;var f=i(d),j=d.url;e=(e=e)!=null?e:d.name;return e==null?b("recoverableViolation")("Name of the entity cannot be null","comet_ui"):h.jsx(b("TetraishEntityStickyHeader.react"),babelHelpers["extends"]({},a,{headline:e,profilePhoto:c,profilePhotoShape:f,url:j}))}function i(a){switch(a.__typename){case"Page":case"User":case"Hashtag":return"circle";default:return"roundedRect"}}}),null);
__d("TetraishPageHeaderTopRow.react",["CometRow.react","CometRowItem.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={actorWrapper:{alignItems:"aovydwv3",display:"j83agx80",marginEnd:"wkznzc2l",marginTop:"dlu2gh78"},column:{flexBasis:"on77hlbc",paddingBottom:"ihqw7lf3"},root:{width:"k4urcfbm"},title:{marginTop:"tr9rh885"}};function a(a){var c=a.actor,d=a.auxiliary;a=a.titleBlock;return h.jsx("div",{className:(g||(g=b("stylex")))(i.root),children:h.jsxs(b("CometRow.react"),{paddingHorizontal:0,spacing:8,verticalAlign:"end",wrap:"forward",children:[h.jsx(b("CometRowItem.react"),{verticalAlign:"start",children:h.jsx("div",{className:g(i.actorWrapper),children:c})}),h.jsx(b("CometRowItem.react"),{expanding:!0,verticalAlign:"center",xstyle:i.column,children:h.jsx("div",{className:g(i.title),children:a})}),h.jsx(b("CometRowItem.react"),{useDeprecatedStyles:!0,xstyle:i.column,children:d})]})})}}),null);
__d("useCometOnScroll",["BaseScrollableAreaContext","HiddenSubtreePassiveContext","React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useContext(b("HiddenSubtreePassiveContext")),d=g.useContext(b("BaseScrollableAreaContext")),e=d[d.length-1];d=g.useCallback(function(){var a;a=(a=e==null?void 0:e.getDOMNode())!=null?a:window;return a==null?{left:0,top:0}:a instanceof HTMLElement?{left:a.scrollLeft,top:a.scrollTop}:{left:a.scrollX,top:a.scrollY}},[e]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var b,d=(b=e==null?void 0:e.getDOMNode())!=null?b:window;if(d==null)return;var f=function(){if(c.getCurrentState().hiddenOrBackgrounded)return;var b=d instanceof HTMLElement?{left:d.scrollLeft,top:d.scrollTop}:{left:d.scrollX,top:d.scrollY};a(b)},g=c.subscribeToChanges(function(a){a.hiddenOrBackgrounded||f()});d.addEventListener("scroll",f,{passive:!0});return function(){d.removeEventListener("scroll",f,{passive:!0}),g.remove()}},[e,c,a]);return d}}),null);
__d("CometResponsiveColumns.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","React","stylex"],(function(a,b,c,d,e,f){"use strict";f.Container=a;f.Column=c;var g,h=b("React"),i={container:{boxSizing:"rq0escxv",maxWidth:"d2edcug0",width:"k4urcfbm"},containerPadding:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},content:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"lhclo0ds",justifyContent:"taijpn5t"},negativeMargin:{marginTop:"sv5sfqaa",marginEnd:"o22cckgh",marginBottom:"obtkqiv7",marginStart:"fop5sh7t"},reverse:{flexWrap:"kbz25j0m"}},j=b("CometFeedWidthStyles").getResponsiveColumnWidthStyles();function a(a){var c=a.children,d=a.containerWidth,e=a.reverseColumns;e=e===void 0?!1:e;var f=a.testid;f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","containerWidth","reverseColumns","testid","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(i.container,d==="DEFAULT"&&j.container,d==="DEFAULT"&&i.containerPadding,f),"data-testid":void 0,children:h.jsx(b("BaseRow.react"),{xstyle:[i.content,e&&i.reverse,i.negativeMargin],children:c})}))}var k={base:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw",":empty":{display:"aghb5jc5"}}};function c(a){var c=a.children,d=a.columnType,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","columnType","xstyle"]);return h.jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{expanding:!0,useDeprecatedStyles:!0,xstyle:[k.base,d==="FEED"&&j.FEED,d==="FULL"&&j.FULL,d==="SECONDARY"&&j.SECONDARY,e],children:c}))}}),null);
__d("CometDirectionalDockingView.react",["requireCond","cr:1619204"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1619204");e.exports=a}),null);
__d("CometDirectionalDockingView.sticky.react",["CometViewportMarginsContext","JSScheduler","React","stylex","useCometOnScroll","useMergeRefs","useResizeObserver","$InternalEnum"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={main:{position:"lpgh02oy"}},j=b("$InternalEnum")({Down:0,Up:1}),k=Object.freeze({});function a(a){var c=a.top;c=c===void 0?16:c;var d=a.bottom;d=d===void 0?c:d;var e=a.children,f=a.tagName;f=f===void 0?"div":f;a=a.xstyle;var l=h.useContext(b("CometViewportMarginsContext")),m=c+l.top,n=d+l.bottom;c=h.useState(0);d=c[0];var o=c[1];l=h.useState(k);c=l[0];var p=l[1],q=h.useRef(null),r=h.useRef((l=window.innerHeight)!=null?l:null);l=h.useCallback(function(a){a=a.height;q.current=a},[]);l=b("useResizeObserver")(l);var s=h.useRef(0),t=h.useRef(null),u=h.useRef(null),v=h.useRef(null);l=b("useMergeRefs")(l,u);var w=h.useCallback(function(a){a=a.top;var c=s.current,d=t.current;c=a>c?j.Down:j.Up;var e=u.current,f=v.current;if(e==null||f==null)return;s.current=a;t.current=c;if(c===d)return;a=e.getBoundingClientRect();d=f.getBoundingClientRect();f=(e=r.current)!=null?e:window.innerHeight;e=a.height;var g=a.top-d.top,h;if(e<f-m-n)g=0,h={top:m};else switch(c){case j.Down:a=Math.round(Math.min(m,f-n-e));h={top:a};break;case j.Up:d=Math.round(Math.min(n,f-m-e));h={bottom:d}}b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate,function(){p(function(a){if(h.top!=null&&a.top!=null&&h.top===a.top)return a;return h.bottom!=null&&a.bottom!=null&&h.bottom===a.bottom?a:(a=h)!=null?a:k}),o(g)})},[n,m]),x=b("useCometOnScroll")(w);h.useEffect(function(){var a=function(){r.current=window.innerHeight;var a=t.current;t.current=null;var b=x();w({left:b.left,top:b.top+(a===j.Up?-1:1)})};window.addEventListener("resize",a);return function(){window.removeEventListener("resize",a)}},[x,w]);return h.jsxs(h.Fragment,{children:[h.jsx("div",{ref:v,style:{height:d}}),h.jsx(f,{className:(g||(g=b("stylex")))(i.main,a),ref:l,style:c,children:e})]})}}),null);
__d("TetraishEntityHeader.react",["React","TetraishEntityHeaderDivider.react","TetraishEntityHeaderResponsiveRow.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={background:{backgroundColor:"cddn0xzi"},rootWithDropShadow:{boxShadow:"dsne8k7f"},topRow:{paddingBottom:"ihqw7lf3"}};function a(a){var c=a.bottomRow,d=a.coverPhotoRow,e=a.notice;e=e===void 0?h.jsx(b("TetraishEntityHeaderDivider.react"),{}):e;var f=a.showBackground;f=f===void 0?!1:f;var j=a.showDropShadow;j=j===void 0?!1:j;var k=a.testid;k=a.topRow;return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:(g||(g=b("stylex")))(j&&i.rootWithDropShadow),"data-testid":void 0,children:[d,h.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{xstyle:[i.topRow,f&&i.background],children:k}),e!=null&&h.jsx(b("TetraishEntityHeaderResponsiveRow.react"),{xstyle:f&&i.background,children:e})]}),c]})}}),null);
__d("TetraishEntityPageHeader.react",["React","TetraishEntityHeader.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsx(b("TetraishEntityHeader.react"),babelHelpers["extends"]({},a,{showBackground:!0}))}}),null);