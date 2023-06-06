function area(){
    //alert("Button test")
    let r=parseFloat(document.getElementById("txtradius").value);
   // let p=parseFloat(document.getElementById("txtperimeter").value);
   
    document.getElementById("txtperimeter").value=2*(22/7)*r;
    document.getElementById("txtResult").value=(22/7)*r*r;
}
