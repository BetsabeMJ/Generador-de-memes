//console.log("Hola!");
// PRIMERO LAS VARIABLES:
// 1. BARRA DE NAVEGACIÓN (BOTONES: IMAGEN, TEXTO, MODO OSCURO)
const navButtons = document.getElementById('nav__buttons--container'); //barra de botones (los tres)
const imageButton = document.getElementById('image--button');
const textButton = document.getElementById('text--button');
const changeColor = document.getElementById('dark--mode--button');


//////////    MODO OSCURO /////////////////
//console.log(darkMode);

// darkMode.addEventListener("click", () => {
//   document.classList.add(".dark__mode");
// });

//MEDIO FUNCIONA EL MODO OSCURO, PERO FALTA QUE LOS ASIDES SE PINTEN DE NEGRO Y EL FONDO DE LOS INPUST
const bodyColor = document.querySelector(".body");
const darkMode = document.querySelector('.dark-mode') // esta es la clase de css, no el boton
const asides = document.querySelectorAll('aside')


const cambiarColor = () => {
  if (bodyColor.classList.contains('body')) {
    bodyColor.classList.replace('body', 'dark-mode')
    changeColor.innerText = 'Modo claro'
  } else {
    bodyColor.classList.replace('dark-mode', 'body')
    changeColor.innerText = 'Modo oscuro'
  }
}

//let darkIcon = document.querySelector('.fa-solid fa-lightbulb')

changeColor.addEventListener('click', cambiarColor);
//asides.addEventListener()



// 2.  ÁREA DE  EDITOR (CAJA DE IMAGEN, TEXTOS Y BOTÓN DE DESCARGA)
const memeArea = document.getElementById('meme__area'); // es una section y abarca la pantalla negra y los textos
const memeTopText = document.getElementById('meme__top--text');
const memeBlackArea = document.getElementById('meme__black--area');
const memeBottomText = document.getElementById('meme__bottom--text0');
const downloadButton = document.getElementById('download--button');
const downloadIcon = document.querySelector('.fa-solid fa-download');


//  3. ASIDE CON FILTROS Y CARGO DE IMAGEN
// icono x de cierre, url, cargar imagen
const imageAside = document.getElementById('image__aside'); // todo el asede de editar imagen
const closeIcon = document.querySelector('.fa-regular fa-circle-xmark');
const imageTittle = document.getElementById('image__tittle'); //TÍTULO de aside imagen, creo que no lo necestio
const formImage = document.getElementById('image__form'); //FORM que encierra los inputs en aside imagen
const urlAndUploadImageTittle = document.getElementById('url_and_upload__image--container');//CAJA que contiene el input url, la carga de imagen y el título URL, creo que no lo voy a necesitar
const urlUploadContainer = document.getElementById('url__upload--container'); //CAJITA que encierra los inputs url y cargar imagen
const urlInput = document.getElementById('input__url--container');
const uploadImage = document.getElementById('upload__image--container');

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
const brightness = document.getElementById('input__brightness');
const opacity = document.getElementById('input__opacity');
const contrast = document.getElementById('input__contrast');
const blur = document.getElementById('input__blur');
const greys = document.getElementById('input__grays');
const sepia = document.getElementById('input__sepia');
const hue = document.getElementById('input__hue');
const saturate = document.getElementById('input__saturate');
const negative = document.getElementById('input__negative');  

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


