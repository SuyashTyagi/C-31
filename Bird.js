class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
   this.tragectary=[];
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>200&&this.body.velocity.x>10){
      var position=[this.body.position.x,this.body.position.y];
   this.tragectary.push(position);
    }
   for (var i= 0;i<this.tragectary.length;i++)
   {
    image(this.image2,this.tragectary[i][0],this.tragectary[i][1]);
   }

  }
}
