function sum(){
    //alert("Button test")
    let fn=parseFloat(document.getElementById("txtfirstNumber").value);
    let sn=parseFloat(document.getElementById("txtsecondNumber").value);
   
    document.getElementById("txtResult").value=fn+sn;
}

function sub(){
    //alert("Button test")
    let fn=parseFloat(document.getElementById("txtfirstNumber").value);
    let sn=parseFloat(document.getElementById("txtsecondNumber").value);
   
    document.getElementById("txtResult").value=fn-sn;
}
function multiply(){
    //alert("Button test")
    let fn=parseFloat(document.getElementById("txtfirstNumber").value);
    let sn=parseFloat(document.getElementById("txtsecondNumber").value);
   
    document.getElementById("txtResult").value=fn*sn;
}
function divide(){
    //alert("Button test")
    let fn=parseFloat(document.getElementById("txtfirstNumber").value);
    let sn=parseFloat(document.getElementById("txtsecondNumber").value);
   
    document.getElementById("txtResult").value=fn/sn;
}