class Stone
{
    constructor(x,y,w,h)
    {
        this.w = w;
        this.h = h;
        this.image = loadImage("assets/stone.png");

        var options = 
        {
            restitution:0.8
        };

        this.body = Bodies.rectangle(x,y,w,h,options);

        World.add(world,this.body);
    }

    show()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}