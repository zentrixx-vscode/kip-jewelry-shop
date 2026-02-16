function normalizeText(text) {
  return String(text || '').toLowerCase().trim();
}

// Применить фильтры к списку товаров
function applyFilters(products) {
  var searchInput = document.querySelector('[data-search]');
  var categorySelect = document.querySelector('[data-category]');
  var sortSelect = document.querySelector('[data-sort]');

  // Поисковый запрос
  var searchQuery = searchInput ? normalizeText(searchInput.value) : '';

  // Выбранная категория
  var selectedCategory = categorySelect ? categorySelect.value : 'all';

  // Копируем массив товаров
  var filtered = products.slice();

  // ФИЛЬТР ПО ПОИСКУ
  if (searchQuery) {
    filtered = [];
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var title = normalizeText(product.title);
      var brand = normalizeText(product.brand);
      var category = normalizeText(product.category);

      if (title.indexOf(searchQuery) >= 0 ||
        brand.indexOf(searchQuery) >= 0 ||
        category.indexOf(searchQuery) >= 0) {
        filtered.push(product);
      }
    }
  }

  // ФИЛЬТР ПО КАТЕГОРИИ
  if (selectedCategory !== 'all') {
    var categoryFiltered = [];
    for (var j = 0; j < filtered.length; j++) {
      if (filtered[j].category === selectedCategory) {
        categoryFiltered.push(filtered[j]);
      }
    }
    filtered = categoryFiltered;
  }

  // СОРТИРОВКА
  var sortType = sortSelect ? sortSelect.value : 'popular';

  if (sortType === 'price_asc') {
    // По возрастанию цены
    filtered.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortType === 'price_desc') {
    // По убыванию цены
    filtered.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (sortType === 'title') {
    // По названию
    filtered.sort(function (a, b) {
      return a.title.localeCompare(b.title, 'ru');
    });
  }

  return filtered;
}

// Создать HTML карточки товара
function createProductCard(product) {
  var isFavorite = window.DRStore.isFav(product.id);
  var favClass = isFavorite ? 'is-active active' : '';
  var isOutOfStock = product.stock <= 0;
  var disabled = isOutOfStock ? 'disabled' : '';
  var stockText = isOutOfStock ? 'Нет в наличии' : 'В наличии: ' + product.stock;

  var html = '';
  html += '<div class="shop-card">';
  html += '  <a class="shop-card__imgwrap" href="./product-' + product.id + '.html" aria-label="' + product.title + '">';
  html += '    <img class="shop-card__img" src=".' + product.image + '" alt="' + product.title + '" loading="lazy">';
  html += '  </a>';
  html += '  <div class="shop-card__body">';
  html += '    <div class="shop-card__meta">';
  html += '      <div class="shop-card__brand">' + product.brand + '</div>';
  html += '      <button class="shop-iconbtn shop-fav ' + favClass + '" data-toggle-fav="' + product.id + '" type="button" aria-label="В избранное" aria-pressed="' + (isFavorite ? 'true' : 'false') + '">❤</button>';
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

// Отобразить товары на странице
function renderProducts() {
  var grid = document.querySelector('[data-products-grid]');
  if (!grid) {
    return;
  }

  var allProducts = window.DRStore.getProducts();

  // Filter out hidden products
  var visibleProducts = [];
  for (var k = 0; k < allProducts.length; k++) {
    if (!allProducts[k].isHidden) {
      visibleProducts.push(allProducts[k]);
    }
  }

  var filtered = applyFilters(visibleProducts);

  // Создаем HTML для всех товаров
  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    html += createProductCard(filtered[i]);
  }

  grid.innerHTML = html;

  // Обновляем счетчик
  var countElement = document.querySelector('[data-products-count]');
  if (countElement) {
    countElement.textContent = String(filtered.length);
  }
}

// Заполнить выпадающий список категорий
function fillCategories() {
  var categorySelect = document.querySelector('[data-category]');
  if (!categorySelect) {
    return;
  }

  var allProducts = window.DRStore.getProducts();
  var categories = [];

  // Собираем уникальные категории
  for (var i = 0; i < allProducts.length; i++) {
    var category = allProducts[i].category;
    var found = false;

    for (var j = 0; j < categories.length; j++) {
      if (categories[j] === category) {
        found = true;
        break;
      }
    }

    if (!found) {
      categories.push(category);
    }
  }

  // Сортируем категории
  categories.sort(function (a, b) {
    return a.localeCompare(b, 'ru');
  });

  // Создаем HTML опций
  var html = '<option value="all">Все категории</option>';
  for (var k = 0; k < categories.length; k++) {
    html += '<option value="' + categories[k] + '">' + categories[k] + '</option>';
  }

  categorySelect.innerHTML = html;
}

// Подключаем обработчики событий
function bindEvents() {
  var searchInput = document.querySelector('[data-search]');
  var categorySelect = document.querySelector('[data-category]');
  var sortSelect = document.querySelector('[data-sort]');

  if (searchInput) {
    searchInput.addEventListener('input', renderProducts);
  }

  if (categorySelect) {
    categorySelect.addEventListener('change', renderProducts);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', renderProducts);
  }

  // Слушаем изменения данных (корзина, избранное)
  window.addEventListener('dr:change', renderProducts);
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  fillCategories();
  bindEvents();
  renderProducts();
});