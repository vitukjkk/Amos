// DEFININDO ELEMENTOS

import { hideMainDialog } from "./functions.js";

// =========================
// MAIN
// =========================
const inputMainDialog = document.querySelector("#inputMainDialog");
const buttonMainDialog = document.querySelector("#buttonMainDialog");
const divMainFrase = document.querySelector('#divMainFrase');

const p = document.createElement('p');
p.textContent = "É necessário digitar algo! :)";
p.style.color = 'red';

buttonMainDialog.onclick = () => {
    if(inputMainDialog.value === "") return divMainFrase.appendChild(p);
    
    p.style.display = 'none';
    hideMainDialog();
}