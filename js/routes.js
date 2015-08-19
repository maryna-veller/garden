define([
    'jquery',
    'underscore',
    'backbone',
    'js/view',
    'js/views/home',
    'js/views/new-box',
    'js/views/edit-box',
    'js/views/select-box',
    'js/views/edit-cell',
    'js/models/box-model',
    'js/models/cell-model'
    
], function($, _, Backbone, view, home, newBox, editBox, selectBox, editCell, boxModel, cellModel){

    var GardenRouter = Backbone.Router.extend({
        routes: {
            "newBox": "newBox",
            "editBox/:boxId": "editBox",
            "selectBox": "selectBox",
            "editCell/:cellId": "editCell",
            "*home": "defaultRoute"
        },
        newBox: function(){
            this.unLoadView();
            var newBoxModel = new boxModel();
            this.view = new newBox({el: $('#garden'), model: newBoxModel});
        },
        editBox: function(boxId){
            this.unLoadView();
         //   var editBox = new BoxModel();
         //   editBox.set("id",boxId);
            this.view = new editBox({el: $('#garden'), id: boxId});
        },
        selectBox: function(){
            this.unLoadView();
            this.view = new selectBox({el: $('#garden')});
        },
        editCell: function(cellId){
            this.unLoadView();
            var editCell = new cellModel();
            editCell.set("id", cellId);
            this.view = new editCell({el: $('#garden')});
        },
        defaultRoute: function(){
            console.log("default route");
            this.unLoadView();
            this.view = new home({el: $('#garden')});
        },
        unLoadView : function(view) {
            if (this.view) {
                this.view.$el.empty().off();
                this.view.stopListening();
            }
        }
    });
    
    var initialize = function(){
        appRouter = new GardenRouter;
    };
    
    return{
        initialize: initialize
    }

});
