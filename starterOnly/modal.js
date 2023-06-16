function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close").addEventListener("click", closeModal)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture de la modale
function closeModal(){
  modalbg.style.display = "none";
}
function modalValidation(){
  const modalSuccess = document.querySelector("#modalSuccess");
  modalSuccess.style.display="block";
  modalbg.style.display="none";
}
function error(message){
  return message;
}

//Test du champs firstname (prénoms)
function firstnameValidation() {
  let firstName = document.querySelector("#first").value;
  const firstnameError = document.getElementById("firstNameErrorMsg");
  if (firstName === "") {
    firstnameError.innerText = error ("Champs obligatoire ");
    firstnameError.style.color = "red";
    //firstnameError.style.paddingTop = "14px";
    firstnameError.style.fontSize = "25px"
    return false;
  } else if (firstName.trim().length < 2) {
    firstnameError.innerText = error ("Veuillez entrer 2 caractères ou plus");
    firstnameError.style.color = "red";
    firstnameError.style.fontSize = "25px"

    return false;
}else {
  firstnameError.innerText= error("")
  return true
}
}
function validate(){
  return(
    firstnameValidation()
  )
}

const form = document.getElementById("form");
form.addEventListener("submit", (event)=>{
  event.preventDefault()
  if (validate() == true ){
    modalValidation()
  } else {return false};
})