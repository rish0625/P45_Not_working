class BaseClass {
    constructor(x, y, width, height, color){
        var options = {
            "restitution" : 0.8,
            "friction" : 1.0,
            "density" : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, color, options);
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var x = this.body.position.x; 
        var y = this.body.position.y;
        
        rectMode(CENTER);
    }
}