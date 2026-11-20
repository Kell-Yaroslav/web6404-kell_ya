// Класс с конструктором и методом форматированного вывода на консоль
class FormDataLogger {
    constructor(login, password, isConsentGiven) {
        this.login = login;
        this.password = password;
        this.isConsentGiven = isConsentGiven;
        this.timestamp = new Date().toLocaleString('ru-RU');
    }

    logToConsole() {
        console.log('========================================');
        console.log('   ДАННЫЕ ФОРМЫ АВТОРИЗАЦИИ');
        console.log('========================================');
        console.log(' Логин:                   ', this.login);
        console.log(' Пароль:                  ', '*'.repeat(this.password.length));
        console.log(' Согласие на обработку:   ', this.isConsentGiven ? 'ДА' : 'НЕТ');
        console.log(' Время отправки:          ', this.timestamp);
        console.log('========================================');
    }
}

// При нажатии на кнопку отправки данных на сервер
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Отменяем стандартную отправку формы

            // Собираем введённые данные
            const login = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const consent = document.getElementById('consent').checked;

            // Создаём объект класса
            const logger = new FormDataLogger(login, password, consent);

            // Вызываем метод форматированного вывода на консоль
            logger.logToConsole();

            alert('Данные успешно отправлены! Проверьте консоль разработчика (F12).');
            form.reset();
        });
    }
});