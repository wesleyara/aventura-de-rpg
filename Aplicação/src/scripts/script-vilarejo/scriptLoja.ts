const pocao = document.getElementById("pocao") as HTMLElement;
const pocaoConteudo = document.getElementById("pocaoConteudo") as HTMLElement;

pocao.addEventListener("mouseenter", function () {
  pocaoConteudo.innerHTML = `
    <br>
    <h2>Poções disponíveis no momento:</h2>
    <br>
    <ul style="list-style-type: none;">
        <li style="padding: 5px;">Poção de cura Pequena (1d4 + COS), 20PO</li>
        <li style="padding: 5px;">Poção de cura Média (1d8 + COS), 30PO</li>
        <li style="padding: 5px;">Poção de cura Grande (1d10 + COS), 40PO</li>
    </ul>
    `;
});

pocao.addEventListener("mouseout", function () {
  pocaoConteudo.innerHTML = "";
});

const equipamento = document.getElementById("equipamento") as HTMLElement;
const equipamentoConteudo = document.getElementById(
  "equipamentoConteudo",
) as HTMLElement;

equipamento.addEventListener("mouseenter", function () {
  equipamentoConteudo.innerHTML = `
    <br>
    <h2>Equipamentos e itens:</h2>
    <br>
    <ul style="list-style-type: none;">
        <li style="padding: 5px;">Corda, 10PO</li>
        <li style="padding: 5px;">Pote de veneno (1d4 + P.ATR), 50PO</li>
        <li style="padding: 5px;">Poção estranha, 40PO</li>
    </ul>
    `;
});

equipamento.addEventListener("mouseout", function () {
  equipamentoConteudo.innerHTML = "";
});

const vendedor = document.getElementById("vendedor") as HTMLElement;
const vendedorDiv = document.querySelector(".vendedor-div") as HTMLElement;

vendedor.addEventListener("click", function () {
  vendedorDiv.innerHTML = `
    Já deciciram o que irão levar?
    <br>
    <center><input class="button" id="sim" type="button" value="Sim"> <input class="button" id="negociar" type="button" value="Negociar"> </center>
    `;
});

const sim = document.getElementById("sim") as HTMLElement;

sim.addEventListener("click", () => {
  vendedorDiv.innerHTML = `
      Boa sorte em suas jornadas, aventureiros.
      `;
});

const negociar = document.getElementById("negociar") as HTMLElement;

negociar.addEventListener("click", () => {
  vendedorDiv.innerHTML = `
    Vamos ver como posso lhe ajudar!
    <br>
    <br>
    <center><input class="button" id="rolar" type="button" value="Rolar 1d20"></center>
    `;
});

const rolar = document.getElementById("rolar") as HTMLElement;

rolar.addEventListener("click", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dado20: any = Math.random() * 20 + 1;
  const dado = parseInt(dado20);

  if (dado >= 14) {
    vendedorDiv.innerHTML = `
    Seu resultado foi: ${dado}.
    <br>
    <br>
    Acho que posso reduzir os custos pela metade, mas isso é um super desconto, faça bom uso!
    `;
  } else {
    vendedorDiv.innerHTML = `
    Seu resultado foi: ${dado}.
    <br>
    <br>
    Acho que não posso fazer nada por você!
    <br>
    <center><input class="button" onclick="rolar()" type="button" value="Tentar novamente"></center>
    `;
  }
});
