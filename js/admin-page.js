// ============================================
// АДМИН-ПАНЕЛЬ - просмотр и редактирование товаров
// ============================================

// Экранирование HTML (защита от XSS)
function escapeHtml(text) {
  var textString = String(text || '');
  return textString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Преобразовать строку в число (для цен)
function parseMoneyValue(value) {
  var cleaned = String(value).replace(/[^\d.]/g, '');
  var number = Math.round(Number(cleaned) || 0);
  return number;
}

// Отобразить таблицу товаров
function renderAdminTable() {
  var tbody = document.querySelector('[data-admin-tbody]');
  if (!tbody) {
    return;
  }

  var products = window.DRStore.getProducts();
  var html = '';

  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    html += '<tr data-id="' + p.id + '">';
    html += '  <td class="admin-cell admin-id">' + escapeHtml(p.id) + '</td>';
    html += '  <td class="admin-cell"><input class="admin-in" data-k="title" value="' + escapeHtml(p.title) + '"></td>';
    html += '  <td class="admin-cell"><input class="admin-in" data-k="brand" value="' + escapeHtml(p.brand) + '"></td>';
    html += '  <td class="admin-cell"><input class="admin-in" data-k="category" value="' + escapeHtml(p.category) + '"></td>';
    html += '  <td class="admin-cell"><input class="admin-in admin-num" data-k="price" value="' + p.price + '"></td>';
    html += '  <td class="admin-cell"><input class="admin-in admin-num" data-k="oldPrice" value="' + p.oldPrice + '"></td>';
    html += '  <td class="admin-cell"><input class="admin-in admin-num" data-k="stock" value="' + p.stock + '"></td>';
    html += '  <td class="admin-cell"><input class="admin-in" data-k="image" value="' + escapeHtml(p.image) + '"></td>';
    html += '  <td class="admin-cell admin-actions">';
    html += '    <button class="shop-btn shop-btn--sm" data-save="' + p.id + '" type="button">Сохранить</button>';
    html += '    <button class="shop-btn shop-btn--sm shop-btn--danger" data-delete="' + p.id + '" type="button" style="margin-top:5px; background: #be6464; color: white;">Удалить</button>';
    html += '  </td>';
    html += '</tr>';
  }

  tbody.innerHTML = html;

  // Обновляем статистику
  var statElement = document.querySelector('[data-admin-stat]');
  if (statElement) {
    statElement.textContent = 'Товаров: ' + products.length;
  }
}

// Сохранить изменения товара
function saveProduct(productId) {
  var id = Number(productId);
  var allProducts = window.DRStore.getProducts();

  // Находим товар
  var productIndex = -1;
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === id) {
      productIndex = i;
      break;
    }
  }

  if (productIndex < 0) {
    return;
  }

  // Находим строку таблицы
  var row = document.querySelector('tr[data-id="' + id + '"]');
  if (!row) {
    return;
  }

  // Создаем обновленный товар
  var updatedProduct = {};

  // Копируем старые данные
  var oldProduct = allProducts[productIndex];
  for (var key in oldProduct) {
    updatedProduct[key] = oldProduct[key];
  }

  // Обновляем из полей ввода
  var inputs = row.querySelectorAll('[data-k]');
  for (var j = 0; j < inputs.length; j++) {
    var input = inputs[j];
    var fieldName = input.getAttribute('data-k');
    var fieldValue = input.type === 'checkbox' ? input.checked : input.value;

    if (fieldName === 'price' || fieldName === 'oldPrice') {
      updatedProduct[fieldName] = parseMoneyValue(fieldValue);
    } else if (fieldName === 'stock') {
      updatedProduct[fieldName] = Math.max(0, Math.round(Number(fieldValue) || 0));
    } else if (fieldName === 'isHidden') {
      updatedProduct[fieldName] = input.checked;
    } else {
      updatedProduct[fieldName] = String(fieldValue || '').trim();
    }
  }

  // Валидация
  if (!updatedProduct.title) {
    alert('Название товара не может быть пустым');
    return;
  }

  if (!updatedProduct.brand) {
    updatedProduct.brand = 'Diamond Row';
  }

  if (!updatedProduct.category) {
    updatedProduct.category = 'Украшения';
  }

  if (!updatedProduct.image) {
    updatedProduct.image = './images/card1.jpg';
  }

  if (!updatedProduct.oldPrice) {
    updatedProduct.oldPrice = Math.round(updatedProduct.price * 1.3);
  }

  // Сохраняем товар (обновляем массив напрямую)
  allProducts[productIndex] = updatedProduct;

  // Отправляем событие об изменении
  window.dispatchEvent(new CustomEvent('dr:change'));

  alert('Товар сохранен!');
}

// Обработчик кликов
function handleAdminClick(event) {
  // Кнопка "Сохранить"
  var saveButton = event.target.closest('[data-save]');
  if (saveButton) {
    event.preventDefault();
    var productId = saveButton.getAttribute('data-save');
    saveProduct(productId);
    return;
  }

  // Кнопка "Добавить"
  var addButton = event.target.closest('[data-add-product]');
  if (addButton) {
    event.preventDefault();
    window.DRStore.addProduct();
  }

  // Кнопка "Удалить"
  var deleteButton = event.target.closest('[data-delete]');
  if (deleteButton) {
    event.preventDefault();
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      var prodId = deleteButton.getAttribute('data-delete');
      window.DRStore.deleteProduct(prodId);
    }
    return;
  }
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  // Проверяем, является ли пользователь админом
  if (!window.DRStore.isAdmin()) {
    // Показываем сообщение и таблицу остаётся пустой
    var tbody = document.querySelector('[data-admin-tbody]');
    if (tbody) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:20px;">Доступ запрещен. Войдите как администратор на <a href="./account.html">странице входа</a>.</td></tr>';
    }
    return;
  }

  renderAdminTable();

  window.addEventListener('dr:change', renderAdminTable);

  document.addEventListener('click', handleAdminClick);
});