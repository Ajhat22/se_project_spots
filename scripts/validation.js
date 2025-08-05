const showInputError = (formElem, inputElem, errorTime) => {
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`` + errorTimeID);
  inputElem.classList.add(`modal__input-error`);
  errorTimeElem.textContent = errorTime;
};

const hideInputError = (formElem, inputElem) => {
  const errorTimeElem = formElem.querySelector("#" + errorTimeID);
  inputElem.classList.remove(`modal__input-error`);
  errorTimeElem.textContent = "";
};

const checkInputValidity = (formElem, inputElem) => {
  if (!inputElem.validity.valid) {
    showInputError(formElem, inputElem, inputElem.errorTime);
  } else {
    hideInputError(formElem, inputElem);
  }
};
const setEventListeners = (formElem) => {
  const inputList = Array.from(formElem.querySelectorAll(".modal__input"));
  const submitButton = formElem.querySelector(".modal__button-submit");

  //toggleSubmitButton(inputList, submitButton)

  inputList.forEach((inputElem) => {
    inputElem.addEventListener("input", function () {
      checkInputValidity(formElem, inputElem);
      submitButton(inputList, buttonElem);
    });
  });
};

const enableValadation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));

  formList.forEach((formElem) => {
    setEventListeners(formElem);
  });
};
