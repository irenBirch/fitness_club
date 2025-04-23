function compareStrings(str1, str2) {
  if (str1 > str2) {
    alert(`Більший рядок: ${str1}`);
  } else if (str2 > str1) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакові.");
  }
}

function compareFromPage() {
  const text1 = document.getElementById("check1").textContent;
  const text2 = document.getElementById("check2").textContent;
  compareStrings(text1.trim(), text2.trim());
}
window.onload = compareFromPage;

window.addEventListener("DOMContentLoaded", () => {

  // document.write("<p style='color: green;'>✅ DOM loaded and updated.</p>");


const announcement = document.createElement("div");
announcement.style.marginTop = "20px";
announcement.style.paddingLeft = "100px";
announcement.style.backgroundColor = "#ffe4c4";

const annText = document.createTextNode("📝 Детальніше нижче...");
announcement.append(annText);

const firstH2 = document.querySelector("h2");
if (firstH2) {
  firstH2.after(announcement);
} else {
  document.body.append(announcement); 
}

const firstHeading = document.querySelector("h2");
if (firstHeading) {
  const note = document.createElement("p");
  note.textContent = "📢 Увага! Нові абонементи доступні цього місяця.";
  firstHeading.after(note);
}

  const toReplace = document.getElementById("check2");
  if (toReplace) {
    const replaced = document.createElement("div");
    replaced.textContent = "🔄 Цей блок було замінено.";
    toReplace.replaceWith(replaced);

    setTimeout(() => {
      replaced.remove();
    }, 5000);
  }
});