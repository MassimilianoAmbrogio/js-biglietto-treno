/**
 *  JS Calculate ticket
 */

 // Domande al cliente 
var distance = parseInt(prompt('Quanti chilometri vuoi percorrere?') );

var age = parseInt(prompt('Quanti anni hai?') ); 

// Calcolo prezzo biglietto treno
var price = 0.21 * distance;

var message;

// Sconto minorenni
if (age < 18) {
    price -= price * 0.2;
    message = 'Hai diritto allo sconto Minorenni del 20%!<br>Il prezzo è: ' + price.toFixed(2)
        + '€';
}

// Sconto over 65
else if (age > 65) {
    price -= price * 0.2;
    message = 'Hai diritto allo sconto Senior del 40%!<br>Il prezzo è: ' + price.toFixed(2)
        + '€';
}

 else {
    message = 'Il prezzo è: ' + price.toFixed(2) + '€';
}
 
document.getElementById('total').innerHTML = message; 
