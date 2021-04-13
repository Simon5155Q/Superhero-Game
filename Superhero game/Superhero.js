  class Superhero{
    constructor(x, y, width, height, angle) {
        var options = {
          'restituition' : 0,
          'density' : 5.0,
          'friction' : 0,
          'isStatic' : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-02.png");
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 140, 100);
        /*rectMode(CENTER);
        rect(0, 0, this.width, this.height);*/
        pop();
      }
}