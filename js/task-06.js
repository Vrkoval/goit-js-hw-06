  
const nameInput = document.getElementById("validation-input");
nameInput.addEventListener("blur", onInputBlur);
const countOfLetters = Number(nameInput.dataset.length);
function onInputBlur() {
  if (nameInput.value.length === countOfLetters) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
  }
}