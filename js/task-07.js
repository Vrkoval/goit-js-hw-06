const inputElement = document.querySelector("#font-size-control");

const inputTextElement = document.querySelector("#text");
inputTextElement.style.fontSize = "16px";

const changeFontSize = (event) => {
  inputTextElement.style.fontSize = event.currentTarget.value + "px";
};
inputElement.addEventListener("change", changeFontSize);