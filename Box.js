class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255; 
        World.add(world, this.body);
      }

      score(){
        if (this.Visibility < 0 && this.Visibility > -256){
          score++;
      }
    }

      display(){
        rectMode(CENTER);
        if(this.body.speed > 3){
          push();
          this.Visibility = this.Visibility - 256;
          World.remove(world, this.body);
          pop();
        }

        else{
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
      }
    }