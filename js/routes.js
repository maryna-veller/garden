var GardenRouter = Backbone.Router.extend({
    routes: {
        "newBox": "newBox",
        "*home": "defaultRoute"
    },
    newBox: function(){
        var newBox = new BoxModel();
        var newBoxView = new NewBoxView({el: $('#garden'), model: newBox});
    },
    defaultRoute: function(){
        var homeView = new HomeView({el: $('#garden')});
    }
});