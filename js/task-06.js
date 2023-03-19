const inputElement =document.querySelector(" #validation-input");
const makeFocus = (event) => {
    inputElement.classList.add("invalid");
    if (
      event.currentTarget.value.length >= inputElement.attributes[2].value &&
      event.currentTarget.value.length <= inputElement.attributes[2].value
    ) {
      inputElement.classList.replace("invalid", "valid");
    }
  };
  const defineFocus = (event) => {
    inputElement.classList.remove("invalid", "valid");
  };
  
  inputElement.addEventListener("input", makeFocus);
  inputElement.addEventListener("focus", makeFocus);
  inputElement.addEventListener("blur", defineFocus);
  

  