// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/identification/templates/DataRepresentation.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n    data-dojo-props\x3d"target:\'gmd:spatialRepresentationType\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.MD_DataIdentification.spatialRepresentationType}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/MD_SpatialRepresentationTypeCode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e  \r\n  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:spatialResolution\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.MD_DataIdentification.spatialResolution}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:MD_Resolution\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmd:equivalentScale\',\r\n            label:\'${i18nIso.MD_Resolution.equivalentScale}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n            data-dojo-props\x3d"target:\'gmd:MD_RepresentativeFraction\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'gmd:denominator\',\r\n                label:\'${i18nIso.MD_RepresentativeFraction.denominator}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n                data-dojo-props\x3d"target:\'gco:Integer\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'gmd:distance\',label:\'${i18nIso.MD_Resolution.distance}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n            data-dojo-props\x3d"target:\'gco:Distance\',label:\'${i18nIso.MD_Resolution.distance}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n              data-dojo-props\x3d"target:\'uom\',minOccurs:1,label:\'${i18nIso.Length.uom}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                    data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                    data-dojo-props\x3d"label:\'${i18nIso.Length.km}\',value:\'km\'"\x3e\x3c/div\x3e    \r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                    data-dojo-props\x3d"label:\'${i18nIso.Length.m}\',value:\'m\'"\x3e\x3c/div\x3e    \r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                    data-dojo-props\x3d"label:\'${i18nIso.Length.mi}\',value:\'mi\'"\x3e\x3c/div\x3e    \r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                    data-dojo-props\x3d"label:\'${i18nIso.Length.ft}\',value:\'ft\'"\x3e\x3c/div\x3e                                                                                    \r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n      \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/identification/DataRepresentation","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/Element ../../../../form/ElementChoice ../../../../form/InputNumber ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ./MD_SpatialRepresentationTypeCode dojo/text!./templates/DataRepresentation.html ../../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,s,t,u,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.identification.DataRepresentation",a,f);return a});