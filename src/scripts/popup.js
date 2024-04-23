import {
  popup,
  popups,
  popupEdit,
  popupAdd,
  popupImg,
  nameProfile,
  descriptionProfile,
  profileName,
  profileDescription,
} from './index.js';

export function popupOpenProfile(evt) {
  evt.preventDefault();
  formValue();
  popupEdit.classList.add('popup_is-opened');
  document.addEventListener('keydown', escapeListener);
}

export function popupOpenNewPlace(evt) {
  evt.preventDefault();
  popupAdd.classList.add('popup_is-opened');
  document.addEventListener('keydown', escapeListener);
}

export function popupClosed() {
  popups.forEach((popup) => {
    if (popup.classList.contains('popup_is-opened')) {
      popup.classList.remove('popup_is-opened');
    }
  });

  document.removeEventListener('keydown', escapeListener);
}

function escapeListener(evt) {
  if (evt.key === 'Escape') {
    popupClosed();
  }
}

export function formValue() {
  nameProfile.value = profileName.innerText;
  descriptionProfile.value = profileDescription.innerText;
}

export function handleFormSubmit(evt) {
  evt.preventDefault();
  const title = document.querySelector('.profile__title');
  const desc = document.querySelector('.profile__description');

  const profileName = nameProfile.value;
  const profileDescription = descriptionProfile.value;

  title.textContent = profileName;
  desc.textContent = profileDescription;

  popupClosed();
}

export function popupOpenImage() {
  popupImg.classList.add('popup_is-opened');
  document.addEventListener('keydown', escapeListener);
}
