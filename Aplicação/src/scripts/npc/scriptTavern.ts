const texto = document.getElementById("text") as HTMLElement;
const next = document.getElementById("next") as HTMLElement;

next.addEventListener("click", () => {
  texto.innerHTML = `
      <p>
      É sempre um prazer encontrar um grupo de aventureiros em meu bar, me lembra dos velhos tempos! Mas me digam, o que vocês querem?
      </p>
      <br>
      <br>
      <center><input class="button" onclick="jogar()" type="button" value="Jogar"> <input class="button" onclick="aventura()" type="button" value="Uma aventura"> <input class="button" onclick="beber()" type="button" value="Beber"></center>
      `;
});
