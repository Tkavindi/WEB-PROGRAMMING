document.getElementById('getYearsBtn').addEventListener('click', function age() {
    var enteredDate = document.getElementById('birthdate').value;
    // Below one is the single line logic to calculate the no. of years...
    var years = new Date(new Date() - new Date(enteredDate)).getFullYear() - 1970;
    document.getElementById("txtResult").value="Age is: "+years+" years.";
  })