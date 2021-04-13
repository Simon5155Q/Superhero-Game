class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2.0,
            length: 590
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           //push();
            //stroke("red");

            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //pop();

        }
    }
    
}