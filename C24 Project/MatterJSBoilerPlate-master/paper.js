class paper {
    constructor(x,y,width,height) {
        
        var modifications = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,this.width,this.height,modifications);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        strokeWeight(3);
        stroke("red");
        translate(posX , posY);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}