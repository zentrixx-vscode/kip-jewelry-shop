// ============================================
// СТРАНИЦА КОРЗИНЫ - отображение товаров в корзине
// ============================================

// Создать HTML строки товара в корзине
function createCartRow(item) {
  var product = item.product;
  var quantity = item.quantity;
  var maxStock = product.stock;

  // Кнопка минус disabled если quantity = 1
  var minusDisabled = quantity <= 1 ? 'disabled' : '';

  // Кнопка плюс disabled если достигли максимума
  var plusDisabled = quantity >= maxStock ? 'disabled' : '';

  // Общая стоимость товара
  var totalPrice = product.price * quantity;

  var html = '';
  html += '<div class="cart-row">';
  html += '  <div class="cart-row__img">';

  var imagePath = product.image;
  if (imagePath.startsWith('./')) {
    imagePath = '.' + imagePath;
  }

  html += '    <img src="' + imagePath + '" alt="' + product.title + '" loading="lazy">';
  html += '  </div>';
  html += '  <div class="cart-row__info">';
  html += '    <div class="cart-row__title">' + product.title + '</div>';
  html += '    <div class="cart-row__sub">' + product.brand + ' • ' + product.category + '</div>';
  html += '    <div class="cart-row__sub">В наличии: ' + product.stock + '</div>';
  html += '  </div>';
  html += '  <div class="cart-row__qty">';
  html += '    <button class="shop-iconbtn" data-cart-qty="-1" data-id="' + product.id + '" type="button" ' + minusDisabled + '>−</button>';
  html += '    <div class="cart-row__q">' + quantity + '</div>';
  html += '    <button class="shop-iconbtn" data-cart-qty="1" data-id="' + product.id + '" type="button" ' + plusDisabled + '>+</button>';
  html += '  </div>';
  html += '  <div class="cart-row__price">' + window.DRStore.money(totalPrice) + '</div>';
  html += '  <button class="shop-iconbtn cart-row__del" data-cart-remove="' + product.id + '" type="button" aria-label="Удалить">✕</button>';
  html += '</div>';

  return html;
}

// Отобразить корзину
function renderCart() {
  var listElement = document.querySelector('[data-cart-list]');
  if (!listElement) {
    return;
  }

  var items = window.DRStore.cartItems();
  var emptyElement = document.querySelector('[data-cart-empty]');

  // Если корзина пустая
  if (items.length === 0) {
    listElement.innerHTML = '';
    if (emptyElement) {
      emptyElement.hidden = false;
    }
  } else {
    // Показываем товары
    if (emptyElement) {
      emptyElement.hidden = true;
    }

    var html = '';
    for (var i = 0; i < items.length; i++) {
      html += createCartRow(items[i]);
    }
    listElement.innerHTML = html;
  }

  // Обновляем общую сумму
  var totalElement = document.querySelector('[data-cart-total]');
  if (totalElement) {
    totalElement.textContent = window.DRStore.money(window.DRStore.cartTotal());
  }

  // Обновляем количество товаров
  var countElement = document.querySelector('[data-cart-items-count]');
  if (countElement) {
    var totalCount = 0;
    for (var j = 0; j < items.length; j++) {
      totalCount += items[j].quantity;
    }
    countElement.textContent = String(totalCount);
  }
}

// Проверить и исправить количество товаров в корзине
// (если товара нет на складе или количество больше наличия)
function fixCartQuantities() {
  var cart = window.DRStore.getCart();
  var allProducts = window.DRStore.getProducts();
  var changed = false;

  // Проходим по всем товарам в корзине
  for (var id in cart) {
    var product = window.DRStore.getProductById(Number(id));

    if (!product) {
      // Товар не найден - удаляем
      delete cart[id];
      changed = true;
      continue;
    }

    var stock = Number(product.stock) || 0;
    var quantity = Number(cart[id]) || 0;

    // Если нет на складе - удаляем
    if (stock <= 0 || quantity <= 0) {
      delete cart[id];
      changed = true;
    }
    // Если количество больше наличия - уменьшаем
    else if (quantity > stock) {
      cart[id] = stock;
      changed = true;
    }
  }

  // Если были изменения - сохраняем корзину
  if (changed) {
    // Обновляем корзину напрямую (cart уже изменен)
    window.DRStore.getCart = function () { return cart; };
    window.dispatchEvent(new CustomEvent('dr:change'));
  }
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  fixCartQuantities();
  renderCart();

  window.addEventListener('dr:change', renderCart);
});