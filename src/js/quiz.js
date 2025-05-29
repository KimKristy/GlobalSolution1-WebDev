// adicionando perguntas ao quiz
const perguntas = [
  {
    pergunta: "O que é uma enchente?",
    opcoes: [
      "Aumento temporário do nível da água que causa alagamentos",
      "Chuva fraca durante a noite",
      "Seca prolongada em áreas urbanas",
    ],
    resposta: 0,
  },
  {
    pergunta: "Qual é uma causa comum de enchentes nas cidades?",
    opcoes: [
      "Construção de parques",
      "Desmatamento e impermeabilização do solo",
      "Uso de bicicletas",
    ],
    resposta: 1,
  },
  {
    pergunta: "Qual dessas atitudes ajuda a prevenir enchentes urbanas?",
    opcoes: [
      "Jogar lixo nos bueiros",
      "Preservar áreas verdes e evitar o desmatamento",
      "Construir em encostas e margens de rios",
    ],
    resposta: 1,
  },
  {
    pergunta: "O que fazer durante uma enchente?",
    opcoes: [
      "Buscar lugares altos e seguros",
      "Atravessar ruas alagadas a pé",
      "Ficar em áreas baixas e esperar ajuda",
    ],
    resposta: 0,
  },
  {
    pergunta: "Enchentes podem causar:",
    opcoes: [
      "Aumento da biodiversidade local",
      "Destruição de casas, doenças e mortes",
      "Melhoria na qualidade da água",
    ],
    resposta: 1,
  },
  {
    pergunta: "O lixo acumulado nas ruas contribui para enchentes porque:",
    opcoes: [
      "Atrai animais silvestres",
      "Entope bueiros e impede o escoamento da água",
      "É reciclado automaticamente pela chuva",
    ],
    resposta: 1,
  },
  {
    pergunta: "Qual órgão deve ser acionado em caso de enchente grave?",
    opcoes: [
      "Defesa Civil",
      "Secretaria da Fazenda",
      "Departamento de Trânsito",
    ],
    resposta: 0,
  },
  {
    pergunta: "Por que construções em áreas de risco são perigosas?",
    opcoes: [
      "Porque não têm energia elétrica",
      "Porque são mais baratas",
      "Porque aumentam o risco de deslizamentos e alagamentos",
    ],
    resposta: 2,
  },
  {
    pergunta: "O uso de calçadas permeáveis e jardins ajuda porque:",
    opcoes: [
      "Reduz o tráfego",
      "Ajuda a água da chuva a infiltrar no solo",
      "Evita o crescimento de plantas",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Como um aplicativo como o Resgate+ pode ajudar durante enchentes?",
    opcoes: [
      "Indicando rotas seguras e enviando alertas em tempo real",
      "Vendendo equipamentos eletrônicos",
      "Tocando músicas relaxantes",
    ],
    resposta: 0,
  },
];

let indice = 0;
let pontuacao = 0;
const respostasUsuario = [];

const quizContainer = document.getElementById("quiz");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");

function carregarPergunta() {
  if (indice >= perguntas.length) {
    mostrarResultadoDetalhado();
    return;
  }

  const atual = perguntas[indice];
  perguntaEl.innerText = atual.pergunta;
  opcoesEl.innerHTML = "";

  atual.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.onclick = () => {
      const acertou = i === atual.resposta;
      if (acertou) pontuacao++;
      respostasUsuario.push({
        pergunta: atual.pergunta,
        selecionada: opcao,
        correta: atual.opcoes[atual.resposta],
        acertou: acertou,
      });
      indice++;
      carregarPergunta();
    };
    opcoesEl.appendChild(botao);
  });
}

function mostrarResultadoDetalhado() {
  perguntaEl.style.display = "none";
  opcoesEl.style.display = "none";
  resultadoEl.innerHTML = `<h3>Resultado:</h3>`;

  respostasUsuario.forEach((resp, index) => {
    const div = document.createElement("div");
    div.style.marginBottom = "1rem";
    div.innerHTML = `
      <strong>${resp.acertou ? "✅" : "❌"} Pergunta ${index + 1}:</strong> ${
      resp.pergunta
    }<br>
      ${
        resp.acertou
          ? `✔ Você respondeu: <em>"${resp.selecionada}"</em> — <span style="color:green">Correta!</span>`
          : `✘ Você respondeu: <em>"${resp.selecionada}"</em><br>
           ✔ Resposta correta: <em>"${resp.correta}"</em>`
      }
    `;
    resultadoEl.appendChild(div);
  });

  const pontuacaoFinal = document.createElement("p");
  pontuacaoFinal.innerHTML = `<strong>Pontuação final:</strong> ${pontuacao} de ${perguntas.length}`;
  resultadoEl.appendChild(pontuacaoFinal);
}

carregarPergunta();
