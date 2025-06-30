var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_NEODEM5m_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NEO DEM 5m<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NEODEM5m_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16432666.775751, -741099.226436, 16448357.102877, -728275.448246]
        })
    });
var format_Contour_4 = new ol.format.GeoJSON();
var features_Contour_4 = format_Contour_4.readFeatures(json_Contour_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour_4.addFeatures(features_Contour_4);
var lyr_Contour_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour_4, 
                style: style_Contour_4,
                popuplayertitle: 'Contour',
                interactive: true,
                title: '<img src="styles/legend/Contour_4.png" /> Contour'
            });
var format_CatchmentandRivers_5 = new ol.format.GeoJSON();
var features_CatchmentandRivers_5 = format_CatchmentandRivers_5.readFeatures(json_CatchmentandRivers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatchmentandRivers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatchmentandRivers_5.addFeatures(features_CatchmentandRivers_5);
var lyr_CatchmentandRivers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatchmentandRivers_5, 
                style: style_CatchmentandRivers_5,
                popuplayertitle: 'Catchment and Rivers',
                interactive: true,
    title: 'Catchment and Rivers<br />\
    <img src="styles/legend/CatchmentandRivers_5_0.png" /> Bagec<br />\
    <img src="styles/legend/CatchmentandRivers_5_1.png" /> Bahaning<br />\
    <img src="styles/legend/CatchmentandRivers_5_2.png" /> Baring<br />\
    <img src="styles/legend/CatchmentandRivers_5_3.png" /> Gononvo<br />\
    <img src="styles/legend/CatchmentandRivers_5_4.png" /> Mozu<br />\
    <img src="styles/legend/CatchmentandRivers_5_5.png" /> Ororong<br />\
    <img src="styles/legend/CatchmentandRivers_5_6.png" /> Qararang<br />\
    <img src="styles/legend/CatchmentandRivers_5_7.png" /> Qazec (b)<br />\
    <img src="styles/legend/CatchmentandRivers_5_8.png" /> Qazec (c)<br />\
    <img src="styles/legend/CatchmentandRivers_5_9.png" /> Qohoc<br />\
    <img src="styles/legend/CatchmentandRivers_5_10.png" /> Toko<br />\
    <img src="styles/legend/CatchmentandRivers_5_11.png" /> Uwac<br />\
    <img src="styles/legend/CatchmentandRivers_5_12.png" /> Ziwazigo<br />\
    <img src="styles/legend/CatchmentandRivers_5_13.png" /> Zomborong<br />\
    <img src="styles/legend/CatchmentandRivers_5_14.png" /> <br />' });
var format_TargetvillageofRoadConnection_6 = new ol.format.GeoJSON();
var features_TargetvillageofRoadConnection_6 = format_TargetvillageofRoadConnection_6.readFeatures(json_TargetvillageofRoadConnection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetvillageofRoadConnection_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetvillageofRoadConnection_6.addFeatures(features_TargetvillageofRoadConnection_6);
var lyr_TargetvillageofRoadConnection_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TargetvillageofRoadConnection_6, 
                style: style_TargetvillageofRoadConnection_6,
                popuplayertitle: 'Target village of Road Connection',
                interactive: true,
    title: 'Target village of Road Connection<br />\
    <img src="styles/legend/TargetvillageofRoadConnection_6_0.png" /> Hapohondong<br />\
    <img src="styles/legend/TargetvillageofRoadConnection_6_1.png" /> Kangaruo<br />' });
var format_ExistingCulvertCondition_7 = new ol.format.GeoJSON();
var features_ExistingCulvertCondition_7 = format_ExistingCulvertCondition_7.readFeatures(json_ExistingCulvertCondition_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingCulvertCondition_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingCulvertCondition_7.addFeatures(features_ExistingCulvertCondition_7);
var lyr_ExistingCulvertCondition_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingCulvertCondition_7, 
                style: style_ExistingCulvertCondition_7,
                popuplayertitle: 'Existing Culvert - Condition',
                interactive: true,
                title: '<img src="styles/legend/ExistingCulvertCondition_7.png" /> Existing Culvert - Condition'
            });
var format_ExistingRoadInundationandDeteriorateLevelofRisk_8 = new ol.format.GeoJSON();
var features_ExistingRoadInundationandDeteriorateLevelofRisk_8 = format_ExistingRoadInundationandDeteriorateLevelofRisk_8.readFeatures(json_ExistingRoadInundationandDeteriorateLevelofRisk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRoadInundationandDeteriorateLevelofRisk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRoadInundationandDeteriorateLevelofRisk_8.addFeatures(features_ExistingRoadInundationandDeteriorateLevelofRisk_8);
var lyr_ExistingRoadInundationandDeteriorateLevelofRisk_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRoadInundationandDeteriorateLevelofRisk_8, 
                style: style_ExistingRoadInundationandDeteriorateLevelofRisk_8,
                popuplayertitle: 'Existing Road Inundation and Deteriorate Level of Risk',
                interactive: true,
    title: 'Existing Road Inundation and Deteriorate Level of Risk<br />\
    <img src="styles/legend/ExistingRoadInundationandDeteriorateLevelofRisk_8_0.png" /> Very High Risk of Inundation and Deteriorate<br />\
    <img src="styles/legend/ExistingRoadInundationandDeteriorateLevelofRisk_8_1.png" /> High Risk of Inundation and Deteriorate<br />\
    <img src="styles/legend/ExistingRoadInundationandDeteriorateLevelofRisk_8_2.png" /> Medium Risk of Inundation and Deteriorate<br />\
    <img src="styles/legend/ExistingRoadInundationandDeteriorateLevelofRisk_8_3.png" /> No risk of Inundation and Deteriorate<br />' });
