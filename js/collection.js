define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'backbone_localStorage',
    'js/models/box-model'
], function($, Mobile, _,Backbone, LocalStorage, boxModel){
    var GardenCollection = Backbone.Collection.extend({
        model: boxModel,
        localStorage: new Backbone.LocalStorage("GardenCollection")
    });

    var boxes = new GardenCollection();
    return boxes;
});