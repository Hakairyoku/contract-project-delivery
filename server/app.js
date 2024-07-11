const express = require('express');
const removeHeaders = require('./middleware/removeHeaders');
const path = require('path');
const app = express();// функция экспресс, которая возвращает объект с методами для работы серверного приложения
const cookieParser = require('cookie-parser'); // стороння мидлварка, которая позволяет читать куки, принятые сервером от клиента
const morgan = require('morgan') // сторонняя мидлварка, которая позволяет логировать запросы и отображать их в терминале сервера

const PORT = process.env.PORT ?? 3000; // первый оперенд используется для применения кода на реальном сервере(деплой), второй операнд дефолтный порт разработки на локальном сервере(3000)

app.use(express.urlencoded({ extended: true })); // для чтения данных из форм
app.use(express.json()); // чтения данных с клиента в формате json
app.use(morgan('combined'))// использование мидлварки на логирование запросов. когда ручками в браузере
app.use(removeHeaders);
app.use(express.static(path.join(__dirname, 'public')));// мидлварка установки статической папки, где путь до файла совпадает с адресом запроса
app.use(cookieParser());// добавляет функционал чтения кук с клиента

const indexRouter = require('./routes/index.routes');
app.use('/api', indexRouter); // прописывается после применения мидлварок с конфигурацией(!!)

app.listen(PORT, () => {
  console.log(`Port: ${PORT}!`);
});