//basic naming for config (was done last)
const cogs = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (formElem, inputElem, errorTime) => {
  //error look here
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`#` + errorTimeID);
  formElem.classList.add(`modal__error`);
  inputElem.classList.add(`modal__input-error`);
  errorTimeElem.textContent = errorTime;
};

const hideInputError = (formElem, inputElem) => {
  //error look here
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`#` + errorTimeID);
  inputElem.classList.remove(`modal__input-error`);
  formElem.classList.remove(`modal__error`);
  errorTimeElem.textContent = "";
};

const checkInputValidity = (formElem, inputElem) => {
  if (!inputElem.validity.valid) {
    showInputError(formElem, inputElem, inputElem.validationMessage);
  } else {
    hideInputError(formElem, inputElem);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
//look here
const toggleSubmitButton = (inputList, buttonElem) => {
  //paused button look here
  if (hasInvalidInput(inputList)) {
    pausedButton(buttonElem);
  } else {
    buttonElem.disabled = false;
    buttonElem.classList.remove("modal__button-submit_error");
  }
};

const pausedButton = (buttonElem) => {
  buttonElem.disabled = true;
  buttonElem.classList.add("modal__button-submit_error");
};

const valudationReboot = (formElem, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElem, input);
  });
};

const setEventListeners = (formElem) => {
  //look here
  const inputList = Array.from(formElem.querySelectorAll(".modal__input"));
  const submitButton = formElem.querySelector(".modal__button-submit");
  toggleSubmitButton(inputList, submitButton);

  toggleSubmitButton(inputList, buttonElem);

  inputList.forEach((inputElem) => {
    inputElem.addEventListener("input", function () {
      checkInputValidity(formElem, inputElem);
      submitButton(inputList, buttonElem);
    });
  });
};

const enableValadation = () => {
  //look here
  const formList = Array.from(document.querySelectorAll(".modal__form"));

  formList.forEach((formElem) => {
    setEventListeners(formElem);
  });
};

enableValadation(cogs);
