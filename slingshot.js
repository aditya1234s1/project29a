class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 7
}
//this.polygon = loadImage("polygon.png");


        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
       
}

fly(){
    this.sling.bodyA = null;
}

display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        strokeWeight(4);
        stroke("green");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

    }
    
}