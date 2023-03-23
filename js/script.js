
let primarycolor = "#d90429";
let secondarycolor = "#008000";

function notification(msg ,clr){
    Toastify({
        text: msg,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: clr,
        },
        onclick: function(){}
    }).showToast();
}

function login(){
    let username = document.getElementById("username").value;
    if (username.length < 3){
        let msg = "Please Enter Your Full Name";
        notification(msg,secondarycolor)
    }
    else {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if ( email === "" || password ===""){
            let msg = "Please Enter Username Or Password"
            notification(msg,secondarycolor)
        }
        else if ( email === "admin@user.com" && password === "123456"){
            window.location.href="home.html";
        }
        else {
            let msg = "Invalid Username or Password";
            notification(msg,secondarycolor)
        }
    }
}