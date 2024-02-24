// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardItem = cardTemplate.querySelector(".places__item");
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function addCard(item) {
  const cardFilling = cardTemplate.cloneNode(true);
  const deleteBtn = cardFilling.querySelector(".card__delete-button");

  cardFilling.querySelector(".card__image").src = item.link;
  cardFilling.querySelector(".card__image").alt = item.name;
  cardFilling.querySelector(".card__title").textContent = item.name;

  deleteBtn.addEventListener("click", deleteCard);
  cardList.append(cardFilling);
}

// @todo: Функция удаления карточки

function deleteCard(event) {
  const cardItem = event.target.closest(".places__item");
  cardItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(addCard);