var format_ExistingRoadLevelofLandslideRisk_9 = new ol.format.GeoJSON();
var features_ExistingRoadLevelofLandslideRisk_9 = format_ExistingRoadLevelofLandslideRisk_9.readFeatures(json_ExistingRoadLevelofLandslideRisk_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRoadLevelofLandslideRisk_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRoadLevelofLandslideRisk_9.addFeatures(features_ExistingRoadLevelofLandslideRisk_9);
var lyr_ExistingRoadLevelofLandslideRisk_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRoadLevelofLandslideRisk_9, 
                style: style_ExistingRoadLevelofLandslideRisk_9,
                popuplayertitle: 'Existing Road Level of Landslide Risk',
                interactive: true,
    title: 'Existing Road Level of Landslide Risk<br />\
    <img src="styles/legend/ExistingRoadLevelofLandslideRisk_9_0.png" /> High Risk of Land Slide<br />\
    <img src="styles/legend/ExistingRoadLevelofLandslideRisk_9_1.png" /> Medium Risk of Landslide<br />\
    <img src="styles/legend/ExistingRoadLevelofLandslideRisk_9_2.png" /> No Risk of Landslide<br />\
    <img src="styles/legend/ExistingRoadLevelofLandslideRisk_9_3.png" /> Very High Risk of Landslide<br />' });
var format_Roadwidth5m_10 = new ol.format.GeoJSON();
var features_Roadwidth5m_10 = format_Roadwidth5m_10.readFeatures(json_Roadwidth5m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadwidth5m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadwidth5m_10.addFeatures(features_Roadwidth5m_10);
var lyr_Roadwidth5m_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadwidth5m_10, 
                style: style_Roadwidth5m_10,
                popuplayertitle: 'Road width 5m',
                interactive: true,
                title: '<img src="styles/legend/Roadwidth5m_10.png" /> Road width 5m'
            });
var format_ExistingRoadwidth20m_split_11 = new ol.format.GeoJSON();
var features_ExistingRoadwidth20m_split_11 = format_ExistingRoadwidth20m_split_11.readFeatures(json_ExistingRoadwidth20m_split_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRoadwidth20m_split_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRoadwidth20m_split_11.addFeatures(features_ExistingRoadwidth20m_split_11);
var lyr_ExistingRoadwidth20m_split_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRoadwidth20m_split_11, 
                style: style_ExistingRoadwidth20m_split_11,
                popuplayertitle: 'Existing Road width 20m_split',
                interactive: true,
                title: '<img src="styles/legend/ExistingRoadwidth20m_split_11.png" /> Existing Road width 20m_split'
            });
var format_RiversandCreek_12 = new ol.format.GeoJSON();
var features_RiversandCreek_12 = format_RiversandCreek_12.readFeatures(json_RiversandCreek_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversandCreek_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversandCreek_12.addFeatures(features_RiversandCreek_12);
var lyr_RiversandCreek_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversandCreek_12, 
                style: style_RiversandCreek_12,
                popuplayertitle: 'Rivers and Creek',
                interactive: true,
                title: '<img src="styles/legend/RiversandCreek_12.png" /> Rivers and Creek'
            });
var format_ExistingRouteGradient_slope_13 = new ol.format.GeoJSON();
var features_ExistingRouteGradient_slope_13 = format_ExistingRouteGradient_slope_13.readFeatures(json_ExistingRouteGradient_slope_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRouteGradient_slope_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRouteGradient_slope_13.addFeatures(features_ExistingRouteGradient_slope_13);
var lyr_ExistingRouteGradient_slope_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRouteGradient_slope_13, 
                style: style_ExistingRouteGradient_slope_13,
                popuplayertitle: 'Existing Route Gradient_slope',
                interactive: true,
                title: '<img src="styles/legend/ExistingRouteGradient_slope_13.png" /> Existing Route Gradient_slope'
            });
var format_CatchmentBoundary_14 = new ol.format.GeoJSON();
var features_CatchmentBoundary_14 = format_CatchmentBoundary_14.readFeatures(json_CatchmentBoundary_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatchmentBoundary_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatchmentBoundary_14.addFeatures(features_CatchmentBoundary_14);
var lyr_CatchmentBoundary_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatchmentBoundary_14, 
                style: style_CatchmentBoundary_14,
                popuplayertitle: 'Catchment Boundary',
                interactive: true,
                title: '<img src="styles/legend/CatchmentBoundary_14.png" /> Catchment Boundary'
            });
