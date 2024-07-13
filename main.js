//console.log("Hola!");
//console.log(darkMode);

// darkMode.addEventListener("click", () => {
//   document.classList.add(".dark__mode");
// });

//MEDIO FUNCIONA EL MODO OSCURO, PERO FALTA QUE LOS ASIDES SE PINTEN DE NEGRO Y EL FONDO DE LOS INPUST
const bodyColor = document.querySelector(".body");
const darkMode = document.querySelector('.dark-mode')


const cambiarColor = () => {
  if (bodyColor.classList.contains('body')) {
    bodyColor.classList.replace('body', 'dark-mode')
    changeColor.innerText = 'Modo claro'
  } else {
    bodyColor.classList.replace('dark-mode', 'body')
    changeColor.innerText = 'Modo oscuro'
  }
}

let changeColor = document.getElementById('dark--mode--button')
let darkIcon = document.querySelector('.fa-solid fa-lightbulb')

changeColor.addEventListener('click', cambiarColor);
