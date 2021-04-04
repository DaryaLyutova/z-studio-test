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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZGVvSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX19pbWFnZScpO1xyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG5jb25zdCBjbG9zZUJ1dHRvbiA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UtYnV0dG9uJyk7XHJcbmNvbnN0IG9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb19fYnV0dG9uJyk7XHJcblxyXG5jb25zdCBvcGVuVmlkZW8gPSAoKSA9PiB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcclxufVxyXG5cclxuY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xyXG59XHJcblxyXG52aWRlb0luZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuVmlkZW8oKSk7XHJcbm9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuVmlkZW8oKSk7XHJcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQb3B1cCgpKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