var format_GonovoRiverCatchment_15 = new ol.format.GeoJSON();
var features_GonovoRiverCatchment_15 = format_GonovoRiverCatchment_15.readFeatures(json_GonovoRiverCatchment_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GonovoRiverCatchment_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GonovoRiverCatchment_15.addFeatures(features_GonovoRiverCatchment_15);
var lyr_GonovoRiverCatchment_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GonovoRiverCatchment_15, 
                style: style_GonovoRiverCatchment_15,
                popuplayertitle: 'Gonovo River Catchment',
                interactive: true,
                title: '<img src="styles/legend/GonovoRiverCatchment_15.png" /> Gonovo River Catchment'
            });
var format_riversandcreeks_16 = new ol.format.GeoJSON();
var features_riversandcreeks_16 = format_riversandcreeks_16.readFeatures(json_riversandcreeks_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_riversandcreeks_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_riversandcreeks_16.addFeatures(features_riversandcreeks_16);
var lyr_riversandcreeks_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_riversandcreeks_16, 
                style: style_riversandcreeks_16,
                popuplayertitle: 'rivers and creeks',
                interactive: true,
                title: '<img src="styles/legend/riversandcreeks_16.png" /> rivers and creeks'
            });
var format_Road_CL_17 = new ol.format.GeoJSON();
var features_Road_CL_17 = format_Road_CL_17.readFeatures(json_Road_CL_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_CL_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_CL_17.addFeatures(features_Road_CL_17);
var lyr_Road_CL_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_CL_17, 
                style: style_Road_CL_17,
                popuplayertitle: 'Road_CL',
                interactive: true,
                title: '<img src="styles/legend/Road_CL_17.png" /> Road_CL'
            });
var format_ExistingRouteChainage_18 = new ol.format.GeoJSON();
var features_ExistingRouteChainage_18 = format_ExistingRouteChainage_18.readFeatures(json_ExistingRouteChainage_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRouteChainage_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRouteChainage_18.addFeatures(features_ExistingRouteChainage_18);
var lyr_ExistingRouteChainage_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRouteChainage_18, 
                style: style_ExistingRouteChainage_18,
                popuplayertitle: 'Existing Route Chainage',
                interactive: true,
                title: '<img src="styles/legend/ExistingRouteChainage_18.png" /> Existing Route Chainage'
            });
var format_GonovoRiverCatchmentBoundary_19 = new ol.format.GeoJSON();
var features_GonovoRiverCatchmentBoundary_19 = format_GonovoRiverCatchmentBoundary_19.readFeatures(json_GonovoRiverCatchmentBoundary_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GonovoRiverCatchmentBoundary_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GonovoRiverCatchmentBoundary_19.addFeatures(features_GonovoRiverCatchmentBoundary_19);
var lyr_GonovoRiverCatchmentBoundary_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GonovoRiverCatchmentBoundary_19, 
                style: style_GonovoRiverCatchmentBoundary_19,
                popuplayertitle: 'Gonovo River Catchment Boundary',
                interactive: true,
                title: '<img src="styles/legend/GonovoRiverCatchmentBoundary_19.png" /> Gonovo River Catchment Boundary'
            });
var format_Gonovo_Catchment_Point_location_20 = new ol.format.GeoJSON();
var features_Gonovo_Catchment_Point_location_20 = format_Gonovo_Catchment_Point_location_20.readFeatures(json_Gonovo_Catchment_Point_location_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gonovo_Catchment_Point_location_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gonovo_Catchment_Point_location_20.addFeatures(features_Gonovo_Catchment_Point_location_20);
var lyr_Gonovo_Catchment_Point_location_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gonovo_Catchment_Point_location_20, 
                style: style_Gonovo_Catchment_Point_location_20,
                popuplayertitle: 'Gonovo_Catchment_Point_location',
                interactive: true,
                title: '<img src="styles/legend/Gonovo_Catchment_Point_location_20.png" /> Gonovo_Catchment_Point_location'
            });
var format_OptimalRouteASlopeGradient_21 = new ol.format.GeoJSON();
var features_OptimalRouteASlopeGradient_21 = format_OptimalRouteASlopeGradient_21.readFeatures(json_OptimalRouteASlopeGradient_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptimalRouteASlopeGradient_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimalRouteASlopeGradient_21.addFeatures(features_OptimalRouteASlopeGradient_21);
var lyr_OptimalRouteASlopeGradient_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptimalRouteASlopeGradient_21, 
                style: style_OptimalRouteASlopeGradient_21,
                popuplayertitle: 'Optimal Route A Slope Gradient',
                interactive: true,
    title: 'Optimal Route A Slope Gradient<br />\
    <img src="styles/legend/OptimalRouteASlopeGradient_21_0.png" /> > 14% (Adverse Grad.)<br />\
    <img src="styles/legend/OptimalRouteASlopeGradient_21_1.png" /> 0 - 14% (Good)<br />' });
var format_OptimalRouteBSlopeGradient_22 = new ol.format.GeoJSON();
var features_OptimalRouteBSlopeGradient_22 = format_OptimalRouteBSlopeGradient_22.readFeatures(json_OptimalRouteBSlopeGradient_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptimalRouteBSlopeGradient_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimalRouteBSlopeGradient_22.addFeatures(features_OptimalRouteBSlopeGradient_22);
var lyr_OptimalRouteBSlopeGradient_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptimalRouteBSlopeGradient_22, 
                style: style_OptimalRouteBSlopeGradient_22,
                popuplayertitle: 'Optimal Route B Slope Gradient',
                interactive: true,
    title: 'Optimal Route B Slope Gradient<br />\
    <img src="styles/legend/OptimalRouteBSlopeGradient_22_0.png" /> >14% (Adverse Gradient)<br />\
    <img src="styles/legend/OptimalRouteBSlopeGradient_22_1.png" /> 0 - 14% (Good)<br />' });
