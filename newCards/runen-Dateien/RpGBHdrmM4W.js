if (self.CavalryLogger) { CavalryLogger.start_js(["hWNHS"]); }

__d("useIsTouchDevice",["useMatchMedia"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){return b("useMatchMedia")("(hover: none) and (pointer: coarse)")}}),null);
__d("BaseHScroll.react",["fbt","BaseAccessibleElement_DEPRECATED.react","BaseScrollableArea.react","CometPressable.react","CometTrackingNodeProvider.react","HiddenSubtreePassiveContext","Locale","React","debounce","recoverableViolation","stylex","useCometUniqueID","useIsTouchDevice","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={collapseMargins:{paddingBottom:"ojkyduve",paddingTop:"ggysqto6"},hidden:{opacity:"b5wmifdl"},hideHorizontalScrollbar:{marginBottom:"c8r2yrt7",paddingBottom:"dy7m38rt"},hideHorizontalScrollbarContainer:{overflowY:"stjgntxs"},itemsContainer:{display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"owycx6da"},peekMask:{bottom:"i09qtzwb",display:"j83agx80",end:"n7fi1qx3",height:"datstx6m",opacity:"pedkr2u6",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",transitionDuration:"kmdw4o4n",transitionProperty:"art1omkt",transitionTimingFunction:"heur4gxb",width:"k4urcfbm",zIndex:"tkr6xdv7"},peekMaskButton:{backgroundColor:"g5ia77u1",borderTop:"qu0x051f",borderEnd:"esr5mh6w",borderBottom:"e9989ue4",borderStart:"r7d6kgcz",color:"gmql0nx0",cursor:"nhd2j8a9",display:"a8c37x1j",fontFamily:"ihxqhq3m",fontSize:"l94mrbxd",lineHeight:"aenfhxwr",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",textAlign:"i1ao9s8h",textDecoration:"myohyog2",width:"k4urcfbm",":hover":{color:"ksdfmwjs",textDecoration:"gofk2cf1"},":active":{transform:"tm8avpzi",transitionDuration:"q3fhxehl"}},positionRelative:{position:"l9j0dhe7"},root:{display:"j83agx80",flexDirection:"btwxx1t3",overflowY:"stjgntxs"},rootWrapper:{maxWidth:"d2edcug0",position:"l9j0dhe7",zIndex:"du4w35lb"},scrollAnimation:{transitionDuration:"kmdw4o4n",transitionProperty:"flx89l3n",transitionTimingFunction:"heur4gxb"}},k=250;function a(a){var c=a.accessibilityLabel,d=a.children,e=a.extendVisibilityBottom,f=a.extendVisibilityTop,l=a.horizontalSnapPadding;l=l===void 0?0:l;var m=a.horizontalSpacing,n=m===void 0?0:m;m=a.itemsToScroll;var o=m===void 0?1:m;m=a.leftArrow;var p=a.onIndexChange,q=a.peekMask,r=a.rightArrow,s=a.scrollType,t=a.snapPosition;t=t===void 0?"start":t;var u=a.startIndex;a=a.testid;u!=null&&(u<0||u>=i.Children.toArray(d).length)&&b("recoverableViolation")("The start index is not valid","comet_ui");var v=b("Locale").isRTL(),w=q!=null,x=i.useRef(null),y=i.useRef(null);a=i.useState(0);var z=a[0],A=a[1];a=i.useState(0);var B=a[0],C=a[1];a=i.useState(0);var D=a[0],E=a[1];a=i.useState(!1);var F=a[0],G=a[1];i.useEffect(function(){u!=null&&A(u)},[u]);a=i.useState(!1);var H=a[0],I=a[1];a=i.useCallback(function(){return w&&G(!0)},[w]);var J=i.useCallback(function(){return w&&G(!1)},[w]),K=b("useIsTouchDevice")(),L=s==="touch"||s==="auto"&&K;s=i.useCallback(function(a){a!=null&&C(a.offsetWidth),y.current=a},[]);var M=i.useContext(b("HiddenSubtreePassiveContext")),N=i.useCallback(b("debounce")(function(a){return a!=null&&!M.getCurrentState().hidden&&E(a.width)},k),[]);i.useEffect(function(){return function(){return N.reset()}},[N]);var O=b("useResizeObserver")(N);K=i.useCallback(function(a){a!=null&&E(a.offsetWidth),O(a)},[O]);i.useLayoutEffect(function(){if(!L){var a=x.current&&x.current.getDOMNode();a!=null&&(v?a.scrollLeft=B:a.scrollLeft=0)}},[L,B,v]);i.useLayoutEffect(function(){var a;C((a=(a=y.current)==null?void 0:a.offsetWidth)!=null?a:0)});var P=i.Children.toArray(d).length,Q=B/P;t=t==="center"?D%Q/2:l;var R=Math.floor(D/Q),S=v?1:-1,T=0-l,U=B-D+l;Q=Math.max(Math.min(Q*z-t,U),T);var V=z>0,W=z<P-1&&Q<U,X=i.useCallback(function(a){A(a),p&&p(a)},[p,A]);t=i.useCallback(function(){H!==!0&&I(!0);var a=Math.max(z-o,0);X(a)},[H,z,o,X]);T=i.useCallback(function(){H!==!0&&I(!0);var a=W?Math.min(z+o,P-1):z;X(a)},[H,z,W,P,o,X]);U=v?W:V;var Y=v?V:W,Z=v?T:t,$=v?t:T;m=!L&&m!=null&&m(Z,U);Z=!L&&r!=null&&r($,Y);var aa=i.jsx("div",{className:(h||(h=b("stylex")))(j.peekMask,!F||!V?j.hidden:null),children:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:v?411:410,children:i.jsx(b("CometPressable.react"),{display:"inline",label:g._("\u201eZur\u00fcck\u201c-Pfeil"),onPress:t,overlayDisabled:!0,xstyle:j.peekMaskButton,children:q})})}),ba=i.jsx("div",{className:h(j.peekMask,!F||!W?j.hidden:null),children:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:v?410:411,children:i.jsx(b("CometPressable.react"),{display:"inline",label:g._("\u201eVorw\u00e4rts\u201c-Pfeil"),onPress:T,overlayDisabled:!0,xstyle:j.peekMaskButton,children:q})})});U=i.Children.toArray(d).map(function(a,c){return i.jsxs("li",{className:(h||(h=b("stylex")))(j.positionRelative),style:{marginLeft:n,marginRight:n},children:[a,w&&!L&&c<z&&V&&aa,w&&!L&&c>=z+R&&W&&ba]},a.key)});r=b("useCometUniqueID")();return i.jsxs("div",{className:h(j.rootWrapper,L?j.hideHorizontalScrollbarContainer:null),onMouseEnter:a,onMouseLeave:J,ref:K,children:[v&&Z,m,!v&&Z,i.jsx("div",{className:h(j.collapseMargins),children:i.jsx("div",{style:{marginBottom:-e-1,marginTop:-f-1},children:i.jsxs(b("BaseScrollableArea.react"),{"aria-labelledby":r,horizontal:L,ref:x,testid:void 0,vertical:!1,xstyle:[j.root,L&&j.hideHorizontalScrollbar],children:[i.jsx(b("BaseAccessibleElement_DEPRECATED.react"),{id:r,children:c}),i.jsx("ul",{className:h(j.itemsContainer,H?j.scrollAnimation:null,j.positionRelative),ref:s,style:{paddingBottom:e,paddingLeft:L?l:0,paddingRight:L?l:0,paddingTop:f,transform:D>0&&!L?"translateX("+S*Q+"px)":null},children:U})]})})})]})}}),null);
__d("BaseHScrollChild.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=a.children;a=a.width;return g.jsx("div",{className:"datstx6m",style:{width:a},children:b})}}),null);
__d("CometHScrollChild.react",["BaseHScrollChild.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsx(b("BaseHScrollChild.react"),babelHelpers["extends"]({},a))}}),null);
__d("CometHScroll.react",["ix","fbt","BaseHScroll.react","CometAdPreviewContext","CometHScrollChild.react","CometTrackingNodeProvider.react","React","TetraCircleButton.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");function a(a){var c=a.accessibilityLabel,d=a.arrowSize,e=d===void 0?48:d;d=a.children;var f=a.extendVisibilityBottom;f=f===void 0?16:f;var k=a.extendVisibilityTop;k=k===void 0?0:k;var l=a.horizontalSnapPadding,m=a.horizontalSpacing;m=m===void 0?0:m;var n=a.itemsToScroll,o=a.onIndexChange,p=a.peekMasking;p=p===void 0?!1:p;var q=a.scrollType;q=q===void 0?"auto":q;var r=a.snapPosition;a=a.startIndex;var s=b("CometAdPreviewContext").useCometAdPreviewContext(),t=j.jsx("div",{className:"k4urcfbm kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 l8rlqa9s datstx6m n7fi1qx3 rq0escxv i09qtzwb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ovq5dppa"}),u=32-e/2;return j.jsx(b("BaseHScroll.react"),{accessibilityLabel:c,extendVisibilityBottom:f,extendVisibilityTop:k,horizontalSnapPadding:l,horizontalSpacing:m,itemsToScroll:n,leftArrow:function(a,c){return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe(s?{"pointer-events-1":"oqq733wu"}:{},{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","box-shadow-1":"fpf4h9qb","display-1":"a8c37x1j","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","top-1":"rk01pc8j","transform-0.1":"ke6wolob","transition-0.1":"d4ybr6tg","visibility-1":"n1dktuyu","z-index-1":"tkr6xdv7"},c?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),"data-testid":void 0,style:{left:u},children:j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:410,children:j.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("492488"),20),label:h._("Pfeil nach links"),onPress:a,size:e,type:"overlay"})})})},onIndexChange:o,peekMask:p?t:null,rightArrow:function(a,c){return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe(s?{"pointer-events-1":"oqq733wu"}:{},{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","box-shadow-1":"fpf4h9qb","display-1":"a8c37x1j","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","top-1":"rk01pc8j","transform-0.1":"ke6wolob","transition-0.1":"d4ybr6tg","visibility-1":"n1dktuyu","z-index-1":"tkr6xdv7"},c?null:{"opacity-1":"b5wmifdl","visibility-1":"kr9hpln1"}),"data-testid":void 0,style:{right:u},children:j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:411,children:j.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("492536"),20),label:h._("Pfeil nach rechts"),onPress:a,size:e,type:"overlay"})})})},scrollType:q,snapPosition:r,startIndex:a,children:d})}}),null);