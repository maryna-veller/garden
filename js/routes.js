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
        var newBox = new BoxModel();
        this.view = new NewBoxView({el: $('#garden'), model: newBox});
    },
    editBox: function(boxId){
		this.unLoadView();
     //   var editBox = new BoxModel();
     //   editBox.set("id",boxId);
        this.view = new EditBoxView({el: $('#garden'), id: boxId});
    },
    selectBox: function(){
		this.unLoadView();
        this.view = new SelectBoxView({el: $('#garden')});
    },
    editCell: function(cellId){
        this.unLoadView();
        var editCell = new CellModel();
        editCell.set("id", cellId);
        this.view = new EditCellView({el: $('#garden')});
    },
    defaultRoute: function(){
        console.log("default route");
        this.unLoadView();
        this.view = new HomeView({el: $('#garden')});
    },
    unLoadView : function(view) {
		if (this.view) {
            this.view.$el.empty().off();
            this.view.stopListening();
        }
    }
});