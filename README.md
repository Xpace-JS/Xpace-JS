# Xpace JS (Documentacion para contribuyentes) 👨‍💻📚
Libreria javascript que permite optimizar tiempo de trabajo 

## Acerca de la libreria 💻
Xpace JS es una libreria con la que puedes optimizar tu tiempo de trabajo utilizando algunas plantillas de programas pre-creados basados en problemas reales para poder modificar y utilizar, simplemente importando clases y funciones en el archivo principal en el que estas trabajando tu codigo.
<br>
Esta libreria funciona con ECMASCRIPT 6 (ES6), Babel v7 y Webpack, lo cual le permite trabajar con modularidad, asi que es recomendable tener conocimientos previos de dichas tecnologias si no se esta ocupando ningun framework para el desarrollo de aplicaciones. <br>
Si se esta utilizando alguna libreria o framework que permite utilizar modularidad sin problemas, simplemente es necesario importar el archivo xpace.js para comenzar a trabajar

## Como funciona? 📕
La mayoria de las ocasiones, los desarrolladores en periodos de desarrollo recurren a la creacion de clases y funciones para poder resolver los problemas planteados. Xpace JS se hace cargo de ese paso, proveyendo una diversa cantidad de clases y funciones pre-creadas modificables listas para importar en el archivo principal de desarrollo. <br>
por ejemplo:  <br>

>**Problema:** Se dara una bonificacion a los empleados de una empresa dependiendo de su cargo (primer cargo-$2500, segundo cargo-$1000, tercer cargo-$800) y su periodo en la empresa.<br>(Si el empleado lleva menos de cinco años se le dara un bono del 10%, si lleva entre 5 y 10 años se le dara un bono del 15% y si lleva mas de 10 años se le dara un bono del 25%)<br>

Para la solucion de este problema se puede optar por la siguiente:
```javascript
    let position;
    let period;

    const  position1 = 2500;
    const  position2 = 1000;
    const  position3 = 800;
    let    bonus = 0;

    switch (position) {
        case 1:
                if (period < 5 ) {
                bonus = parseFloat(position1 * 0.1);
                return bonus;
                }
                if (period > 4 && period < 11 ) {
                    bonus = parseFloat(position1 * 0.15);
                    return bonus;
                }
                if (period > 10 ) {
                    bonus = parseFloat(position1 * 0.20);
                    return bonus;
                }
                break;
        case 2:
                if (period < 5 ) {
                bonus = parseFloat(position2 * 0.1);
                return bonus;
                }
                if (period > 4 && period < 11 ) {
                bonus = parseFloat(position2 * 0.15);
                return bonus;
                }
                if (period > 10 ) {
                bonus = parseFloat(position2 * 0.20);
                return bonus;
                }
                break;
        case 3:
                if (period < 5 ) {
                bonus = parseFloat(position3 * 0.1);
                return bonus;
                }
                if (period > 4 && period < 11 ) {
                bonus = parseFloat(position3 * 0.15);
                return bonus;
                }
                if (period > 10 ) {
                bonus = parseFloat(position3 * 0.20);
                return bonus;
                }    
                break;

        default:    
            bonus = 0;
            return bonus;
    }
```
Xpace JS provee una solucion mas sencilla:
```javascript

import {X_Bonus} from '../xpace';
// 1 = primer puesto (sueldo de $2500)
// 7 = años de permanencia en la empresa
 var bonificacion = X_Bonus(1,7);
 console.log(bonificacion);

```
## Como es posible esto? 🤯
Simple, Xpace JS en su gran biblioteca tiene incluida una funcion ideal que cumple con los requisitos del problema anterior, pero... **Que tal si quiero cambiar variables o agregar mas codigo?**, No hay problema, Xpace JS es un software de codigo abierto, por lo que cualquier desarrollador tiene la libertad de modificar su codigo para que se adapte mejor a sus necesidades.

# Como comenzar a utilizarlo? ⌨🖥
Si tu estas desarrollando una aplicacion web con algun framework que trabaje con modularidad y javascript, simplemente debes agregar entre todos los archivos a xpace.js y comenzar a importar las clases o funciones que necesitas utilizar para tu codigo. <br>
Pero si tu no estas haciendo uso de ninguna libreria o framework de desarrollo, tendras que configurar tu entorno de desarrollo con babel y webpack para poder incorporar la modularidad en tu aplicacion, ya que aun existen navegadores aun no son capaces de reconocer ES6 de manera eficiente.

# Que clase de problemas busca solucionar Xpace JS?




