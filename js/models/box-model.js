define([
    'backbone'
], function(Backbone){
    var BoxModel = Backbone.Model.extend({
    defaults: {
            width: 4,
            length: 4,
            name: "My Box"
        }
    }); 
    return BoxModel;
});