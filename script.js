document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.color-button');

    button.addEventListener('click', function() {
        button.classList.add('gray');
        
        setTimeout(() => {
            button.classList.remove('gray');
        }, 2000); // 2000 миллисекунд = 2 секунды
    });
});


document.getElementById('rotateButton').addEventListener('click', function() {
    // Сначала случайным образом выберем одну картинку
    const images = document.querySelectorAll('.image');
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    // Вращаем изображения
    images.forEach((image, index) => {
        image.style.transform = 'rotate(360deg)';
    });

    // В течение 4 секунд
    setTimeout(() => {
        // Возвращаем картинки в исходное положение
        images.forEach((image) => {
            image.style.transform = 'rotate(0deg)';
        });

        // Сделаем одну картинку немного выше, оставив её на месте
        selectedImage.style.top = '-30px';  // Сдвигаем выбранную картинку
    }, 4000); // 4 секунды

});
