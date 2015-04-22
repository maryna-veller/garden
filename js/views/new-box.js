var NewBoxView = GardenView.extend({
    initialize:function(){
        this.render();
    },

    render:function(){
        var context = {input_name:this.model.get("name"), input_length:this.model.get("length"), input_width:this.model.get("width")};
        var html    = templates["new-box"](context);        
        this.$el.html(html).enhanceWithin();
        return this;
    }
});