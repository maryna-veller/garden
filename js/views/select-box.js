var SelectBoxView = GardenView.extend({
    initialize: function(){
        this.render();
    },
    events:{
        "click a.boxLink" : "selectBox"
    },
    render:function(){
        
        boxes.fetch();
        var listOfBoxes = "";
        boxes.each(function(box){
            listOfBoxes += boxes.get(box.id).get("name");           
       });
        
        var context = {boxes:boxes};
        var html    = templates["list-box"].render(context);  
        this.$el.html(html).enhanceWithin();

    
    }, 
    selectBox:function(e){
        appRouter.navigate("editBox/"+e.target.id, true);
    }
});