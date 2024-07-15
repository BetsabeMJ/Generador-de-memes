//console.log("Hola!");
// PRIMERO LAS VARIABLES:
// 1. BARRA DE NAVEGACIÓN (BOTONES: IMAGEN, TEXTO, MODO OSCURO)
const navButtons = document.getElementById('nav__buttons--container'); //barra de botones (los tres)
const imageButton = document.getElementById('image--button');
const textButton = document.getElementById('text--button');
const darkButton = document.getElementById('dark--mode--button');
const darkIcon = document.querySelector('.fa-solid fa-lightbulb')
// const lightButton = document.getElementById('light--mode--button')
const lightIcon = document.querySelector('.fa-regular fa-lightbulb')
//const hidden = document.querySelector('.hidden');


//////////    MODO OSCURO /////////////////
//console.log(darkMode);

// darkMode.addEventListener("click", () => {
//   document.classList.add(".dark__mode");
// });

//MEDIO FUNCIONA EL MODO OSCURO, PERO FALTA QUE LOS ASIDES SE PINTEN DE NEGRO Y EL FONDO DE LOS INPUST
const body = document.querySelector(".body");
const darkMode = document.querySelector('.dark-mode'); // esta es la clase de css, no el boton
const asides = document.querySelectorAll('aside');

const cambiarColor = () => {
  if (body.classList.contains('body')) {
    body.classList.replace('body', 'dark-mode')
    darkButton.innerText = 'Modo claro'
  } else {
    body.classList.replace('dark-mode', 'body')
    darkButton.innerText = 'Modo oscuro'
  }
}
darkButton.addEventListener('click', cambiarColor);

//////////    BOTON DE IMAGEN   /////////////////
// const showImageAside = () => {
// if (body.classList.contains('textButton')) {
//   body.classList.replace('textButton', 'imageButton')

// } else {
//   textButton  .classList.add('hidden')
// }
// }
// textButton.addEventListener('click', showImageAside);



//////////    BOTON DE TEXTO   /////////////////
// const showTextAside = () => {
// if () {

// } else {
//   textButton.classList.add('hidden')
// }
// }
// textButton.addEventListener('click', showTextAside);



// 2.  ÁREA DE  EDITOR (CAJA DE IMAGEN, TEXTOS Y BOTÓN DE DESCARGA)
const memeArea = document.getElementById('meme__area'); // es una section y abarca la pantalla negra y los textos
const memeTopText = document.getElementById('meme__top--text');
const memeBlackArea = document.getElementById('meme__black--area');//lugar donde va la foto
const memeBottomText = document.getElementById('meme__bottom--text0');
const downloadButton = document.getElementById('download--button');
const downloadIcon = document.querySelector('.fa-solid .fa-download');


//  3. ASIDE CON FILTROS Y CARGO DE IMAGEN
// icono x de cierre, url, cargar imagen
const imageAside = document.getElementById('image__aside'); // todo el asede de editar imagen
//console.log(imageAside)
const closeIcon = document.querySelector('.fa-circle-xmark');
//console.log(closeIcon)
const imageTittle = document.getElementById('image__tittle'); //TÍTULO de aside imagen, creo que no lo necestio
const formImage = document.getElementById('image__form'); //FORM que encierra los inputs en aside imagen
const urlAndUploadImageTittle = document.getElementById('url_and_upload__image--container');//CAJA que contiene el input url, la carga de imagen y el título URL, creo que no lo voy a necesitar
const urlUploadContainer = document.getElementById('url__upload--container'); //CAJITA que encierra los inputs url y cargar imagen
const urlInput = document.getElementById('input__url--container');
const uploadImage = document.getElementById('upload__image--container');



// const closeImageAside = () => {
//   console.log('Click en el icono de cierre');
//   imageAside.classList.add('hidden');
// }
// closeIcon.addEventListener('click', closeImageAside);


// imageAside.addEventListener('click', ()=>{
//     imageAside.style.display ='none';
// });


