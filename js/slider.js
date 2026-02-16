var currentSlide = 0; // Текущий слайд

// Обновить положение слайдера (сместить трек)
function updateSliderPosition() {
  var track = document.querySelector('.simple-slider__track');
  if (track) {
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
  }
}

// Переключить на следующий слайд
function nextSlide() {
  var slides = document.querySelectorAll('.simple-slider__slide');
  if (slides.length === 0) {
    return;
  }

  // Убираем активный класс с текущего слайда
  slides[currentSlide].classList.remove('is-active');

  // Переходим к следующему слайду
  currentSlide = (currentSlide + 1) % slides.length;

  // Добавляем активный класс к новому слайду
  slides[currentSlide].classList.add('is-active');

  // Смещаем слайдер
  updateSliderPosition();

  // Обновляем точки
  updateDots();

  // Запускаем/останавливаем видео
  playCurrentSlideVideo();
}

// Переключить на предыдущий слайд
function prevSlide() {
  var slides = document.querySelectorAll('.simple-slider__slide');
  if (slides.length === 0) {
    return;
  }

  // Убираем активный класс с текущего слайда
  slides[currentSlide].classList.remove('is-active');

  // Переходим к предыдущему слайду
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  // Добавляем активный класс к новому слайду
  slides[currentSlide].classList.add('is-active');

  // Смещаем слайдер
  updateSliderPosition();

  // Обновляем точки
  updateDots();

  // Запускаем/останавливаем видео
  playCurrentSlideVideo();
}

// Переключить на конкретный слайд
function goToSlide(index) {
  var slides = document.querySelectorAll('.simple-slider__slide');
  if (slides.length === 0 || index < 0 || index >= slides.length) {
    return;
  }

  // Убираем активный класс с текущего слайда
  slides[currentSlide].classList.remove('is-active');

  // Переходим к нужному слайду
  currentSlide = index;

  // Добавляем активный класс к новому слайду
  slides[currentSlide].classList.add('is-active');

  // Смещаем слайдер
  updateSliderPosition();

  // Обновляем точки
  updateDots();

  // Запускаем/останавливаем видео
  playCurrentSlideVideo();
}

// Создать точки навигации
function createDots() {
  var dotsContainer = document.querySelector('[data-slider-dots]');
  if (!dotsContainer) {
    return;
  }

  var slides = document.querySelectorAll('.simple-slider__slide');
  var html = '';

  for (var i = 0; i < slides.length; i++) {
    var activeClass = i === currentSlide ? 'is-active' : '';
    html += '<button class="simple-slider__dot ' + activeClass + '" data-dot="' + i + '" type="button" aria-label="Слайд ' + (i + 1) + '"></button>';
  }

  dotsContainer.innerHTML = html;
}

// Обновить точки навигации
function updateDots() {
  var dots = document.querySelectorAll('.simple-slider__dot');

  for (var i = 0; i < dots.length; i++) {
    if (i === currentSlide) {
      dots[i].classList.add('is-active');
    } else {
      dots[i].classList.remove('is-active');
    }
  }
}

// Запустить видео только на активном слайде
function playCurrentSlideVideo() {
  var slides = document.querySelectorAll('.simple-slider__slide');

  for (var i = 0; i < slides.length; i++) {
    var video = slides[i].querySelector('video');

    if (video) {
      if (i === currentSlide) {
        // Запускаем видео на активном слайде
        video.play().catch(function () {
          // Игнорируем ошибки автовоспроизведения
        });
      } else {
        // Останавливаем видео на неактивных слайдах
        video.pause();
        // video.currentTime = 0; // Можно не сбрасывать, чтобы продолжалось с того же места
      }
    }
  }
}

// Обработчик кликов по кнопкам и точкам
function handleSliderClick(event) {
  // Кнопка "Следующий"
  var nextButton = event.target.closest('.simple-slider__btn--next');
  if (nextButton) {
    event.preventDefault();
    nextSlide();
    return;
  }

  // Кнопка "Предыдущий"
  var prevButton = event.target.closest('.simple-slider__btn--prev');
  if (prevButton) {
    event.preventDefault();
    prevSlide();
    return;
  }

  // Клик по точке
  var dot = event.target.closest('[data-dot]');
  if (dot) {
    event.preventDefault();
    var index = Number(dot.getAttribute('data-dot'));
    goToSlide(index);
    return;
  }
}

// Автоматическое переключение слайдов
var autoSlideInterval = null;

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 5000); // Каждые 5 секунд
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// ИНИЦИАЛИЗАЦИЯ при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  createDots();
  updateSliderPosition(); // Устанавливаем положение при загрузке
  playCurrentSlideVideo();
  startAutoSlide();

  // Слушаем клики
  document.addEventListener('click', handleSliderClick);

  // Останавливаем автопереключение при наведении на слайдер
  var slider = document.querySelector('[data-slider]');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
  }
});

