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

//Test du champs lastname (nom de famille)
function lastnameValidation() {
  let lastName = document.querySelector("#last").value;
  const lastnameError = document.getElementById("lastNameErrorMsg");
  if (lastName === "") {
    lastnameError.innerText = error ("Champs obligatoire ");
    lastnameError.style.color = "red";
    //firstnameError.style.paddingTop = "14px";
    lastnameError.style.fontSize = "25px"
    return false;
  } else if (lastName.trim().length < 2) {
    lastnameError.innerText = error ("Veuillez entrer 2 caractères ou plus");
    lastnameError.style.color = "red";
    lastnameError.style.fontSize = "25px"

    return false;
}else {
  lastnameError.innerText= error("")
  return true
}
}
//Test du champs email
function emailValidation() {
  let email = document.querySelector("#email").value;
  let regexEmail = /.+\@.+\..+/;
  const emailError= document.getElementById("emailErrorMsg");
  if (email === ""){
  emailError.innerText = error ("Champs obligatoire ");
  emailError.style.color = "red";
  emailError.style.fontSize = "25px"
  
  return false;
}
  else if (regexEmail.test(email) === false) {
    emailError.innerText = error ("Merci d'inscrire une adresse mail correcte");
    emailError.style.color = "red";
    emailError.style.fontSize = "25px"
    return false;
  }
else{
  emailError.innerText = error("")
  return true;
}
}

//Test du champs birthdate (date de naissance)
function birthdateValidation() {
  let birthCheckValue = document.querySelector('#birthdate').value;
  const birthdateError = document.getElementById("birthdateErrorMsg");
  const minimumAge = 12;
  const today = new Date();
  const birthDate = new Date(birthCheckValue);
  let ageInYears = today.getFullYear() - birthDate.getFullYear();

  ageInYears =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? ageInYears - 1
      : ageInYears;

  let errorMessage = '';

  if (birthCheckValue === '') {
    errorMessage = 'Merci de renseigner une date de naissance';
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "25px"
  } else if (ageInYears < minimumAge) {
    errorMessage = "Désolée, l'âge minimum requis est de 12 ans";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "25px"
  }

  birthdateError.innerText = errorMessage;
  birthdateError.innerHTML = errorMessage;

  
// Renvoie vrai si aucun message d'erreur n'est défini, ou faux s'il y en a un
  return errorMessage === '';
}

//Test du champs quantity (quantité de tournois)
function quantityTournamentsValidation() {
  let quantity = document.querySelector("#quantity").value;
  const quantityTournamentsError = document.getElementById("quantityTournamentsErrorMsg");
  const quantityValid =
    quantity >= 0 &&
    quantity <= 99 &&
    quantity !== "";

  quantityTournamentsError.innerHTML = quantityValid
    ? ""
    : "Merci de renseigner un nombre compris entre 0 et 99";

  quantityTournamentsError.style.color = "red";
  quantityTournamentsError.style.fontSize = "25px";

  if (quantityValid) {
    //Valider le champs
    return true;
  } else {
    // Empêcher la validation du champs
    return false;
  }
}
//Test si une case du choix d'une ville a bien été cocher 
function locationsValidation(){
  let locations = document.querySelector("#locationsErrorMsg");
  const locationsError = document.getElementById("locationsErrorMsg")
  const locationsCheck = document.querySelector('input[name="location"]:checked')
  if (!locationsCheck){
    locations.innerHTML = "Merci de choisir une ville"
    locationsError.style.color = "red";
    locationsError.style.fontSize = "25px"
    return false
  } else {
      location.innerHTML = ""
      return true
  }
}
  
function acceptedConditionsValidation(){
  const checkbox1 = document.querySelector("#checkbox1");
  const acceptedError = document.querySelector("#acceptedErrorMsg");
  if(checkbox1.checked === false){
    acceptedError.innerText = error ("Merci de lire et d'accepter les conditions d'utilistaion")
    acceptedError.style.color = "red";
    acceptedError.style.fontSize ="25px"
    return false
  } else {
    acceptedError.innerText = error ("")
    acceptedError.style.color = "red";
    acceptedError.style.fontSize = "25px"
    return true;
  }
}
//Fonction qui vérifie que tous les champs du formulaire sont true en verifiant la valeur retournée par chaque foncction
function validate(){
  return(
    firstnameValidation() &&
    lastnameValidation() &&
    emailValidation() &&
    birthdateValidation() &&
    quantityTournamentsValidation() &&
    locationsValidation() &&
    acceptedConditionsValidation()
  )
}


//Event au click submit pour permettre de valider le formulaire si tout est true
const form = document.getElementById("form");
form.addEventListener("submit", (event)=>{
  event.preventDefault()
  if (validate() == true ){
    modalValidation()
  } else {return false};
})