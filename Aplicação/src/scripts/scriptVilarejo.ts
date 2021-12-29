const taverna = document.getElementById("taverna") as HTMLElement;
const tavernTitle = document.getElementById("tavernTitle") as HTMLElement;

taverna.addEventListener("mouseenter", function () {
  tavernTitle.innerHTML = `
    <br>
    Taverna
    `;
});

taverna.addEventListener("mouseout", function () {
  tavernTitle.innerHTML = "";
});

const guilda = document.getElementById("guilda") as HTMLElement;
const guildaTitle = document.getElementById("guildaTitle") as HTMLElement;

guilda.addEventListener("mouseenter", function () {
  guildaTitle.innerHTML = `
    <br>
    Guilda
    `;
});

guilda.addEventListener("mouseout", function () {
  guildaTitle.innerHTML = "";
});

const ferreiro = document.getElementById("ferreiro") as HTMLElement;
const ferreiroTitle = document.getElementById("ferreiroTitle") as HTMLElement;

ferreiro.addEventListener("mouseenter", function () {
  ferreiroTitle.innerHTML = `
    <br>
    Ferreiro
    `;
});

ferreiro.addEventListener("mouseout", function () {
  ferreiroTitle.innerHTML = "";
});

const loja = document.getElementById("loja") as HTMLElement;
const lojaTitle = document.getElementById("lojaTitle") as HTMLElement;

loja.addEventListener("mouseenter", function () {
  lojaTitle.innerHTML = `
    <br>
    Loja de Dorin
    `;
});

loja.addEventListener("mouseout", function () {
  lojaTitle.innerHTML = "";
});
