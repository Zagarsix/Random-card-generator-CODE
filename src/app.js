/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function mazoDeCartas() {
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const tipoCarta = ["Corazon", "Diamante", "Espada", "Trebol"];
    const cartas = [];
    for (let i = 0; i < tipoCarta.length; i++) {
      for (let u = 0; u < values.length; u++) {
        const pinta = tipoCarta[i];
        const numero = values[u];
        cartas.push({ numero, pinta });
      }
    }
    return cartas;
  }

  function cartaRandom(cartas) {
    const random = Math.floor(Math.random() * 51);
    const cartaNumero = cartas[random].numero;
    const cartaPinta = cartas[random].pinta;
    let icono;

    cartaPinta === "Diamante"
      ? (icono = `<i class="fa-solid fa-diamond"></i>`)
      : cartaPinta === "Corazon"
      ? (icono = `<i class="fa-solid fa-heart"></i>`)
      : cartaPinta === "Espada"
      ? (icono = `&spades;`)
      : cartaPinta === "Trebol"
      ? (icono = ` &clubs;`)
      : (icono = "error");
    const carta = document.createElement("div");
    carta.classList.add("carta", cartaPinta.toLowerCase());
    carta.innerHTML =
      '<span class="carta-numero-pinta top">' +
      cartaNumero +
      icono +
      "</span>" + //por alguna razon los iconos de espada y trebol de fontawesome no cargan
      '<span class="carta-pinta">' +
      cartaNumero +
      "</span>" +
      '<span class="carta-numero-pinta bot">' +
      cartaNumero +
      icono +
      "</span>";
    document.body.appendChild(carta);
  }
  const cartas = mazoDeCartas();
  cartaRandom(cartas);

  console.log("Hello Rigo from the console!");
};
