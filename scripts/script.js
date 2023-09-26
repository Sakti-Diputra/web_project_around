// Ambil referensi elemen
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const namaProfilElement = document.querySelector('.profile__name');
const tentangSayaProfilElement = document.querySelector('.profile__about');
const inputNama = document.querySelector('.popup__input_name');
const inputTentangSaya = document.querySelector('.popup__input_about-me');
const closeButton = document.querySelector('.popup__close-button');
const simpanButton = document.querySelector('.popup__submit-button');

// Fungsi untuk mengisi nilai input dari tampilan profil
function isiInputDariProfil() {
    inputNama.value = namaProfilElement.textContent;
    inputTentangSaya.value = tentangSayaProfilElement.textContent;
}

// Fungsi untuk mengupdate tampilan profil dari nilai input
function perbaruiProfilDariInput() {
    namaProfilElement.textContent = inputNama.value;
    tentangSayaProfilElement.textContent = inputTentangSaya.value;
}

// Menambahkan event listener untuk tombol "Edit Profil"
editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened') // Tampilkan popup
    isiInputDariProfil(); // Isi nilai input dengan nilai dari profil saat tombol "Edit Profil" ditekan
});

// Menambahkan event listener untuk tombol "Simpan"
simpanButton.addEventListener('click', function (event) {
    event.preventDefault(); // Hindari aksi bawaan formulir
    perbaruiProfilDariInput(); // Perbarui tampilan profil dari nilai input
    popup.classList.remove('popup_opened') // Sembunyikan popup
});

// Menambahkan event listener untuk tombol tutup
closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened') // Sembunyikan popup saat tombol tutup ditekan
});