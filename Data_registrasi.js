// Mendapatkan referensi ke form
const form = document.querySelector('form');

// Menambahkan event listener untuk form ketika di-submit
form.addEventListener('submit', function(event) {
    // Mencegah form untuk submit dan me-refresh halaman
    event.preventDefault();

    // Mendapatkan data dari form
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobi = document.querySelector('#hobi').value;

    // Menyimpan data ke Session Storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('hobi', hobi);

    // // Redirect ke halaman lain untuk menampilkan data yang telah disimpan
    // window.location.href = 'data.html';
});

