//this is for profile constant basic (notes are more for me later)

const editProfileButton = document.querySelector(".profile__edit-button");

const profileModal = document.querySelector("#edit-profile-modal");

const profileCloseButton = profileModal.querySelector(".modal__close-button");

const profileSave = profileModal.querySelector(".modal__form");

const editProfilenameI = profileModal.querySelector("#profile-name-input");

const editProfiledescriptionI = profileModal.querySelector(
  "#profile-description-input"
);

//this is for post modal constant

const postButton = document.querySelector(".profile__plus-button");

const postModal = document.querySelector("#new-post-modal");

const postCloseButton = postModal.querySelector(".modal__close-button");

const postSave = postModal.querySelector(".modal__form");

const editPostnameI = postModal.querySelector("#post-name-input");

const editpostdescriptionI = postModal.querySelector("#post-description-input");

// constants for name holders

const nameHolder = document.querySelector(".profile__title");

const descriptionHolder = document.querySelector(".profile__description");

const titleHolder = document.querySelector(".card__image");

const descriptionPHolder = document.querySelector(".card__title");

//i realized i needed it to clone so this is const to clone for new post

//events for profile

editProfileButton.addEventListener("click", function () {
  editProfilenameI.value = nameHolder.textContent;
  editProfiledescriptionI.value = descriptionHolder.textContent;
  profileModal.classList.add("modal_is-opened");
});

profileCloseButton.addEventListener("click", function () {
  profileModal.classList.remove("modal_is-opened");
});

function handlePROFILESave(evt) {
  console.log("profile saving");
  nameHolder.textContent = editProfilenameI.value;
  descriptionHolder.textContent = editProfiledescriptionI.value;
  evt.preventDefault();
  profileModal.classList.remove("modal_is-opened");
  console.log(nameHolder);
  console.log(descriptionHolder);
}

profileSave.addEventListener("submit", handlePROFILESave);

//events for new post

postButton.addEventListener("click", function () {
  editPostnameI.value = titleHolder.textContent;
  editpostdescriptionI.value = descriptionPHolder.textContent;
  postModal.classList.add("modal_is-opened");
});

postCloseButton.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});

function handlePOSTSave(evt) {
  console.log("post saving");
  titleHolder.value = editPostnameI.textContext;
  descriptionPHolder.textContent = editpostdescriptionI.textContent;
  evt.preventDefault();
  profileModal.classList.remove("modal_is-opened");
  console.log(titleHolder);
  console.log(descriptionPHolder);
}

postSave.addEventListener("submit", handlePOSTSave);
