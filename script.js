document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');

    button.addEventListener('click', () => {
        // Добавляем класс "disabled"
        button.classList.add('disabled');
        button.disabled = true;

        // Удаляем класс через 3 секунды
        setTimeout(() => {
            button.classList.remove('disabled');
            button.disabled = false;
        }, 3000);
    });
});
