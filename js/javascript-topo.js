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

  document.addEventListener('DOMContentLoaded', function() {
    var botaoAbrir = document.getElementById('abrir-nav');
    var meuDropdown = document.getElementById('nav-dropdown');
  
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