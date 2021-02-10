class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:200
            
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
   display(){
       push()
       if(this.sling.bodyA){
         strokeWeight(4)
         stroke("yellow")
         line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
       }
       
       pop()
   }
}