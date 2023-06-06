function triangle(){
    //alert("Button test")
    let b=parseFloat(document.getElementById("txtbase").value);
    let h=parseFloat(document.getElementById("txtheight").value);
   
   
    document.getElementById("txtResult").value=(1/2)*b*h;
}