
let cursorWrite : HTMLElement | null = document.getElementById( `cursor`);
let client = document.getElementById("carousel-wrapper") as HTMLElement;


let coorX: number;
let coorY: number;

client.addEventListener("mousemove", function (event) {
  coorX = event.clientX;
  coorY = event.clientY;
});

export function cursore() {

  // let styleLeft: number = +cursor.left.substring(0, cursor.left.length - 2);
  // let styleTop: number = +cursor.top.substring(0, cursor.top.length - 2);
 if (cursorWrite != undefined) {
  cursorWrite.style.top = `${coorY}px`;
  cursorWrite.style.left = `${coorX}px`;
 }
  
}