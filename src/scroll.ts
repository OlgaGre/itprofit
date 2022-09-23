let screens = document.getElementsByClassName("screen");

export function scroll() {
  
  console.log(screens)
  for (let i = 0; i < screens.length; i++) {
    if (!screens[i].classList.contains("scroll-left")) {
      if (screens[i].classList.contains("scroll-right")) {
        screens[i].classList.remove("scroll-right");
      }
      screens[i].classList.add("scroll-left");
      if (screens[i].classList.contains("display-none")) {
        screens[i].classList.remove("display-none");
      }
    } else {
      screens[i].classList.remove("scroll-left");
      screens[i].classList.add("scroll-right");
    }
  }
}
