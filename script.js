// LOGIN VALIDATION
function loginValidation(){

let username = document.getElementById("username")?.value;
let password = document.getElementById("password")?.value;

if(username !== undefined){

    if(username === ""){
    alert("Username can't be blank.");
    return false;
    }

    if(password.length < 6){
    alert("Password must be at least 6 characters.");
    return false;
    }

    window.location.href = "camphome.html";
    return false;
}

return true;
}


// FEEDBACK VALIDATION
function feedbackValidation(){

let name = document.getElementById("name")?.value;
let email = document.getElementById("email")?.value;

let branch = document.getElementById("branch")?.value;
let company = document.getElementById("company")?.value;

let yes = document.getElementById("yes")?.checked;
let no = document.getElementById("no")?.checked;

let emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

if(name !== undefined){

    if(name === ""){
    alert("Name cannot be blank.");
    return false;
    }

    if(!emailPattern.test(email)){
    alert("Enter valid email.");
    return false;
    }

    if(branch === ""){
    alert("Select your branch.");
    return false;
    }

    if(company === ""){
    alert("Select a company.");
    return false;
    }

    if(!yes && !no){
    alert("Please choose Yes or No.");
    return false;
    }

   /* alert("Thank you for your feedback!");
    return false;*/

    if (confirm("Are you sure you want to submit feedback?")) {
    alert("Thank you for your feedback!");
    return true;
} else {
    return false;
}
}

return true;
}