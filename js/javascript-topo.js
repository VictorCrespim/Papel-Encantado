// Login

document.addEventListener('DOMContentLoaded', function() {
    var botaoAbrir = document.getElementById('abrir-form');
    var meuDropdown = document.getElementById('meu-dropdown');
  
    botaoAbrir.addEventListener('click', function() {
      if (meuDropdown.style.display === 'block') {
        meuDropdown.style.display = 'none';
      } else {
        meuDropdown.style.display = 'block';
      }
    });
  
    // Fechar dropdown quando clicar fora dele
    document.addEventListener('click', function(event) {
      if (event.target !== botaoAbrir && event.target !== meuDropdown) {
        meuDropdown.style.display = 'none';
      }
    });
  });

  // Menu Drop

let btnMenu = document.getElementById('btn-menu')
let btnMenuInf = document.getElementById('btn-menu-inferior')
let menu = document.getElementById('menu-mobile')
let fecharMenu = document.getElementById('fechar-menu')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

btnMenuInf.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

fecharMenu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

  // Carrinho Drop

  let btncarrinho = document.getElementById('btn-carrinho')
  let btncarrinhoInf = document.getElementById('btn-carrinho-inferior')
  let carrinho = document.getElementById('carrinho-dropdown')
  let fecharCarrinho = document.getElementById('fechar-carrinho')
  let overlaycarrinho = document.getElementById('overlay-carrinho')
  
  btncarrinho.addEventListener('click', ()=>{
    carrinho.classList.add('abrir-carrinho')
  })

  btncarrinhoInf.addEventListener('click', ()=>{
    carrinho.classList.add('abrir-carrinho')
  })
  
  fecharCarrinho.addEventListener('click', ()=>{
    carrinho.classList.remove('abrir-carrinho')
  })
  
  overlaycarrinho.addEventListener('click', ()=>{
    carrinho.classList.remove('abrir-carrinho')
  })

  // Drop Menu Inferior

  window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo-img');
    var menu = document.querySelector('.menu-inferior');
    var logoPosition = logo.getBoundingClientRect().bottom;

    if (logoPosition < 0) {
        // Se a logo estiver fora da tela
        menu.style.height = '10%';
    } else {
        // Se a logo estiver visível na tela
        menu.style.height = '0%';
    }
});

// Pesquisar Menu Inferior

let pesquisarInf = document.getElementById('pesquisa-inferior')
let pesqInf = document.getElementById('pesq-inf')
let buscarInf = document.getElementById('buscar-inferior')
let overlayinf = document.getElementById('overlay-inf')
let menuInf = document.getElementById('menuInferior')

buscarInf.addEventListener('click', ()=>{
  pesquisarInf.classList.add('pesquisarInferior')
  pesqInf.classList.add('pesqInferior')
})

overlayinf.addEventListener('click', ()=>{
  pesquisarInf.classList.remove('pesquisarInferior')
  pesqInf.classList.remove('pesqInferior')
})

// Atendimento

document.getElementById('atendimento').addEventListener('click', function() {
  var abrirAtendimento = document.getElementById('abrir-atendimento');
  if (abrirAtendimento.style.display === 'none') {
    abrirAtendimento.style.display = 'block';
  } else {
    abrirAtendimento.style.display = 'none';
  }
});

// Rastrear Pedido

document.getElementById('rastrear').addEventListener('click', function() {
  var abrirRastrear = document.getElementById('abrir-rastrear');
  if (abrirRastrear.style.display === 'none') {
    abrirRastrear.style.display = 'block';
  } else {
    abrirRastrear.style.display = 'none';
  }
});




