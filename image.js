let saturate=document.getElementById('saturate');
let Contrast=document.getElementById('Contrast');
let Brightness=document.getElementById('Brightness');
let Sepia=document.getElementById('Sepia');
let Grayscale=document.getElementById('Grayscale');
let Blure=document.getElementById('Blure');
let hue_rotate =document.getElementById('hue_rotate');
let upload =document.getElementById('Upload');
let download =document.getElementById('download');
let imge =document.getElementById('imge');
const canvas =document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let resrt = document.querySelector('span');
let imgbox = document.querySelector('.imgbox');
function resetValue(){
  ctx.filter='none'
  saturate.value='100'
  Contrast.value='100'
  Brightness.value='100'
  Brightness.value='100'
  Sepia.value='0'
  Grayscale.value='0'
  Blure.value='0'
  hue_rotate.value='0'
  ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);
}


window.onload = function(){
    download.style.display ='none';
    resrt.style.display='none';
    imgbox.style.display='none';
}

upload.onchange = function(){
  resetValue()
  download.style.display = 'block';
  resrt.style.display = 'block';
  imgbox.style.display = 'block';
  let reader = new FileReader();
  reader.readAsDataURL(upload.files[0]);
  reader.onload=function(){
    imge.src = reader.result;
  }
  imge.onload = function (){
    canvas.width= imge.width;
    canvas.height = imge.height;
    ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);
    imge.style.display ='none'
  }
};
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>{
  filter.addEventListener('input', function(){
    ctx.filter =`
    saturate(${saturate.value}%)
    contrast(${Contrast.value}%)
    Brightness(${Brightness.value}%)
    Sepia(${Sepia.value}%)
    Grayscale(${Grayscale.value})
    Blur(${Blure.value}px)
    hue-rotate(${hue_rotate.value}deg)
    `
    ctx.drawImage(imge, 0, 0, canvas.width, canvas.height);
  })
})
download.onclick = function(){
  download.href = canvas.toDataURL()
}
