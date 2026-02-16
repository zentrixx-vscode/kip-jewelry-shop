// Создать HTML карточки товара для избранного
function createFavoriteCard(product) {
  var isFavorite = window.DRStore.isFav(product.id);
  var favClass = isFavorite ? 'is-active active' : '';
  var isOutOfStock = product.stock <= 0;
  var disabled = isOutOfStock ? 'disabled' : '';
  var stockText = isOutOfStock ? 'Нет в наличии' : 'В наличии: ' + product.stock;

  var html = '';
  html += '<div class="shop-card">';
  var imagePath = product.image;
  // If we are in /pages/, we need to go up one level if path starts with ./
  if (imagePath.startsWith('./')) {
    imagePath = '.' + imagePath;
  }

  html += '  <a class="shop-card__imgwrap" href="./product-' + product.id + '.html" aria-label="' + product.title + '">';
  html += '    <img class="shop-card__img" src="' + imagePath + '" alt="' + product.title + '" loading="lazy">';
  html += '  </a>';
  html += '  <div class="shop-card__body">';
  html += '    <div class="shop-card__meta">';
  html += '      <div class="shop-card__brand">' + product.brand + '</div>';
  html += '      <button class="shop-iconbtn shop-fav ' + favClass + '" data-toggle-fav="' + product.id + '" type="button" aria-label="Убрать из избранного" aria-pressed="' + (isFavorite ? 'true' : 'false') + '">❤</button>';
  html += '    </div>';
  html += '    <div class="shop-card__title">' + product.title + '</div>';
  html += '    <div class="shop-card__row">';
  html += '      <div class="shop-card__price">';
  html += '        <span class="shop-card__price-main">' + window.DRStore.money(product.price) + '</span>';
  html += '        <span class="shop-card__price-old">' + window.DRStore.money(product.oldPrice) + '</span>';
  html += '      </div>';
  html += '      <div class="shop-card__stock">' + stockText + '</div>';
  html += '    </div>';
  html += '    <button class="shop-btn" data-add-to-cart="' + product.id + '" type="button" ' + disabled + '>Добавить в корзину</button>';
  html += '  </div>';
  html += '</div>';

  return html;
}

// Отобразить избранные товары
function renderFavorites() {
  var gridElement = document.querySelector('[data-favs-grid]');
  if (!gridElement) {
    return;
  }

  // Получаем все товары и избранное
  var allProducts = window.DRStore.getProducts();
  var favoriteIds = window.DRStore.getFavs();

  // Фильтруем только избранные товары
  var favoriteProducts = [];
  for (var i = 0; i < allProducts.length; i++) {
    var product = allProducts[i];
    var isFavorite = false;

    for (var j = 0; j < favoriteIds.length; j++) {
      if (favoriteIds[j] === product.id) {
        isFavorite = true;
        break;
      }
    }

    if (isFavorite) {
      favoriteProducts.push(product);
    }
  }

  var emptyElement = document.querySelector('[data-favs-empty]');

  // Если избранное пустое
  if (favoriteProducts.length === 0) {
    gridElement.innerHTML = '';
    if (emptyElement) {
      emptyElement.hidden = false;
    }
  } else {
    // Показываем товары
    if (emptyElement) {
      emptyElement.hidden = true;
    }

    var html = '';
    for (var k = 0; k < favoriteProducts.length; k++) {
      html += createFavoriteCard(favoriteProducts[k]);
    }
    gridElement.innerHTML = html;
  }
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  renderFavorites();

  // Слушаем изменения данных
  window.addEventListener('dr:change', renderFavorites);
});