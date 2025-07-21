
const quizData = [
  {
    question: "Como você descreveria sua personalidade?",
    options: ["Elegante e discreta", "Extrovertida e divertida", "Romântica e sonhadora", "Misteriosa e intensa"]
  },
  {
    question: "Quais notas mais te atraem em um perfume?",
    options: ["Florais leves", "Doces e gourmands", "Amadeiradas e especiadas", "Cítricas e refrescantes"]
  },
  {
    question: "O que você prefere sentir ao aplicar um perfume?",
    options: ["Conforto e suavidade", "Sensualidade marcante", "Leveza e frescor", "Força e presença"]
  },
  {
    question: "Qual dessas imagens mais representa um dia ideal pra você?",
    options: ["Pé na areia e brisa no rosto", "Natureza e sombra fresca", "Noite urbana e misteriosa", "Sol e liberdade no campo"]
  },
  {
    question: "Quando você mais usa perfume?",
    options: ["No trabalho ou rotina", "Em encontros especiais", "Em passeios e viagens", "Em festas e eventos"]
  },
  {
    question: "Qual frasco você escolheria sem nem sentir o cheiro?",
    options: ["Clássico e refinado", "Moderno e ousado", "Romântico e nostálgico", "Simples e elegante"]
  }
];

let currentQuestion = 0;
let answers = [];

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion < quizData.length) {
    const q = quizData[currentQuestion];
    const questionElem = document.createElement("h2");
    questionElem.textContent = q.question;
    container.appendChild(questionElem);

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => {
        answers.push(option);
        currentQuestion++;
        showQuestion();
      };
      container.appendChild(btn);
    });
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2>Seus perfumes ideais são:</h2>
    <div class="result">
      <h3>✨ Assinatura:</h3>
      <p>Chanel Chance Eau Tendre — Leve, elegante e atemporal.</p>
      <h3>☀️ Para o dia/calor:</h3>
      <p>Dolce & Gabbana Light Blue — Refrescante, cítrico e solar.</p>
      <h3>🌙 Para a noite/frio:</h3>
      <p>YSL Black Opium — Doce, intenso e marcante.</p>
    </div>
    <p class="final-cta">Se identificou com algum? <br> Clica abaixo pra ver os detalhes e garantir seu decant com a Minir!<br>São fragrâncias originais em tamanhos ideais e com preços acessíveis.</p>
    <a href="https://instagram.com/use.minir" target="_blank">👉 Acesse @use.minir</a>
  `;
}

document.addEventListener("DOMContentLoaded", showQuestion);
