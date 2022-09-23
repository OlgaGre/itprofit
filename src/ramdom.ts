export function random(x: number) {
  let randomPercent: number = Math.floor(Math.random() * (15 - 10) + 10);
  

return (x / 100) * randomPercent;
 
}

//  function coordinates(screen) {
// if (screen != undefined) {
//   screen.addEventListener("mousemove", function (event) {
//   //  random(event.clientX, event.clientY);
//   });
// }

// }
