/**
 * Realice un programa donde un personaje abra 10 cofres, 
 * los cofres pueden contener: 10 de oro, 2 pociones de vida, nada.
 *    a. Indique el oro final recolectado
 *    b. Indique cuantas pociones de Vida obtuvo
 *    c. Indique cuantos cofres vacíos hubo
 *    d. Cada vez que abre un cofre indique qué saco
 */

const cofre = ["10 de oro", "2 pociones de vida", "vacio"], cantidad_cofres = 10;

let cantidad_oro = 0, cantidad_pociones = 0, cantidad_cofre_vacios = 0, confirmar = confirm('¿Desea Abrir 10 cofres?');

while (confirmar) {
    for (let index = 0; index < cantidad_cofres; index++) {
        let posicion = numeroRandom(0, 2);
        resultado_cofre = cofre[posicion];
        alert(`En el Cofre N°${index + 1}, le toco: ${resultado_cofre}`);
        switch (resultado_cofre) {
            case "10 de oro":
                cantidad_oro = cantidad_oro + 10;
                break;
            case "2 pociones de vida":
                cantidad_pociones = cantidad_pociones + 2;
                break;
            default:
                cantidad_cofre_vacios = cantidad_cofre_vacios + 1;
                break;
        }
    }
    alert(`Cantidad de oro total: ${cantidad_oro}\n Cantidad de pociones: ${cantidad_pociones}\n Cantidad de Cofres Vacios: ${cantidad_cofre_vacios}`);
    confirmar = confirm('¿Desea Abrir otros 10 cofres?');
}
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}