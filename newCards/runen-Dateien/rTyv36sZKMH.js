if (self.CavalryLogger) { CavalryLogger.start_js(["CAjA0"]); }

__d("CometMediaViewerPhotoActionsAddProductTagsMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},g=[f],h={alias:null,args:null,kind:"ScalarField",name:"serialized_frtp_identifiers",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},j=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],k=[d],l=[{kind:"Literal",name:"height",value:120},{kind:"Literal",name:"width",value:120}],m=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],n={kind:"InlineFragment",selections:k,type:"Node",abstractKey:"__isNode"},o={alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},p={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},q={alias:null,args:[{kind:"Literal",name:"height",value:140},{kind:"Literal",name:"width",value:140}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:m,storageKey:"profile_picture(height:140,width:140)"};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsAddProductTagsMutation",selections:[{alias:null,args:b,concreteType:"CreateProductTagResponsePayload",kind:"LinkedField",name:"create_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPhotoTagWrapper_photo"},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CometPhotoViewerTaggedProductsSection_photo"}],type:"Photo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsAddProductTagsMutation",selections:[{alias:null,args:b,concreteType:"CreateProductTagResponsePayload",kind:"LinkedField",name:"create_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,d,e,{kind:"InlineFragment",selections:g,type:"User",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Group",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[h,i,d],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_text_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_remove_tag",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"location",plural:!1,selections:j,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[h,i,d,{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[c,e,d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"CommerceMerchantSettings",kind:"LinkedField",name:"preferred_merchant_settings",plural:!1,selections:[{alias:null,args:null,concreteType:"ProductCatalog",kind:"LinkedField",name:"product_catalog",plural:!1,selections:k,storageKey:null},d],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{alias:null,args:l,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:m,storageKey:"profile_picture(height:120,width:120)"},f,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"shop_storefront",plural:!1,selections:[c,n],storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_add_tags",storageKey:null},{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:[d,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[d,o,e,p,q,f,{alias:null,args:null,kind:"ScalarField",name:"is_profile_selling_post",storageKey:null},{alias:"picture",args:l,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:m,storageKey:"profile_picture(height:120,width:120)"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[c,{alias:null,args:l,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:m,storageKey:"image(height:120,width:120)"},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"xy_location",plural:!1,selections:j,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductMatchData",kind:"LinkedField",name:"product_matches",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"product_box",plural:!1,selections:[{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[d,o,e,p,q,f],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"center_x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"center_y",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},d],storageKey:null}],type:"Photo",abstractKey:null},n,{kind:"InlineFragment",selections:k,type:"ComposerMediaTemplatePreview",abstractKey:null},{kind:"InlineFragment",selections:k,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:"2928567253912161",metadata:{},name:"CometMediaViewerPhotoActionsAddProductTagsMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMediaViewerPhotoActionsCropPhotoMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"projection_type",storageKey:null},g=[c],h=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsCropPhotoMutation",selections:[{alias:null,args:b,concreteType:"PhotoCropResponsePayload",kind:"LinkedField",name:"photo_crop",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"CometPhotoViewer_photo"},{args:null,kind:"FragmentSpread",name:"CometPhotoEditorEditedPhoto_photo"},{args:null,kind:"FragmentSpread",name:"EntPhotoCollageItem_media"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsCropPhotoMutation",selections:[{alias:null,args:b,concreteType:"PhotoCropResponsePayload",kind:"LinkedField",name:"photo_crop",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_add_tags",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[d,c,{kind:"InlineFragment",selections:[{alias:"user_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"additional_profile_has_taggable_products",args:null,kind:"ScalarField",name:"has_taggable_products",storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"page_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_admin",storageKey:null},{alias:"page_shop_has_taggable_products",args:null,kind:"ScalarField",name:"has_taggable_products",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},e],storageKey:null},{alias:null,args:null,concreteType:"PhotoEncoding",kind:"LinkedField",name:"photo_encodings",plural:!0,selections:[f,{alias:null,args:null,concreteType:"PhotosphereMetadata",kind:"LinkedField",name:"spherical_metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"cropped_area_image_height_pixels",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cropped_area_image_width_pixels",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"full_pano_height_pixels",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"full_pano_width_pixels",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"initial_horizontal_fov_degrees",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"initial_vertical_fov_degrees",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"initial_view_heading_degrees",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"initial_view_pitch_degrees",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max_tile_level",storageKey:null},c],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"immersive_photo_encodings",plural:!0,selections:[d,f,c,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"binary_cdn_uri",storageKey:null}],type:"PhotoEncoding3D",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:[c,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:g,storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"xy_location",plural:!1,selections:h,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},c],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"photo_viewer"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{documentName:"CometPhotoViewer_photo",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"photo_viewer")'},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"focus",plural:!1,selections:h,storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3648758581878169",metadata:{},name:"CometMediaViewerPhotoActionsCropPhotoMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},g=[f],h={alias:null,args:null,kind:"ScalarField",name:"serialized_frtp_identifiers",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},j=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],k=[d];f={alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},e,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:140},{kind:"Literal",name:"width",value:140}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"profile_picture(height:140,width:140)"},f],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsDeleteProductTagMutation",selections:[{alias:null,args:b,concreteType:"DeleteProductTagResponsePayload",kind:"LinkedField",name:"delete_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPhotoTagWrapper_photo"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsDeleteProductTagMutation",selections:[{alias:null,args:b,concreteType:"DeleteProductTagResponsePayload",kind:"LinkedField",name:"delete_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,d,e,{kind:"InlineFragment",selections:g,type:"User",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Group",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[h,i,d],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_text_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_remove_tag",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"location",plural:!1,selections:j,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[h,i,d,{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[c,e,d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"CommerceMerchantSettings",kind:"LinkedField",name:"preferred_merchant_settings",plural:!1,selections:[{alias:null,args:null,concreteType:"ProductCatalog",kind:"LinkedField",name:"product_catalog",plural:!1,selections:k,storageKey:null},d],storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_add_tags",storageKey:null},{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:[d,f,{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"xy_location",plural:!1,selections:j,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductMatchData",kind:"LinkedField",name:"product_matches",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"product_box",plural:!1,selections:[{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[f],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"center_x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"center_y",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},d],storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:k,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:k,type:"ComposerMediaTemplatePreview",abstractKey:null},{kind:"InlineFragment",selections:k,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3388201637928888",metadata:{},name:"CometMediaViewerPhotoActionsDeleteProductTagMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMediaViewerPhotoActionsEditMessageMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={kind:"TypeDiscriminator",abstractKey:"__isEntity"},e={alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={kind:"InlineFragment",selections:[f,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},h={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},i={kind:"InlineFragment",selections:[f],type:"Node",abstractKey:"__isNode"},j={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},m=[{kind:"Literal",name:"delight_surface",value:"COMMENT"}];m={alias:null,args:null,concreteType:"DelightAtRange",kind:"LinkedField",name:"delight_ranges",plural:!0,selections:[j,k,{alias:null,args:null,concreteType:"TextDelightCampaign",kind:"LinkedField",name:"campaign",plural:!1,selections:[c,{alias:null,args:m,concreteType:"TextDelightStylePair",kind:"LinkedField",name:"delight_styles",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:'delight_styles(delight_surface:"COMMENT")'},{alias:null,args:m,concreteType:"DelightsAnimation",kind:"LinkedField",name:"delight_asset",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"animation_uri",storageKey:null}],storageKey:'delight_asset(delight_surface:"COMMENT")'},f],storageKey:null}],storageKey:null};var n={alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[j,k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[c,{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},i],storageKey:null}],storageKey:null},o={alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},p={alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[f,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null},i],storageKey:null}],storageKey:null},q={alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},r={kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},s={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"Page",abstractKey:null},t={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},u={kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},v={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},w={kind:"InlineFragment",selections:[v,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};v={kind:"InlineFragment",selections:[v,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null};var x={alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},y={alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},z=[m,n,o,p,{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,d,e,q,g,r,s,h,t,u,w,v,i],storageKey:null},x,j,k],storageKey:null},y,l];m={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[m,n,o,p,{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[q,r,s,t,u,w,v],storageKey:null},x],storageKey:null},y],storageKey:null};n={alias:null,args:[{kind:"Literal",name:"supported",value:["TextWithEntities","FBMarkdownCommentBody"]}],concreteType:null,kind:"LinkedField",name:"message_preferred_body",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{documentName:"CometMediaViewerDescriptionSection_media",fragmentName:"CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities",fragmentPropName:"textWithEntities",kind:"ModuleImport"}],type:"TextWithEntities",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometMediaViewerDescriptionSection_media",fragmentName:"CometMediaViewerDescriptionSectionComposedTextWithEntities_composedTextWithEntities",fragmentPropName:"composedTextWithEntities",kind:"ModuleImport"}],type:"FBMarkdownCommentBody",abstractKey:null}],storageKey:'message_preferred_body(supported:["TextWithEntities","FBMarkdownCommentBody"])'};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsEditMessageMutation",selections:[{alias:null,args:b,concreteType:"PhotoEditMessageResponsePayload",kind:"LinkedField",name:"photo_edit_message",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelayDEPRECATED_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedMessageTextWithEntities_textWithEntities"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometMediaViewerDescriptionSection_media"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsEditMessageMutation",selections:[{alias:null,args:b,concreteType:"PhotoEditMessageResponsePayload",kind:"LinkedField",name:"photo_edit_message",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,d,e,g,{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelayDEPRECATED_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelayDEPRECATED_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"Page",abstractKey:null},h,i],storageKey:null},j,k],storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:z,storageKey:null},f],storageKey:null},f,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"attached_comment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"preferred_body",plural:!1,selections:[c,{kind:"InlineFragment",selections:z,type:"TextWithEntities",abstractKey:null}],storageKey:null},f],storageKey:null},m,n],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[m,n],type:"Video",abstractKey:null}],type:"Media",abstractKey:"__isMedia"}],storageKey:null}],storageKey:null}]},params:{id:"3138803242909692",metadata:{},name:"CometMediaViewerPhotoActionsEditMessageMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMediaViewerPhotoActions",["fbt","CometRelay","WebPixelRatio","cometPushToast","recoverableViolation","CometMediaViewerPhotoActionsEditMessageMutation.graphql","CometMediaViewerPhotoActionsAddProductTagsMutation.graphql","CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql","CometMediaViewerPhotoActionsCropPhotoMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";f.edit=a;f.addProductTags=c;f.deleteProductTag=d;f.cropPhoto=e;var h,i,j,k,l=h!==void 0?h:h=b("CometMediaViewerPhotoActionsEditMessageMutation.graphql");function a(a){var c=a.environment,d=a.input,e=a.onCompleted,f=a.onError,h=d.id,i=d.message;a={message:i,photo_id:h};function j(a){a=(a=a.get(h))==null?void 0:a.getLinkedRecord("message");if(a==null)return;a.setValue(i.text,"text")}b("CometRelay").commitMutation(c,{mutation:l,onCompleted:e,onError:function(a){f();b("cometPushToast").cometPushErrorToast({message:g._("Foto kann nicht bearbeitet werden")},4e3);b("recoverableViolation")(a.message,"comet_ui");return},optimisticUpdater:j,variables:{input:a,scale:b("WebPixelRatio").get()}})}var m=i!==void 0?i:i=b("CometMediaViewerPhotoActionsAddProductTagsMutation.graphql");function c(a){var c=a.environment;a=a.input;b("CometRelay").commitMutation(c,{mutation:m,onCompleted:function(){b("cometPushToast").cometPushSimpleToast(g._("Produkt wurde markiert"),4e3)},onError:function(a){b("cometPushToast").cometPushErrorToast({message:g._("Markieren von Produkten im Foto nicht m\u00f6glich")},4e3)},variables:{input:a,scale:b("WebPixelRatio").get()}})}var n=j!==void 0?j:j=b("CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql");function d(a){var c=a.environment,d=a.input,e=a.onError;b("CometRelay").commitMutation(c,{mutation:n,onCompleted:function(){b("cometPushToast").cometPushSimpleToast(g._("Produktmarkierung entfernt"),4e3)},onError:function(a){b("cometPushToast").cometPushErrorToast({message:g._("Markierung kann nicht gel\u00f6scht werden")},4e3),e()},variables:{input:d,scale:b("WebPixelRatio").get()}})}var o=k!==void 0?k:k=b("CometMediaViewerPhotoActionsCropPhotoMutation.graphql");function e(a){var c=a.environment,d=a.input,e=a.onCompleted,f=a.onError;b("CometRelay").commitMutation(c,{mutation:o,onCompleted:e,onError:function(a){b("cometPushToast").cometPushErrorToast({message:g._("Foto kann nicht zugeschnitten werden")},4e3),f&&f()},variables:{input:d,scale:b("WebPixelRatio").get()}})}}),null);
__d("LiveShoppingViewerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743808");c=b("FalcoLoggerInternal").create("live_shopping_viewer",a);e.exports=c}),null);