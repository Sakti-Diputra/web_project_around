// Ambil referensi elemen
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const nameProfileElement = document.querySelector('.profile__name');
const aboutMeProfileElement = document.querySelector('.profile__about');
const inputName = document.querySelector('.popup__input_name');
const inputAboutMe = document.querySelector('.popup__input_about-me');
const closeButton = document.querySelector('.popup__close-button');
const editProfileForm = document.querySelector('.popup__container');

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
editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened'); // Tampilkan popup
    isiInputDariProfil(); // Isi nilai input dengan nilai dari profil saat tombol "Edit Profil" ditekan
});

// Menambahkan event listener untuk tombol tutup
closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened'); // Sembunyikan popup saat tombol tutup ditekan
});

// Menambahkan event listener untuk event submit pada formulir
editProfileForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Hindari aksi bawaan formulir
    perbaruiProfilDariInput(); // Perbarui tampilan profil dari nilai input
    popup.classList.remove('popup_opened'); // Sembunyikan popup setelah submit
});
