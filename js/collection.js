var GardenCollection = Backbone.Collection.extend({
    model: BoxModel,
    localStorage: new Backbone.LocalStorage("GardenCollection")
});

var boxes = new GardenCollection();