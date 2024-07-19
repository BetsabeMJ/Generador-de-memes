//console.log("Hola!");
// PRIMERO LAS VARIABLES:
// 1. BARRA DE NAVEGACIÓN (BOTONES: IMAGEN, TEXTO, MODO OSCURO)
const navButtons = document.getElementById('nav__buttons--container'); //barra de botones (los tres)
const imageButton = document.getElementById('image--button');
const textButton = document.getElementById('text--button');
const darkButton = document.getElementById('dark--mode--button');
const darkIcon = document.querySelector('.fa-solid.fa-lightbulb')
// const lightButton = document.getElementById('light--mode--button')
const lightIcon = document.querySelector('.fa-regular.fa-lightbulb')
//const hidden = document.querySelector('.hidden');

//YA FUNCIONAN LOS DOS BOTONES TEXTO E IMAGEN  NO TOCAR
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

// const openImageAside = (event) => {
//   event.preventDefault();
//   if (textAside.style.display = 'block') {
//     imageAside.style.display = 'block'
//   } else {
//     body.classList.replace('dark-mode', 'body')
//     darkButton.innerText = 'Modo oscuro'
//   }
// }
// imageButton.addEventListener('click', openImageAside);



//////////    MODO OSCURO /////////////////
//console.log(darkMode);

// darkMode.addEventListener("click", () => {
//   document.classList.add(".dark__mode");
// });

//MEDIO FUNCIONA EL MODO OSCURO, PERO FALTA QUE LOS ASIDES SE PINTEN DE NEGRO Y EL FONDO DE LOS INPUST
const body = document.querySelector(".body");
const darkMode = document.querySelector('.dark-mode'); // esta es la clase de css, no el boton
const asides = document.querySelectorAll('aside');

//                       AQUI:
// const cambiarModoOscuro = () => {
//   document.body.classList.remove('light-theme')
//   document.body.classList.add('dark-theme')
// }

// const cambiarModoClaro = () => {
//   document.body.classList.remove('dark-theme')
//   document.body.classList.add('light-theme')
// }


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
//console.log(memeTopText)
const memeBlackArea = document.getElementById('meme__black--area');//lugar donde va la foto
const memeBottomText = document.getElementById('meme__bottom--text');
//console.log(memeBottomText)
const downloadButton = document.getElementById('download--button');

//descargar boton, lo copie del machete que nos dijo Lu
const downloadIcon = document.querySelector('.fa-solid .fa-download');

//YA FUNCIONA. NO TOCAR
const descargarMeme = () => {
  domtoimage.toBlob(memeArea).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
    })
}
downloadButton.addEventListener('click', descargarMeme) // sí funciona, es el código del del repo de Lu


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
const imagePreview = document.getElementById('image-preview');
const uploadImage = document.getElementById('upload__image--container');

//función para cerrar el paner de imagen en mobile //////////////////////////////////////////////////////////////////////////
// const closeImageAside = () => {
//   //event.target.value;
//   imageAside.classList.add('hidden');
// }
// closeIcon.addEventListener('click', closeImageAside)

// const closeImageAside = () => {
//   if() {
//     imageAside.style.display = 'none';

//   } else 
//   {

//   }
// }
// closeIcon.addEventListener('click', closeImageAside)


// const urlMeme = (event) => {
//   event.target.value;
//   const cargarImage = memeBlackArea;
//   cargarImage.style.backgroundImage = `url("${urlInput.value}")`;
// }
// urlInput.addEventListener('change', urlMeme);



// urlInput.addEventListener('input', (event) => {
//   event.target.value;
//   const url = urlInput.value;
//   imagePreview.src = url;
// });

//YA FUNCIONA. NO TOCAR
//el evento se tiene que cambiar a input para que haga el cambio en tiempo real
urlInput.addEventListener('input', (event) => {
  event.target.value;
  const url = urlInput.value;
  memeBlackArea.style.backgroundImage = `url("${url}")`;
  memeBlackArea.style.backgroundPosition = 'center';
});


