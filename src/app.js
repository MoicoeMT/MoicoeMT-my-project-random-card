/* eslint-disable */
import "bootstrap";
import "./style.css";

const cards = [
  "A",
  "J",
  "Q",
  "K",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2"
];
const pintas = [
  'fa-solid fa-heart" style="color: #ff1100;',
  'fa-solid fa-diamond" style="color: #fc0303;',
  'fa-solid fa-clover style="color: black;',
  'bi bi-suit-spade-fill style="color: black;'
];

window.onload = function() {
  let ourCard = document.getElementById("carta");
  let randomNum = Math.floor(Math.random() * cards.length);
  let randomIcon = Math.floor(Math.random() * pintas.length);
  let iconCard = cards[randomNum];
  let figure = pintas[randomIcon];

  let ourHtml = `<div class="justify-content-start pt-2 display-4">
  <i class="${figure}"></i>
  </div>
  <div class="py-5 d-flex justify-content-center my-5">
  <h1 class="" id="titulo">${iconCard}</h1>
  </div>
  <div class="d-flex justify-content-end pb-2 display-4">
  <i class="fa-rotate-180 ${figure}"></i>
  </div>`;
  ourCard.innerHTML = ourHtml;
};
