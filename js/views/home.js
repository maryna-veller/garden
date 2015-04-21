var HomeView = GardenView.extend({
    initialize: function(){
        this.render();    
    },
    events:{
        "click #createBox":"createBox"
    },
    render: function(){
        var context = {};//{title: "My New Post", body: "This is my first post!"};
        var html    = templates["home"](context);        
//                alert(html);        

        this.$el.html(html);
        return this;
    },
    createBox: function(){
        alert("add");
    }
});