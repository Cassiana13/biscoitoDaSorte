//Variáveis

const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const btnCookie = document.querySelector("#btnCookie");
const btnReset = document.querySelector("#btnReset");
const phrases = [
  [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ],
  ["A vida trará coisas boas se tiver paciência."],
  [
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  ],
  ["Não compense na ira o que lhe falta na razão."],
  ["Defeitos e virtudes são apenas dois lados da mesma moeda."],
  ["A maior de todas as torres começa no solo."],
  ["Não há que ser forte. Há que ser flexível."],
  [
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  ],
  [
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  ],

  ["A juventude não é uma época da vida, é um estado de espírito."],

  [
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  ],
  [
    "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  ],

  ["Siga os bons e aprenda com eles."],
];
const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

//Eventos
btnCookie.addEventListener("click", handleCookieClick);
btnReset.addEventListener("click", handleCookieReset);

//funções
function handleCookieClick() {
  toggleScreen();
  screenTwo.querySelector("p").innerText = randomPhrase;
}
function handleCookieReset() {
  toggleScreen();
}

function toggleScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}
