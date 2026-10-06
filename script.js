const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body')
btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');
    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = ' Mode Gelap';
      } else {
        btnTema.textContent = ' Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');
btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});
btnTutupModal.addEventListener('click', function () {
    elemenModal.classList.remove('show');
});
// Pastikan kode ini dijalankan setelah semua elemen HTML siap
document.addEventListener('DOMContentLoaded', function () {

  // 1. Ambil elemen yang dibutuhkan
  const btnBukaModal = document.querySelector('#btnKontak');
  const elemenModal = document.querySelector('#modalKontak');
  const btnTutupModal = document.querySelector('#btnTutupModal');

  // 2. Event saat tombol "Kirim Pesan" ditekan
  btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah link pindah halaman / reload
    elemenModal.classList.add('show'); // Tampilkan modal
  });

  // 3. Event saat tombol "Tutup" di dalam modal ditekan
  btnTutupModal.addEventListener('click', function () {
    elemenModal.classList.remove('show'); // Sembunyikan modal
  });

  // 4. (Opsional) Tutup modal kalau area gelap di luar kotak modal diklik
  elemenModal.addEventListener('click', function (event) {
    if (event.target === elemenModal) {
      elemenModal.classList.remove('show');
    }
  });

});