// ============================================
// СТРАНИЦА АВТОРИЗАЦИИ - вход в аккаунт
// ============================================

// Получить название роли
function getRoleLabel(role) {
  if (role === 'admin') {
    return 'Администратор';
  }
  if (role === 'user') {
    return 'Пользователь';
  }
  return 'Гость';
}

// Обновить информацию на странице
function updateAccountPage() {
  var currentUser = window.DRStore.getAuth();

  // Обновляем роль
  var roleElement = document.querySelector('[data-auth-role]');
  if (roleElement) {
    roleElement.textContent = getRoleLabel(currentUser.role);
  }

  // Обновляем имя
  var nameElement = document.querySelector('[data-auth-name]');
  if (nameElement) {
    nameElement.textContent = currentUser.login ? currentUser.login : '';
  }

  // Показываем/скрываем форму и кнопку выхода
  var isLoggedIn = currentUser.role !== 'guest';

  var formElement = document.querySelector('[data-auth-form]');
  if (formElement) {
    formElement.hidden = isLoggedIn;
  }

  var logoutButton = document.querySelector('[data-auth-logout]');
  if (logoutButton) {
    logoutButton.hidden = !isLoggedIn;
  }

  // Показываем ссылку на админ-панель только для админа
  var adminLink = document.querySelector('[data-auth-admin]');
  if (adminLink) {
    if (currentUser.role === 'admin') {
      adminLink.hidden = false;
      adminLink.style.display = ''; // Reset to default (inline-flex)
    } else {
      adminLink.hidden = true;
      adminLink.style.display = 'none';
    }
  }
}

// Обработчик отправки формы входа
function handleLoginSubmit(event) {
  var form = event.target.closest('[data-auth-form]');
  if (!form) {
    return;
  }

  event.preventDefault();

  // Получаем данные из формы
  var loginInput = form.querySelector('[data-auth-login]');
  var passInput = form.querySelector('[data-auth-pass]');
  var msgElement = form.querySelector('[data-auth-msg]');

  var login = loginInput ? loginInput.value : '';
  var password = passInput ? passInput.value : '';

  // Пытаемся войти
  var result = window.DRStore.login(login, password);

  // Показываем сообщение
  if (msgElement) {
    if (result.success) {
      if (result.role === 'admin') {
        msgElement.textContent = 'Вход выполнен (администратор).';
      } else {
        msgElement.textContent = 'Вход выполнен.';
      }
    } else {
      msgElement.textContent = 'Неверный логин или пароль.';
    }
  }

  // Обновляем страницу
  updateAccountPage();
}

// Обработчик кнопки выхода
function handleLogoutClick(event) {
  var logoutButton = event.target.closest('[data-auth-logout]');
  if (!logoutButton) {
    return;
  }

  event.preventDefault();
  window.DRStore.logout();
  updateAccountPage();
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  updateAccountPage();
});

// Слушаем события
document.addEventListener('submit', handleLoginSubmit);
document.addEventListener('click', handleLogoutClick);
window.addEventListener('dr:change', updateAccountPage);
