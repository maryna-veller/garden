var HomeView = GardenView.extend({
    initialize: function(){
        this.render();    
    },
    events:{
        "click #createBox":"createBox",
        "click #selectBox":"selectBox"
    },
    render: function(){
        var context = {};
        var html    = templates["home"].render(context);        
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