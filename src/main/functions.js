const divMainFrase = document.querySelector('#divMainFrase');
const imgMainFrase = document.querySelector('#imgMainFrase');
const h2MainFrase = document.querySelector('#h2MainFrase');

const someText = document.createElement('p');
someText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ipsa magni, debitis fugit deserunt molestias! Quos dicta ipsam ratione modi odio repellat excepturi saepe quae tenetur, dolorum magni officiis?";

function hideMainDialog() {
    // FAZER ALGUMA FIRULA!

    imgMainFrase.style.display = 'none';
    h2MainFrase.style.display = 'none';

    writeSomeText();
}

function writeSomeText() {
    divMainFrase.appendChild(someText);
}

export {
    hideMainDialog
}