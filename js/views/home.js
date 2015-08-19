define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'js/view',
    'ejs',
    'tpl!template/home'
], function($, Mobile, _,Backbone, view, ejs,HomeTemplate){
    var HomeView = view.extend({
        initialize: function(){
            this.render();    
        },
        template: HomeTemplate,
        events:{
            "click #createBox":"createBox",
            "click #selectBox":"selectBox"
        },
        render: function(){
            var context = {};
            var html    = this.template(context);        
            this.$el.html(html).enhanceWithin();
            return this;
        },
        createBox: function(){
            appRouter.navigate("newBox", true);
        },
        selectBox: function(){
            appRouter.navigate("selectBox", true);
        }
    });
    return HomeView;
})