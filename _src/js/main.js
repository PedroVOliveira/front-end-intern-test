// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  //Função Que verifica se o email é valido
  function isValidEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }
  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.

  contactForm.addEventListener('submit', () => {
    // A propriedade "value" contém o valor atual de um input ou textarea
    // Os If's abaixo verificam os campos vazios, mandando alertas nos campos vazios //
    if(nameInput.value === ''){
      return alert('Preencha o nome do usuário');
    }
    if(emailInput.value ===''){
    return alert('Preencha o endereço de email');
    }
    if(messageInput.value ===''){
      return alert('Preencha o campo menssagem');
    }
    if(!isValidEmail(emailInput.value)){
      return alert('Preencha com um email valido');
    }
    // "window" é um objeto global que representa a janela (ou aba) do
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // navegador que está executando o código do seu site. O método
    // mensagem provida.
    //Alerta disparado quando todos os campos estão preenchidos corretamente.
    window.alert('Mensagem enviada com sucesso!');
    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
