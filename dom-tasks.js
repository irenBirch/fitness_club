window.addEventListener("DOMContentLoaded", () => {
  const originalBg = document.body.style.backgroundImage;

  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#f5deb3"; 
  setTimeout(() => {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = originalBg;
  }, 30000);


  const info = document.getElementById("notice");
  if (info) {
    info.textContent = "🕒 Розклад оновлено! Перевірте нові заняття.";
  }
  const titles = document.querySelectorAll("h2, h3");
  titles.forEach(el => el.style.borderBottom = "3px solid #8b0000");

  const firstHeading = document.querySelector("h1");
  if (firstHeading) {
    console.log("innerHTML:", firstHeading.innerHTML);
    console.log("outerHTML:", firstHeading.outerHTML);
    console.log("textContent:", firstHeading.textContent);
    const textNode = firstHeading.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      console.log("nodeValue/data:", textNode.nodeValue);
    }
  }
});
