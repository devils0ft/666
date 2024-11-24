// Функция перемешивания изображений
function shuffleImages() {
    const container = document.getElementById('container1');
    const images = Array.from(container.children);
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(images[j]);аф
    }
}

// Функция запуска анимации и воспроизведения музыки
// Функция сброса состояний
function reset() {
    const container = document.getElementById('container1');
    const images = Array.from(container.children);

    // Восстанавливаем все анимации и эффекты
    images.forEach(img => {
        img.style.animation = ''; // Убираем анимации
        img.classList.remove('img1', 'img2', 'light-gray-fire', 'static-fire', 'highlight', 'final-highlight'); // Убираем все классы анимаций
        img.style.filter = ''; // Сбрасываем фильтры
    });

    // Сбрасываем фон и классы контейнера
    const faviconImage = document.querySelector('.img3');
    if (faviconImage) {
        faviconImage.classList.remove('highlight', 'final-highlight');
    }
    const containerElement = document.querySelector('.container');
    if (containerElement) {
        containerElement.classList.remove('darkened');
    }

    // Восстанавливаем начальное состояние для звуков
    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');
    startSound.pause();
    winSound.pause();
    startSound.currentTime = 0;
    winSound.currentTime = 0;

    // Сбрасываем поле ввода
    const inputField = document.getElementById('user-input');
    inputField.value = '';
    showMessage('Состояние сброшено!', 'success');
}

// Функция для отображения сообщения
function showMessage(text, color) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.style.backgroundColor = color;
    message.style.opacity = '1';
    message.classList.remove('hidden');

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.classList.add('hidden'), 500);
    }, 3000);
}

// Обработчик кнопки подтверждения
document.getElementById('confirm-button').addEventListener('click', () => {
    const input = document.getElementById('user-input');
    if (input.value.trim()) {
        showMessage('successful!', 'rgba(0, 128, 0, 0.8)');
    } else {
        showMessage('Поле ввода пустое!', 'rgba(255, 0, 0, 0.8)');
    }
});

// Обновляем функцию sex() для проверки поля ввода
function sex() {
    const input = document.getElementById('user-input');
    if (!input.value.trim()) {
        showMessage('Введите текст перед продолжением!', 'rgba(255, 0, 0, 0.8)');
        return;
    }

    const images = document.querySelectorAll('.image-container img:not(.img3)');
    const faviconImage = document.querySelector('.img3');
    const container = document.querySelector('.container');

    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');

    startSound.play();

    // Убираем анимации и приглушаем изображения
    images.forEach(img => {
        img.style.animation = 'none';
        img.classList.remove('img1', 'img2', 'light-gray-fire', 'static-fire');
        img.style.filter = 'grayscale(100%) brightness(0.5)';
    });

    if (faviconImage) {
        faviconImage.classList.add('highlight');
    }

    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
        if (shuffleCount < 6) {
            shuffleImages();
            shuffleCount++;
        } else {
            clearInterval(shuffleInterval);
            highlightFavicon();
        }
    }, 1000);
}

// Обработчик кнопки сброса
document.getElementById('reset-button').addEventListener('click', reset);

// Функция для перемешивания изображений
function shuffleImages() {
    const container = document.getElementById('container1');
    const images = Array.from(container.children);
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(images[j]);
    }
}

// Финальная подсветка favicon.ico
function highlightFavicon() {
    const faviconImage = document.querySelector('.img3');
    const container = document.querySelector('.container');
    const images = document.querySelectorAll('.image-container img:not(.img3)');

    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');

    if (faviconImage) {
        images.forEach(img => {
            img.style.filter = 'grayscale(100%) brightness(0.3)';
        });

        setTimeout(() => {
            container.classList.add('darkened');
            faviconImage.classList.add('final-highlight');
            startSound.pause();
            winSound.play();
        }, 300);
    }
}

// Финальная подсветка favicon.ico
function highlightFavicon() {
    const faviconImage = document.querySelector('.img3');
    const container = document.querySelector('.container');
    const images = document.querySelectorAll('.image-container img:not(.img3)'); // Все картинки, кроме favicon.ico

    // Получаем элементы для звуков
    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');

    if (faviconImage) {
        // Этап 1: Затемняем остальные изображения
        images.forEach(img => {
            img.style.filter = 'grayscale(100%) brightness(0.3)';
        });

        // Этап 2: Затемняем фон и поднимаем favicon.ico
        setTimeout(() => {
            container.classList.add('darkened');

            faviconImage.classList.add('final-highlight'); // Финальная анимация для favicon.ico

            // Останавливаем первый звук и начинаем второй
            startSound.pause();
            winSound.play();
        }, 0.300); // Задержка в 1 секунду
    }
}

