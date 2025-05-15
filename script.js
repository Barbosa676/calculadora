
function adicionar(valor) {
  const display = document.getElementById('display');
  display.value += valor;
}

function limpar() {
  const display = document.getElementById('display');
  display.value = '';
}


function calcular() {
  const display = document.getElementById('display');
  try {
   
    display.value = new Function('return ' + display.value)();
  } catch (error) {
    
    display.value = 'Erro';
  }
}

  