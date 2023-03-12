const canvas = document.querySelector('#game');
const game =  canvas.getContext('2d');
let canvasSize;
let elementsSize;
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);


//Funcion para ajustar el tamaño en canvas y sus elementos 
function setCanvasSize(){
      //Permitir que siempre se asigne el mismo cuadrado y sea responsivo
      
      if(window.innerHeight > window.innerWidth){
          canvasSize = window.innerWidth*0.8;
      }else{
           canvasSize = window.innerHeight * 0.8;
      }
  
      canvas.setAttribute('width', canvasSize);
      canvas.setAttribute('height', canvasSize);
  
      //hacer que los elementos de adentro se ajusten al tamaño de canvas
       elementsSize = canvasSize / 10;
       startGame();
}

function startGame(){
    
    //Colocar la funte y hacerla responsiva
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';
    //Conseguir nuestro mapa (sin espacios en columnas)
    const map= maps[0];
    const mapRows= map[0].trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));

    for(let row=1; row<=10; row++){
        for(let col=1; col<=10; col++){
            game.fillText(emojis[mapRowCols[row-1][col-1]], elementsSize * col, elementsSize * row);
        }
    }
    
}
