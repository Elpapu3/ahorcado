
const replaceAt = (string, character, index) => {
  return string.substring(0, index) + character + string.substring(index + character.length);
};


const pala = ['perro', 'gato', 'conejo', 'vaca', 'tigre', 'gallina', 'cerdo','pez','pinguino','pollo','rinoceronte'];
const secrepala = pala[Math.floor(Math.random() * pala.length)];
let guiones = secrepala.replace(/./g, "_ ");
document.querySelector('.guiones').innerHTML = guiones;


let errorCont = 0;
const maxErrores = 6; 
const frameWidth = 195;

const chequear = () => {
  const input = document.querySelector('input');
  const letter = input.value.toLowerCase();
  input.value = ''; 
  input.focus();

  if (!letter || letter.length !== 1) return; 

  let error = true;

  for (let i = 0; i < secrepala.length; i++) {
    if (secrepala[i] === letter) {
      guiones = replaceAt(guiones, letter, i * 2);
      error = false;
    }
  }

  document.querySelector('.guiones').innerHTML = guiones;

  if (error) {
    errorCont++;
    document.querySelector('.ima').style.backgroundPosition = `-${errorCont * frameWidth}px 0`;

    if (errorCont >= maxErrores) {
      document.querySelector('.col').innerHTML += `<h2 class="info">PERDISTE<br>La palabra era: ${secrepala}</h2>`;
      document.querySelector('button').disabled = true;
      input.disabled = true;
    }
  }

  if (!guiones.includes("_")) {
    document.querySelector('.col').innerHTML += `<h2 class="info">GANASTE</h2>`;
    document.querySelector('button').disabled = true;
    input.disabled = true;
  }
};

document.querySelector('button').addEventListener('click', chequear);
