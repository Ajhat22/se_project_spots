//this is for profile

const editProfileButton = document.querySelector(".profile__edit-button");

const profileModal = document.querySelector("#edit-profile-modal");

const profileCloseButton = profileModal.querySelector(".modal__close-button");

//this is for post modal

const postButton = document.querySelector(".profile__plus-button");

const postModal = document.querySelector("#new-post-modal");

const postCloseButton = postModal.querySelector(".modal__close-button");
//events for profile

editProfileButton.addEventListener("click", function () {
  profileModal.classList.add("modal_is-opened");
});

profileCloseButton.addEventListener("click", function () {
  profileModal.classList.remove("modal_is-opened");
});

//events for new post

postButton.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postCloseButton.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});
