//this is for profile constant basic (notes are more for me later)

const editProfileButton = document.querySelector(".profile__edit-button");

const profileModal = document.querySelector("#edit-profile-modal");

const profileCloseButton = profileModal.querySelector(".modal__close-button");

const profileSave = profileModal.querySelector(".modal__form");

const editProfilenameInput = profileModal.querySelector("#profile-name-input");

const editProfiledescriptionInput = profileModal.querySelector(
  "#profile-description-input"
);

//this is for post modal constant

const postButton = document.querySelector(".profile__plus-button");

const postModal = document.querySelector("#new-post-modal");

const postCloseButton = postModal.querySelector(".modal__close-button");

const postSave = postModal.querySelector(".modal__form");

const editPostnameInput = postModal.querySelector("#post-name-input");

const editpostdescriptionInput = postModal.querySelector(
  "#post-description-input"
);

// constants for name holders

const nameHolder = document.querySelector(".profile__title");

const descriptionHolder = document.querySelector(".profile__description");

//const titleHolder = document.querySelector(".card__image");

//const descriptionPHolder = document.querySelector(".card__title");

//i realized i needed it to clone so this is const to clone for new post

//events for profile

editProfileButton.addEventListener("click", function () {
  editProfilenameInput.value = nameHolder.textContent;
  editProfiledescriptionInput.value = descriptionHolder.textContent;
  profileModal.classList.add("modal_is-opened");
});

profileCloseButton.addEventListener("click", function () {
  profileModal.classList.remove("modal_is-opened");
});

function handlePofileSave(evt) {
  nameHolder.textContent = editProfilenameInput.value;
  descriptionHolder.textContent = editProfiledescriptionInput.value;
  evt.preventDefault();
  profileModal.classList.remove("modal_is-opened");
  console.log(nameHolder);
  console.log(descriptionHolder);
}

profileSave.addEventListener("submit", handlePofileSave);

//events for new post

postButton.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postCloseButton.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});

function handlePostSave(evt) {
  titleHolder.value = editPostnameInput.textContext;
  descriptionPostHolder.textContent = editpostdescriptionInput.textContent;
  evt.preventDefault();
  console.log(editPostnameInput.textContext);
  console.log(editpostdescriptionInput.textContent);
  profileModal.classList.remove("modal_is-opened");
}

postSave.addEventListener("submit", handlePostSave);
