export function modalOpen(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', escapeListener);
}

export function popupClosed() {
  const popupsAll = document.querySelectorAll('.popup');
  popupsAll.forEach((popup) => {
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

export function addOverlayClickListener(popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.currentTarget === evt.target) {
      popupClosed();
    }
  });
}
