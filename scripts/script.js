// Ambil referensi elemen
const initialCards = [
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

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const nameProfileElement = document.querySelector('.profile__name');
const aboutMeProfileElement = document.querySelector('.profile__about');
const inputName = popupEdit.querySelector('.popup__input_name');
const inputAboutMe = popupEdit.querySelector('.popup__input_about-me');
const closeButton = document.querySelector('.popup__close-button');
const editProfileForm = document.querySelector('.popup__container[name="edit-profile-form"]');
const newPlaceForm = document.querySelector('.popup__container[name="new-place-form"]');
const titleInput = popupAdd.querySelector('.popup__input_title');
const imageUrlInput = popupAdd.querySelector('.popup__input_image-url');

// Fungsi untuk mengisi nilai input dari tampilan profil
function isiInputDariProfil() {
    inputName.value = nameProfileElement.textContent;
    inputAboutMe.value = aboutMeProfileElement.textContent;
}

// Fungsi untuk mengupdate tampilan profil dari nilai input
function perbaruiProfilDariInput() {
    nameProfileElement.textContent = inputName.value;
    aboutMeProfileElement.textContent = inputAboutMe.value;
}

// Menambahkan event listener untuk tombol "Edit Profil"
editButton.addEventListener('click', () => {
    popupEdit.classList.add('popup_opened'); // Tampilkan popupEdit
    isiInputDariProfil(); // Isi nilai input dengan nilai dari profil saat tombol "Edit Profil" ditekan
});

// Menambahkan event listener untuk tombol "Add Card"
addButton.addEventListener('click', () => {
    popupAdd.classList.add('popup_opened');
    isiInputDariCard();
});

// Menggunakan event delegation untuk menangani tombol "Tutup" pada semua popup
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup__close-button')) {
      // Cari popup yang mengandung tombol "Tutup" yang ditekan
      const popup = event.target.closest('.popup');
      
      if (popup) {
          popup.classList.remove('popup_opened'); // Sembunyikan popup saat tombol "Tutup" ditekan
      }
  }
});


// Menambahkan event listener untuk event submit pada formulir
editProfileForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Hindari aksi bawaan formulir
    perbaruiProfilDariInput(); // Perbarui tampilan profil dari nilai input
    popupEdit.classList.remove('popup_opened'); // Sembunyikan popup setelah submit
});

// Menambahkan event listener untuk event submit pada formulir popup tambahan (popup add)
newPlaceForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Hindari aksi bawaan formulir

  // Ambil nilai yang dimasukkan pengguna
  const title = titleInput.value;
  const imageUrl = imageUrlInput.value;

  // Panggil fungsi untuk menambahkan kartu baru
  handleAddCard(title, imageUrl);

  // Reset nilai input
  titleInput.value = '';
  imageUrlInput.value = '';

  popupAdd.classList.remove('popup_opened'); // Sembunyikan popup setelah submit
});



const templateCard = document.querySelector('.template__card').content;
const elements = document.querySelector('.elements');
initialCards.forEach(i =>{
    const templateCardCopy = templateCard.cloneNode(true);
    templateCardCopy.querySelector(".card__title").textContent = i.name;
    templateCardCopy.querySelector(".card__image").src = i.link;
    elements.append(templateCardCopy);
});

function handleAddCard(name,link) {
    const templateCardCopy = templateCard.cloneNode(true);
    templateCardCopy.querySelector(".card__title").textContent = name;
    templateCardCopy.querySelector(".card__image").src = link;
    elements.append(templateCardCopy);
}

