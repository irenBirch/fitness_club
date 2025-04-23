function dialogWithUser() {
  alert("Ласкаво просимо до Energia Fitness!");

  let userName = prompt("Як вас звати?");
  if (!userName) {
    alert("Ім’я не введено. Продовжуємо як гість.");
    userName = "Гість";
  } else {
    alert(`Привіт, ${userName}!`);
  }

  const answer = confirm("Бажаєте дізнатися більше про нас?");
  if (answer) {
    let info = [
      "Fly Yoga — це поєднання йоги, гімнастики та акробатики.",
      "Ви будете займатись у спеціальному гамаці.",
      "Це допоможе розтягнути тіло та зняти стрес!",
    ];

    for (let i = 0; i < info.length; i++) {
      alert(info[i]);
    }
  } else {
    alert(
      "Добре! Ви можете ознайомитись із інформацією про наш клуб на нашому сайті."
    );
  }

  alert("Дякуємо за увагу, гарного дня!");
}

window.onload = dialogWithUser;
