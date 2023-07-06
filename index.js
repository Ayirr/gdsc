console.log("js initialised")

//displaying the email adress entered in input
let inputEl=document.getElementById("input");
let scbBtnEl=document.getElementById("scb-btn");
let emailEl=document.getElementById("email");
function scbFunc()
{
    var email=inputEl.value;
    emailEl.innerHTML="Emails will be sent to: " + email;
}
scbBtnEl.addEventListener("click",scbFunc)
function onPressingEnter(event)
{
    if(event.keyCode==13)
        {event.preventDefault();
        scbFunc()}
}
inputEl.addEventListener("keydown",onPressingEnter)


