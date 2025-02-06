let conteiner = document.getElementById('conteiner');
let contador = 1;
let quant = 20;

let dbCompras = []; 

obterComprasLocalStorage();
aparecerNaTela();

function deletar(idCompra){

  const indiceCompra = dbCompras.findIndex(c => c.id == idCompra);
  if(indiceCompra >= 0){
      throw new Error('Id da compra não encontrado: ', idCompra);
  }

  dbCompras = dbCompras.splice(indiceCompra, 1);
  localStorage.setItem('dbCompras', JSON.stringify(dbCompras));

  var compra = document.getElementById(idCompra);
  compra.remove();
}

function tirarTela(idCompra){
  var compra = document.getElementById(idCompra);
  compra.remove();
}

var aumentar = document.getElementById('aumentar');
var diminuir = document.getElementById('diminuir');
var control = 1;

function somar(qtn){
  control++;
  console.log(control);
  var text = document.getElementById(qtn).innerHTML = control;
}

function subtrair(qtn){
  control--;
  console.log(control);
  var text = document.getElementById(qtn).innerHTML = control;
}

function obterComprasLocalStorage(){
  if(localStorage.getItem('dbCompras')){
    dbCompras = JSON.parse(localStorage.getItem('dbCompras'));
  }
}

function aparecerNaTela(){
  for (let i=0; i < dbCompras.length; i++){
    conteiner.innerHTML += dbCompras[i];
  }
}

function jujk(){

  ++contador;  

let jjk = `<div id="${contador}" class="compras">
      <div class="compras-foto">
          <div class = "capa"> <a href="produtos/jjk1.html"><img src="https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg"></a>  </div>
      </div>
      <div class="compras-nome-valor">
        <span>Jujutsu Kaisen</span><br>
        <span>R$26,90</span>
      </div>
      <div class="compras-quantidade">

        <button onclick="subtrair(${quant})" id="diminuir">-</button>
        <span id="${quant}"> 1 </span> 
        <button onclick="somar(${quant})" id="aumentar">+</button>

      </div>
      <div class="compras-deletar">
        <button onclick="deletar(${contador})" class="delete"><span class="mdi mdi-delete-empty">Deletar</span></button>
      </div>
    </div>`;

  dbCompras.push(jjk);
  localStorage.setItem('dbCompras', JSON.stringify(dbCompras));
  conteiner.innerHTML += jjk;
  ++quant;
}



function boku(){

  ++contador;  

let bnh = `<div id="${contador}" class="compras">
      <div class="compras-foto">
        <div class = "capa"> <a href="produtos/bnh1.html"><img src="https://m.media-amazon.com/images/I/71bELfIWTDL._SY466_.jpg"></a>  </div>
      </div>
      <div class="compras-nome-valor">
        <span>Boku no Hero</span><br>
        <span>R$26,90</span>
      </div>
      <div class="compras-quantidade">

        <button onclick="subtrair(${quant})" id="diminuir">-</button>
        <span id="${quant}"> 1 </span> 
        <button onclick="somar(${quant})" id="aumentar">+</button>

      </div>
      <div class="compras-deletar">
        <button onclick="deletar(${contador})" class="delete"><span class="mdi mdi-delete-empty">Deletar</span></button>
      </div>
    </div>`;

  dbCompras.push(bnh);
  localStorage.setItem('dbCompras', JSON.stringify(dbCompras));
  conteiner.innerHTML += bnh;
  ++quant;
}

function mut(){

  ++contador;  

let mt = `<div id="${contador}" class="compras">
      <div class="compras-foto">
          <div class = "capa">  <a href="produtos/mt1.html"><img src="https://m.media-amazon.com/images/I/81vgliRXgRL._AC_UF1000,1000_QL80_.jpg"></a>  </div>
      </div>
      <div class="compras-nome-valor">
        <span>Mushouko Tensei</span><br>
        <span>R$26,90</span>
      </div>
      <div class="compras-quantidade">

        <button onclick="subtrair(${quant})" id="diminuir">-</button>
        <span id="${quant}"> 1 </span> 
        <button onclick="somar(${quant})" id="aumentar">+</button>

      </div>
      <div class="compras-deletar">
        <button onclick="deletar(${contador})" class="delete"><span class="mdi mdi-delete-empty">Deletar</span></button>
      </div>
    </div>`;

  dbCompras.push(mt);
  localStorage.setItem('dbCompras', JSON.stringify(dbCompras));
  conteiner.innerHTML += mt;
  ++quant;
}

function chain(){

  ++contador;  

let csm = `<div id="${contador}" class="compras">
      <div class="compras-foto">
          <div class = "capa"> <a href="produtos/cm1.html"><img src="https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UF1000,1000_QL80_.jpg"></a>  </div>
      </div>
      <div class="compras-nome-valor">
        <span>Chainsaw Man</span><br>
        <span>R$26,90</span>
      </div>
      <div class="compras-quantidade">

        <button onclick="subtrair(${quant})" id="diminuir">-</button>
        <span id="${quant}"> 1 </span> 
        <button onclick="somar(${quant})" id="aumentar">+</button>

      </div>
      <div class="compras-deletar">
        <button onclick="deletar(${contador})" class="delete"><span class="mdi mdi-delete-empty">Deletar</span></button>
      </div>
    </div>`;

  dbCompras.push(csm);
  localStorage.setItem('dbCompras', JSON.stringify(dbCompras));
  conteiner.innerHTML += csm;
  ++quant;
}