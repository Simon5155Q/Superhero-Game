class Box{
  constructor(x, y, width, height, angle){
    var options = {
      'restituition' : 0.6,
      'density' : 1.0,
      'friction' : 2.0,
      'isStatic' : false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    stroke("black");
    rect(0, 0, this.width, this.height);
    pop();
  }
}