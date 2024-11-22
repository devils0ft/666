// Функция перемешивания изображений
function shuffleImages() {
    const container = document.getElementById('container1');
    const images = Array.from(container.children);
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(images[j]);
    }
}

// Функция запуска анимации и воспроизведения музыки
function sex() {
    const images = document.querySelectorAll('.image-container img:not(.img3)'); // Все картинки, кроме favicon.ico
    const faviconImage = document.querySelector('.img3');
    const container = document.querySelector('.container');

    // Получаем элементы для воспроизведения звуков
    const startSound = document.getElementById('start-sound');
    const winSound = document.getElementById('win-sound');

    // Воспроизводим первый звук
    startSound.play();

    // Убираем эффекты со всех изображений, кроме favicon.ico
    images.forEach(img => {
        img.style.animation = 'none';
        img.classList.remove('img1', 'img2', 'light-gray-fire', 'static-fire'); // Убираем классы анимаций
        img.style.filter = 'grayscale(100%) brightness(0.5)'; // Визуально приглушаем
    });

    // Оставляем favicon.ico активной
    if (faviconImage) {
        faviconImage.classList.add('highlight');
    }

    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
        if (shuffleCount < 6) {
            shuffleImages(); // Перемешиваем
            shuffleCount++;
        } else {
            clearInterval(shuffleInterval);
            highlightFavicon(); // Финальный эффект
        }
    }, 1000); // Перемешивание каждые 1000 мс (1 секунда)
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
