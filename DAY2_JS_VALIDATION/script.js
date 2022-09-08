let doc = document.getElementById("userList")
doc.innerText = "Empty"
function validation (userName, password, confirmPassword, email, dateOfBirth){

    if (userName.value.length < 4 || userName.value.length > 64){
        document.getElementById("name").innerHTML = "Enter value between 4 and 64 characters!"
        return
    } else document.getElementById("name").innerHTML = "";

    if (password.value.length < 8 || password.value.length > 64){
        document.getElementById("pass").innerHTML = "Enter value between 8 and 64 characters!"
        return
    } else document.getElementById("pass").innerHTML = "";

    if (password.value !== confirmPassword.value){
        document.getElementById("confPass").innerHTML = "Passwords does not match"
        return
    } else document.getElementById("confPass").innerHTML = "";
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        document.getElementById("mail").innerHTML = "Enter valid email!"
        return
    }else document.getElementById("mail").innerHTML = "";

    if (dateOfBirth.value === ""){
        document.getElementById("DoB").innerHTML = "Enter valid value!"
        return
    } else document.getElementById("DoB").innerHTML = "";

    doc.innerText = userName.value+"-"+email.value+"-"+dateOfBirth.value
}

document.getElementById("k").addEventListener("click", function(event){
    event.preventDefault()
});