// Функция для отображения сообщения
function showMessage(text, color) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.style.backgroundColor = color;
    message.style.opacity = '1';
    message.classList.remove('hidden');

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.classList.add('hidden'), 500);
    }, 3000);
}

// Обработчик кнопки подтверждения
document.getElementById('confirm-button').addEventListener('click', () => {
    const input = document.getElementById('user-input');
    if (input.value.trim()) {
        showMessage('successful!', 'rgba(0, 128, 0, 0.8)');
    } else {
        showMessage('Поле ввода пустое!', 'rgba(255, 0, 0, 0.8)');
    }
});

// Обновляем функцию sex() для проверки поля ввода
function sex() {
    const input = document.getElementById('user-input');
    if (!input.value.trim()) {
        showMessage('Введите текст перед продолжением!', 'rgba(255, 0, 0, 0.8)');
        return;
    }

    const images = document.querySelectorAll('.image-container img:not(.img3)');
    const faviconImage = document.querySelector('.img3');
    const container = document.querySelector('.container');

    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');

    startSound.play();

    images.forEach(img => {
        img.style.animation = 'none';
        img.classList.remove('img1', 'img2', 'light-gray-fire', 'static-fire');
        img.style.filter = 'grayscale(100%) brightness(0.5)';
    });

    if (faviconImage) {
        faviconImage.classList.add('highlight');
    }

    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
        if (shuffleCount < 6) {
            shuffleImages();
            shuffleCount++;
        } else {
            clearInterval(shuffleInterval);
            highlightFavicon();
        }
    }, 1000);
}

// Работа с полем ввода
document.getElementById('confirm-button').addEventListener('click', () => {
    const inputField = document.getElementById('user-input');
    const message = document.getElementById('message');

    if (inputField.value.trim() === '') {
        // Если поле пустое
        showMessage('Введите текст!', 'error');
    } else {
        // Если есть текст
        showMessage('successful!', 'success');
    }
});

// Функция показа сообщения
function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;

    // Цвет в зависимости от типа сообщения
    if (type === 'success') {
        message.style.backgroundColor = 'rgba(0, 128, 0, 0.8)'; // Зеленый
    } else if (type === 'error') {
        message.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // Красный
    }

    message.classList.remove('hidden');
    message.style.opacity = '1';

    // Убираем сообщение через 3 секунды
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.classList.add('hidden');
        }, 500); // Ждём завершения анимации
    }, 3000);
}

// Функция сброса состояний
function reset() {
    const container = document.getElementById('container1');
    const images = Array.from(container.children);

    // Восстанавливаем все анимации и эффекты
    images.forEach(img => {
        img.style.animation = ''; // Убираем анимации
        img.classList.remove('img1', 'img2', 'light-gray-fire', 'static-fire', 'highlight', 'final-highlight'); // Убираем все классы анимаций
        img.style.filter = ''; // Сбрасываем фильтры
    });

    // Сбрасываем фон и классы контейнера
    const faviconImage = document.querySelector('.img3');
    if (faviconImage) {
        faviconImage.classList.remove('highlight', 'final-highlight');
    }
    const containerElement = document.querySelector('.container');
    if (containerElement) {
        containerElement.classList.remove('darkened');
    }

    // Восстанавливаем начальное состояние для звуков
    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');
    startSound.pause();
    winSound.pause();
    startSound.currentTime = 0;
    winSound.currentTime = 0;

    // Сохраняем текст в поле ввода
    const inputField = document.getElementById('user-input');
    const inputValue = inputField.value; // Сохраняем текущее значение в поле ввода
    showMessage('Состояние сброшено!', 'success');
    inputField.value = inputValue; // Вставляем обратно текст в поле ввода
}

// Функция для отображения сообщения
function showMessage(text, color) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.style.backgroundColor = color;
    message.style.opacity = '1';
    message.classList.remove('hidden');

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.classList.add('hidden'), 500);
    }, 3000);
}

// Обработчик кнопки сброса
document.getElementById('reset-button').addEventListener('click', reset);

// Обновленная функция для обработки выбора картинки
function handleImageClick(selectedImage) {
    const images = document.querySelectorAll('.image-container img:not(.img3)'); // Все картинки кроме favicon

    // Применяем анимацию огня и движения ко всем остальным картинкам
    images.forEach(img => {
        if (img !== selectedImage) {
            img.classList.add('fire-animation');  // Добавляем анимацию огня
            img.classList.add('moving-effect');  // Добавляем анимацию движения
        }
    });

    // После завершения анимации, удаляем классы
    setTimeout(() => {
        images.forEach(img => {
            img.classList.remove('fire-animation', 'moving-effect'); // Убираем анимацию
        });
    }, 1000); // Время, соответствующее длительности анимации (1 секунда)
}

// Пример обработчика клика на изображение
document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', () => {
        handleImageClick(img); // Вызываем функцию при клике
    });
});