// Sección de color y estilos en ASIDE
const colorStyleControler = document.getElementById('color__style__controller'); // CAJA que tiene los input color y desplegalbe con título FONDO
const colorControlerContainer = document.getElementById('color__controller--container');//CAJITA que tiene los iputs de color y aclarar, creo lo voy a tener que quitar
const inputBgColorLabel = document.getElementById('input__background__color--container');//LABEL del imputo fondo, creo que también se quitará
const inputBgColor = document.getElementById('background--color');
const colorSpan = document.getElementById('color--span'); //span que dice #ffffff, se tiene que cambiar para que tome el color que eligen
const selectStyle = document.getElementById('select--style');

//sección de filtros:
const filtersContainer = document.getElementById('filters--container');//ABARCA desde título hasta último filtro
const inputFiltersContainer = document.getElementById('inputs__container');//CAJA que contiene a los inputs de filtro
const inputBrightness = document.getElementById('input__brightness');
const inputOpacity = document.getElementById('input__opacity');
const inputContrast = document.getElementById('input__contrast');
const inputBlur = document.getElementById('input__blur');
const inputGreys = document.getElementById('input__grays');
const inpusSepia = document.getElementById('input__sepia');
const inputHue = document.getElementById('input__hue');
const inputSaturate = document.getElementById('input__saturate');
const inputNegative = document.getElementById('input__negative');

inputBrightness.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `brightness(${inputBrightness.value}%)`;//le tuve que agregar el símbolo % porque no me tomaba paso a paso la degradación y los px no funcionaban 
})

inputOpacity.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `opacity(${inputOpacity.value}%)`;
})

inputContrast.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `contrast(${inputContrast.value}%)`;
})

inputBlur.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `blur(${event.target.value}px)`;
})

inputGreys.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `grayscale(${inputGreys.value}%)`;//Ya funciona, vi en youtube que el valor greys no existe, hay que cambiarlo a greyscale
})

inpusSepia.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `sepia(${inpusSepia.value}%)`;
})

inputHue.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `hue-rotate(${inputHue.value}deg)`;//se tiene que poner hue-rotate y usa deg, no usa % ni px
})

inputSaturate.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `saturate(${inputSaturate.value}%)`;
})

inputNegative.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `invert(${inputNegative.value})`;//a este se le pone invert y no tiene valores %, px o deg, se deja solito
})



//boton de restabler
const restoreButton = document.getElementById('restore--button');


//4. ASIDE DEL TEXTO
const textAside = document.getElementById('text__aside'); //todo el aside texto
const formText = document.getElementById('text__form'); //FORM que ncierra los inputs de txto
const topTextInput = document.getElementById('top__text--input');
const removeTopText = document.getElementById('remove__top__text');
const bottomTextUnput = document.getElementById('bottom__text--input');
const removeBottomText = document.getElementById('remove__bottom__text');

//input de fuentes
const fonts = document.getElementById('fonts__style');

//inputs de alineación de texto
const fontSize = document.getElementById('font__size');

//botones e íconos de alieado
const leftText = document.getElementById('left__text--btn');
const leftIcon = document.querySelector('.fa-solid fa-align-left');
const centerText = document.getElementById('center__text--btn');
const centerIcon = document.querySelector('.fa-solid fa-align-center');
const justifyText = document.getElementById('justify__text--btn');
const justifyIcon = document.querySelector('.fa-solid fa-align-justify');
const rightText = document.getElementById('right__text--btn');
const rightIcon = document.querySelector('.fa-solid fa-align-right');

//inputs de color y fondo de textos
const textColor = document.getElementById('text__color');
const textColorSpan = document.getElementById('color__text--span');//span qe tiene el #00000, pero creo que lo voy a quitar
const bgColorText = document.getElementById('color');
const trasparentBgText = document.getElementById('transparent__bacground');

//inputs para el contorno
const noneOutline = document.getElementById('none__outline');
const clearOutline = document.getElementById('clear__outline');
const darkOutline = document.getElementById('dark__outline');

//input de espaciado
const spaceline = document.getElementById('spaceline');

//input de interlineado
const spaceLetter = document.getElementById('space__letter');


