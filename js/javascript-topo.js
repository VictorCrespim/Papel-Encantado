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
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

  // Carrinho Drop

  let btncarrinho = document.getElementById('btn-carrinho')
  let carrinho = document.getElementById('carrinho-dropdown')
  let overlaycarrinho = document.getElementById('overlay-carrinho')
  
  btncarrinho.addEventListener('click', ()=>{
    carrinho.classList.add('abrir-carrinho')
  })
  
  carrinho.addEventListener('click', ()=>{
    carrinho.classList.remove('abrir-carrinho')
  })
  
  overlaycarrinho.addEventListener('click', ()=>{
    carrinho.classList.remove('abrir-carrinho')
  })