//basic naming for config (was done last a work in progress)
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button-submit ",
  inactiveButtonClass: "modal__button-submit_error",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formElem, inputElem, errorTime) => {
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`#` + errorTimeID);
  formElem.classList.add(config.errorclass);
  inputElem.classList.add(config.inputErrorClass);
  errorTimeElem.textContent = errorTime;
};

const hideInputError = (formElem, inputElem) => {
  const errorTimeID = inputElem.id + "-error";
  const errorTimeElem = formElem.querySelector(`#` + errorTimeID);
  inputElem.classList.remove(config.errorclass);
  formElem.classList.remove(config.inputErrorClass);
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

const toggleSubmitButton = (inputList, buttonElem) => {
  if (hasInvalidInput(inputList)) {
    pausedButton(config.submitButtonSelector);
  } else {
    buttonElem.disabled = false;
    buttonElem.classList.remove(config.inactiveButtonClass);
  }
};

const pausedButton = (buttonElem) => {
  buttonElem.disabled = true;
  buttonElem.classList.add(config.inactiveButtonClass);
};

const resetValidation = (formElem, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElem, input);
  });
};

const setEventListeners = (formElem, buttonElem) => {
  const inputList = Array.from(formElem.querySelectorAll(config.inputSelector));
  const submitButton = formElem.querySelector(config.submitButtonSelector);
  toggleSubmitButton(inputList, submitButton);

  inputList.forEach((inputElem) => {
    inputElem.addEventListener("input", function () {
      checkInputValidity(formElem, inputElem);
      toggleSubmitButton(inputList, buttonElem);
    });
  });
};

const enableValadation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElem) => {
    setEventListeners(config.formSelector);
  });
};

enableValadation(config);
