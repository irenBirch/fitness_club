setTimeout(() => {
  location.href =
    "https://top20.ua/kyiv/sport-krasota/fitnes-tsentryi/sport-life-set-fitnes-klubov.html";
}, 15000);

document.addEventListener("click", function (event) {
  const id = event.target.dataset.toggleId;
  if (!id) return; 

  const elem = document.getElementById(id);
  if (!elem) return; 

  elem.hidden = !elem.hidden; 
});
