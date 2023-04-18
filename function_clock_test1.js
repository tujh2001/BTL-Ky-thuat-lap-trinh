var h = 0;
var m = 0;
var s = 0;
function clock() {
    console.clear()
    s = s + 1
    if (s == 60){
        m = m + 1
        s = 0
        if (m == 60){
            h = h + 1
            m = 0
        } 
    }
    console.log(h + ":" + m + ":" + s)
}
 setInterval(clock,1000)
