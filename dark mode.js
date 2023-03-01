const $darkmode = document.querySelector('#btnDark');
const $body = document.querySelector('body');

$darkmode.addEventListener('click', e =>(
    $body.classList.toggle('darkmode')
))