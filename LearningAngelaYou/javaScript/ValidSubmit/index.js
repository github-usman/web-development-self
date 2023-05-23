
function myFunction(){
    

    if(document.getElementById("num1").value == "1" && document.getElementById("num2").value == "2" && document.getElementById("num3").value == "3" && document.getElementById("num4").value == "4" && document.getElementById("num5").value == "5" && document.getElementById("num6").value == "6" && document.getElementById("num7").value == "7" && document.getElementById("num8").value == "8" && document.getElementById("num9").value == "9" && document.getElementById("num10").value == "10"){
        text = "Correct Table";
    }else{
        text = "Wrong Ans";
    }

    document.getElementById("demo").innerHTML = text;
}
