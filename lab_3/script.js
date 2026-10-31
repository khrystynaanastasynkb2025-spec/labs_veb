// 1. Збираємо інформацію про систему та браузер
const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`
};

// 2. Зберігаємо об'єкт у localStorage (перетворивши його на рядок за допомогою JSON.stringify)
localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

// 3. Зчитуємо дані з localStorage та виводимо у футер
const savedData = JSON.parse(localStorage.getItem('systemInfo'));
const footerElement = document.querySelector('footer');

if (footerElement && savedData) {
    footerElement.innerHTML += `
        <div class="system-info">
            <p>Платформа: ${savedData.platform}</p>
            <p>Браузер (User Agent): ${savedData.userAgent}</p>
            <p>Роздільна здатність: ${savedData.screenResolution}</p>
        </div>
    `;
}

// Отримання коментарів через Fetch API
function linkify(inputText) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return inputText.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
}

const variant = 1;
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;

fetch(apiUrl)
    .then(response => response.json())
    .then(comments => {
        const mainContainer = document.querySelector('main') || document.body;

        const reviewsSection = document.createElement('section');
        reviewsSection.classList.add('reviews-section');
        reviewsSection.innerHTML = `<h2>Відгуки попередніх роботодавців</h2>`;

        comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.classList.add('review-card');
            commentCard.style.border = "1px solid #ccc";
            commentCard.style.padding = "10px";
            commentCard.style.margin = "10px 0";
            commentCard.style.borderRadius = "5px";

            // Перетворюємо текст на клікабельні посилання
            const formattedBody = linkify(comment.body);

            commentCard.innerHTML = `
                <strong>${comment.name}</strong> (<em>${comment.email}</em>)
                <p>${formattedBody}</p>
            `;
            reviewsSection.appendChild(commentCard);
        });

        mainContainer.appendChild(reviewsSection);
    })
    .catch(error => console.error('Помилка завантаження коментарів:', error));


// Модальне вікно через 1 хвилину
setTimeout(() => {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}, 60000);

// Закриття модального вікна кнопкою
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'closeModal') {
        const modal = document.getElementById('feedbackModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// Автоматичний та ручний перемикач тем
const themeToggleBtn = document.getElementById('themeToggleBtn');
const currentHour = new Date().getHours();

if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}