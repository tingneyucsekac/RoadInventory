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
var format_catchment_and_rivers_3 = new ol.format.GeoJSON();
var features_catchment_and_rivers_3 = format_catchment_and_rivers_3.readFeatures(json_catchment_and_rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_catchment_and_rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_catchment_and_rivers_3.addFeatures(features_catchment_and_rivers_3);
var lyr_catchment_and_rivers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_catchment_and_rivers_3, 
                style: style_catchment_and_rivers_3,
                popuplayertitle: 'catchment_and_rivers',
                interactive: true,
    title: 'catchment_and_rivers<br />\
    <img src="styles/legend/catchment_and_rivers_3_0.png" /> Bagec<br />\
    <img src="styles/legend/catchment_and_rivers_3_1.png" /> Bahaning<br />\
    <img src="styles/legend/catchment_and_rivers_3_2.png" /> Baring<br />\
    <img src="styles/legend/catchment_and_rivers_3_3.png" /> Gononvo<br />\
    <img src="styles/legend/catchment_and_rivers_3_4.png" /> Mozu<br />\
    <img src="styles/legend/catchment_and_rivers_3_5.png" /> Ororong<br />\
    <img src="styles/legend/catchment_and_rivers_3_6.png" /> Qararang<br />\
    <img src="styles/legend/catchment_and_rivers_3_7.png" /> Qazec (b)<br />\
    <img src="styles/legend/catchment_and_rivers_3_8.png" /> Qazec (c)<br />\
    <img src="styles/legend/catchment_and_rivers_3_9.png" /> Qohoc<br />\
    <img src="styles/legend/catchment_and_rivers_3_10.png" /> Toko<br />\
    <img src="styles/legend/catchment_and_rivers_3_11.png" /> Uwac<br />\
    <img src="styles/legend/catchment_and_rivers_3_12.png" /> Ziwazigo<br />\
    <img src="styles/legend/catchment_and_rivers_3_13.png" /> Zomborong<br />\
    <img src="styles/legend/catchment_and_rivers_3_14.png" /> <br />' });
var format_MapeCatchmentContour_4 = new ol.format.GeoJSON();
var features_MapeCatchmentContour_4 = format_MapeCatchmentContour_4.readFeatures(json_MapeCatchmentContour_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapeCatchmentContour_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapeCatchmentContour_4.addFeatures(features_MapeCatchmentContour_4);
var lyr_MapeCatchmentContour_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapeCatchmentContour_4, 
                style: style_MapeCatchmentContour_4,
                popuplayertitle: 'Mape Catchment Contour',
                interactive: true,
                title: '<img src="styles/legend/MapeCatchmentContour_4.png" /> Mape Catchment Contour'
            });
var format_riversandcreeks_5 = new ol.format.GeoJSON();
var features_riversandcreeks_5 = format_riversandcreeks_5.readFeatures(json_riversandcreeks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_riversandcreeks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_riversandcreeks_5.addFeatures(features_riversandcreeks_5);
var lyr_riversandcreeks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_riversandcreeks_5, 
                style: style_riversandcreeks_5,
                popuplayertitle: 'rivers and creeks',
                interactive: true,
                title: '<img src="styles/legend/riversandcreeks_5.png" /> rivers and creeks'
            });
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
var format_CulvertCondition_7 = new ol.format.GeoJSON();
var features_CulvertCondition_7 = format_CulvertCondition_7.readFeatures(json_CulvertCondition_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CulvertCondition_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulvertCondition_7.addFeatures(features_CulvertCondition_7);
var lyr_CulvertCondition_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulvertCondition_7, 
                style: style_CulvertCondition_7,
                popuplayertitle: 'Culvert - Condition',
                interactive: true,
                title: '<img src="styles/legend/CulvertCondition_7.png" /> Culvert - Condition'
            });
