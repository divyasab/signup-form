function createAccount(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value

    var letters = /^[A-Za-z '-]+$/;
    var email_value = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please enter all the details.");
    } else if (!letters.test(name)) {
        alert("Name is incorrect.");
    } else if (!email_value.test(email)) {
        alert("Email is not in the correct format.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else if (password.length > 12) {
        alert("Password is too long. Maximum length is 12 characters.");
    } else if (password.length < 6) {
        alert("Password is too short. Minimum length is 6 characters.");
    } else {
        // alert("Your account has been created successfully.");
        window.location = "form.html";
    }
}    