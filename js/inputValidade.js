const form = document.querySelector(".form");
const storeName = document.querySelector("#store-name");
const wppInput = document.querySelector('#whatsapp')
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Verfica se os campos estão vazios
  if(storeName.value === "") {
    storeName.classList.add('error');
    alert("Precisa preencher todos os dados");
    return;
  } else {
    storeName.classList.remove('error');
  }

  if(wppInput.value === "") {
    wppInput.classList.add("error");
    alert("Precisa preencher todos os dados");
    return;
  } else {
    wppInput.classList.remove('error');
  }

  if(nameInput.value === "") {
    nameInput.classList.add("error");
    alert("Precisa preencher todos os dados");
    return;
  } else {
    nameInput.classList.remove('error');
  } 

  if(emailInput.value === "" || !isEmailValid) {
    alert("Precisa preencher todos os dados");
    emailInput.classList.add("error");
    return;
  } else {
    emailInput.classList.remove('error');
  } 

  if(passwordInput.value === "") {
    passwordInput.classList.add("error");
    alert("Precisa preencher todos os dados");
    return;
  } else {
    passwordInput.classList.remove('error');
  } 


  // Se todos os campos estiverem preenchidos
  form.submit()
})

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.\.[a-z]{2,}$/
  )

  if(emailRegex.test(email)) {
    return true;
  }

  return false;

}