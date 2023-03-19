const inputElement = {
    input: document.querySelector(""#validation-input""),
    nameInput: document.querySelector("#name-output"),
  };
  
  const changeValue = (event) => {
    inputElement.nameInput.textContent = event.currentTarget.value;
    if (inputElement.nameInput.textContent.length <= 0) {
        inputElement.nameInput.textContent = "Anonymous";
    }
  };
  
  inputElement.input.addEventListener("input", changeValue);