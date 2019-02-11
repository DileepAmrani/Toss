var prp = prompt("player One");
var prp2 = prompt("player Two");
document.getElementById("inpone").value = prp.toUpperCase();
document.getElementById("inptwo").value = prp2.toUpperCase();




document.onkeydown = function(){ 
console.log("kk")   
}




function toss(){
    document.getElementById("imag").innerHTML = '<img src="FlipCoin.gif" width="200px"  />'

    var a = Math.random() * 2 + 1;
        var b = Math.floor(a);
        var c = Number(b)
        console.log(c)
setTimeout(function(){
    if(c === 1){
        document.getElementById("imag").innerHTML = '<img src="tail.jpg" width="200px"  />'
    }
    else( document.getElementById("imag").innerHTML = '<img  src="head1.jpg" width="200px"  />')

}, 3000) 
}


// if(prp === 1){
//     alert()
// }
