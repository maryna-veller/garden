define([
    'backbone'
], function(Backbone){
    var CellModel = Backbone.Model.extend({
        defaults:{
            plant: "",
            date: "",
            note: ""
        }
    });
    return CellModel;
});