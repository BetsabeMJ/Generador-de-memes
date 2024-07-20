// PRIMERO LAS VARIABLES:
// 1. BARRA DE NAVEGACIÓN (BOTONES: IMAGEN, TEXTO, MODO OSCURO)
const navButtons = document.getElementById('nav__buttons--container');
const imageButton = document.getElementById('image--button');
const textButton = document.getElementById('text--button');
const darkButton = document.getElementById('dark--mode--button');
const darkIcon = document.querySelector('.fa-solid.fa-lightbulb')
const lightButton = document.getElementById('light--mode--button')
const lightIcon = document.querySelector('.fa-regular.fa-lightbulb')

//Abrir editor de imagen con Botón imagen-header  EN DESKTOP
const openImageAside = (event) => {
  event.preventDefault();
  textAside.style.visibility = 'hidden';
  imageAside.style.visibility = 'visible';
}
imageButton.addEventListener('click', openImageAside);
//Abrir editor de texto con Botón imagen-header
const openTextAside = () => {
  imageAside.style.visibility = 'hidden';
  textAside.style.visibility = 'visible';
}
textButton.addEventListener('click', openTextAside)

//MEDIO FUNCIONA EL MODO OSCURO, PERO FALTA QUE LOS ASIDES SE PINTEN DE NEGRO Y EL FONDO DE LOS INPUST
//HICE UN MILLÓN DE FUNCIONES, PERO NO FUNCIONARON
const body = document.querySelector(".body");
const darkMode = document.querySelector('.dark-mode'); // esta es la clase de css, no el boton
const asides = document.querySelectorAll('aside');
const darkModeElements = document.querySelectorAll('.dark-mode');
//Cambio modo claro/ modo oscuro
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

// 2.  ÁREA DE  EDITOR (CAJA DE IMAGEN, TEXTOS Y BOTÓN DE DESCARGA)
const memeArea = document.getElementById('meme__area');
const memeTopText = document.getElementById('meme__top--text');
const memeBlackArea = document.getElementById('meme__black--area');//lugar donde va la foto
const memeBottomText = document.getElementById('meme__bottom--text');
const downloadButton = document.getElementById('download--button');
//descargar boton, lo copie del machete que nos dijo Lu
const downloadIcon = document.querySelector('.fa-solid .fa-download');
const descargarMeme = () => {
  domtoimage.toBlob(memeArea).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
    })
}
downloadButton.addEventListener('click', descargarMeme)

//  3. ASIDE CON FILTROS Y CARGO DE IMAGEN
const imageAside = document.getElementById('image__aside');
const closeIcon = document.querySelector('.fa-circle-xmark');
const formImage = document.getElementById('image__form'); //FORM que encierra los inputs en aside imagen
const urlInput = document.getElementById('input__url--container');
const imagePreview = document.getElementById('image-preview');
const uploadImage = document.getElementById('upload__image--container');
urlInput.addEventListener('input', (event) => {
  event.target.value;
  const url = urlInput.value;
  memeBlackArea.style.backgroundImage = `url("${url}")`;
  memeBlackArea.style.backgroundPosition = 'center';
});

// Sección de color y estilos en ASIDE
const inputBgColor = document.getElementById('background--color');
const colorSpan = document.getElementById('color--span');
const selectStyle = document.getElementById('select--style');

inputBgColor.addEventListener('input',(event) => {
  event.target.value;
  const changeBgColorImage = inputBgColor.value;
  memeBlackArea.style.backgroundColor = changeBgColorImage;
  colorSpan.innerText = changeBgColorImage;
});

//cambiar el mezclado
const blendModeImage = (event) => {
  event.target.value;
  memeBlackArea.style.backgroundBlendMode = selectStyle.value;
}
selectStyle.addEventListener('change', blendModeImage);

