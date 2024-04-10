AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      this.data.moveY = this.data.moveY + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });

  AFRAME.registerComponent("cam", {
    schema: {
      moveZ: { type: "number", default: 10 },
    },
  
    tick: function () {
  
      this.data.moveZ = this.data.moveZ + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.z = this.data.moveZ;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });

  AFRAME.registerComponent("bottom", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
      window.addEventListener("click", (e)=>{
        this.data.moveX = this.data.movex - 0.01;
        var counter=0;
        counter=counter+1;
        print(counter);
      })
        var pos = this.el.getAttribute("position");
    
        pos.x = this.data.moveX;
    
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});

  

    }
  });
  