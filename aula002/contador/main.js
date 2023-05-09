const contador = document.querySelector("#contador");
const botoes = document.querySelectorAll(".btn"); // tbm funcionaria pegar pela tag html?
console.log(botoes);

let contagem = 0;

botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("aumentar")) {
      contagem++;
    } else if (styles.contains("diminuir")) {
      contagem--;
    } else {
      contagem = 0;
    }

    contador.textContent = contagem;
  });
});
