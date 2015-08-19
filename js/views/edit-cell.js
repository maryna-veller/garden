define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'js/view',
    'tpl!template/edit-cell'
], function($, Mobile, _,Backbone, view, EditCellTemplate){
    var EditCellView = view.extend({
        initialize: function(){
            this.render();
        },
        events:{
        },
        render:function(){
            var html    = EditCellTemplate({plant:"", date:"",note:""});        
            this.$el.html(html).enhanceWithin();
        }


    });
    return EditCellView;
});