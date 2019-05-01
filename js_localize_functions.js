var langCode = ["be", "kk", "nl", "ru", "uk"];
var userLang = navigator.language.substring(0,2);

if (langCode.indexOf(userLang) > -1) {
  document.getElementsByTagName("html")[0].lang = userLang;
  
  var swapData = {
    "be": {
      "slogan": "Лепшы зрок незнарок",
      "name": "Імя",
      "email": "Пошта",
      "subject": "Тэма",
      "comment": "Допіс",
    },
    "kk": {
      "slogan": "Көру үшін жаттығулар",
      "name": "Аты",
      "email": "Пошта",
      "subject": "Тақырыбы",
      "comment": "Хабарлама",
    },
    "nl": {
      "slogan": "Gezichtsoefeningen",
      "name": "Naam",
      "email": "Mail",
      "subject": "Tema",
      "comment": "Bericht",
    },
    "ru": {
      "slogan": "Упражнения для зрения",
      "name": "Имя",
      "email": "Почта",
      "subject": "Тема",
      "comment": "Сообщение",
    },
    "uk": {
      "slogan": "Поліпши свій зір",
      "name": "Ім'я",
      "email": "Почта",
      "subject": "Тема",
      "comment": "Повідомлення",
    },
  };
  
  var langData = swapData[userLang];
  document.getElementById("slogan").innerHTML = langData["slogan"];
  for (var property in langData) {
    if (property != "slogan") {
      document.getElementById(property).placeholder = langData[property];
    }
  }
}