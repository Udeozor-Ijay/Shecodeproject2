let icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "images/night-mode.png";
    } else {
        icon.src = "images/sun (1).png";
    }
}

 let name = document.getElementById("fname");
 let lname = document.getElementById("lname")
 let password = document.getElementById("password");
 let confirm = document.getElementById("confirm");
 let form = document.getElementById("form");

function passValid(){
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");

    if(password != confirm) {
        alert("Passwords do not match");
    }
    else {
        alert("Pasword created successfully");
    }
}

const toggle = document.getElementById("toggle");
toggle.onclick = function() {
    toggle.classList.toggle("active")
}