// urlInput.addEventListener('input', (event) => {
//   event.target.value;
//   const url = urlInput.value;
//   const img = document.createElement('img');
//   img.src = url;
//   memeBlackArea.innerHTML = ''; // clear the div
//   memeBlackArea.appendChild(img);
// });



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



// restoreButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   inputBgColor.value = 'transparent';
// });
// restoreButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   selectStyle.value = 'ninguno';
// });




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

//YA CASI FUNCIONAN TODOS. PERO NO CONSERVA LOS VALORES, MODIFICA UNO POR UNO 
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
  memeBlackArea.style.filter = `blur(${event.target.value}px)`;//clase 19/06 min 2:12:12
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


//YA FUNCIONA. NO TOCAR
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
const formText = document.getElementById('text__form'); //FORM que ncierra los inputs de txto
const topTextInput = document.getElementById('top__text--input');
const removeTopText = document.getElementById('remove__top__text');
const bottomTextInput = document.getElementById('bottom__text--input');
const removeBottomText = document.getElementById('remove__bottom__text');

// //para cerar text aside   nooooo funciona

// const closeTextAside = (event) => {
//   event.target.value;
//   textAside.classList.add('hidden');
// }
// closeIcon.addEventListener('click', closeTextAside);

//Se supone que es para que aparzce el aside de texto cuando está en mobile, no funciona
textButton.addEventListener('click', () => {
  imageAside.style.visibility = 'hidden';
  textAside.style.visibility = 'visible';
});

