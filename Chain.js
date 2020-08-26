 class Chain{
 constructor(bodyA,bodyB){
    var options = {
        length : 10,
        stiffness : 0.9,
        bodyA : bodyA,
        bodyB : bodyB 
      }
     this.chain = Constraint.create(options);
     World.add(world,this.chain);

 } 
 
 display(){
     var PointA = this.chain.bodyA.position
    var PointB = this.chain.bodyB.position
    push();
    strokeWeight(7);
    line(PointA.x,PointA.y,PointB.x,PointB.y);
    pop(); 
 }
 } 