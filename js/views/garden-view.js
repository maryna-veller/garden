var GardenView = Backbone.View.extend({
    events:{
        "click .ui-icon-back": "goBack"
    },
    goBack:function(){
        //navigator.app.backHistory(); for cardova
        appRouter.navigate("home", true);
    }
});