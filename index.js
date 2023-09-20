var inp1=Math.floor(Math.random()*6+1);
var inp2=Math.floor(Math.random()*6+1);
if(inp1>inp2){
    document.querySelector("h1").textContent="🙌 Player 1 Won"
}
else if(inp1==inp2){
    document.querySelector("h1").textContent="!Dra=awW!"
}
else{
    document.querySelector("h1").textContent="Player 2 Won 🙌"
}
var leftImg=document.querySelector(".img1").setAttribute("src","./images/dice"+inp1+".png")
var rightImg=document.querySelector(".img2").setAttribute("src","./images/dice"+inp2+".png")