//sección de filtros:
const inputBrightness = document.getElementById('input__brightness');
const inputOpacity = document.getElementById('input__opacity');
const inputContrast = document.getElementById('input__contrast');
const inputBlur = document.getElementById('input__blur');
const inputGreys = document.getElementById('input__grays');
const inpusSepia = document.getElementById('input__sepia');
const inputHue = document.getElementById('input__hue');
const inputSaturate = document.getElementById('input__saturate');
const inputNegative = document.getElementById('input__negative');

//YA CASI FUNCIONAN TODOS. PERO NO CONSERVA LOS VALORES, MODIFICA UNO POR UNO 
inputBrightness.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `brightness(${inputBrightness.value}%)`;
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
  memeBlackArea.style.filter = `grayscale(${inputGreys.value}%)`;
})

inpusSepia.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `sepia(${inpusSepia.value}%)`;
})

inputHue.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `hue-rotate(${inputHue.value}deg)`;
})

inputSaturate.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `saturate(${inputSaturate.value}%)`;
})

inputNegative.addEventListener('input', (event) => {
  event.target.value;
  memeBlackArea.style.filter = `invert(${inputNegative.value})`;
})

//boton de restabler
const restoreButton = document.getElementById('restore--button');

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputBrightness.value = '100';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputOpacity.value = '100';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputContrast.value = '100';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputBlur.value = '0';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputGreys.value = '0';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inpusSepia.value = '0';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputHue.value = '0';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputSaturate.value = '100';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputNegative.value = '0';
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputBgColor.value = '#ffffff';
  colorSpan.innerText = changeBgColorImage;
});

restoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  memeBlackArea = selectStyle.value = 'unset';
});

//4. ASIDE DEL TEXTO
const textAside = document.getElementById('text__aside'); //todo el aside texto
const topTextInput = document.getElementById('top__text--input');
const removeTopText = document.getElementById('remove__top__text');
const bottomTextInput = document.getElementById('bottom__text--input');
const removeBottomText = document.getElementById('remove__bottom__text');

textButton.addEventListener('click', () => {
  imageAside.style.visibility = 'hidden';
  textAside.style.visibility = 'visible';
});

const quitarTopText = () => {
  if (removeTopText.checked) {
    memeTopText.classList.add('hidden');
  } else {
    memeTopText.classList.remove('hidden');
  }
}
removeTopText.addEventListener('click', quitarTopText);

const quitarBottomText = () => {
  if (removeBottomText.checked) {
    memeBottomText.classList.add('hidden');
  } else {
    memeBottomText.classList.remove('hidden');
  }
}
removeBottomText.addEventListener('click', quitarBottomText)

//Top text del meme
topTextInput.addEventListener('input', (event) => {
  event.target.value;
  const cambiarTopText = topTextInput.value;
  memeTopText.innerHTML = cambiarTopText;
});

//Bottom text del meme
bottomTextInput.addEventListener('input', (event) => {
  event.target.value;
  const cambiarBottomText = bottomTextInput.value;
  memeBottomText.innerHTML = cambiarBottomText;
});

//input de fuentes
const fonts = document.getElementById('fonts__style');

const chooseFonts = (event) => {
  event.target.value;
  memeTopText.style.fontFamily = fonts.value;
  memeBottomText.style.fontFamily = fonts.value;
}
fonts.addEventListener('change', chooseFonts);

//inputs de tamaño de texto
const fontSize = document.getElementById('font__size');

const tamanioDeLetra = (event) => {
  event.target.value;
  memeTopText.style.fontSize = `${fontSize.value}px`;
  memeBottomText.style.fontSize = `${fontSize.value}px`;
}
fontSize.addEventListener('input', tamanioDeLetra)

//botones e íconos de alieado
const leftText = document.getElementById('left__text--btn');
const leftIcon = document.querySelector('.fa-solid .fa-align-left');
const centerText = document.getElementById('center__text--btn');
const centerIcon = document.querySelector('.fa-solid .fa-align-center');
const justifyText = document.getElementById('justify__text--btn');
const justifyIcon = document.querySelector('.fa-solid .fa-align-justify');
const rightText = document.getElementById('right__text--btn');
const rightIcon = document.querySelector('.fa-solid .fa-align-right');

