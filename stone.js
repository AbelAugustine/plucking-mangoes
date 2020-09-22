class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
      }

	

	
	display()
	{
			
			var stonepos=this.body.position;
			imageMode(CENTER);
			image(this.image,stonepos.x,stonepos.y,50,50)
			
			
	}

}