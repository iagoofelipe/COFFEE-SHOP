// variáveis gerais
json_produtos = null
var xmlhttp = new XMLHttpRequest();

// função que se conecta ao servidor e pega os dados do json
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    json_produtos = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "server/produtos.json", true);
xmlhttp.send(); 


function popupMidias(name) {
    alert("Acessando a página do " + name);
}

function changeDescricao(produto) {
    var element_descricao = document.getElementById("produto-descricao");
    element_descricao.innerText = json_produtos[produto.toLowerCase()]["descricao"]
    
}
