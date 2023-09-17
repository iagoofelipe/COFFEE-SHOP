// variáveis gerais
json_produtos = null
var xmlhttp = new XMLHttpRequest();

// função que se conecta ao servidor e pega os dados do json
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    json_produtos = JSON.parse(this.responseText);
    setProdutos();
}
};

xmlhttp.open("GET", "server/produtos.json", true);
xmlhttp.send(); 

// utilizada ao clicar nos ícones
function popupMidias(name) {
  alert("Acessando a página do " + name);
}

// utilizada para definir elementos HTML dos produtos
function setProdutos() {
  var element = "";
  for(produto in json_produtos){
    var nomeProduto = produto.toUpperCase();
    var img = json_produtos[produto]["img"];
    element += 
    `<div class='produto' onmouseenter="changeDescricao('${nomeProduto}')"> \
      <img src="${img}">\
      <h2>${nomeProduto}</h2>\
    </div>\n`;
  }
  document.getElementById("div-produtos").innerHTML = element;
}

// utilizada para exibir a descrição dos produtos
function changeDescricao(produto) {
  var element_descricao = document.getElementById("produto-descricao");
  element_descricao.innerText = json_produtos[produto.toLowerCase()]["descricao"]
  
}

// função chamada na inicialização da página
function load() {
  setProdutos();
  resize();
  
}

// ajustando elementos quando a página for redimensionada
function resize() {
  var largura = window.innerWidth;

  if(largura < 600) {
  document.getElementById("footer").style.display = "block";
  } else {
  document.getElementById("footer").style.display = "flex";
  }

  if(largura < 445) {
    document.getElementById("div-produtos").style.display = "block";
  } else {
    document.getElementById("div-produtos").style.display = "flex";
  }
}

window.onresize = resize;
window.onload = load;