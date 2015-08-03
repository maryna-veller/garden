var EditBoxView = GardenView.extend({
    initialize: function(options){
        boxes.fetch();
        var editBox = boxes.get(options.id);
        this.model = editBox;
        this.render();
    },
    events:{
        "click .cell":"editCell",
        "click #cellBackButton":"backFromCell",
        "click #saveCell":"saveCell"
    },
    render:function(){
        var html    = templates["edit-box"]({box:this.model.get("box")});        
        this.$el.html(html).enhanceWithin();
    },
    editCell: function(event){
        var cell = event.target.id.substring(4);
        var j = cell % 4;
        var i = (cell - j) / 4;
        var box = this.model.get("box");
        var html    = templates["edit-cell"]({plant: box[i][j].plant, date:box[i][j].date,note:box[i][j].note, i:i, j:j});        
        this.$el.html(html).enhanceWithin();
       // appRouter.navigate("editCell/"+event.target.id, true);
    },
    backFromCell: function(){
        this.render();
    },
    saveCell: function(e){
        var i = this.$el.find("#i").val();
        var j = this.$el.find("#j").val();
        this.model.get("box")[i][j].plant = this.$el.find("#plant").val();
        boxes.localStorage.update(this.model)
        e.preventDefault();
        e.stopPropagation();
        this.render();
    }
        
});