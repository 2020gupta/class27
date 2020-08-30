class Box {
    constructor(body1,body2,offsetx,offsety) {
      var options = {
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetx,y:offsety},
isStatic:true,
      }
     // this.body = Bodies.rectangle(x, y, width, height, options);
      this.offsetx=offsetx;
      this.offsety=offsety;
     this.rope=Constraint.create(options)
     World.add(world, this.rope);
     // World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      var pointA=this.rope.bodyA.position;
      var pointB=this.rope.bodyB.position;
      strokeWeight(2);
      var anchor1x=pointA.x;
      var anchor1y=pointA.y;

      var anchor2x=pointB.x+this.offsetx.x;
      var anchor2y=pointB.y+this.offsetx.y;
    //  push();
     // translate(pos.x,pos.y);
      //rotate(angle);
      rectMode(CENTER);
      //rect(pos.x,pos.y,this.width,this.height)
     //image(this.image,500,600,this.width,this.height);
     // pop();
    }
  };