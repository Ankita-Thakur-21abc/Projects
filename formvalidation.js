document.getElementById("submit").onclick = function () {
    document.getElementById("table").style.display = "block";
  
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var password = row.insertCell(2);
    var about = row.insertCell(3);
    var dob = row.insertCell(4);



    name.innerHTML = document.getElementById("name").value;
    email.innerHTML = document.getElementById("email").value;
    password.innerHTML = document.getElementById("password").value;
    about.innerHTML = document.getElementById("comment").value;
    dob.innerHTML = document.getElementById("dob").value;

  
    return false;
  }