// Отобразить сводку заказа
function renderOrderSummary() {
  var summaryElement = document.querySelector('[data-order-summary]');
  if (!summaryElement) {
    return;
  }

  var items = window.DRStore.cartItems();

  // Если корзина пустая
  if (items.length === 0) {
    summaryElement.innerHTML = '<div class="note">Корзина пустая. Сначала добавьте товары в корзину.</div>';
  } else {
    // Создаем строки для каждого товара
    var html = '';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var product = item.product;
      var quantity = item.quantity;
      var totalPrice = product.price * quantity;

      html += '<div class="order-row">';
      html += '  <div class="order-row__name">' + product.title + '</div>';
      html += '  <div class="order-row__qty">× ' + quantity + '</div>';
      html += '  <div class="order-row__sum">' + window.DRStore.money(totalPrice) + '</div>';
      html += '</div>';
    }

    summaryElement.innerHTML = html;
  }

  // Обновляем общую сумму
  var totalElement = document.querySelector('[data-order-total]');
  if (totalElement) {
    totalElement.textContent = window.DRStore.money(window.DRStore.cartTotal());
  }
}

// Обработчик отправки формы заказа
function handleOrderSubmit(event) {
  event.preventDefault();

  var form = document.querySelector('[data-order-form]');
  if (!form) {
    return;
  }

  // Получаем данные из формы
  var formData = new FormData(form);
  var name = String(formData.get('name') || '').trim();
  var phone = String(formData.get('phone') || '').trim();
  var address = String(formData.get('address') || '').trim();

  // Проверяем заполненность полей
  if (!name || !phone || !address) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  // Проверяем, что корзина не пустая
  if (window.DRStore.cartItems().length === 0) {
    alert('Корзина пустая');
    return;
  }

  // Очищаем корзину
  window.DRStore.clearCart();

  // Прячем форму и показываем сообщение об успехе
  var blockElement = document.querySelector('[data-order-block]');
  if (blockElement) {
    blockElement.hidden = true;
  }

  var doneElement = document.querySelector('[data-order-done]');
  if (doneElement) {
    doneElement.hidden = false;
  }
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  renderOrderSummary();

  // Слушаем изменения данных
  window.addEventListener('dr:change', renderOrderSummary);

  // Слушаем отправку формы
  var form = document.querySelector('[data-order-form]');
  if (form) {
    form.addEventListener('submit', handleOrderSubmit);
  }
});