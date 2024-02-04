function generateColor() {
  let red = Math.floor(Math.random() * 256 + 1).toString(16);
  let green = Math.floor(Math.random() * 256 + 1).toString(16);
  let blue = Math.floor(Math.random() * 256 + 1).toString(16);

  let rgbColor = `#${red}${green}${blue}`;

  return rgbColor;
}

function displayColor() {
  const container = document.querySelector(".cards_container");
  container.innerHTML = "";

  for (let i = 0; i < 32; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h4");
    title.className = "card_title";

    const randomColor = generateColor();
    card.style.backgroundColor = randomColor;
    title.textContent = randomColor;

    card.appendChild(title);
    container.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", displayColor);

const generateColorBtn = document.querySelector("#colorGenerate");
generateColorBtn.addEventListener("click", displayColor);
