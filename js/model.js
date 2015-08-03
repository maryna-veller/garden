var BoxModel = Backbone.Model.extend({
    defaults: {
        width: 4,
        length: 4,
        name: "My Box"
    }
}); 

var CellModel = Backbone.Model.extend({
    defaults:{
        plant: "",
        date: "",
        note: ""
    }
});