function volume(){
    //alert("Button test")
    let r=parseFloat(document.getElementById("txtradius").value);
    let h=parseFloat(document.getElementById("txtheight").value);
   
   
    document.getElementById("txtResult").value=(2*(22/7)*r*h)+2*(22/7)*r*r;
}