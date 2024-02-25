// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const cardList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCard(item, deleteCard) {
  const cardFilling = cardTemplate.cloneNode(true);
  const cardImage = cardFilling.querySelector(".card__image");
  const cardTitle = cardFilling.querySelector(".card__title");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  const deleteBtn = cardFilling.querySelector(".card__delete-button");
  deleteBtn.addEventListener("click", function (event) {
    const card = event.target.closest(".places__item");
    deleteCard(card);
  });
  return cardFilling;
}
// @todo: Функция удаления карточки
function handleDeleteCard(cardFilling) {
  cardFilling.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const card = createCard(item, handleDeleteCard);
  cardList.append(card);
});
