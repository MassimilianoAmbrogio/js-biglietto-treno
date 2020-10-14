/**
 *  JS Calculate ticket
 */

 // Domande al cliente 
var numkm = prompt('Quanti chilometri vuoi percorrere?');

var passengerAge = prompt('Quanti anni hai?'); 

// Calcolo prezzo biglietto treno
var kmprice = 0.21;

var prezzoKm = numkm * kmprice;

console.log('numero km: ', numkm);

console.log('Anni passeggero: ', passengerAge);

console.log('Prezzo viaggio intero: ', prezzoKm.toFixed(2) + '€');

document.getElementById('Totalprice').innerHTML = prezzoKm + '€';

// Sconto per minorenni
if (passengerAge < 18) {
    console.log('Sconto biglietto del 20% per minorenne');

    var scontoViaggio = (prezzoKm / 100 * 20);
   
    console.log('Prezzo viaggio minorenne: ', prezzoViaggio.toFixed(2) + '€');

    var prezzoViaggio = (prezzoKm - scontoViaggio);

    console.log('Sconto viaggio minorenne: ', scontoViaggio.toFixed(2) + '€');
}

else {
    var prezzoViaggio = (prezzoKm).toFixed(2);
}

// Sconto per over 65
if (passengerAge > 65) {
    console.log('Sconto biglietto del 40% per over 65');

    var scontoViaggio = (prezzoKm / 100 * 40);
     
    console.log('Prezzo viaggio over 65: ', prezzoViaggio.toFixed(2) + '€');

    var prezzoViaggio = (prezzoKm - scontoViaggio);

    console.log('Sconto viaggio over 65: ', scontoViaggio.toFixed(2) + '€');
    
    document.getElementById('Totalprice1').innerHTML = prezzoKm + '€'; 
}

 else {
    console.log('Sei maggiorenne ma non over 65, non ricevi lo sconto sul bigletto');
    
    var prezzoViaggio = (prezzoKm).toFixed(2);
 }
