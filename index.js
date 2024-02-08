const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "var x;",
        "let x;",
      ],//array com as opções de respostas
      correta: 2 // Resposta correta é a terceira opção (let x;)(posição da opção correta=2)
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 2 // Resposta correta é a terceira opção (===)
    },
    {
      pergunta: "Como você inclui um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0 // Resposta correta é a primeira opção (// Este é um comentário)
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2 // Resposta correta é a terceira opção (console.log())
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5)",
      ],
      correta: 0 // Resposta correta é a primeira opção (for (i = 0; i <= 5; i++))
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "add()",
        "push()",
        "append()",
      ],
      correta: 1 // Resposta correta é a segunda opção (push())
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toInt()",
        "parseInteger()",
      ],
      correta: 0 // Resposta correta é a primeira opção (parseInt())
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction' em JavaScript?",
      respostas: [
        "call myFunction()",
        "myFunction()",
        "run myFunction()",
      ],
      correta: 1 // Resposta correta é a segunda opção (myFunction())
    },
    {
      pergunta: "Qual é a maneira correta de comparar duas variáveis em JavaScript para igualdade?",
      respostas: [
        "equals()",
        "==",
        "===",
      ],
      correta: 2 // Resposta correta é a terceira opção (===)
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof em JavaScript?",
      respostas: [
        "string",
        "number",
        "undefined",
      ],
      correta: 0 // Resposta correta é a primeira opção (string)
    }
  ];//array com as perguntas e respostas
  
  //criando as constantes quiz e template selecionando os conteúdos dentro da tag div e template respectivamente
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('#quiz-template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  
  //loop para exibir na tela as perguntas por vez até o fim da const perguntas
  for(const item of perguntas){
    //criando const quizItem que consiste em todo o conteúdo dentro da tag template
   const quizItem = template.content.cloneNode(true);
   //atribuir o conteúdo da pergunta na tag h3
   quizItem.querySelector('h3').textContent = item.pergunta;
  
   for(let resposta of item.respostas){
     //criando um elemento <dt> e um <input> e acrescentando ao documento
     const dt = document.createElement('dt');
     const input = document.createElement('input');
     //adicionando atributos
     input.setAttribute('type', 'radio');
     input.setAttribute('name', 'pergunta' + perguntas.indexOf(item));//parâmetro indexOf para localizar a pergunta que a resposta pertence
     //parâmetro indexOf para localizar o valor de resposta no array
     input.setAttribute('value', item.respostas.indexOf(resposta));
     dt.appendChild(input)//acrescenta input ao elemento dt
     dt.appendChild(document.createTextNode(resposta));//prover texto resposta ao elemento
     quizItem.querySelector('dl').appendChild(dt);//coloca a resposta dentro da pergunta
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = parseInt(event.target.value) === item.correta;
      corretas.delete(item); 
      if(estaCorreta){
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    }
   }
  quizItem.querySelector('dl dt').remove();//remover texto resposta A
  //Coloca a pergunta na tela
   quiz.appendChild(quizItem);
  }
  