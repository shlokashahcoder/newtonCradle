/*
class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
    var options={
        bodyA:body1,
        bodyB: body2,
        stiffness:0.04,
        //length:10
        pointB:{x:this.offsetX,y:this.offsetY}
    }

   this.rope=Constraint.create(options);
    World.add(world,this.rope);
}
*/
/*
display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}*/



class Rope{
    constructor(bodyA1,bodyB1,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
//        var pointB
    var options={
        bodyA:bodyA1,
        bodyB: bodyB1,
        stiffness:0.4,
 //       length:10
        pointB:{x:this.offsetX,y:this.offsetY}
    }
   this.rope=Constraint.create(options);
    World.add(world,this.rope);
}

display(){
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position
 //   Push();
    rectMode(CENTER)
    fill("white")
 //   strokeColor("red");
    strokeWeight(3);

    line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
 //   Pop();
}
}