leftText.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.textAlign = 'left';
  memeBottomText.style.textAlign = 'left';
});

centerText.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.textAlign = 'center';
  memeBottomText.style.textAlign = 'center';
});

justifyText.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.textAlign = 'justify';
  memeBottomText.style.textAlign = 'justify';
});

rightText.addEventListener('click', (event) => {
  event.preventDefault();
  memeTopText.style.textAlign = 'right';
  memeBottomText.style.textAlign = 'right';
});

//inputs de color y fondo de textos
const textColor = document.getElementById('text__color');
const textColorSpan = document.getElementById('color__text--span');
console.log(textColorSpan)
const bgColorText = document.getElementById('text__background');
const bgColorSpan = document.getElementById('bkg__color--span');

//Para cambiar el color de los textos del meme  
textColor.addEventListener('input',(event) => {
  event.target.value;
  const cambiarTextColor = textColor.value;
  memeTopText.style.color = cambiarTextColor;
  memeBottomText.style.color = cambiarTextColor;
  textColorSpan.innerText = cambiarTextColor;

});

//para cambiar el bg de donde van los textos en el meme
bgColorText.addEventListener('input', (event) => {
  event.target.value;
  const cambiarBgColor = bgColorText.value;
  memeTopText.style.backgroundColor = cambiarBgColor;
  memeBottomText.style.backgroundColor = cambiarBgColor;
  //const spanColor = bgColorText.value;
  bgColorSpan.innerText = cambiarBgColor;
});

//checkbox para quitar el fondo de texto
const removeBgTransparent = document.getElementById('transparent__bacground');

const quitarBgTransparent = () => {
  if (removeBgTransparent.checked) {
    memeTopText.style.backgroundColor = 'transparent';
    memeBottomText.style.backgroundColor = 'transparent';
  } else {
    memeTopText.style.backgroundColor = `${bgColorText.value}`;
    memeBottomText.style.backgroundColor = `${bgColorText.value}`;
  }
}
removeBgTransparent.addEventListener('click', quitarBgTransparent);

//inputs para el contorno
const noneOutline = document.getElementById('none__outline');
const clearOutline = document.getElementById('clear__outline');
const darkOutline = document.getElementById('dark__outline');

const withoutLine = (event) => {
  event.preventDefault();
  memeTopText.style.textShadow = 'none';
  memeBottomText.style.textShadow = 'none';
}
noneOutline.addEventListener('click', withoutLine);

const softOutline = (event) => {
  event.preventDefault();
  memeTopText.style.textShadow = '2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 1px 1px 2px #000000';
  memeBottomText.style.textShadow = '2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 1px 1px 2px #000000';
}
clearOutline.addEventListener('click', softOutline);

const hardOutline = (event) => {
  event.preventDefault();
  memeTopText.style.textShadow = '4px 1px 9px rgba(0,0,0,0.87)';
  memeBottomText.style.textShadow = '4px 1px 9px rgba(0,0,0,0.87)';
}
darkOutline.addEventListener('click', hardOutline);


//input de espaciado
const spaceLetter = document.getElementById('space__letter');

const spaceBetweenLetter = (event) => {
  event.target.value;
  memeTopText.style.padding = `${spaceLetter.value}3px`;
  memeBottomText.style.padding = `${spaceLetter.value}3px`;
}
spaceLetter.addEventListener('input', spaceBetweenLetter)

//input de interlineado  no funciona
const spaceline = document.getElementById('spaceline');

const spaceBetweenLines = (event) => {
  event.target.value;
  memeTopText.style.lineHeight = `${spaceline.value}`;
  memeBottomText.style.lineHeight = `${spaceline.value}`;
}
spaceline.addEventListener('input', spaceBetweenLines);
