var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CovidDeathsPer100000_1 = new ol.format.GeoJSON();
var features_CovidDeathsPer100000_1 = format_CovidDeathsPer100000_1.readFeatures(json_CovidDeathsPer100000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CovidDeathsPer100000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CovidDeathsPer100000_1.addFeatures(features_CovidDeathsPer100000_1);
var lyr_CovidDeathsPer100000_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CovidDeathsPer100000_1, 
                style: style_CovidDeathsPer100000_1,
                interactive: true,
    title: 'Covid Deaths Per 100,000<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_0.png" /> 0 - 40<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_1.png" /> 40 - 87<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_2.png" /> 87 - 140<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_3.png" /> 140 - 192<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_4.png" /> 192 - 279<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_5.png" /> 279 - 374<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_6.png" /> 374 - 496<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_7.png" /> 496 - 604<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_8.png" /> 604 - 1033<br />\
    <img src="styles/legend/CovidDeathsPer100000_1_9.png" /> 1033 - 1328<br />'
        });
var format_CovidHospitalizationsPer100000_2 = new ol.format.GeoJSON();
var features_CovidHospitalizationsPer100000_2 = format_CovidHospitalizationsPer100000_2.readFeatures(json_CovidHospitalizationsPer100000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CovidHospitalizationsPer100000_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CovidHospitalizationsPer100000_2.addFeatures(features_CovidHospitalizationsPer100000_2);
var lyr_CovidHospitalizationsPer100000_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CovidHospitalizationsPer100000_2, 
                style: style_CovidHospitalizationsPer100000_2,
                interactive: true,
    title: 'Covid Hospitalizations Per 100,000<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_0.png" /> 0 - 180<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_1.png" /> 180 - 299<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_2.png" /> 299 - 440<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_3.png" /> 440 - 583<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_4.png" /> 583 - 749<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_5.png" /> 749 - 903<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_6.png" /> 903 - 1043<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_7.png" /> 1043 - 1234<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_8.png" /> 1234 - 1763<br />\
    <img src="styles/legend/CovidHospitalizationsPer100000_2_9.png" /> 1763 - 2468<br />'
        });
var format_CovidCasesPer100000_3 = new ol.format.GeoJSON();
var features_CovidCasesPer100000_3 = format_CovidCasesPer100000_3.readFeatures(json_CovidCasesPer100000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CovidCasesPer100000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CovidCasesPer100000_3.addFeatures(features_CovidCasesPer100000_3);
var lyr_CovidCasesPer100000_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CovidCasesPer100000_3, 
                style: style_CovidCasesPer100000_3,
                interactive: true,
    title: 'Covid Cases Per 100,000<br />\
    <img src="styles/legend/CovidCasesPer100000_3_0.png" /> 5735 - 10010<br />\
    <img src="styles/legend/CovidCasesPer100000_3_1.png" /> 10010 - 13756<br />\
    <img src="styles/legend/CovidCasesPer100000_3_2.png" /> 13756 - 16063<br />\
    <img src="styles/legend/CovidCasesPer100000_3_3.png" /> 16063 - 18199<br />\
    <img src="styles/legend/CovidCasesPer100000_3_4.png" /> 18199 - 20561<br />\
    <img src="styles/legend/CovidCasesPer100000_3_5.png" /> 20561 - 23145<br />\
    <img src="styles/legend/CovidCasesPer100000_3_6.png" /> 23145 - 26001<br />\
    <img src="styles/legend/CovidCasesPer100000_3_7.png" /> 26001 - 28734<br />\
    <img src="styles/legend/CovidCasesPer100000_3_8.png" /> 28734 - 32854<br />\
    <img src="styles/legend/CovidCasesPer100000_3_9.png" /> 32854 - 41748<br />'
        });
var format_CovidTestsPer100000_4 = new ol.format.GeoJSON();
var features_CovidTestsPer100000_4 = format_CovidTestsPer100000_4.readFeatures(json_CovidTestsPer100000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CovidTestsPer100000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CovidTestsPer100000_4.addFeatures(features_CovidTestsPer100000_4);
var lyr_CovidTestsPer100000_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CovidTestsPer100000_4, 
                style: style_CovidTestsPer100000_4,
                interactive: true,
    title: 'Covid Tests Per 100,000<br />\
    <img src="styles/legend/CovidTestsPer100000_4_0.png" /> 60157 - 79157<br />\
    <img src="styles/legend/CovidTestsPer100000_4_1.png" /> 79157 - 89345<br />\
    <img src="styles/legend/CovidTestsPer100000_4_2.png" /> 89345 - 98145<br />\
    <img src="styles/legend/CovidTestsPer100000_4_3.png" /> 98145 - 107517<br />\
    <img src="styles/legend/CovidTestsPer100000_4_4.png" /> 107517 - 119360<br />\
    <img src="styles/legend/CovidTestsPer100000_4_5.png" /> 119360 - 137216<br />\
    <img src="styles/legend/CovidTestsPer100000_4_6.png" /> 137216 - 164065<br />\
    <img src="styles/legend/CovidTestsPer100000_4_7.png" /> 164065 - 246175<br />\
    <img src="styles/legend/CovidTestsPer100000_4_8.png" /> 246175 - 377050<br />\
    <img src="styles/legend/CovidTestsPer100000_4_9.png" /> 377050 - 521242<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_CovidDeathsPer100000_1.setVisible(true);lyr_CovidHospitalizationsPer100000_2.setVisible(true);lyr_CovidCasesPer100000_3.setVisible(true);lyr_CovidTestsPer100000_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CovidDeathsPer100000_1,lyr_CovidHospitalizationsPer100000_2,lyr_CovidCasesPer100000_3,lyr_CovidTestsPer100000_4];
lyr_CovidDeathsPer100000_1.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'Census Tract', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'covid_king': 'covid_king', 'covid_ki_1': 'covid_ki_1', 'covid_ki_2': 'covid_ki_2', 'covid_ki_3': 'covid_ki_3', 'covid_ki_4': 'covid_ki_4', 'death': 'Covid Death Rate', 'test2': 'Population', });
lyr_CovidHospitalizationsPer100000_2.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'Census Tract', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'covid_king': 'covid_king', 'covid_ki_1': 'covid_ki_1', 'covid_ki_2': 'covid_ki_2', 'covid_ki_3': 'covid_ki_3', 'covid_ki_4': 'covid_ki_4', 'hospital': 'Covid Hospitalization Rate', 'test2': 'Population', });
lyr_CovidCasesPer100000_3.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'Census Tract', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'covid_king': 'covid_king', 'covid_ki_1': 'covid_ki_1', 'covid_ki_2': 'covid_ki_2', 'covid_ki_3': 'covid_ki_3', 'covid_ki_4': 'covid_ki_4', 'case': 'Covid Case Rate', 'cases': 'cases', 'test2': 'Population', });
lyr_CovidTestsPer100000_4.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'Census Tract', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'covid_king': 'covid_king', 'covid_ki_1': 'covid_ki_1', 'covid_ki_2': 'covid_ki_2', 'covid_ki_3': 'covid_ki_3', 'covid_ki_4': 'covid_ki_4', 'Test': 'Test Rate', 'tests': 'tests', 'test2': 'Population', });
lyr_CovidDeathsPer100000_1.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'TextEdit', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'covid_king': 'Hidden', 'covid_ki_1': 'Hidden', 'covid_ki_2': 'Hidden', 'covid_ki_3': 'Hidden', 'covid_ki_4': 'Hidden', 'death': 'TextEdit', 'test2': 'Range', });
lyr_CovidHospitalizationsPer100000_2.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'TextEdit', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'covid_king': 'Hidden', 'covid_ki_1': 'Hidden', 'covid_ki_2': 'Hidden', 'covid_ki_3': 'Hidden', 'covid_ki_4': 'Hidden', 'hospital': 'TextEdit', 'test2': 'Range', });
lyr_CovidCasesPer100000_3.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'TextEdit', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'covid_king': 'Hidden', 'covid_ki_1': 'Hidden', 'covid_ki_2': 'Hidden', 'covid_ki_3': 'Hidden', 'covid_ki_4': 'Hidden', 'case': 'TextEdit', 'cases': 'Hidden', 'test2': 'Range', });
lyr_CovidTestsPer100000_4.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'TextEdit', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'covid_king': 'Hidden', 'covid_ki_1': 'Hidden', 'covid_ki_2': 'Hidden', 'covid_ki_3': 'Hidden', 'covid_ki_4': 'Hidden', 'Test': 'TextEdit', 'tests': 'Hidden', 'test2': 'Range', });
lyr_CovidDeathsPer100000_1.set('fieldLabels', {'TRACTCE10': 'header label', 'death': 'header label', 'test2': 'header label', });
lyr_CovidHospitalizationsPer100000_2.set('fieldLabels', {'TRACTCE10': 'header label', 'hospital': 'header label', 'test2': 'header label', });
lyr_CovidCasesPer100000_3.set('fieldLabels', {'TRACTCE10': 'header label', 'case': 'header label', 'test2': 'header label', });
lyr_CovidTestsPer100000_4.set('fieldLabels', {'TRACTCE10': 'header label', 'Test': 'header label', 'test2': 'header label', });
lyr_CovidTestsPer100000_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});