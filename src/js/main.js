const videoInfo = document.querySelector('.info__image');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const openButton = document.querySelector('.info__button');

const openVideo = () => {
    popup.classList.add('popup_opened');
}

const closePopup = () => {
    popup.classList.remove('popup_opened');
}

videoInfo.addEventListener('click', () => openVideo());
openButton.addEventListener('click', () => openVideo());
closeButton.addEventListener('click', () => closePopup());
