

function numeros() {
 
  const min = document.getElementById("minimo").value;
  const max = document.getElementById("maximo").value;

  let sort = Math.floor(Math.random() * Math.floor(max))

  while (sort < min) {

    sort = Math.floor(Math.random() * Math.floor(max));
  }
  document.getElementById("resultado").innerHTML = sort;
  
}



  const nomes = []
  function adicionar() {
    let nome_atual = (document.getElementById("input_nome").value);
    document.getElementById("np").innerHTML = nome_atual;
    if (nome_atual) {
      nomes.push(nome_atual)
      document.getElementById("input_nome").value = "";
    } else {
      alert("Não é possível inserir valores em branco")
    }
    document.getElementById("np").innerHTML = nomes;
  }
  function sorteio() {
    esc = Math.floor(Math.random(nomes) * nomes.length);
    document.getElementById("valor_digitado").innerHTML = nomes[esc];
  }
  function capturar() {
    document.getElementById("valor_digitado").innerHTML = "O sorteado é..."
    setTimeout(sorteio, 1000)
  }
 
function refreshPage(){
  window.location.reload();
}
