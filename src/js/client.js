const client = document.querySelector('.client__list')
const clientMobile = document.querySelector('.client__list-mobile')

setTimeout(function random() {
    if (window.screen.availWidth < 768) {
        clientMobile.classList.add('client__list-mobile_visible');
        client.classList.remove('client__list_visible');
    } else {
        client.classList.add('client__list_visible');
        clientMobile.classList.remove('client__list-mobile_visible');
    }
    setTimeout(random, 1000);
}, 1000);