var format_RoadInundationandDeteriorateLevelofRisk_8 = new ol.format.GeoJSON();
var features_RoadInundationandDeteriorateLevelofRisk_8 = format_RoadInundationandDeteriorateLevelofRisk_8.readFeatures(json_RoadInundationandDeteriorateLevelofRisk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadInundationandDeteriorateLevelofRisk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadInundationandDeteriorateLevelofRisk_8.addFeatures(features_RoadInundationandDeteriorateLevelofRisk_8);
var lyr_RoadInundationandDeteriorateLevelofRisk_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadInundationandDeteriorateLevelofRisk_8, 
                style: style_RoadInundationandDeteriorateLevelofRisk_8,
                popuplayertitle: 'Road Inundation and Deteriorate Level of Risk',
                interactive: true,
    title: 'Road Inundation and Deteriorate Level of Risk<br />\
    <img src="styles/legend/RoadInundationandDeteriorateLevelofRisk_8_0.png" /> Very High Risk of Inundation and Deteriorate<br />\
    <img src="styles/legend/RoadInundationandDeteriorateLevelofRisk_8_1.png" /> High Risk of Inundation and Deteriorate<br />\
    <img src="styles/legend/RoadInundationandDeteriorateLevelofRisk_8_2.png" /> Medium Risk of Inundation and Deteriorate<br />\
    <img src="styles/legend/RoadInundationandDeteriorateLevelofRisk_8_3.png" /> No risk of Inundation and Deteriorate<br />' });
var format_LevelofLandslideRisk_9 = new ol.format.GeoJSON();
var features_LevelofLandslideRisk_9 = format_LevelofLandslideRisk_9.readFeatures(json_LevelofLandslideRisk_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LevelofLandslideRisk_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LevelofLandslideRisk_9.addFeatures(features_LevelofLandslideRisk_9);
var lyr_LevelofLandslideRisk_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LevelofLandslideRisk_9, 
                style: style_LevelofLandslideRisk_9,
                popuplayertitle: 'Level of Landslide Risk',
                interactive: true,
    title: 'Level of Landslide Risk<br />\
    <img src="styles/legend/LevelofLandslideRisk_9_0.png" /> High Risk of Land Slide<br />\
    <img src="styles/legend/LevelofLandslideRisk_9_1.png" /> Medium Risk of Landslide<br />\
    <img src="styles/legend/LevelofLandslideRisk_9_2.png" /> No Risk of Landslide<br />\
    <img src="styles/legend/LevelofLandslideRisk_9_3.png" /> Very High Risk of Landslide<br />' });
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
var format_Roadwidth20m_split_11 = new ol.format.GeoJSON();
var features_Roadwidth20m_split_11 = format_Roadwidth20m_split_11.readFeatures(json_Roadwidth20m_split_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadwidth20m_split_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadwidth20m_split_11.addFeatures(features_Roadwidth20m_split_11);
var lyr_Roadwidth20m_split_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadwidth20m_split_11, 
                style: style_Roadwidth20m_split_11,
                popuplayertitle: 'Road width 20m_split',
                interactive: true,
                title: '<img src="styles/legend/Roadwidth20m_split_11.png" /> Road width 20m_split'
            });
var format_RiversandCreekLocation_12 = new ol.format.GeoJSON();
var features_RiversandCreekLocation_12 = format_RiversandCreekLocation_12.readFeatures(json_RiversandCreekLocation_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversandCreekLocation_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversandCreekLocation_12.addFeatures(features_RiversandCreekLocation_12);
var lyr_RiversandCreekLocation_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversandCreekLocation_12, 
                style: style_RiversandCreekLocation_12,
                popuplayertitle: 'Rivers and Creek Location',
                interactive: true,
                title: '<img src="styles/legend/RiversandCreekLocation_12.png" /> Rivers and Creek Location'
            });
var format_Road_CL_13 = new ol.format.GeoJSON();
var features_Road_CL_13 = format_Road_CL_13.readFeatures(json_Road_CL_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_CL_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_CL_13.addFeatures(features_Road_CL_13);
var lyr_Road_CL_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_CL_13, 
                style: style_Road_CL_13,
                popuplayertitle: 'Road_CL',
                interactive: true,
                title: '<img src="styles/legend/Road_CL_13.png" /> Road_CL'
            });
var format_chainage_150m_int_reviewed_14 = new ol.format.GeoJSON();
var features_chainage_150m_int_reviewed_14 = format_chainage_150m_int_reviewed_14.readFeatures(json_chainage_150m_int_reviewed_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chainage_150m_int_reviewed_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chainage_150m_int_reviewed_14.addFeatures(features_chainage_150m_int_reviewed_14);
var lyr_chainage_150m_int_reviewed_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chainage_150m_int_reviewed_14, 
                style: style_chainage_150m_int_reviewed_14,
                popuplayertitle: 'chainage_150m_int_reviewed',
                interactive: true,
                title: '<img src="styles/legend/chainage_150m_int_reviewed_14.png" /> chainage_150m_int_reviewed'
            });

