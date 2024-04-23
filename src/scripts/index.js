import '/src/pages/index.css';
import { initialCards } from './cards.js';
import {
  popupOpenProfile,
  popupOpenNewPlace,
  popupClosed,
  handleFormSubmit,
} from './popup.js';
import {
  createCard,
  deleteCard,
  viewPhotoHandler,
  handleClicks,
  handleFormSubmitPic,
} from './create-card.js';

// попапы
export const popup = document.querySelector('.popup');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_new-card');
export const popups = document.querySelectorAll('.popup');
export let profileName = document.querySelector('.profile__title');
export let profileDescription = document.querySelector('.profile__description');
export const form = document.forms['edit-profile'];
export const nameProfile = form.elements.name;
export const descriptionProfile = form.elements.description;
// экспорт в попап жс
// экспорт в криэйт кард
export const cardTemplate = document.querySelector('#card-template').content;
export const cardList = document.querySelector('.places__list');
export const buttonOpenNewPlace = document.querySelector(
  '.profile__add-button'
);
export const ButtonProfileEdit = document.querySelector(
  '.profile__edit-button'
);
export const closeButtons = document.querySelectorAll('.popup__close');
export const formPic = document.forms['new-place'];
export let picName = formPic.elements['place-name'];
export let picInput = formPic.elements.link;
export const popupImg = document.querySelector('.popup_type_image');
export const popupFullImg = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');
////////
initialCards.forEach(function (item) {
  const card = createCard(item, deleteCard, handleClicks, viewPhotoHandler);
  cardList.append(card);
});

formPic.addEventListener('submit', handleFormSubmitPic);

// popups
ButtonProfileEdit.addEventListener('click', popupOpenProfile);
buttonOpenNewPlace.addEventListener('click', popupOpenNewPlace);
closeButtons.forEach((button) => button.addEventListener('click', popupClosed));
popups.forEach((popup) => {
  popup.addEventListener('click', function (evt) {
    if (evt.currentTarget === evt.target) {
      popupClosed();
    }
  });
});
form.addEventListener('submit', handleFormSubmit);
popups.forEach((popup) => {
  popup.classList.add('popup_is-animated');
});
