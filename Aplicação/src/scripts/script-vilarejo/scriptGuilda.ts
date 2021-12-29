const missoes = document.getElementById("missao") as HTMLElement;
const missaoConteudo = document.getElementById("missaoConteudo") as HTMLElement;

missoes.addEventListener("click", () => {
  missaoConteudo.style.display = "block";
  missaoConteudo.innerHTML = `
  <h2>Missões de Rank D:</h2>
  <br>
  <br>
  <p>Aqui estão todas missões disponíveis para o seu nível de aventureiro atualmente, selecione uma e daremos seguimento a sua missão!</p>
  <br>
  <input type="button" class="button" id="mission01" value="Missão 01 rank D"/> <input type="button" class="button" id="mission02" value="Missão 02 rank D"/>
  `;
});
