class Chain{
constructor(b1,b2){

    var options={
        bodyA:b1,
        bodyB:b2,
        stiffness:0.09,length:54
    }
this.chain = Constraint.create(options);
World.add(world,this.chain)
}
display(){
    var p1 = this.chain.bodyA.position
    var p2 = this.chain.bodyB.position
    strokeWeight(10)
    line (p1.x,p1.y,p2.x,p2.y);
}

}