//para quitar texto de arriba, no funcionaba porque estaba poniento removeTopTex === checked y el checked va junto, separado con un punto
const quitarTopText = () => {
  if (removeTopText.checked) {
    memeTopText.classList.add('hidden');
  } else {
    memeTopText.classList.remove('hidden');// aquí se le tiene que poner remove, porque estoy removiendo el hidden que le puse en el of
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


//YA FUNCIONAN LOS DOS. NO TOCAR
//Top text del meme   ya funcionan los dos. NO TOCAR
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




//input de fuentes YA FUNCCIONA, NO TOCAR
const fonts = document.getElementById('fonts__style');

const chooseFonts = (event) => {
  event.target.value;
  memeTopText.style.fontFamily = fonts.value;
  memeBottomText.style.fontFamily = fonts.value;
}
fonts.addEventListener('change', chooseFonts);

  






//inputs de tamaño de texto    YA FUNCIONA. NO TOCAR
const fontSize = document.getElementById('font__size');

// const tamanioDeLetra = (event) => {
//   event.target.value;
//   memeTopText.style.fontSize = `${tamanioDeLetra.value}`
//   memeBottomText.style.fontSize = `${tamanioDeLetra.value}`
// }

// fontSize.addEventListener('change', tamanioDeLetra)

const tamanioDeLetra = (event) => {
  event.target.value;
  memeTopText.style.fontSize = `${fontSize.value}px`;
  memeBottomText.style.fontSize = `${fontSize.value}px`;
}
fontSize.addEventListener('input', tamanioDeLetra)


// fontSize.addEventListener('change',(event) => {
//   event.target.value;
//   const tamanioDeLetra = fontSize.value;
//   memeTopText.style.fontSize = tamanioDeLetra;
//   memeBottomText.style.fontSize = tamanioDeLetra;
// });





//botones e íconos de alieado
const leftText = document.getElementById('left__text--btn');
const leftIcon = document.querySelector('.fa-solid .fa-align-left');
const centerText = document.getElementById('center__text--btn');
const centerIcon = document.querySelector('.fa-solid .fa-align-center');
const justifyText = document.getElementById('justify__text--btn');
const justifyIcon = document.querySelector('.fa-solid .fa-align-justify');
const rightText = document.getElementById('right__text--btn');
const rightIcon = document.querySelector('.fa-solid .fa-align-right');

// leftText.addEventListener('click', (event) => {
//   event.target.value;
//   const cambiarTextAling = memeTopText;
//   cambiarTextAling = memeTopText.style.textAlign = 'left';
//   cambiarTextAling = memeBottomText.style.textAlign = 'left';

// })

// const cambiarTextAling = () => {
//   memeTopText.style.textAlign = 'left';
//   memeBottomText.style.textAlign = 'left';
// }
// leftText.addEventListener('click', cambiarTextAling)

//POR FIN SALIÓ AGRAGANDO EL PREVENT PARA QUE NO ME ENVÍE A LA PÁGINA PRINCIPAL
//NO TOCAR
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



// rightText.addEventListener('click', () => {
//   //event.target.value;
//   cambiarTopText.style.textAlign = 'right';
//   memeBottomText.style.textAlign= 'right';
// });


//inputs de color y fondo de textos
const textColor = document.getElementById('text__color');
const textColorSpan = document.getElementById('color__text--span');//span qe tiene el #00000, pero creo que lo voy a quitar
console.log(textColorSpan)
const bgColorText = document.getElementById('text__background');
const bgColorSpan = document.getElementById('bkg__color--span');
//console.log(bgColorText)
//const trasparentBgText = document.getElementById('transparent__bacground');

//YA CASI FUNCIONA. FALTA MODIFICAR EL SPAN, QUE CAMBIE A LA PAR DEL COLOR
//PAra cambiar el color de los textos del emem  
textColor.addEventListener('input',(event) => {
  event.target.value;
  const cambiarTextColor = textColor.value;
  memeTopText.style.color = cambiarTextColor;
  memeBottomText.style.color = cambiarTextColor;
  textColorSpan.innerText = cambiarTextColor;

});

//Para que cambie también en span
// textColorSpan.addEventListener('input',(event) => {
//   event.target.value;
//   const cambiarSpanText = textColor.value;
  
// });

//para cambiar el bg de donde van los textos en el meme
bgColorText.addEventListener('input', (event) => {
  event.target.value;
  const cambiarBgColor = bgColorText.value;
  memeTopText.style.backgroundColor = cambiarBgColor;
  memeBottomText.style.backgroundColor = cambiarBgColor;
  //const spanColor = bgColorText.value;
  bgColorSpan.innerText = cambiarBgColor;
});






//checkbox para quitar el fondo de texto  Creo que tengo que hacer primero el fondo transparente para tener algo que quitar aquí
//no pude hacer que el memeBlackArea que es el contenedor de la foto abarcara todo el espacio de los textos
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


// removeBgTransparent.addEventListener('change', () => {
//   if (removeBgTransparent.checked) {
//     memeTopText.style.backgroundColor = 'transparent';
//     memeTopText.style.position = 'absolute';
//     memeTopText.style.top = '0';
//     memeBottomText.style.backgroundColor = 'transparent';
//     memeBottomText.style.position = 'absolute';
//     memeBottomText.style.bottom = '0';
//   } else {
//     memeTopText.style.backgroundColor = `${bgColorText.value}`;
//     memeTopText.style.position = 'static';
//     memeBottomText.style.backgroundColor = `${bgColorText.value}`;
//     memeBottomText.style.position = 'static';
//   }
// });







// const quitarTopText = () => {
//   if (removeTopText.checked) {
//     memeTopText.classList.add('hidden');
//   } else {
//     memeTopText.classList.remove('hidden');// aquí se le tiene que poner remove, porque estoy removiendo el hidden que le puse en el of
//   }
// }
// removeTopText.addEventListener('click', quitarTopText);


//inputs para el contorno  YA FUNCIONAN. NO TOCAR
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
  // '2px 2px 6px rgba(0,0,0,0.58)';
  memeBottomText.style.textShadow = '4px 1px 9px rgba(0,0,0,0.87)';
  //'2px 2px 6px rgba(0,0,0,0.58)';
}
darkOutline.addEventListener('click', hardOutline);


//input de espaciado   no funviona, lo único que hace es hacer grande el espacio del <p> donde está el texto, no espacia las letras
//creo que el input está mal, no hace nada cuando le pongo otro número
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
