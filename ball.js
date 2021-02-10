 class Ball{
     constructor(x,y,color){
         var options={
             restutution:1,
             
         }
         this.body=Bodies.circle(x,y,40,options)
         this.x=x
         this.y=y
         this.color=color
         World.add(world,this.body)
     }
    display(){
        push()
        var angle=this.body.angle
        var position=this.body.position
        translate(position.x,position.y)
        rotate(angle)
        fill(this.color)
        ellipse(0,0,80,80)
        pop()
    }
 }