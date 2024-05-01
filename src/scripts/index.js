import '/src/pages/index.css';
import { initialCards } from './cards.js';
import { popupClosed, modalOpen, addOverlayClickListener } from './modal.js';
import { createCard, deleteCard, handleClicks } from './create-card.js';

// попапы
const popupsAll = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');

const cardList = document.querySelector('.places__list');
const buttonOpenNewPlace = document.querySelector('.profile__add-button');
const ButtonProfileEdit = document.querySelector('.profile__edit-button');
const closeButtonsPopup = document.querySelectorAll('.popup__close');
const formPicture = document.forms['new-place'];

const popupImage = document.querySelector('.popup_type_image');
const popupFullImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const form = document.forms['edit-profile'];
const nameProfile = form.elements.name;
const descriptionProfile = form.elements.description;
const titleElement = document.querySelector('.profile__title');
const descElement = document.querySelector('.profile__description');

initialCards.forEach(function (item) {
  const card = createCard(item, deleteCard, handleClicks, viewPhotoHandler);
  cardList.append(card);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  const profileName = nameProfile.value;
  const profileDescription = descriptionProfile.value;
  titleElement.innerText = profileName;
  descElement.innerText = profileDescription;
  popupClosed();
}

form.addEventListener('submit', handleFormSubmit);

formPicture.addEventListener('submit', handleFormSubmitPic);

ButtonProfileEdit.addEventListener('click', () => {
  nameProfile.value = titleElement.innerText;
  descriptionProfile.value = descElement.innerText;
  modalOpen(popupEdit);
});
buttonOpenNewPlace.addEventListener('click', () => modalOpen(popupAddCard));
closeButtonsPopup.forEach((button) =>
  button.addEventListener('click', popupClosed)
);
popupsAll.forEach(addOverlayClickListener);
popupsAll.forEach((popup) => {
  popup.classList.add('popup_is-animated');
});

function handleFormSubmitPic(evt) {
  evt.preventDefault();

  const picName = document.querySelector('input[name="place-name"]').value;
  const picInput = document.querySelector('input[name="link"]').value;
  const newPic = {
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
  formPicture.reset();
  popupClosed();
}

function viewPhotoHandler(item) {
  popupFullImg.src = item.link;
  popupCaption.textContent = item.name;
  popupFullImg.alt = popupCaption.textContent;
  modalOpen(popupImage);
}
