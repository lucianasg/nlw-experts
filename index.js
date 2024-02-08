const perguntas = [
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Modelo de Objeto de Documento",
        "Documento de Objeto Manipulado"
      ],
      correta: 1 // A resposta correta é a segunda opção (Modelo de Objeto de Documento)
    },
    {
      pergunta: "Qual é a sintaxe correta para referenciar um arquivo externo de script JavaScript?",
      respostas: [
        "<script src='script.js'>",
        "<javascript href='script.js'>",
        "<link rel='stylesheet' href='script.js'>"
      ],
      correta: 0 // A resposta correta é a primeira opção (<script src='script.js'>)
    },
    {
      pergunta: "Qual destes métodos é usado para concatenar duas ou mais strings em JavaScript?",
      respostas: [
        "join()",
        "concat()",
        "splice()"
      ],
      correta: 1 // A resposta correta é a segunda opção (concat())
    },
    {
      pergunta: "Qual é o resultado da expressão 3 + '3' em JavaScript?",
      respostas: [
        "33",
        "6",
        "33.0"
      ],
      correta: 0 // A resposta correta é a primeira opção (33)
    },
    {
      pergunta: "Qual é o operador usado para comparar igualdade em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1 // A resposta correta é a segunda opção (===)
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "variável myVar;",
        "var myVar;",
        "myVar = variável;"
      ],
      correta: 1 // A resposta correta é a segunda opção (var myVar;)
    },
    {
      pergunta: "Qual função é usada para encontrar o comprimento de uma string em JavaScript?",
      respostas: [
        "size()",
        "length()",
        "length"
      ],
      correta: 2 // A resposta correta é a terceira opção (length)
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 0 // A resposta correta é a primeira opção (// Este é um comentário)
    },
    {
      pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
      respostas: [
        "toUpperCase()",
        "toLowerCase()",
        "toLowerCaseCase()"
      ],
      correta: 1 // A resposta correta é a segunda opção (toLowerCase())
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "define",
        "func"
      ],
      correta: 0 // A resposta correta é a primeira opção (function)
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size +' de '+ totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }