ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-13417333.481789, 1560174.377453, -9531525.345845, 3795538.597554]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_OTROSCULTIVOS_1 = new ol.format.GeoJSON();
var features_OTROSCULTIVOS_1 = format_OTROSCULTIVOS_1.readFeatures(json_OTROSCULTIVOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTROSCULTIVOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTROSCULTIVOS_1.addFeatures(features_OTROSCULTIVOS_1);
var lyr_OTROSCULTIVOS_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_OTROSCULTIVOS_1, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 179125;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'OTROS CULTIVOS'
            });
var format_PAPA_2 = new ol.format.GeoJSON();
var features_PAPA_2 = format_PAPA_2.readFeatures(json_PAPA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAPA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPA_2.addFeatures(features_PAPA_2);
var lyr_PAPA_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_PAPA_2, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 5558;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'PAPA'
            });
var format_ALGODON_3 = new ol.format.GeoJSON();
var features_ALGODON_3 = format_ALGODON_3.readFeatures(json_ALGODON_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALGODON_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALGODON_3.addFeatures(features_ALGODON_3);
var lyr_ALGODON_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_ALGODON_3, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 34073;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'ALGODON'
            });
var format_ARROZ_4 = new ol.format.GeoJSON();
var features_ARROZ_4 = format_ARROZ_4.readFeatures(json_ARROZ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARROZ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARROZ_4.addFeatures(features_ARROZ_4);
var lyr_ARROZ_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_ARROZ_4, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 6094;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'ARROZ'
            });
var format_CAADEAZUCAR_5 = new ol.format.GeoJSON();
var features_CAADEAZUCAR_5 = format_CAADEAZUCAR_5.readFeatures(json_CAADEAZUCAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAADEAZUCAR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAADEAZUCAR_5.addFeatures(features_CAADEAZUCAR_5);
var lyr_CAADEAZUCAR_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_CAADEAZUCAR_5, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 29870;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CAÑA DE AZUCAR'
            });
var format_CEREALES_6 = new ol.format.GeoJSON();
var features_CEREALES_6 = format_CEREALES_6.readFeatures(json_CEREALES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEREALES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEREALES_6.addFeatures(features_CEREALES_6);
var lyr_CEREALES_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_CEREALES_6, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 36980;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CEREALES'
            });
var format_FRUTASYNUECES_7 = new ol.format.GeoJSON();
var features_FRUTASYNUECES_7 = format_FRUTASYNUECES_7.readFeatures(json_FRUTASYNUECES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRUTASYNUECES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRUTASYNUECES_7.addFeatures(features_FRUTASYNUECES_7);
var lyr_FRUTASYNUECES_7 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_FRUTASYNUECES_7, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 43892;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'FRUTAS Y NUECES'
            });
var format_MAIZ_8 = new ol.format.GeoJSON();
var features_MAIZ_8 = format_MAIZ_8.readFeatures(json_MAIZ_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAIZ_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAIZ_8.addFeatures(features_MAIZ_8);
var lyr_MAIZ_8 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_MAIZ_8, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 31424;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'MAIZ'
            });
var format_PLANTACION_9 = new ol.format.GeoJSON();
var features_PLANTACION_9 = format_PLANTACION_9.readFeatures(json_PLANTACION_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANTACION_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTACION_9.addFeatures(features_PLANTACION_9);
var lyr_PLANTACION_9 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_PLANTACION_9, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 24880;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'PLANTACION'
            });
var format_SOYA_10 = new ol.format.GeoJSON();
var features_SOYA_10 = format_SOYA_10.readFeatures(json_SOYA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOYA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOYA_10.addFeatures(features_SOYA_10);
var lyr_SOYA_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_SOYA_10, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 25125;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'SOYA'
            });
var format_UVASVID_11 = new ol.format.GeoJSON();
var features_UVASVID_11 = format_UVASVID_11.readFeatures(json_UVASVID_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UVASVID_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UVASVID_11.addFeatures(features_UVASVID_11);
var lyr_UVASVID_11 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_UVASVID_11, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 7756;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'UVAS VID'
            });
var format_VEGETALESYFLORES_12 = new ol.format.GeoJSON();
var features_VEGETALESYFLORES_12 = format_VEGETALESYFLORES_12.readFeatures(json_VEGETALESYFLORES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEGETALESYFLORES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEGETALESYFLORES_12.addFeatures(features_VEGETALESYFLORES_12);
var lyr_VEGETALESYFLORES_12 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_VEGETALESYFLORES_12, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Sembrada';
        var featureWeight = feature.get(weightField);
        var maxWeight = 14640;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'VEGETALES Y FLORES'
            });
var format_00ent_13 = new ol.format.GeoJSON();
var features_00ent_13 = format_00ent_13.readFeatures(json_00ent_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_00ent_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_00ent_13.addFeatures(features_00ent_13);
var lyr_00ent_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_00ent_13, 
                style: style_00ent_13,
                popuplayertitle: '00ent',
                interactive: true,
                title: '<img src="styles/legend/00ent_13.png" /> 00ent'
            });
var format_region_R5_14 = new ol.format.GeoJSON();
var features_region_R5_14 = format_region_R5_14.readFeatures(json_region_R5_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_R5_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_R5_14.addFeatures(features_region_R5_14);
var lyr_region_R5_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_R5_14, 
                style: style_region_R5_14,
                popuplayertitle: 'region_R5',
                interactive: true,
                title: '<img src="styles/legend/region_R5_14.png" /> region_R5'
            });
var format_region_R4_15 = new ol.format.GeoJSON();
var features_region_R4_15 = format_region_R4_15.readFeatures(json_region_R4_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_R4_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_R4_15.addFeatures(features_region_R4_15);
var lyr_region_R4_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_R4_15, 
                style: style_region_R4_15,
                popuplayertitle: 'region_R4',
                interactive: true,
                title: '<img src="styles/legend/region_R4_15.png" /> region_R4'
            });
var format_region_R3_16 = new ol.format.GeoJSON();
var features_region_R3_16 = format_region_R3_16.readFeatures(json_region_R3_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_R3_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_R3_16.addFeatures(features_region_R3_16);
var lyr_region_R3_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_R3_16, 
                style: style_region_R3_16,
                popuplayertitle: 'region_R3',
                interactive: true,
                title: '<img src="styles/legend/region_R3_16.png" /> region_R3'
            });
var format_region_R2_17 = new ol.format.GeoJSON();
var features_region_R2_17 = format_region_R2_17.readFeatures(json_region_R2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_R2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_R2_17.addFeatures(features_region_R2_17);
var lyr_region_R2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_R2_17, 
                style: style_region_R2_17,
                popuplayertitle: 'region_R2',
                interactive: true,
                title: '<img src="styles/legend/region_R2_17.png" /> region_R2'
            });
var format_region_R1_18 = new ol.format.GeoJSON();
var features_region_R1_18 = format_region_R1_18.readFeatures(json_region_R1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_R1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_R1_18.addFeatures(features_region_R1_18);
var lyr_region_R1_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_R1_18, 
                style: style_region_R1_18,
                popuplayertitle: 'region_R1',
                interactive: true,
                title: '<img src="styles/legend/region_R1_18.png" /> region_R1'
            });
var format_bufferbayer_19 = new ol.format.GeoJSON();
var features_bufferbayer_19 = format_bufferbayer_19.readFeatures(json_bufferbayer_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferbayer_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferbayer_19.addFeatures(features_bufferbayer_19);
var lyr_bufferbayer_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferbayer_19, 
                style: style_bufferbayer_19,
                popuplayertitle: 'buffer bayer',
                interactive: true,
                title: '<img src="styles/legend/bufferbayer_19.png" /> buffer bayer'
            });
var format_SUBDISTRIBUIDOR_20 = new ol.format.GeoJSON();
var features_SUBDISTRIBUIDOR_20 = format_SUBDISTRIBUIDOR_20.readFeatures(json_SUBDISTRIBUIDOR_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBDISTRIBUIDOR_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBDISTRIBUIDOR_20.addFeatures(features_SUBDISTRIBUIDOR_20);
var lyr_SUBDISTRIBUIDOR_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUBDISTRIBUIDOR_20, 
                style: style_SUBDISTRIBUIDOR_20,
                popuplayertitle: 'SUBDISTRIBUIDOR',
                interactive: true,
                title: '<img src="styles/legend/SUBDISTRIBUIDOR_20.png" /> SUBDISTRIBUIDOR'
            });
var format_DISTRIBUIDOR_21 = new ol.format.GeoJSON();
var features_DISTRIBUIDOR_21 = format_DISTRIBUIDOR_21.readFeatures(json_DISTRIBUIDOR_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRIBUIDOR_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRIBUIDOR_21.addFeatures(features_DISTRIBUIDOR_21);
var lyr_DISTRIBUIDOR_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRIBUIDOR_21, 
                style: style_DISTRIBUIDOR_21,
                popuplayertitle: 'DISTRIBUIDOR',
                interactive: true,
                title: '<img src="styles/legend/DISTRIBUIDOR_21.png" /> DISTRIBUIDOR'
            });
var format_SD_R5_22 = new ol.format.GeoJSON();
var features_SD_R5_22 = format_SD_R5_22.readFeatures(json_SD_R5_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_R5_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_R5_22.addFeatures(features_SD_R5_22);
var lyr_SD_R5_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_R5_22, 
                style: style_SD_R5_22,
                popuplayertitle: 'SD_R5',
                interactive: true,
                title: '<img src="styles/legend/SD_R5_22.png" /> SD_R5'
            });
var format_SD_R4_23 = new ol.format.GeoJSON();
var features_SD_R4_23 = format_SD_R4_23.readFeatures(json_SD_R4_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_R4_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_R4_23.addFeatures(features_SD_R4_23);
var lyr_SD_R4_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_R4_23, 
                style: style_SD_R4_23,
                popuplayertitle: 'SD_R4',
                interactive: true,
                title: '<img src="styles/legend/SD_R4_23.png" /> SD_R4'
            });
var format_SD_R3_24 = new ol.format.GeoJSON();
var features_SD_R3_24 = format_SD_R3_24.readFeatures(json_SD_R3_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_R3_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_R3_24.addFeatures(features_SD_R3_24);
var lyr_SD_R3_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_R3_24, 
                style: style_SD_R3_24,
                popuplayertitle: 'SD_R3',
                interactive: true,
                title: '<img src="styles/legend/SD_R3_24.png" /> SD_R3'
            });
var format_SD_R2_25 = new ol.format.GeoJSON();
var features_SD_R2_25 = format_SD_R2_25.readFeatures(json_SD_R2_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_R2_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_R2_25.addFeatures(features_SD_R2_25);
var lyr_SD_R2_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_R2_25, 
                style: style_SD_R2_25,
                popuplayertitle: 'SD_R2',
                interactive: true,
                title: '<img src="styles/legend/SD_R2_25.png" /> SD_R2'
            });
var format_SD_R1_26 = new ol.format.GeoJSON();
var features_SD_R1_26 = format_SD_R1_26.readFeatures(json_SD_R1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_R1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_R1_26.addFeatures(features_SD_R1_26);
var lyr_SD_R1_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_R1_26, 
                style: style_SD_R1_26,
                popuplayertitle: 'SD_R1',
                interactive: true,
                title: '<img src="styles/legend/SD_R1_26.png" /> SD_R1'
            });
var format_D_R5_27 = new ol.format.GeoJSON();
var features_D_R5_27 = format_D_R5_27.readFeatures(json_D_R5_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_R5_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_R5_27.addFeatures(features_D_R5_27);
var lyr_D_R5_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_R5_27, 
                style: style_D_R5_27,
                popuplayertitle: 'D_R5',
                interactive: true,
                title: '<img src="styles/legend/D_R5_27.png" /> D_R5'
            });
var format_D_R4_28 = new ol.format.GeoJSON();
var features_D_R4_28 = format_D_R4_28.readFeatures(json_D_R4_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_R4_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_R4_28.addFeatures(features_D_R4_28);
var lyr_D_R4_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_R4_28, 
                style: style_D_R4_28,
                popuplayertitle: 'D_R4',
                interactive: true,
                title: '<img src="styles/legend/D_R4_28.png" /> D_R4'
            });
var format_D_R3_29 = new ol.format.GeoJSON();
var features_D_R3_29 = format_D_R3_29.readFeatures(json_D_R3_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_R3_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_R3_29.addFeatures(features_D_R3_29);
var lyr_D_R3_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_R3_29, 
                style: style_D_R3_29,
                popuplayertitle: 'D_R3',
                interactive: true,
                title: '<img src="styles/legend/D_R3_29.png" /> D_R3'
            });
var format_D_R2_30 = new ol.format.GeoJSON();
var features_D_R2_30 = format_D_R2_30.readFeatures(json_D_R2_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_R2_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_R2_30.addFeatures(features_D_R2_30);
var lyr_D_R2_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_R2_30, 
                style: style_D_R2_30,
                popuplayertitle: 'D_R2',
                interactive: true,
                title: '<img src="styles/legend/D_R2_30.png" /> D_R2'
            });
var format_D_R1_31 = new ol.format.GeoJSON();
var features_D_R1_31 = format_D_R1_31.readFeatures(json_D_R1_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_R1_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_R1_31.addFeatures(features_D_R1_31);
var lyr_D_R1_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_R1_31, 
                style: style_D_R1_31,
                popuplayertitle: 'D_R1',
                interactive: true,
                title: '<img src="styles/legend/D_R1_31.png" /> D_R1'
            });
var group_DISTBAYER = new ol.layer.Group({
                                layers: [lyr_D_R5_27,lyr_D_R4_28,lyr_D_R3_29,lyr_D_R2_30,lyr_D_R1_31,],
                                fold: 'open',
                                title: 'DIST. BAYER'});
var group_SUBDBAYER = new ol.layer.Group({
                                layers: [lyr_SD_R5_22,lyr_SD_R4_23,lyr_SD_R3_24,lyr_SD_R2_25,lyr_SD_R1_26,],
                                fold: 'open',
                                title: 'SUBD. BAYER'});
var group_BAYERTOT = new ol.layer.Group({
                                layers: [lyr_SUBDISTRIBUIDOR_20,lyr_DISTRIBUIDOR_21,],
                                fold: 'close',
                                title: 'BAYER TOT'});
var group_MX = new ol.layer.Group({
                                layers: [lyr_region_R5_14,lyr_region_R4_15,lyr_region_R3_16,lyr_region_R2_17,lyr_region_R1_18,],
                                fold: 'close',
                                title: 'MX'});
