var GardenRouter = Backbone.Router.extend({
    routes: {
        "addBox": "addBox",
        "*home": "defaultRoute"
    },
    addBox: function(){
        alert("add");
    },
    defaultRoute: function(){
        var homeView = new HomeView({el: $('#garden')});
       // homeView.render();
        console.log(2);
    }
});