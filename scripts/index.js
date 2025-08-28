//arrays for cards (notes are for me later)
const initialCards = [
  {
    name: "golden gate",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

//this is for profile constant basic (notes are more for me later)

const editProfileButton = document.querySelector(".profile__edit-button");

const profileModal = document.querySelector("#edit-profile-modal");

const profileCloseButton = profileModal.querySelector(".modal__close-button");

const profileSave = profileModal.querySelector(".modal__form");

const editProfileNameInput = profileModal.querySelector("#profile-name-input");

const editProfileDescriptionInput = profileModal.querySelector(
  "#profile-description-input"
);

//this is for post modal constant

const postButton = document.querySelector(".profile__plus-button");

const postModal = document.querySelector("#new-post-modal");

const postCloseButton = postModal.querySelector(".modal__close-button");

const postSave = postModal.querySelector(".modal__form");

const editPostNameInput = postModal.querySelector("#post-image-input");

const editPostDescriptionInput = postModal.querySelector(
  "#post-description-input"
);

// constants for name holders and card maaker

const nameHolder = document.querySelector(".profile__title");

const descriptionHolder = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-Template");

const cardsList = document.querySelector(".cards__list");

const cardSubmitButton = document.querySelector(".modal__button-submit");

//constants for images

const imgPrev = document.querySelector("#mag-imager-modal");

const imgPrevHolder = imgPrev.querySelector(".modal__image");

const imgCloseButton = imgPrev.querySelector(".modal__close-button");

const imgCaption = imgPrev.querySelector(".modal__caption");

//overlay stuff ?
const modals = document.querySelectorAll(".modal");
function handleEscape(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".modal_is-opened");
    closeModal(activePopup);
  }
}

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});

//function for card collection
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".card__title");
  const cardElementImage = cardElement.querySelector(".card__image");

  cardElementImage.src = data.link;
  cardElementTitle.textContent = data.name;
  cardElementImage.alt = data.name;

  const cardHeartButton = cardElement.querySelector(".card__like-button");
  cardHeartButton.addEventListener("click", () => {
    cardHeartButton.classList.toggle("card__like-button_active");
  });

  const cardTrashButton = cardElement.querySelector(".card__trash-button");
  cardTrashButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardElementImage.addEventListener("click", () => {
    imgPrevHolder.src = data.link;
    imgCaption.textContent = data.name;
    imgPrevHolder.alt = data.name;
    openModal(imgPrev);
  });
  return cardElement;
}

//events for profile
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keyup", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keyup", handleEscape);
}

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = nameHolder.textContent;
  editProfileDescriptionInput.value = descriptionHolder.textContent;
  resetValidation(
    profileModal,
    [editProfileNameInput, editProfileDescriptionInput],
    config
  );
  openModal(profileModal);
});

profileCloseButton.addEventListener("click", function () {
  closeModal(profileModal);
});

function handleProfileSave(evt) {
  evt.preventDefault();
  nameHolder.textContent = editProfileNameInput.value;
  descriptionHolder.textContent = editProfileDescriptionInput.value;
  closeModal(profileModal);
}

profileSave.addEventListener("submit", handleProfileSave);

//events for new post

postButton.addEventListener("click", function () {
  openModal(postModal);
});

postCloseButton.addEventListener("click", function () {
  closeModal(postModal);
});

function handlePostSave(evt) {
  evt.preventDefault();
  const newCard = {
    name: editPostDescriptionInput.value,
    link: editPostNameInput.value,
  };
  const cardElement = getCardElement(newCard);
  cardsList.prepend(cardElement);
  closeModal(postModal);
  pausedButton(cardSubmitButton, config);
  postSave.reset();
}
postSave.addEventListener("submit", handlePostSave);

//info for card arrays

initialCards.forEach(function (item) {
  const getCard = getCardElement(item);
  cardsList.prepend(getCard);
});

//info for image modal
imgCloseButton.addEventListener("click", function () {
  closeModal(imgPrev);
});
