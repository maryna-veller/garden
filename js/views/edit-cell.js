var EditCellView = GardenView.extend({
    initialize: function(){
        this.render();
    },
    events:{
    },
    render:function(){
        var html    = templates["edit-cell"]({plant:"", date:"",note:""});        
        this.$el.html(html).enhanceWithin();
    }

        
});