var format_OptimalRouteCSlope_gradient_23 = new ol.format.GeoJSON();
var features_OptimalRouteCSlope_gradient_23 = format_OptimalRouteCSlope_gradient_23.readFeatures(json_OptimalRouteCSlope_gradient_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptimalRouteCSlope_gradient_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimalRouteCSlope_gradient_23.addFeatures(features_OptimalRouteCSlope_gradient_23);
var lyr_OptimalRouteCSlope_gradient_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptimalRouteCSlope_gradient_23, 
                style: style_OptimalRouteCSlope_gradient_23,
                popuplayertitle: 'Optimal Route C Slope_gradient',
                interactive: true,
    title: 'Optimal Route C Slope_gradient<br />\
    <img src="styles/legend/OptimalRouteCSlope_gradient_23_0.png" /> > 14% (Adverse Gradient)<br />\
    <img src="styles/legend/OptimalRouteCSlope_gradient_23_1.png" /> 0 - 14 % (Good)<br />' });
var format_source_Hapo_24 = new ol.format.GeoJSON();
var features_source_Hapo_24 = format_source_Hapo_24.readFeatures(json_source_Hapo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_source_Hapo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_source_Hapo_24.addFeatures(features_source_Hapo_24);
var lyr_source_Hapo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_source_Hapo_24, 
                style: style_source_Hapo_24,
                popuplayertitle: 'source_Hapo',
                interactive: true,
                title: '<img src="styles/legend/source_Hapo_24.png" /> source_Hapo'
            });
var format_OptimalRouteAChainage_25 = new ol.format.GeoJSON();
var features_OptimalRouteAChainage_25 = format_OptimalRouteAChainage_25.readFeatures(json_OptimalRouteAChainage_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptimalRouteAChainage_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimalRouteAChainage_25.addFeatures(features_OptimalRouteAChainage_25);
var lyr_OptimalRouteAChainage_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptimalRouteAChainage_25, 
                style: style_OptimalRouteAChainage_25,
                popuplayertitle: 'Optimal Route A Chainage',
                interactive: true,
                title: '<img src="styles/legend/OptimalRouteAChainage_25.png" /> Optimal Route A Chainage'
            });
var format_Dest_Kangaruo_26 = new ol.format.GeoJSON();
var features_Dest_Kangaruo_26 = format_Dest_Kangaruo_26.readFeatures(json_Dest_Kangaruo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dest_Kangaruo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dest_Kangaruo_26.addFeatures(features_Dest_Kangaruo_26);
var lyr_Dest_Kangaruo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dest_Kangaruo_26, 
                style: style_Dest_Kangaruo_26,
                popuplayertitle: 'Dest_Kangaruo',
                interactive: true,
                title: '<img src="styles/legend/Dest_Kangaruo_26.png" /> Dest_Kangaruo'
            });
var format_OptimalRouteBChainage_27 = new ol.format.GeoJSON();
var features_OptimalRouteBChainage_27 = format_OptimalRouteBChainage_27.readFeatures(json_OptimalRouteBChainage_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptimalRouteBChainage_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimalRouteBChainage_27.addFeatures(features_OptimalRouteBChainage_27);
var lyr_OptimalRouteBChainage_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptimalRouteBChainage_27, 
                style: style_OptimalRouteBChainage_27,
                popuplayertitle: 'Optimal Route B Chainage',
                interactive: true,
                title: '<img src="styles/legend/OptimalRouteBChainage_27.png" /> Optimal Route B Chainage'
            });
var format_OptimalRouteCChainage_28 = new ol.format.GeoJSON();
var features_OptimalRouteCChainage_28 = format_OptimalRouteCChainage_28.readFeatures(json_OptimalRouteCChainage_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptimalRouteCChainage_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptimalRouteCChainage_28.addFeatures(features_OptimalRouteCChainage_28);
var lyr_OptimalRouteCChainage_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptimalRouteCChainage_28, 
                style: style_OptimalRouteCChainage_28,
                popuplayertitle: 'Optimal Route C Chainage',
                interactive: true,
                title: '<img src="styles/legend/OptimalRouteCChainage_28.png" /> Optimal Route C Chainage'
            });
