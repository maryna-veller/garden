define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'js/view',
    'js/collection',
    'tpl!template/edit-box',
    'tpl!template/edit-cell'
], function($, Mobile, _,Backbone, view, collection,EditBoxTemplate, EditCellTemplate){
    var EditBoxView = view.extend({
        initialize: function(options){
            collection.fetch();
            var editBox = collection.get(options.id);
            this.model = editBox;
            this.render();
        },
        events:{
            "click .cell":"editCell",
            "click #cellBackButton":"backFromCell",
            "click #saveCell":"saveCell"
        },
        render:function(){
            var html    = EditBoxTemplate({box:this.model.get("box")});        
            this.$el.html(html).enhanceWithin();
        },
        editCell: function(event){
            var cell = event.currentTarget.id.substring(4);
            var i = cell.substring(0,1);
            var j = cell.substring(2);
         //   var i = cell % 4;
        //    var j = (cell - i) / 4;
            var box = this.model.get("box");
            var html    = EditCellTemplate({plant: box[i][j].plant, date:box[i][j].date,note:box[i][j].note, i:i, j:j});        
            this.$el.html(html).enhanceWithin();
           // appRouter.navigate("editCell/"+event.target.id, true);
        },
        backFromCell: function(){
            this.render();
        },
        saveCell: function(e){
            var i = this.$el.find("#i").val();
            var j = this.$el.find("#j").val();
            this.model.get("box")[i][j].plant = this.$el.find("#plant").val();
            this.model.get("box")[i][j].date = this.$el.find("#date").val();
            this.model.get("box")[i][j].note = this.$el.find("#note").val();
            collection.localStorage.update(this.model)
            e.preventDefault();
            e.stopPropagation();
            this.render();
        }

    });
    return EditBoxView;
});