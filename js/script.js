const scriptURL = 'https://script.google.com/macros/s/AKfycbyBX_sctZEGYtNbiZw10PLmdwOHh7XoRY9t-q0wFVROJA_1W0HjT8plve8JKIzbbyjV/exec'
const form = document.forms['kelompok8-contact-form']
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const disableBtn = document.getElementById("btn-loading");

disableBtn.disabled = true;

form.addEventListener('submit', e => {
    e.preventDefault()
    // menampilkan tombol loading, lalu hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
        // menampilkan tombol kirim, lalu hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        // menampilkan alert
        alert("Terimakasih, pesan anda sudah terkirim!.");

        // reset formnya
        form.reset();

        console.log('Success!', response);

    })
    .catch(error => console.error('Error!', error.message));
});



// membuat efek ketika website di scroll
window.addEventListener('scroll', effect);

function effect() {
    let efek = document.querySelectorAll('.effect');

    for( let i = 0; i < efek.length; i++ ) {

        let windowHeight = window.innerHeight;
        let effectTop = efek[i].getBoundingClientRect().top;
        let effectPoint = 150;

        if ( effectTop < windowHeight - effectPoint ) {
            efek[i].classList.add('active');
        } else {
            efek[i].classList.remove('active');
        }
    }
}