class Block {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.4,
          friction:0.2
          //'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      
      World.add(world, this.body);
    }
  
  display(){
     if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(3);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
       push();
       World.remove(world,this.body);
       tint(255,this.Visibility);
       this.Visibility = this.Visibility - 5;
       pop();
     }
  };

  score(){
    if(this.Visibility < 0 && this.Visibility > -1005){
      Score++;
    }
  }
}