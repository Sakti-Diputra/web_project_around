// Section 1: Mendeklarasikan Variabel
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeImageButton = document.querySelector('.popup__close-image');

const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImages = document.querySelector('.popup-images');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const inputName = document.querySelector('.popup__input_name');
const inputAbout = document.querySelector('.popup__input_about-me');

const inputTitle = document.querySelector('.popup__input_title');
const inputImage = document.querySelector('.popup__input_image-url');

const saveEditProfile = document.querySelector('form[name="edit-profile-form"]');
const saveAdd = document.querySelector('form[name="new-place-form"]');

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card__template');

const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title-image');

// Source of data
const boxCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

// Section 2: Pembuatan Fungsi
function createCard(data) {
  const placeImage = data.link;
  const placeName = data.name;
  const cardTemplateContent = cardTemplate.content.cloneNode(true);

  const cardImage = cardTemplateContent.querySelector('.card__image');
  const cardTitle = cardTemplateContent.querySelector('.card__title');
  const deleteCard = cardTemplateContent.querySelector('.card__delete-button');
  const likeButton = cardTemplateContent.querySelector('.card__like-button');

  cardImage.src = placeImage;
  cardTitle.textContent = placeName;

  cardImage.addEventListener('click', function() {
    popupImages.classList.toggle('popup_opened');
    popupImage.src = placeImage;
    popupTitleImage.textContent = placeName;
  });

  deleteCard.addEventListener('click', function() {
    const cardToDelete = deleteCard.closest('.card');
    elements.removeChild(cardToDelete);
  });

  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('liked');
    if (likeButton.classList.contains('liked')) {
      likeButton.src = './images/button_like-on.svg';
    } else {
      likeButton.src = './images/Like_button.svg';
    }
  });

  return cardTemplateContent;
}

function renderTemplate(data) {
  elements.innerHTML = '';

  data.forEach(function(cardData) {
    const card = createCard(cardData);
    elements.appendChild(card);
  });
}

function editProfile() {
  popupEdit.classList.toggle('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

// Section 3: Mendaftarkan Event Listener
editButton.addEventListener('click', editProfile);

saveEditProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  popupEdit.classList.toggle('popup_opened');
});

addButton.addEventListener('click', function() {
  popupAdd.classList.toggle('popup_opened');
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup__close-button')) {
    const popup = event.target.closest('.popup');
    if (popup) {
      popup.classList.remove('popup_opened');
    }
  }
});

saveAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  const title = inputTitle.value;
  const image = inputImage.value;

  boxCards.push({
    name: title,
    link: image
  });

  const card = createCard({ name: title, link: image });
  elements.prepend(card);

  inputTitle.value = '';
  inputImage.value = '';

  popupAdd.classList.toggle('popup_opened');
});

closeImageButton.addEventListener('click', function () {
  popupImages.classList.toggle('popup_opened');
});

// Inisialisasi
renderTemplate(boxCards);