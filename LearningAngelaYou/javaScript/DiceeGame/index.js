
let randNumber1 = (Math.floor(Math.random()*100)%6)+1;
let randNumber2 = (Math.floor(Math.random()*100)%6)+1;


let value = "./images/dice"+randNumber1+".png";
let value1 = "./images/dice"+randNumber2+".png";


document.querySelectorAll("img")[0].setAttribute("src",value)
document.querySelectorAll("img")[1].setAttribute("src",value1)

let text;
if(value>value1){
    text = "Player 1 Win";
}else if(value1>value){
    text = "Player 2 Win";
}else{
    text = "Draw";
}
document.getElementsByTagName("h1")[0].innerHTML = text;