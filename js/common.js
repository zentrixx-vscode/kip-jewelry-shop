// Обновить значок корзины (количество товаров)
function updateCartBadge() {
  var count = window.DRStore.cartCount();
  var badges = document.querySelectorAll('[data-cart-count]');

  for (var i = 0; i < badges.length; i++) {
    badges[i].textContent = String(count);
    badges[i].hidden = count <= 0;
  }
}

// Установить активную ссылку в меню
function setActiveNavLink() {
  var path = location.pathname.replace(/\\/g, '/');
  var links = document.querySelectorAll('.navlinks a');

  // Убираем активный класс у всех ссылок
  for (var i = 0; i < links.length; i++) {
    links[i].removeAttribute('id');
  }

  // Ищем нужную ссылку и делаем её активной
  for (var j = 0; j < links.length; j++) {
    var href = links[j].getAttribute('href');
    var filename = href.split('/').pop();

    if (path.endsWith(filename)) {
      links[j].id = 'active';
      break;
    }
  }
}

// Обновить состояние кнопок избранного
function updateFavoriteButtons() {
  var favorites = window.DRStore.getFavs();
  var buttons = document.querySelectorAll('[data-toggle-fav]');

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var productId = Number(button.getAttribute('data-toggle-fav'));
    var isFav = window.DRStore.isFav(productId);

    if (isFav) {
      button.classList.add('is-active');
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.classList.remove('is-active');
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    }
  }
}

// Обработчик клика для всех кнопок
function handleClick(event) {
  // ДОБАВИТЬ В КОРЗИНУ
  var addButton = event.target.closest('[data-add-to-cart]');
  if (addButton) {
    event.preventDefault();
    var productId = addButton.getAttribute('data-add-to-cart');
    window.DRStore.addToCart(productId, 1);
    return;
  }

  // ПЕРЕКЛЮЧИТЬ ИЗБРАННОЕ
  var favButton = event.target.closest('[data-toggle-fav]');
  if (favButton) {
    event.preventDefault();
    var productId = favButton.getAttribute('data-toggle-fav');
    var isNowFavorite = window.DRStore.toggleFav(productId);

    // Обновляем кнопку
    if (isNowFavorite) {
      favButton.classList.add('is-active');
      favButton.classList.add('active');
      favButton.setAttribute('aria-pressed', 'true');
    } else {
      favButton.classList.remove('is-active');
      favButton.classList.remove('active');
      favButton.setAttribute('aria-pressed', 'false');
    }

    // Анимация
    favButton.classList.remove('boop');
    void favButton.offsetWidth; // Перезапуск анимации
    favButton.classList.add('boop');
    return;
  }

  // ИЗМЕНИТЬ КОЛИЧЕСТВО В КОРЗИНЕ (+/-)
  var qtyButton = event.target.closest('[data-cart-qty]');
  if (qtyButton) {
    event.preventDefault();
    var productId = qtyButton.getAttribute('data-id');
    var step = Number(qtyButton.getAttribute('data-cart-qty')) || 0;
    window.DRStore.addToCart(productId, step);
    return;
  }

  // УДАЛИТЬ ИЗ КОРЗИНЫ
  var removeButton = event.target.closest('[data-cart-remove]');
  if (removeButton) {
    event.preventDefault();
    var productId = removeButton.getAttribute('data-cart-remove');
    window.DRStore.setCartQty(productId, 0);
    return;
  }
}

// Слушаем изменения данных и обновляем интерфейс
function onDataChange() {
  updateCartBadge();
  updateFavoriteButtons();
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
  updateFavoriteButtons();
  setActiveNavLink();
});

// Слушаем события изменения данных
window.addEventListener('dr:change', onDataChange);

// Слушаем все клики на странице
document.addEventListener('click', handleClick);