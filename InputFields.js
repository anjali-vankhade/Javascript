function submit(){
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if(pass == "Anjali@2408"){
        alert("Login Successfull")
    } else {
        alert ("wrong password");
    }
    alert("The Username is - "+ user + "\n The Password is - "+ pass );
}

function submitBtn(){
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    if(option1.checked == true){
        alert("The option selected is " + option1.value);
    } else {
        alert("The option selected is " + option2.value);
    }
}

function submitcar(){
    var carName = document.getElementById('carName');
    alert(carName.options[carName.selectedIndex].value);
}