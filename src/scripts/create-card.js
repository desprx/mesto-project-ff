import { initialCards } from './cards.js';
import { popupClosed, popupOpenImage } from './popup.js';
import {
  cardTemplate,
  popupFullImg,
  popupCaption,
  formPic,
  cardList,
} from './index.js';

export function createCard(item, deleteCard, likeHandler, viewPhotoHandler) {
  const cardFilling = cardTemplate.cloneNode(true);
  const cardImage = cardFilling.querySelector('.card__image');
  const cardTitle = cardFilling.querySelector('.card__title');
  const deleteBtn = cardFilling.querySelector('.card__delete-button');
  const likeButtons = cardFilling.querySelectorAll('.card__like-button');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  deleteBtn.addEventListener('click', function (event) {
    const card = event.target.closest('.places__item');
    deleteCard(card);
  });
  likeHandler(likeButtons);

  cardImage.addEventListener('click', function () {
    viewPhotoHandler(item);
  });
  return cardFilling;
}

export function deleteCard(cardFilling) {
  cardFilling.remove();
}

export function handleFormSubmitPic(evt) {
  evt.preventDefault();

  const picName = document.querySelector('input[name="place-name"]').value;
  const picInput = document.querySelector('input[name="link"]').value;
  let newPic = {
    name: picName,
    link: picInput,
  };

  const cardFilling = createCard(
    newPic,
    deleteCard,
    handleClicks,
    viewPhotoHandler
  );

  cardList.prepend(cardFilling);
  initialCards.push(newPic);
  formPic.elements['place-name'].value = '';
  formPic.elements.link.value = '';
  popupClosed();
}

export function viewPhotoHandler(item) {
  popupFullImg.src = item.link;
  popupCaption.textContent = item.name;
  popupOpenImage();
}

export function handleClicks(likeButtons) {
  likeButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
      }
    });
  });
}
