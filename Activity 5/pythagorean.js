function pythagorean(){
    //alert("Button test")
    let a=parseFloat(document.getElementById("txtleg1").value);
    let b=parseFloat(document.getElementById("txtleg2").value);
   
   
    document.getElementById("txtResult").value=((a**2)+(b**2))**(1/2);
}