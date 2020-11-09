class SlingShot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04
        }
        this.sling=Constraint.create(options);
        console.log(this.sling);
        this.sling3Image=loadImage("sprites/sling3.png");
        
        World .add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        stroke(48,22,8);
        if(pointA.x<270){

        
        strokeWeight(7);
        line (pointA.x-15,pointA.y,pointB.x-20,pointB.y+15);
        
        line(pointA.x-15,pointA.y,pointB.x+20,pointB.y+15);
        image(this.sling3Image,pointA.x-30,pointA.y-15,15,30);
        }
        else if(pointA.x>275){
            
            strokeWeight(3);
            line(pointA.x+20,pointA.y+10,pointB.x-10,pointB.y+15);
            line (pointA.x+20,pointA.y+10,pointB.x+30,pointB.y+15);
            image(this.sling3Image,pointA.x+20,pointA.y-5,15,30);
            
        }
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
}