var group_CULTIVOS = new ol.layer.Group({
                                layers: [lyr_OTROSCULTIVOS_1,lyr_PAPA_2,lyr_ALGODON_3,lyr_ARROZ_4,lyr_CAADEAZUCAR_5,lyr_CEREALES_6,lyr_FRUTASYNUECES_7,lyr_MAIZ_8,lyr_PLANTACION_9,lyr_SOYA_10,lyr_UVASVID_11,lyr_VEGETALESYFLORES_12,],
                                fold: 'open',
                                title: 'CULTIVOS'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OTROSCULTIVOS_1.setVisible(true);lyr_PAPA_2.setVisible(true);lyr_ALGODON_3.setVisible(true);lyr_ARROZ_4.setVisible(true);lyr_CAADEAZUCAR_5.setVisible(true);lyr_CEREALES_6.setVisible(true);lyr_FRUTASYNUECES_7.setVisible(true);lyr_MAIZ_8.setVisible(true);lyr_PLANTACION_9.setVisible(true);lyr_SOYA_10.setVisible(true);lyr_UVASVID_11.setVisible(true);lyr_VEGETALESYFLORES_12.setVisible(true);lyr_00ent_13.setVisible(true);lyr_region_R5_14.setVisible(true);lyr_region_R4_15.setVisible(true);lyr_region_R3_16.setVisible(true);lyr_region_R2_17.setVisible(true);lyr_region_R1_18.setVisible(true);lyr_bufferbayer_19.setVisible(true);lyr_SUBDISTRIBUIDOR_20.setVisible(true);lyr_DISTRIBUIDOR_21.setVisible(true);lyr_SD_R5_22.setVisible(true);lyr_SD_R4_23.setVisible(true);lyr_SD_R3_24.setVisible(true);lyr_SD_R2_25.setVisible(true);lyr_SD_R1_26.setVisible(true);lyr_D_R5_27.setVisible(true);lyr_D_R4_28.setVisible(true);lyr_D_R3_29.setVisible(true);lyr_D_R2_30.setVisible(true);lyr_D_R1_31.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_CULTIVOS,lyr_00ent_13,group_MX,lyr_bufferbayer_19,group_BAYERTOT,group_SUBDBAYER,group_DISTBAYER];
lyr_00ent_13.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_region_R5_14.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'X': 'X', 'razon_soci': 'razon_soci', 'nombre': 'nombre', 'estado': 'estado', 'municipio': 'municipio', 'cp': 'cp', 'direccion': 'direccion', 'region': 'region', 'latitud': 'latitud', 'longitud': 'longitud', 'count_ineg': 'count_ineg', 'count_plm': 'count_plm', 'count_sena': 'count_sena', 'fuente': 'fuente', 'id': 'id', });
lyr_region_R4_15.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'X': 'X', 'razon_soci': 'razon_soci', 'nombre': 'nombre', 'estado': 'estado', 'municipio': 'municipio', 'cp': 'cp', 'direccion': 'direccion', 'region': 'region', 'latitud': 'latitud', 'longitud': 'longitud', 'count_ineg': 'count_ineg', 'count_plm': 'count_plm', 'count_sena': 'count_sena', 'fuente': 'fuente', 'id': 'id', });
lyr_region_R3_16.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'X': 'X', 'razon_soci': 'razon_soci', 'nombre': 'nombre', 'estado': 'estado', 'municipio': 'municipio', 'cp': 'cp', 'direccion': 'direccion', 'region': 'region', 'latitud': 'latitud', 'longitud': 'longitud', 'count_ineg': 'count_ineg', 'count_plm': 'count_plm', 'count_sena': 'count_sena', 'fuente': 'fuente', 'id': 'id', });
lyr_region_R2_17.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'X': 'X', 'razon_soci': 'razon_soci', 'nombre': 'nombre', 'estado': 'estado', 'municipio': 'municipio', 'cp': 'cp', 'direccion': 'direccion', 'region': 'region', 'latitud': 'latitud', 'longitud': 'longitud', 'count_ineg': 'count_ineg', 'count_plm': 'count_plm', 'count_sena': 'count_sena', 'fuente': 'fuente', 'id': 'id', });
lyr_region_R1_18.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'X': 'X', 'razon_soci': 'razon_soci', 'nombre': 'nombre', 'estado': 'estado', 'municipio': 'municipio', 'cp': 'cp', 'direccion': 'direccion', 'region': 'region', 'latitud': 'latitud', 'longitud': 'longitud', 'count_ineg': 'count_ineg', 'count_plm': 'count_plm', 'count_sena': 'count_sena', 'fuente': 'fuente', 'id': 'id', });
lyr_bufferbayer_19.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_SUBDISTRIBUIDOR_20.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_DISTRIBUIDOR_21.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_SD_R5_22.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_SD_R4_23.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_SD_R3_24.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_SD_R2_25.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_SD_R1_26.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_D_R5_27.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_D_R4_28.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_D_R3_29.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_D_R2_30.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_D_R1_31.set('fieldAliases', {'fid': 'fid', 'RFC': 'RFC', 'Customer (': 'Customer (', 'Customer N': 'Customer N', 'Street': 'Street', 'Municipio_': 'Municipio_', 'CP': 'CP', 'Rg': 'Rg', 'Region (St': 'Region (St', 'Base': 'Base', 'Tipo Clien': 'Tipo Clien', 'Region': 'Region', 'Canal': 'Canal', 'Categoria': 'Categoria', 'Duplicados': 'Duplicados', 'Filtro que': 'Filtro que', 'Custumer N': 'Custumer N', 'Notas': 'Notas', 'Municipi_1': 'Municipi_1', 'Google_Map': 'Google_Map', 'lat2': 'lat2', 'lon2': 'lon2', });
lyr_00ent_13.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_region_R5_14.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'X': 'TextEdit', 'razon_soci': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', 'municipio': 'TextEdit', 'cp': 'TextEdit', 'direccion': 'TextEdit', 'region': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'count_ineg': 'TextEdit', 'count_plm': 'TextEdit', 'count_sena': 'TextEdit', 'fuente': 'TextEdit', 'id': 'TextEdit', });
lyr_region_R4_15.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'X': 'TextEdit', 'razon_soci': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', 'municipio': 'TextEdit', 'cp': 'TextEdit', 'direccion': 'TextEdit', 'region': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'count_ineg': 'TextEdit', 'count_plm': 'TextEdit', 'count_sena': 'TextEdit', 'fuente': 'TextEdit', 'id': 'TextEdit', });
lyr_region_R3_16.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'X': 'TextEdit', 'razon_soci': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', 'municipio': 'TextEdit', 'cp': 'TextEdit', 'direccion': 'TextEdit', 'region': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'count_ineg': 'TextEdit', 'count_plm': 'TextEdit', 'count_sena': 'TextEdit', 'fuente': 'TextEdit', 'id': 'TextEdit', });
lyr_region_R2_17.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'X': 'TextEdit', 'razon_soci': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', 'municipio': 'TextEdit', 'cp': 'TextEdit', 'direccion': 'TextEdit', 'region': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'count_ineg': 'TextEdit', 'count_plm': 'TextEdit', 'count_sena': 'TextEdit', 'fuente': 'TextEdit', 'id': 'TextEdit', });
lyr_region_R1_18.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'X': 'TextEdit', 'razon_soci': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', 'municipio': 'TextEdit', 'cp': 'TextEdit', 'direccion': 'TextEdit', 'region': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'count_ineg': 'TextEdit', 'count_plm': 'TextEdit', 'count_sena': 'TextEdit', 'fuente': 'TextEdit', 'id': 'TextEdit', });
lyr_bufferbayer_19.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_SUBDISTRIBUIDOR_20.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_DISTRIBUIDOR_21.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_SD_R5_22.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_SD_R4_23.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_SD_R3_24.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_SD_R2_25.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_SD_R1_26.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_D_R5_27.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_D_R4_28.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_D_R3_29.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_D_R2_30.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_D_R1_31.set('fieldImages', {'fid': 'TextEdit', 'RFC': 'TextEdit', 'Customer (': 'TextEdit', 'Customer N': 'TextEdit', 'Street': 'TextEdit', 'Municipio_': 'TextEdit', 'CP': 'TextEdit', 'Rg': 'TextEdit', 'Region (St': 'TextEdit', 'Base': 'TextEdit', 'Tipo Clien': 'TextEdit', 'Region': 'TextEdit', 'Canal': 'TextEdit', 'Categoria': 'TextEdit', 'Duplicados': 'TextEdit', 'Filtro que': 'TextEdit', 'Custumer N': 'TextEdit', 'Notas': 'TextEdit', 'Municipi_1': 'TextEdit', 'Google_Map': 'TextEdit', 'lat2': 'TextEdit', 'lon2': 'TextEdit', });
lyr_00ent_13.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_region_R5_14.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'X': 'no label', 'razon_soci': 'no label', 'nombre': 'no label', 'estado': 'no label', 'municipio': 'no label', 'cp': 'no label', 'direccion': 'no label', 'region': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'count_ineg': 'no label', 'count_plm': 'no label', 'count_sena': 'no label', 'fuente': 'no label', 'id': 'no label', });
lyr_region_R4_15.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'X': 'no label', 'razon_soci': 'no label', 'nombre': 'no label', 'estado': 'no label', 'municipio': 'no label', 'cp': 'no label', 'direccion': 'no label', 'region': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'count_ineg': 'no label', 'count_plm': 'no label', 'count_sena': 'no label', 'fuente': 'no label', 'id': 'no label', });
lyr_region_R3_16.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'X': 'no label', 'razon_soci': 'no label', 'nombre': 'no label', 'estado': 'no label', 'municipio': 'no label', 'cp': 'no label', 'direccion': 'no label', 'region': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'count_ineg': 'no label', 'count_plm': 'no label', 'count_sena': 'no label', 'fuente': 'no label', 'id': 'no label', });
lyr_region_R2_17.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'X': 'no label', 'razon_soci': 'no label', 'nombre': 'no label', 'estado': 'no label', 'municipio': 'no label', 'cp': 'no label', 'direccion': 'no label', 'region': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'count_ineg': 'no label', 'count_plm': 'no label', 'count_sena': 'no label', 'fuente': 'no label', 'id': 'no label', });
lyr_region_R1_18.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'X': 'no label', 'razon_soci': 'no label', 'nombre': 'no label', 'estado': 'no label', 'municipio': 'no label', 'cp': 'no label', 'direccion': 'no label', 'region': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'count_ineg': 'no label', 'count_plm': 'no label', 'count_sena': 'no label', 'fuente': 'no label', 'id': 'no label', });
lyr_bufferbayer_19.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_SUBDISTRIBUIDOR_20.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_DISTRIBUIDOR_21.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_SD_R5_22.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_SD_R4_23.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_SD_R3_24.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_SD_R2_25.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_SD_R1_26.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_D_R5_27.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_D_R4_28.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_D_R3_29.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_D_R2_30.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_D_R1_31.set('fieldLabels', {'fid': 'no label', 'RFC': 'no label', 'Customer (': 'no label', 'Customer N': 'no label', 'Street': 'no label', 'Municipio_': 'no label', 'CP': 'no label', 'Rg': 'no label', 'Region (St': 'no label', 'Base': 'no label', 'Tipo Clien': 'no label', 'Region': 'no label', 'Canal': 'no label', 'Categoria': 'no label', 'Duplicados': 'no label', 'Filtro que': 'no label', 'Custumer N': 'no label', 'Notas': 'no label', 'Municipi_1': 'no label', 'Google_Map': 'no label', 'lat2': 'no label', 'lon2': 'no label', });
lyr_D_R1_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});