//arrays for cards (notes are for me later)
const initialCards = [
{ name:"Val Thorens",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
{ name: "Restaurant terrace",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
{name: "An outdoor cafe",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
{name: "A very long bridge, over the forest and through the trees",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
{name: "Tunnel with morning light",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
{name: "Mountain house",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},
];


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
function openModal(modal){
  modal.classList.add("modal_is-opened");
  
}

function closedModal(modal){
  modal.classList.remove("modal_is-opened");
  
}

editProfileButton.addEventListener("click", function () {
  editProfilenameInput.value = nameHolder.textContent;
  editProfiledescriptionInput.value = descriptionHolder.textContent;
  openModal(profileModal);
});

profileCloseButton.addEventListener("click", function () {
  closedModal(profileModal);
});

function handlePofileSave(evt) {
  nameHolder.textContent = editProfilenameInput.value;
  descriptionHolder.textContent = editProfiledescriptionInput.value;
  evt.preventDefault();
  closedModal(profileModal);
}

profileSave.addEventListener("submit", handlePofileSave);

//events for new post

postButton.addEventListener("click", function () {
  openModal(postModal);
});

postCloseButton.addEventListener("click", function () {
 closedModal(postModal)
 });

function handlePostSave(evt) {
  evt.preventDefault();
  console.log(editPostnameInput.value);
  console.log(editpostdescriptionInput.value);
  closedModal(postModal);
}
postSave.addEventListener("submit", handlePostSave);



//info for card arrays

initialCards.forEach(function (item) {
console.log(item.name);
console.log(item.link);
});