var format_PointofInterest_29 = new ol.format.GeoJSON();
var features_PointofInterest_29 = format_PointofInterest_29.readFeatures(json_PointofInterest_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointofInterest_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointofInterest_29.addFeatures(features_PointofInterest_29);
var lyr_PointofInterest_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointofInterest_29, 
                style: style_PointofInterest_29,
                popuplayertitle: 'Point of Interest',
                interactive: true,
                title: '<img src="styles/legend/PointofInterest_29.png" /> Point of Interest'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(false);lyr_NEODEM5m_3.setVisible(true);lyr_Contour_4.setVisible(true);lyr_CatchmentandRivers_5.setVisible(false);lyr_TargetvillageofRoadConnection_6.setVisible(false);lyr_ExistingCulvertCondition_7.setVisible(true);lyr_ExistingRoadInundationandDeteriorateLevelofRisk_8.setVisible(false);lyr_ExistingRoadLevelofLandslideRisk_9.setVisible(false);lyr_Roadwidth5m_10.setVisible(false);lyr_ExistingRoadwidth20m_split_11.setVisible(false);lyr_RiversandCreek_12.setVisible(true);lyr_ExistingRouteGradient_slope_13.setVisible(true);lyr_CatchmentBoundary_14.setVisible(false);lyr_GonovoRiverCatchment_15.setVisible(false);lyr_riversandcreeks_16.setVisible(true);lyr_Road_CL_17.setVisible(true);lyr_ExistingRouteChainage_18.setVisible(false);lyr_GonovoRiverCatchmentBoundary_19.setVisible(false);lyr_Gonovo_Catchment_Point_location_20.setVisible(false);lyr_OptimalRouteASlopeGradient_21.setVisible(false);lyr_OptimalRouteBSlopeGradient_22.setVisible(false);lyr_OptimalRouteCSlope_gradient_23.setVisible(false);lyr_source_Hapo_24.setVisible(true);lyr_OptimalRouteAChainage_25.setVisible(false);lyr_Dest_Kangaruo_26.setVisible(true);lyr_OptimalRouteBChainage_27.setVisible(false);lyr_OptimalRouteCChainage_28.setVisible(false);lyr_PointofInterest_29.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenTopoMap_1,lyr_GoogleSatellite_2,lyr_NEODEM5m_3,lyr_Contour_4,lyr_CatchmentandRivers_5,lyr_TargetvillageofRoadConnection_6,lyr_ExistingCulvertCondition_7,lyr_ExistingRoadInundationandDeteriorateLevelofRisk_8,lyr_ExistingRoadLevelofLandslideRisk_9,lyr_Roadwidth5m_10,lyr_ExistingRoadwidth20m_split_11,lyr_RiversandCreek_12,lyr_ExistingRouteGradient_slope_13,lyr_CatchmentBoundary_14,lyr_GonovoRiverCatchment_15,lyr_riversandcreeks_16,lyr_Road_CL_17,lyr_ExistingRouteChainage_18,lyr_GonovoRiverCatchmentBoundary_19,lyr_Gonovo_Catchment_Point_location_20,lyr_OptimalRouteASlopeGradient_21,lyr_OptimalRouteBSlopeGradient_22,lyr_OptimalRouteCSlope_gradient_23,lyr_source_Hapo_24,lyr_OptimalRouteAChainage_25,lyr_Dest_Kangaruo_26,lyr_OptimalRouteBChainage_27,lyr_OptimalRouteCChainage_28,lyr_PointofInterest_29];
