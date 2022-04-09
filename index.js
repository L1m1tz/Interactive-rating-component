let iconEl = document.getElementById("icon-el");
let headerEl = document.getElementById("header-el");
let paragraphEl = document.getElementById("paragraph-el");
let ratings = document.getElementById("ratings");
let selected = 0;

function whichButton(numb) {
  selected = numb;
}

function rate() {
  //Rating state end
  if (selected > 0) {
    iconEl.textContent = "You selected " + selected + " out of 5";
    ratings.textContent = "";
    //Thank you state end
    headerEl.textContent = "Thank you!";
    paragraphEl.textContent =
      "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  }
}
