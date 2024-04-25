const form = document.querySelector("#form")
const mail = document.querySelector("#mail")
const errorText = document.querySelector("#error")
const successText = document.querySelector("#success")


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit",(e)=>{
    let emailValue = mail.value
    if(validateEmail(emailValue)){
        errorText.style.display = "none";
        mail.style.border = "1px solid hsl(0, 6%, 24%)";
        successText.style.display = "block";
    }
    else{
        errorText.style.display = "block";
        mail.style.border = "1px solid hsl(0, 6%, 24%)";
        successText.style.display = "none";
        e.preventDefault();
    }
})