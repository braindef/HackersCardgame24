if (self.CavalryLogger) { CavalryLogger.start_js(["ETtIH"]); }

__d("CometStoryAggregatedUsersSuffixDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3644368755651942",metadata:{},name:"CometStoryAggregatedUsersSuffixDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometStoryAggregatedUsersSuffixDialog.entrypoint",["JSResourceForInteraction","WebPixelRatio","CometStoryAggregatedUsersSuffixDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.storyID;a=a.storyRenderLocation;return{queries:{queryReference:{parameters:b("CometStoryAggregatedUsersSuffixDialogQuery$Parameters"),variables:{id:c,renderLocation:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometStoryAggregatedUsersSuffixDialog.react").__setRef("CometStoryAggregatedUsersSuffixDialog.entrypoint")};e.exports=a}),null);
__d("CometFeedStorySuffixAggregatedUsersRenderer",["CometEntryPointDialogTrigger.react","CometLink.react","CometStoryAggregatedUsersSuffixDialog.entrypoint","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){return function(d){if(a==null||c==null){b("recoverableViolation")("story ID or render location were null when rendering aggregated users link in story title","comet_ui");return d}return g.jsx(b("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:b("CometStoryAggregatedUsersSuffixDialog.entrypoint"),otherProps:{},preloadParams:{storyID:a,storyRenderLocation:c},children:function(a){return g.jsx(b("CometLink.react"),{onClick:a,children:d})}})}};e.exports=a}),null);