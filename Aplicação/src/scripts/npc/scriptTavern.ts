const texto = document.getElementById("text") as HTMLElement;
const next = document.getElementById("next") as HTMLElement;

next.addEventListener("click", () => {
  texto.innerHTML = `
      <p>
      É sempre um prazer encontrar um grupo de aventureiros em meu bar, me lembra dos velhos tempos! Mas me digam, o que vocês querem?
      </p>
      <br>
      <br>
      <center><input class="button" id="jogar" type="button" value="Jogar"> <input class="button" id="beber" type="button" value="Beber"></center>
      `;
});
