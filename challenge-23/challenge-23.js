(function(win,doc){

  'use strict';

   /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:
  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;
  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $display = doc.querySelector('[data-js = "display"]');

  var $btnSoma = doc.querySelector('[data-js = "btn_soma"]');
  var $btnSubtracao= doc.querySelector('[data-js = "btn_subtracao"]');
  var $btnDivisao = doc.querySelector('[data-js = "btn_divisao"]');
  var $btnMultiplicacao = doc.querySelector('[data-js = "btn_multiplicacao"]');

  var $btn1 = doc.querySelector('[data-js = "btn_1"]');
  var $btn2 = doc.querySelector('[data-js = "btn_2"]');
  var $btn3 = doc.querySelector('[data-js = "btn_3"]');
  var $btn4 = doc.querySelector('[data-js = "btn_4"]');
  var $btn5 = doc.querySelector('[data-js = "btn_5"]');
  var $btn6 = doc.querySelector('[data-js = "btn_6"]');
  var $btn7 = doc.querySelector('[data-js = "btn_7"]');
  var $btn8 = doc.querySelector('[data-js = "btn_8"]');
  var $btn9 = doc.querySelector('[data-js = "btn_9"]');
  var $btn0 = doc.querySelector('[data-js = "btn_0"]');


  $btnSoma.addEventListener('click', adicionaOperador('+'), false);
  $btnSubtracao.addEventListener('click', adicionaOperador('-'), false);
  $btnMultiplicacao.addEventListener('click', adicionaOperador('*'), false);
  $btnDivisao.addEventListener('click', adicionaOperador('/'), false);

  $btn1.addEventListener('click', adicionaNumero(1), false);
  $btn2.addEventListener('click', adicionaNumero(2), false);
  $btn3.addEventListener('click', adicionaNumero(3), false);
  $btn4.addEventListener('click', adicionaNumero(4), false);
  $btn5.addEventListener('click', adicionaNumero(5), false);
  $btn6.addEventListener('click', adicionaNumero(6), false);
  $btn7.addEventListener('click', adicionaNumero(7), false);
  $btn8.addEventListener('click', adicionaNumero(8), false);
  $btn9.addEventListener('click', adicionaNumero(9), false);
  $btn0.addEventListener('click', adicionaNumero(0), false);

  function adicionaNumero(numero){
    return function(){
      $display.value === '0' ? $display.value = numero : $display.value += numero;
    }
  };

  function adicionaOperador(operador){
    return function(){
      var regexTeste = new RegExp('(.*)[\\+\\-\\*\\/]$');

      if( regexTeste.test($display.value) )
        $display.value = $display.value.replace(regexTeste , '$1' + operador);
      else 
        $display.value += operador; 
    }
  };
  
}(window, document));