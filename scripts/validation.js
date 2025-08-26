//basic naming for config (was done last a work in progress)
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button-submit ",
  inactiveButtonClass: "modal__button-submit_error",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formElem, inputElem, errorTime, config) => {
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`#` + errorTimeID);
  errorTimeElem.classList.add(config.errorClass);
  inputElem.classList.add(config.inputErrorClass);
  errorTimeElem.textContent = errorTime;
};

const hideInputError = (formElem, inputElem, config) => {
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`#` + errorTimeID);
  errorTimeElem.classList.remove(config.errorClass);
  inputElem.classList.remove(config.inputErrorClass);
  errorTimeElem.textContent = "";
};

const checkInputValidity = (formElem, inputElem, config) => {
  if (!inputElem.validity.valid) {
    showInputError(formElem, inputElem, inputElem.validationMessage, config);
  } else {
    hideInputError(formElem, inputElem, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleSubmitButton = (inputList, buttonElem, config) => {
  if (hasInvalidInput(inputList)) {
    pausedButton(buttonElem, config);
  } else {
    buttonElem.disabled = false;
    buttonElem.classList.remove(config.inactiveButtonClass);
  }
};

const pausedButton = (buttonElem, config) => {
  buttonElem.disabled = true;
  buttonElem.classList.add(config.inactiveButtonClass);
};

const resetValidation = (formElem, inputList, config) => {
  inputList.forEach((input) => {
    hideInputError(formElem, input, config);
  });
};

const setEventListeners = (formElem, config) => {
  const inputList = Array.from(formElem.querySelectorAll(config.inputSelector));
  const submitButton = formElem.querySelector(config.submitButtonSelector);
  toggleSubmitButton(inputList, submitButton, config);

  inputList.forEach((inputElem) => {
    inputElem.addEventListener("input", function () {
      checkInputValidity(formElem, inputElem, config);
      toggleSubmitButton(inputList, submitButton, config);
    });
  });
};

const enableValadation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElem) => {
    setEventListeners(formElem, config);
  });
};

enableValadation(config);
