AFRAME.registerComponent("movecar",{
    schema: {
        moveX:{
            type:"number", default:1
        }, 
        tick:function(){
            this.data.moveX=this.data.moveX+1;
            var pos=this.el.getAttribute("position");
            pos.x=this.data.moveX;
            this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
        }
    }
});