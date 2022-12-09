const popup = document.querySelector('.modal');
const openPopupButton = document.querySelector('.button-open');
const closePopupButton = popup.querySelector('.button-close');

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closePopup();
  }
};

function openPopup () {
  popup.classList.toggle('modal--show');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closePopup () {
  popup.classList.toggle('modal--show');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

popup.addEventListener('click', ({target}) => {
  if (target === popup) {
    closePopup();
  }
});
