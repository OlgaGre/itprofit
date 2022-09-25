import {scroll} from './scroll';
import {parallax} from './parallax';
import {cursore} from './cursor'



document.addEventListener('wheel', scroll);
document.addEventListener('mousemove', parallax);
document.addEventListener('mousemove', cursore);