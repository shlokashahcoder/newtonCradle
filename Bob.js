class Bob{
    constructor(x,y,r){
       var options = {
           isStatic: false,
           restitution: 0.3,   
           friction:0.1,
           density:0.001,
//           frictionStatic:0.5
           frictionAir:0.01
       }
       this.x = x
       this.y = y
       this.r = r
       this.body = Bodies.circle(this.x,this.y,this.r,options)
       World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
   // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
   ellipseMode(RADIUS)
    fill("red")
    ellipse(this.x,this.y,this.r);    //why r instead of r/2?
    pop();
    }
}
// make is static to false if needed shloka...