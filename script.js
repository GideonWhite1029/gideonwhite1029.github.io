const progressBar = document.querySelector(".progress-bar");
const progressBarFill = document.querySelector(".progress-bar-fill");
const progressBarText = document.querySelector(".progress-bar-text");
const tipsContainer = document.querySelector('.tips');

const tips = [
    "Подождите, сайт скоро загрузится",
    "Можете сходить за печеньками и попить чай, пока ждете",
    "Загрузка медленная? Используйте WiFi",
    "Ожидание немного утомляет, не так ли?",
    "Интересно, что же там в конце?",
    "Осталось совсем чучуть (ну или не очень)",
    "Рекомендуется открыть сайт через ПК или ноутбук",
    "Стоит ли посмотреть оригианльный репозиторий?"
];

setInterval(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipsContainer.innerText = randomTip;
}, 10000);

// Получаем значение прогресса из Local Storage
let progress = localStorage.getItem("progress");
if (progress) {
    progressBarFill.style.width = progress;
}

// aHR0cHM6Ly9kaXNjb3JkLmdnL2JyaldYTU1icGQNCg==

// Обновляем значение прогресса и сохраняем его в Local Storage при каждом изменении
function updateProgress(value) {
    progressBarFill.style.width = `${value}%`;
    localStorage.setItem("progress", `${value}%`);
    progressBarText.textContent = `${value}%`;
}

let value = 0;
const start = new Date().getTime(); // начальная дата
const interval = setInterval(() => {
    const now = new Date().getTime(); // текущая дата
    const elapsed = now - start; // прошедшее время
    if (elapsed >= 3600000) { // 1 час
        clearInterval(interval);
        setTimeout(() => {
            // Переходим на другой сайт после окончания загрузки
            window.location.href =
                "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjxzP6fkOH-AhWRnosKHUNaC_4QwqsBegQIDBAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU";
        }, 1000);
        return;
    }
    value = Math.floor((elapsed / 3600000) * 100);
    updateProgress(value);
}, 500);
