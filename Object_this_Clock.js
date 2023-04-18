
let Clock = {
    s: 0,
    m: 0,
    h: 0,
    display(){
        console.clear()
    this.s = this.s + 1
    if (this.s == 60){
        this.m = this.m + 1
        this.s = 0
        if (this.m == 60){
            this.h = this.h + 1
            this.m = 0
        } 
    }
    console.log(this.h + ":" + this.m + ":" + this.s)
    }
}

// function render(){
//     Clock.display()
// }
// setInterval(render,1000) -> Cach 1


setInterval(() => {Clock.display()},1 )
