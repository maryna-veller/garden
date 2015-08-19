define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'js/view',
    'js/collection',
    'tpl!template/list-box'
], function($, Mobile, _,Backbone, view, collection,ListBoxTemplate){
    var SelectBoxView = view.extend({
        initialize: function(){
            this.render();
        },
        events:{
            "click a.boxLink" : "selectBox"
        },
        render:function(){

            collection.fetch();
            var listOfBoxes = "";
            collection.each(function(box){
                listOfBoxes += collection.get(box.id).get("name");           
           });

            var context = {boxes:collection};
            var html    = ListBoxTemplate(context);  
            this.$el.html(html).enhanceWithin();


        }, 
        selectBox:function(e){
            appRouter.navigate("editBox/"+e.target.id, true);
        }
    });
    return SelectBoxView;
});