"use strict";
// Ссылка редактируется в index.html, в href кнопки #download.
const download = document.getElementById("download");
const notice = document.getElementById("notice");
const raw = download.getAttribute("href");
let valid = false;
try {
  const url = new URL(raw);
  valid = url.protocol === "https:" && !url.username && !url.password;
} catch { /* Ссылка ещё не вставлена. */ }
if (!valid) {
  download.setAttribute("href", "#");
  download.removeAttribute("download");
  download.addEventListener("click", (event) => {
    event.preventDefault();
    notice.textContent = "Ссылка на загрузку пока не добавлена.";
    notice.hidden = false;
  });
}
// Для внешней ссылки используется обычная навигация, без fetch/CORS и серверного кода.
// Начало скачивания и имя файла определяются также заголовками сервера с EXE.