lyr_OSMStandard_0.setVisible(false);lyr_OpenTopoMap_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_catchment_and_rivers_3.setVisible(false);lyr_MapeCatchmentContour_4.setVisible(false);lyr_riversandcreeks_5.setVisible(true);lyr_TargetvillageofRoadConnection_6.setVisible(true);lyr_CulvertCondition_7.setVisible(true);lyr_RoadInundationandDeteriorateLevelofRisk_8.setVisible(false);lyr_LevelofLandslideRisk_9.setVisible(false);lyr_Roadwidth5m_10.setVisible(false);lyr_Roadwidth20m_split_11.setVisible(false);lyr_RiversandCreekLocation_12.setVisible(true);lyr_Road_CL_13.setVisible(true);lyr_chainage_150m_int_reviewed_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenTopoMap_1,lyr_GoogleSatellite_2,lyr_catchment_and_rivers_3,lyr_MapeCatchmentContour_4,lyr_riversandcreeks_5,lyr_TargetvillageofRoadConnection_6,lyr_CulvertCondition_7,lyr_RoadInundationandDeteriorateLevelofRisk_8,lyr_LevelofLandslideRisk_9,lyr_Roadwidth5m_10,lyr_Roadwidth20m_split_11,lyr_RiversandCreekLocation_12,lyr_Road_CL_13,lyr_chainage_150m_int_reviewed_14];
lyr_catchment_and_rivers_3.set('fieldAliases', {'area': 'Catchment Area (HA)', 'slope': 'Slope', 'C_Lenght': 'Catchment Lenght (m)', 'Discharge': 'Average Discharge (cms)', 'Peak_Flood': 'Peak Flood Level (m)', 'Chainage__': 'Chainage (m)', 'Riv_Crk': 'River and Creek', });
lyr_MapeCatchmentContour_4.set('fieldAliases', {'Elevation': 'Elevation (m)', });
lyr_riversandcreeks_5.set('fieldAliases', {'FID_final_': 'FID_final_', 'riv_ck': 'Water Bodies Category', });
lyr_TargetvillageofRoadConnection_6.set('fieldAliases', {'Id': 'Id', 'village': 'Village', });
lyr_CulvertCondition_7.set('fieldAliases', {'Id': 'Id', 'Descpt': 'Description', 'Structure_': 'Structure_', 'Lenght': 'Lenght', 'Diameter': 'Diameter', 'Wing_wall': 'Wing_wall', 'Top_Slab': 'Top_Slab', 'Bottom_sla': 'Bottom Slab', 'Scring': 'Scouring', 'whole_stru': 'Whole Structure', 'Recomm': 'Recomm', 'use': 'Uses', 'condition': 'Condition', 'Recomm2': 'Recommendation', });
lyr_RoadInundationandDeteriorateLevelofRisk_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Dete_risk_': 'Inundation and Deteriorate Level of Risk', });
lyr_LevelofLandslideRisk_9.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Landslide_': 'Landslide Risk Level', });
lyr_Roadwidth5m_10.set('fieldAliases', {'Id': 'Id', 'offset': 'offset', 'width_3dcm': 'width_3dcm', });
lyr_Roadwidth20m_split_11.set('fieldAliases', {'Id': 'Id', 'offset': 'Road edge', 'BUFF_DIST': 'Road width', 'ORIG_FID': 'ORIG_FID', });
lyr_RiversandCreekLocation_12.set('fieldAliases', {'Id': 'Id', 'Crk_Riv_nm': 'Creek and River Names', 'Flow_Statu': 'Flow Status', });
lyr_Road_CL_13.set('fieldAliases', {'Id': 'Id', 'offset': 'Feature type', 'lenght': 'Lenght (m)', });
lyr_chainage_150m_int_reviewed_14.set('fieldAliases', {'Chainage (': 'Chainage (m)', 'Elevation': 'Elevation (m)', 'Nothings': 'Nothings', 'Eastings': 'Eastings', });
lyr_catchment_and_rivers_3.set('fieldImages', {'area': 'TextEdit', 'slope': 'TextEdit', 'C_Lenght': 'TextEdit', 'Discharge': 'TextEdit', 'Peak_Flood': 'TextEdit', 'Chainage__': 'TextEdit', 'Riv_Crk': 'TextEdit', });
lyr_MapeCatchmentContour_4.set('fieldImages', {'Elevation': 'TextEdit', });
lyr_riversandcreeks_5.set('fieldImages', {'FID_final_': 'Hidden', 'riv_ck': 'TextEdit', });
lyr_TargetvillageofRoadConnection_6.set('fieldImages', {'Id': 'Hidden', 'village': 'TextEdit', });
lyr_CulvertCondition_7.set('fieldImages', {'Id': 'Hidden', 'Descpt': 'TextEdit', 'Structure_': 'TextEdit', 'Lenght': 'TextEdit', 'Diameter': 'TextEdit', 'Wing_wall': 'TextEdit', 'Top_Slab': 'TextEdit', 'Bottom_sla': 'TextEdit', 'Scring': 'TextEdit', 'whole_stru': 'TextEdit', 'Recomm': 'Hidden', 'use': 'TextEdit', 'condition': 'TextEdit', 'Recomm2': 'TextEdit', });
lyr_RoadInundationandDeteriorateLevelofRisk_8.set('fieldImages', {'Id': 'Hidden', 'gridcode': 'Hidden', 'Dete_risk_': 'TextEdit', });
lyr_LevelofLandslideRisk_9.set('fieldImages', {'Id': 'Hidden', 'gridcode': 'Hidden', 'Landslide_': 'TextEdit', });
lyr_Roadwidth5m_10.set('fieldImages', {'Id': 'TextEdit', 'offset': 'TextEdit', 'width_3dcm': 'TextEdit', });
lyr_Roadwidth20m_split_11.set('fieldImages', {'Id': 'Hidden', 'offset': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'Hidden', });
lyr_RiversandCreekLocation_12.set('fieldImages', {'Id': 'Hidden', 'Crk_Riv_nm': 'TextEdit', 'Flow_Statu': 'TextEdit', });
lyr_Road_CL_13.set('fieldImages', {'Id': 'Hidden', 'offset': 'TextEdit', 'lenght': 'TextEdit', });
lyr_chainage_150m_int_reviewed_14.set('fieldImages', {'Chainage (': 'TextEdit', 'Elevation': 'TextEdit', 'Nothings': 'TextEdit', 'Eastings': 'TextEdit', });
lyr_catchment_and_rivers_3.set('fieldLabels', {'area': 'inline label - always visible', 'slope': 'inline label - always visible', 'C_Lenght': 'inline label - always visible', 'Discharge': 'inline label - always visible', 'Peak_Flood': 'inline label - always visible', 'Chainage__': 'inline label - always visible', 'Riv_Crk': 'inline label - always visible', });
lyr_MapeCatchmentContour_4.set('fieldLabels', {'Elevation': 'inline label - always visible', });
lyr_riversandcreeks_5.set('fieldLabels', {'riv_ck': 'inline label - always visible', });
lyr_TargetvillageofRoadConnection_6.set('fieldLabels', {'village': 'inline label - always visible', });
lyr_CulvertCondition_7.set('fieldLabels', {'Descpt': 'inline label - always visible', 'Structure_': 'inline label - always visible', 'Lenght': 'inline label - always visible', 'Diameter': 'inline label - always visible', 'Wing_wall': 'inline label - always visible', 'Top_Slab': 'inline label - always visible', 'Bottom_sla': 'inline label - always visible', 'Scring': 'inline label - always visible', 'whole_stru': 'inline label - always visible', 'use': 'inline label - always visible', 'condition': 'inline label - always visible', 'Recomm2': 'inline label - always visible', });
lyr_RoadInundationandDeteriorateLevelofRisk_8.set('fieldLabels', {'Dete_risk_': 'inline label - always visible', });
lyr_LevelofLandslideRisk_9.set('fieldLabels', {'Landslide_': 'inline label - always visible', });
lyr_Roadwidth5m_10.set('fieldLabels', {'Id': 'inline label - always visible', 'offset': 'inline label - always visible', 'width_3dcm': 'inline label - always visible', });
lyr_Roadwidth20m_split_11.set('fieldLabels', {'offset': 'inline label - always visible', 'BUFF_DIST': 'inline label - always visible', });
lyr_RiversandCreekLocation_12.set('fieldLabels', {'Crk_Riv_nm': 'inline label - always visible', 'Flow_Statu': 'inline label - always visible', });
lyr_Road_CL_13.set('fieldLabels', {'offset': 'inline label - always visible', 'lenght': 'inline label - always visible', });
lyr_chainage_150m_int_reviewed_14.set('fieldLabels', {'Chainage (': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'Nothings': 'inline label - always visible', 'Eastings': 'inline label - always visible', });
lyr_chainage_150m_int_reviewed_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});