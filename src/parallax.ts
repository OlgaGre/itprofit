let ellipses = document.getElementsByClassName("ellipse");
let client = document.getElementById("carousel-wrapper") as HTMLElement;;
import {random} from './ramdom';
      
let coorX: number 
let coorY: number

document.addEventListener('mousemove', function(event) {
	coorX= event.clientX 
  coorY= event.clientY;
});



export function parallax() {
//  console.log(random(coorX, coorY))
for (let i = 0; i < ellipses.length; i++) {
let el =  window.getComputedStyle(document.getElementById( `ellipse${i+1}` ) as HTMLDivElement);
let elWrite: HTMLElement | null =  document.getElementById( `ellipse${i+1}` );

if (el != undefined && elWrite != undefined) {

 let styleLeft:number  = +el.left.substring( 0, el.left.length - 2 );
 let styleTop:number  = +el.left.substring( 0, el.left.length - 2 );
// elWrite.style.left =  `${random(styleLeft) + styleLeft }px`; 
elWrite.style.top =  `${random( styleTop) + styleTop }px`; 
if(coorX < styleLeft){
  elWrite.style.left =  `${styleLeft - random(styleLeft)  }px`; 
} else{
  elWrite.style.left =  `${ styleLeft + random(styleLeft)  }px`; 
}
if (coorY < styleTop ) {
  elWrite.style.top =  `${styleTop - random( styleTop)  }px`; 
} else{
  elWrite.style.top =  `${random( styleTop) + styleTop    }px`; 
}
  
}
// document.getElementById( `ellipse${i+1}` : string )?.style.left += 10px;
}

}