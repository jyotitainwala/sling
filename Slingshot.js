class Slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.07
            
        }
        this.sling=Constraint.create(option)
        this.pointB=pointB
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB
         
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

}