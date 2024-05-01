export function getCardTemplate() {
  const cardFilling = document.querySelector('#card-template');
  return cardFilling.content.cloneNode(true);
}

export function createCard(item, deleteCard, handleClicks, viewPhotoHandler) {
  const cardFilling = getCardTemplate(); // не смог побороть ошибку, но все работает

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
  handleClicks(likeButtons);

  cardImage.addEventListener('click', function () {
    viewPhotoHandler(item);
  });
  return cardFilling;
}

export function deleteCard(cardFilling) {
  cardFilling.remove();
}

export function handleClicks(likeButtons) {
  const likeButton = likeButtons[0];
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_is-active');
  });
}
