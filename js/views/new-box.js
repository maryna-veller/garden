define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'js/view',
    'js/models/cell-model',
    'js/collection',
    'tpl!template/new-box'
], function($, Mobile, _,Backbone, view, cellModel, collection,NewBoxTemplate){
    var NewBoxView = view.extend({
        initialize:function(){
            this.render();
        },

        events: {
            "click #submitNewBox" : "addNewBox"
        },

        render:function(){
            var context = {input_name:this.model.get("name"), input_length:this.model.get("length"), input_width:this.model.get("width")};
            var html    = NewBoxTemplate(context);        
            this.$el.html(html).enhanceWithin();
            return this;
        },
        addNewBox: function(e){

            this.model.set("name",this.$el.find("#name").val());
            this.model.set("width",this.$el.find("#width").val());
            this.model.set("length",this.$el.find("#length").val());

            var box=[];
            for (var i=0; i<this.model.get("width"); i++){
                box[i] = [];
                for (var j=0; j<this.model.get("length"); j++){
                    box[i][j] = new cellModel();        
                }
            }
            this.model.set("box", box);

            var newBox = collection.create(this.model);
      //      appRouter.navigate("editBox2", true);
            appRouter.navigate("editBox/"+newBox.get("id"), true);
            e.preventDefault();
            e.stopPropagation();
        }
    });
    return NewBoxView;
})