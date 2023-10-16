// Section 1: Mendeklarasikan Variabel
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeImageButton = document.querySelector('.popup__close-image');

const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupImages = document.querySelector('.popup__images');

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
// Aray of object
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
// ---------------------------

// Function render template
// Untuk menampilkan carad card dari template
function renderTemplate(data) {

  //clean elements
  elements.innerHTML = '';
  console.log(data);

  //inisialisasi; jumlah data; increment
  for (let i = 0; i < data.length; i++){ 

    const placeImage = data[i].link;
    const placeName = data[i].name;
    //Template
    const cardTemplateContent = cardTemplate.content
    const cloneContent = cardTemplateContent.cloneNode(true)

    //Mengubah nilai Image Url dan Title
    const cardImage = cloneContent.querySelector('.card__image');
    const cardTitle = cloneContent.querySelector('.card__title');
  
    cardImage.src = placeImage;
    cardTitle.textContent = placeName;

    // -Eventlistener
    cardImage.addEventListener('click', function() {
      console.log(placeName)
      // Toggle popup image
      popupImages.classList.toggle('popup_opened');

      // Inject data
      popupImage.src = placeImage;
      popupTitleImage.textContent = placeName;

    });

    const deleteCard = cloneContent.querySelector('.card__delete-button');
    
    deleteCard.addEventListener('click', function() {
      console.log('delete', placeName)

      // Delete
      boxCards.splice(i, 1);
      renderTemplate(boxCards)
    });

    const likeButton = cloneContent.querySelector('.card__like-button');
    likeButton.addEventListener('click', function() {
      console.log(likeButton)
      const statusBtn = likeButton.src.indexOf('Like_button.svg')
      console.log(statusBtn)
      
      if (statusBtn > -1) { 
        likeButton.src = './images/button_like-on.svg'
      }

      else {
        likeButton.src = './images/Like_button.svg'
      }

      // menambahkan fa-solid
      //const child = likeButton.children;
     // console.log(typeof(child), child)

     // const heart = child[0];
     // console.log(heart)
     // heart.classList.add('fa-solid')
    });

    // -Append
    elements.appendChild(cloneContent);
  
  }
};

// Fungsi edit profile
// Untuk mengubah informasi profile
function editProfile() {
  console.log('edit button')

  // Toggle popup edit
  popupEdit.classList.toggle('popup_opened')

  // Inject data ke input name
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

// Section 3: Mendaftarkan Event Listener
// ---------------------------------------

editButton.addEventListener('click', editProfile);

saveEditProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  popupEdit.classList.toggle('popup_opened');

});

addButton.addEventListener('click', function() {
  console.log('add button')

  popupAdd.classList.toggle('popup_opened')
});

// Menggunakan event delegation untuk menangani tombol "Tutup" pada semua popup
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup__close-button')) {
      // Cari popup yang mengandung tombol "Tutup" yang ditekan
      const popup = event.target.closest('.popup');
      
      if (popup) {
          popup.classList.remove('popup_opened'); // Sembunyikan popup saat tombol "Tutup" ditekan
      }
  }
});

saveAdd.addEventListener('submit', function (event) {
  event.preventDefault()
  const title = inputTitle.value;
  const image = inputImage.value;

  // Validation

  console.log(`
    Title: ${title},
    Image: ${image}
  `);

  boxCards.push({
    name: title,
    link: image
  });

  renderTemplate(boxCards);
  inputTitle.value = ''
  inputImage.value = ''

  popupAdd.classList.toggle('popup_opened');
});

closeImageButton.addEventListener('click', function () {
  popupImages.classList.toggle('popup_opened')
});

// --------
// Inisialisasi
renderTemplate(boxCards);