lyr_Contour_4.set('fieldAliases', {'Elevation': 'Elevation (m)', 'Cont': 'Cont', });
lyr_CatchmentandRivers_5.set('fieldAliases', {'area': 'Catchment Area (HA)', 'slope': 'Slope', 'C_Lenght': 'Catchment Lenght (m)', 'Discharge': 'Average Discharge (cms)', 'Peak_Flood': 'Peak Flood Level (m)', 'Chainage__': 'Chainage (m)', 'Riv_Crk': 'River and Creek', });
lyr_TargetvillageofRoadConnection_6.set('fieldAliases', {'Id': 'Id', 'village': 'Village', });
lyr_ExistingCulvertCondition_7.set('fieldAliases', {'Id': 'Id', 'Descpt': 'Description', 'Structure_': 'Structure_', 'Lenght': 'Lenght', 'Diameter': 'Diameter', 'Wing_wall': 'Wing_wall', 'Top_Slab': 'Top_Slab', 'Bottom_sla': 'Bottom Slab', 'Scring': 'Scouring', 'whole_stru': 'Whole Structure', 'Recomm': 'Recomm', 'use': 'Uses', 'condition': 'Condition', 'Recomm2': 'Recommendation', });
lyr_ExistingRoadInundationandDeteriorateLevelofRisk_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Dete_risk_': 'Inundation and Deteriorate Level of Risk', });
lyr_ExistingRoadLevelofLandslideRisk_9.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Landslide_': 'Landslide Risk Level', });
lyr_Roadwidth5m_10.set('fieldAliases', {'Id': 'Id', 'offset': 'offset', 'width_3dcm': 'width_3dcm', });
lyr_ExistingRoadwidth20m_split_11.set('fieldAliases', {'Id': 'Id', 'offset': 'Road edge', 'BUFF_DIST': 'Road width', 'ORIG_FID': 'ORIG_FID', });
lyr_RiversandCreek_12.set('fieldAliases', {'Id': 'Id', 'Crk_Riv_nm': 'Creek and River Names', 'Flow_Statu': 'Flow Status', });
lyr_ExistingRouteGradient_slope_13.set('fieldAliases', {'Id': 'Id', 'Gredient__': 'Slope Gradient', 'category': 'Catergory', 'Chainage': 'Chainage', });
lyr_CatchmentBoundary_14.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', });
lyr_GonovoRiverCatchment_15.set('fieldAliases', {'area': 'Area (km2)', 'slope': 'EQ Area Slope (m/km)', 'C_Lenght': 'Catchment Lenght (km)', 'Discharge': 'Discharge (m3/s)', 'Peak_Flood': 'Peak Flood level Mark (m wide)', 'Chainage__': 'Chainage (m)', 'Riv_Crk': 'River name', 'Karst____': 'Karst', 'N_Slope__d': 'Normal Slope (%)', 'LC_Type': 'Land Cover Type', 'Soil': 'Soil', 'Geology': 'Geology', 'Tc': 'Tc', });
lyr_riversandcreeks_16.set('fieldAliases', {'FID_final_': 'FID_final_', 'riv_ck': 'Water Bodies Category', });
lyr_Road_CL_17.set('fieldAliases', {'Id': 'Id', 'offset': 'Feature type', 'lenght': 'Lenght (m)', });
lyr_ExistingRouteChainage_18.set('fieldAliases', {'Chainage (': 'Chainage (m)', 'Elevation': 'Elevation (m)', 'Nothings': 'Nothings', 'Eastings': 'Eastings', });
lyr_GonovoRiverCatchmentBoundary_19.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', });
lyr_Gonovo_Catchment_Point_location_20.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'setnul_dem': 'setnul_dem', 'Lat': 'Lat', 'Long': 'Long', 'Ele': 'Elevation (m)', });
lyr_OptimalRouteASlopeGradient_21.set('fieldAliases', {'Id': 'Id', 'category': 'Slope Gradient(%)', 't_Lnght_m': 'Lenght (km)', });
lyr_OptimalRouteBSlopeGradient_22.set('fieldAliases', {'Id': 'Id', 'category': 'Slope Gradient (%)', 'lenght': 'Lenght (km)', });
lyr_OptimalRouteCSlope_gradient_23.set('fieldAliases', {'Id': 'Id', 'slp_cate': 'Slope Gradient (%)', 'lenght': 'Lenght (km)', });
lyr_source_Hapo_24.set('fieldAliases', {'Id': 'Id', 'source': 'Hapohondong', });
lyr_OptimalRouteAChainage_25.set('fieldAliases', {'Station': 'Chainage (m)', 'Elevation': 'Elevation', 'Eastings': 'Eastings', 'Northings': 'Northings', 'Segmnt': 'Segmnt', 'Gra__': 'Slope Grad.', 'Ele_rounde': 'Elevation', 'Ele_round': 'Ele_round', 'Ele': 'Ele', 'East': 'Eastings (m)', 'north': 'Northings (m)', });
lyr_Dest_Kangaruo_26.set('fieldAliases', {'Id': 'Id', 'dest': 'Kangaruo Village', });
lyr_OptimalRouteBChainage_27.set('fieldAliases', {'Eastings': 'Eastings', 'Northings': 'Northings', 'Station': 'Chainage (m)', 'RL': 'RL', 'length': 'length', 'G_slope': 'G_slope', 'Catergory': 'Catergory', 'East': 'Eastings', 'North': 'Northings', 'Ele': 'Elevation (m)', });
lyr_OptimalRouteCChainage_28.set('fieldAliases', {'Eastings': 'Eastings', 'Northings': 'Northings', 'Station': 'Chainage (m)', 'RL': 'RL', 'length': 'length', 'slope_': 'slope_', 'Category': 'Category', 'East': 'Eastings', 'North': 'Northings', 'Ele': 'Elevation (m)', 'Slp': 'Slp', });
lyr_PointofInterest_29.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Lat', 'Longitude': 'Long', 'setnul_dem': 'setnul_dem', 'Q2': 'Peak Discharge (Q2)', 'Q5': 'Peak Discharge (Q5)', 'Q10': 'Peak Discharge (Q10)', 'Q25': 'Peak Discharge (Q25)', 'Q50': 'Peak Discharge (Q50)', 'Q100': 'Peak Discharge (Q100)', 'Q20': 'Q20', 'Ele': 'Elevation (m)', });
lyr_Contour_4.set('fieldImages', {'Elevation': 'TextEdit', 'Cont': 'TextEdit', });
lyr_CatchmentandRivers_5.set('fieldImages', {'area': 'TextEdit', 'slope': 'TextEdit', 'C_Lenght': 'TextEdit', 'Discharge': 'TextEdit', 'Peak_Flood': 'TextEdit', 'Chainage__': 'TextEdit', 'Riv_Crk': 'TextEdit', });
lyr_TargetvillageofRoadConnection_6.set('fieldImages', {'Id': 'Hidden', 'village': 'TextEdit', });
lyr_ExistingCulvertCondition_7.set('fieldImages', {'Id': 'Hidden', 'Descpt': 'TextEdit', 'Structure_': 'TextEdit', 'Lenght': 'TextEdit', 'Diameter': 'TextEdit', 'Wing_wall': 'TextEdit', 'Top_Slab': 'TextEdit', 'Bottom_sla': 'TextEdit', 'Scring': 'TextEdit', 'whole_stru': 'TextEdit', 'Recomm': 'Hidden', 'use': 'TextEdit', 'condition': 'TextEdit', 'Recomm2': 'TextEdit', });
lyr_ExistingRoadInundationandDeteriorateLevelofRisk_8.set('fieldImages', {'Id': 'Hidden', 'gridcode': 'Hidden', 'Dete_risk_': 'TextEdit', });
lyr_ExistingRoadLevelofLandslideRisk_9.set('fieldImages', {'Id': 'Hidden', 'gridcode': 'Hidden', 'Landslide_': 'TextEdit', });
lyr_Roadwidth5m_10.set('fieldImages', {'Id': 'TextEdit', 'offset': 'TextEdit', 'width_3dcm': 'TextEdit', });
lyr_ExistingRoadwidth20m_split_11.set('fieldImages', {'Id': 'Hidden', 'offset': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Hidden', });
lyr_RiversandCreek_12.set('fieldImages', {'Id': 'Hidden', 'Crk_Riv_nm': 'TextEdit', 'Flow_Statu': 'TextEdit', });
lyr_ExistingRouteGradient_slope_13.set('fieldImages', {'Id': 'Hidden', 'Gredient__': 'TextEdit', 'category': 'TextEdit', 'Chainage': 'TextEdit', });
lyr_CatchmentBoundary_14.set('fieldImages', {'LEFT_FID': 'TextEdit', });
lyr_GonovoRiverCatchment_15.set('fieldImages', {'area': 'TextEdit', 'slope': 'TextEdit', 'C_Lenght': 'TextEdit', 'Discharge': 'TextEdit', 'Peak_Flood': 'TextEdit', 'Chainage__': 'TextEdit', 'Riv_Crk': 'TextEdit', 'Karst____': 'TextEdit', 'N_Slope__d': 'TextEdit', 'LC_Type': 'TextEdit', 'Soil': 'TextEdit', 'Geology': 'TextEdit', 'Tc': 'TextEdit', });
lyr_riversandcreeks_16.set('fieldImages', {'FID_final_': 'Hidden', 'riv_ck': 'TextEdit', });
lyr_Road_CL_17.set('fieldImages', {'Id': 'Hidden', 'offset': 'TextEdit', 'lenght': 'TextEdit', });
lyr_ExistingRouteChainage_18.set('fieldImages', {'Chainage (': 'TextEdit', 'Elevation': 'TextEdit', 'Nothings': 'TextEdit', 'Eastings': 'TextEdit', });
lyr_GonovoRiverCatchmentBoundary_19.set('fieldImages', {'LEFT_FID': 'TextEdit', });
lyr_Gonovo_Catchment_Point_location_20.set('fieldImages', {'Id': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'setnul_dem': 'Hidden', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ele': 'TextEdit', });
lyr_OptimalRouteASlopeGradient_21.set('fieldImages', {'Id': 'Hidden', 'category': 'TextEdit', 't_Lnght_m': 'TextEdit', });
lyr_OptimalRouteBSlopeGradient_22.set('fieldImages', {'Id': 'Hidden', 'category': 'TextEdit', 'lenght': 'TextEdit', });
lyr_OptimalRouteCSlope_gradient_23.set('fieldImages', {'Id': 'Hidden', 'slp_cate': 'TextEdit', 'lenght': 'TextEdit', });
lyr_source_Hapo_24.set('fieldImages', {'Id': 'Hidden', 'source': 'TextEdit', });
lyr_OptimalRouteAChainage_25.set('fieldImages', {'Station': 'TextEdit', 'Elevation': 'Hidden', 'Eastings': 'Hidden', 'Northings': 'Hidden', 'Segmnt': 'Hidden', 'Gra__': 'TextEdit', 'Ele_rounde': 'TextEdit', 'Ele_round': 'Hidden', 'Ele': 'TextEdit', 'East': 'TextEdit', 'north': 'TextEdit', });
lyr_Dest_Kangaruo_26.set('fieldImages', {'Id': 'Hidden', 'dest': 'TextEdit', });
lyr_OptimalRouteBChainage_27.set('fieldImages', {'Eastings': 'Hidden', 'Northings': 'Hidden', 'Station': 'TextEdit', 'RL': 'Hidden', 'length': 'Hidden', 'G_slope': 'Hidden', 'Catergory': 'TextEdit', 'East': 'TextEdit', 'North': 'TextEdit', 'Ele': 'TextEdit', });
lyr_OptimalRouteCChainage_28.set('fieldImages', {'Eastings': 'Hidden', 'Northings': 'Hidden', 'Station': 'TextEdit', 'RL': 'Hidden', 'length': 'Hidden', 'slope_': 'Hidden', 'Category': 'Hidden', 'East': 'TextEdit', 'North': 'TextEdit', 'Ele': 'TextEdit', 'Slp': 'Hidden', });
lyr_PointofInterest_29.set('fieldImages', {'Id': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'setnul_dem': 'Hidden', 'Q2': 'TextEdit', 'Q5': 'TextEdit', 'Q10': 'TextEdit', 'Q25': 'TextEdit', 'Q50': 'TextEdit', 'Q100': 'TextEdit', 'Q20': 'TextEdit', 'Ele': 'TextEdit', });
lyr_Contour_4.set('fieldLabels', {'Elevation': 'inline label - always visible', 'Cont': 'no label', });
lyr_CatchmentandRivers_5.set('fieldLabels', {'area': 'inline label - always visible', 'slope': 'inline label - always visible', 'C_Lenght': 'inline label - always visible', 'Discharge': 'inline label - always visible', 'Peak_Flood': 'inline label - always visible', 'Chainage__': 'inline label - always visible', 'Riv_Crk': 'inline label - always visible', });
lyr_TargetvillageofRoadConnection_6.set('fieldLabels', {'village': 'inline label - always visible', });
lyr_ExistingCulvertCondition_7.set('fieldLabels', {'Descpt': 'inline label - always visible', 'Structure_': 'inline label - always visible', 'Lenght': 'inline label - always visible', 'Diameter': 'inline label - always visible', 'Wing_wall': 'inline label - always visible', 'Top_Slab': 'inline label - always visible', 'Bottom_sla': 'inline label - always visible', 'Scring': 'inline label - always visible', 'whole_stru': 'inline label - always visible', 'use': 'inline label - always visible', 'condition': 'inline label - always visible', 'Recomm2': 'inline label - always visible', });
lyr_ExistingRoadInundationandDeteriorateLevelofRisk_8.set('fieldLabels', {'Dete_risk_': 'inline label - always visible', });
lyr_ExistingRoadLevelofLandslideRisk_9.set('fieldLabels', {'Landslide_': 'inline label - always visible', });
lyr_Roadwidth5m_10.set('fieldLabels', {'Id': 'no label', 'offset': 'inline label - always visible', 'width_3dcm': 'inline label - always visible', });
lyr_ExistingRoadwidth20m_split_11.set('fieldLabels', {'offset': 'inline label - always visible', 'BUFF_DIST': 'inline label - always visible', });
lyr_RiversandCreek_12.set('fieldLabels', {'Crk_Riv_nm': 'inline label - always visible', 'Flow_Statu': 'inline label - always visible', });
lyr_ExistingRouteGradient_slope_13.set('fieldLabels', {'Gredient__': 'inline label - always visible', 'category': 'inline label - always visible', 'Chainage': 'inline label - always visible', });
lyr_CatchmentBoundary_14.set('fieldLabels', {'LEFT_FID': 'inline label - always visible', });
lyr_GonovoRiverCatchment_15.set('fieldLabels', {'area': 'inline label - always visible', 'slope': 'inline label - always visible', 'C_Lenght': 'inline label - always visible', 'Discharge': 'inline label - always visible', 'Peak_Flood': 'inline label - always visible', 'Chainage__': 'inline label - always visible', 'Riv_Crk': 'inline label - always visible', 'Karst____': 'inline label - always visible', 'N_Slope__d': 'inline label - always visible', 'LC_Type': 'inline label - always visible', 'Soil': 'inline label - always visible', 'Geology': 'inline label - always visible', 'Tc': 'inline label - always visible', });
lyr_riversandcreeks_16.set('fieldLabels', {'riv_ck': 'inline label - always visible', });
lyr_Road_CL_17.set('fieldLabels', {'offset': 'inline label - always visible', 'lenght': 'inline label - always visible', });
lyr_ExistingRouteChainage_18.set('fieldLabels', {'Chainage (': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'Nothings': 'inline label - always visible', 'Eastings': 'inline label - always visible', });
lyr_GonovoRiverCatchmentBoundary_19.set('fieldLabels', {'LEFT_FID': 'inline label - always visible', });
lyr_Gonovo_Catchment_Point_location_20.set('fieldLabels', {'Lat': 'inline label - always visible', 'Long': 'inline label - always visible', 'Ele': 'inline label - always visible', });
lyr_OptimalRouteASlopeGradient_21.set('fieldLabels', {'category': 'inline label - always visible', 't_Lnght_m': 'inline label - always visible', });
lyr_OptimalRouteBSlopeGradient_22.set('fieldLabels', {'category': 'inline label - always visible', 'lenght': 'inline label - always visible', });
lyr_OptimalRouteCSlope_gradient_23.set('fieldLabels', {'slp_cate': 'inline label - always visible', 'lenght': 'inline label - always visible', });
lyr_source_Hapo_24.set('fieldLabels', {'source': 'no label', });
lyr_OptimalRouteAChainage_25.set('fieldLabels', {'Station': 'inline label - always visible', 'Gra__': 'inline label - always visible', 'Ele_rounde': 'inline label - always visible', 'Ele': 'inline label - always visible', 'East': 'inline label - always visible', 'north': 'inline label - always visible', });
lyr_Dest_Kangaruo_26.set('fieldLabels', {'dest': 'inline label - always visible', });
lyr_OptimalRouteBChainage_27.set('fieldLabels', {'Station': 'inline label - always visible', 'Catergory': 'inline label - always visible', 'East': 'inline label - always visible', 'North': 'inline label - always visible', 'Ele': 'inline label - always visible', });
lyr_OptimalRouteCChainage_28.set('fieldLabels', {'Station': 'inline label - always visible', 'East': 'inline label - always visible', 'North': 'inline label - always visible', 'Ele': 'inline label - always visible', });
lyr_PointofInterest_29.set('fieldLabels', {'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Q2': 'inline label - always visible', 'Q5': 'inline label - always visible', 'Q10': 'inline label - always visible', 'Q25': 'inline label - always visible', 'Q50': 'inline label - always visible', 'Q100': 'inline label - always visible', 'Q20': 'inline label - always visible', 'Ele': 'inline label - always visible', });
lyr_PointofInterest_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});