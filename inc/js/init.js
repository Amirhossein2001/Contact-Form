let nameInput = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let success = document.querySelector("#success");
let errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorFlag = false;
  if (nameInput.value.length < 1) {
    errorNodes[0].innerHTML = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if (email.value.length < 1) {
    errorNodes[1].innerText = "Please enter Email";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if(!errorFlag){
    success.innerHTML = "Success"
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  message.classList.remove("error-border");
  email.classList.remove("error-border");
}
