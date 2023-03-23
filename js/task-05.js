const inputElem = {
    input: document.querySelector("#name-input"),
    nameInput: document.querySelector("#name-output"),
  };
  
  const changeValue = (event) => {
    inputElem.nameInput.textContent = event.currentTarget.value;
    console.log('inputElem');
    if (inputElem.nameInput.textContent.length <= 0) {
        inputElem.nameInput.textContent = "Anonymous";
    }
  };
  
  inputElem.input.addEventListener("input", changeValue);