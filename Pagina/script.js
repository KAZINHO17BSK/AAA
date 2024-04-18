let carrinho = {};

function adicionarAoCarrinho(id) {
    if (carrinho[id]) {
        carrinho[id]++;
    } else {
        carrinho[id] = 1;
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoElement = document.getElementById('itensCarrinho');
  carrinhoElement.innerHTML = '';
  Object.keys(carrinho).forEach((produto) => {
      const li = document.createElement('li');
      li.innerHTML = `${produto} x ${carrinho[produto]}`;
      const buttonRemover = document.createElement('button');
      buttonRemover.textContent = 'Remover';
      buttonRemover.onclick = () => removerDoCarrinho(produto);
      li.appendChild(buttonRemover);
      carrinhoElement.appendChild(li);
  });
  atualizarNumeroItensCarrinho();
  
  const botaoComprarCarrinho = document.getElementById('botaoComprarCarrinho');
  botaoComprarCarrinho.onclick = comprarCarrinho;
}

function comprarCarrinho() {
  console.log("Todos os itens do carrinho foram comprados!");
}


function atualizarNumeroItensCarrinho() {
    const numeroItens = Object.values(carrinho).reduce((total, quantidade) => total + quantidade, 0);
    const numeroItensElemento = document.getElementById('numeroItensCarrinho');
    numeroItensElemento.textContent = numeroItens;
}

function removerDoCarrinho(id) {
    if (carrinho[id] === 1) {
        delete carrinho[id];
    } else if (carrinho[id] > 1) {
        carrinho[id]--;
    }

    atualizarCarrinho();
}

function mostrarCarrinho() {
    var carrinho = document.getElementById("carrinho");
    carrinho.style.display = "block";
}


var conteudoHTML = document.getElementById("conteudoHTML");
conteudoHTML.innerHTML = `
<h5>Produtos</h5>
<div class="p1">
  <div class="product" id="Colar Aranha">
    <h2>Colar Aranha</h2>
    <img src="https://down-br.img.susercontent.com/file/sg-11134201-7qvf4-li2gz3zp43p66a" alt="Aranha">
    <h3>Letdiffery Colar Pingente De<br> 
      Aranha De Aço Inoxidável<br> De Alta 
      Qualidade Para<br> Mulheres Jóias De<br> 
      Gargantilha Homens</h3>
    <p>Preço: R$10,00</p>
    <button onclick="adicionarAoCarrinho('Colar Aranha')">Adicionar ao Carrinho</button>
  </div>
</div>
<div class="p2">
  <div class="product" id="Semáforo">
    <h2>Semáforo Infantil</h2>
    <img src="https://down-br.img.susercontent.com/file/bec92047d54f86e7df082d83b7d0331e" alt="Semaforo">
    <h3>Simulação De Brinquedos De Semáforo 
      Infantil Luz Vermelha Verde Educação</h3>
    <p>Preço: R$15,48</p>
    <button onclick="adicionarAoCarrinho('Semáforo')">Adicionar ao Carrinho</button>
  </div>
</div>
<div class="p3">
  <div class="product" id="Processador">
    <h2>Mini Processador Elétrico</h2>
    <img src="https://down-br.img.susercontent.com/file/66b5eb1ca084fb400497205679a0dbb8" alt="Processador">
    <h3>Mini Processador Elétrico Moedor
        Carne Vegetais Alho Fruta Amendoim 
        Recarregável USB 250ml</h3>
    <p>Preço: R$17,98</p>
    <button onclick="adicionarAoCarrinho('Processador')">Adicionar ao Carrinho</button>
  </div>
</div>
<div class="p4">
  <div class="product" id="Massageador">
    <h2>Mini Massageador de Cervical Elétrico</h2>
    <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98s-llv761hv9xbqef" alt="Massageador">
    <h3>Mini Massageador de Cervical Elétrico
     Portátil Alivia Dores Corpo Pescoço</h3>
    <p>Preço: R$8,99</p>
    <button onclick="adicionarAoCarrinho('Massageador')">Adicionar ao Carrinho</button>
  </div>
</div>
<div class="p5">
  <div class="product" id="Lego">
    <h2>Bonequinho Lego</h2>
    <img src="https://down-br.img.susercontent.com/file/sg-11134201-7rbk0-lkw8z7ej19cdff" alt="Lego">
    <h3>Dia das Crianças Montagem Educacional 
    de Brinquedos Lego Building Block 
    Minifigures-Random Delivery</h3>
    <p>Preço: R$1,23</p>
    <button onclick="adicionarAoCarrinho('Lego')">Adicionar ao Carrinho</button>
  </div>
</div>
<div class="p6">
  <div class="product" id="Relogio">
    <h2>Omnitrix</h2>
    <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq8qjp2kjggv06" alt="Omni">
    <h3>Ben 10 Omnitrix Supremacia Alienígena</h3>
    <p>Preço: R$19,00</p>
    <button onclick="adicionarAoCarrinho('Omnitrix')">Adicionar ao Carrinho</button>
  </div>
</div>
<div id="carrinho" style="display: none;">
  <ul id="itensCarrinho">
  </ul>
  <button id="botaoComprarCarrinho">Comprar</button>
</div>
`;