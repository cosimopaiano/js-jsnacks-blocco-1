// verifica corretto import script
console.log('me js is here');

/**
 *Snack 1
  L’utente inserisce due parole in successione, con due prompt.
  Il software stampa la parola più lunga.
  Utilizza una funzione per determinare e ritornare la parola più lunga.
*/

console.log('Jsnack 1')

//assegnazioni variabili
var par1 = prompt('inserisci la prima parola');
var par2 = prompt('inserisci la seconda parola');
console.log(par1);
console.log(par2);

//Il software stampa la parola più lunga.
var risultato = parolaLunga(par1, par2);

console.log('la pariola più lunga è: ' + risultato);

//function
function parolaLunga(p1, p2) {
  var res = '';

  if (p1.length > p2.length){
    res = p1;
  } else if (p1.length < p2.length) {
    res = p2;
  } else {
    res = 'le parole hanno la stessa lunghezza';
  }

  return res;
}


/**
 *Snack 2
  Snack 2: Inserisci un numero
  se è pari stampa il numero
  se è dispari stampa il numero successivo
*/

console.log('Jsnack 2')

var num = parseInt(prompt("Inserisci un numero"));

var risultato = pariSuccessivo(num);
console.log(risultato);


function pariSuccessivo(numero) {

  if(numero % 2 == 0) {
    return 'il numero scelto è pari:' + numero;
  }else{
    return 'Il numero ' + numero + ' da te scelto è dispari ' + ' Il numero successivo al tuo è: ' + (numero + 1);
  }

}


/**
 * JSnack 3
  Generatore di “nomi cognomi” casuali
  prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.
*/

console.log('Jsnack 3');

// Creo array nomi, cognomi e random
var nomi = ['Michele', 'Fabio', 'Roberto'];
var cognomi = ['Forghieri', 'Papagni', 'Marazzini'];
var random = [];

console.log ('Lista nomi: ' + nomi);
console.log ('Lista cognomi: ' + cognomi);
console.log ('Lista random: ' + random);

// Ciclo for per aggiungere invitati fake all'array vuoto
for (var i = 1; i <= 5; i++) {

  var generatoreNomiRandom = Math.floor(Math.random() * ((nomi.length - 1) - 0 + 1) + 0);
  var generatoreCognomiRandom = Math.floor(Math.random() * ((cognomi.length - 1) - 0 + 1) + 0);
  var listaFake = nomi[generatoreNomiRandom] + ' ' + cognomi[generatoreCognomiRandom];

  random.push(listaFake);
}

console.log(random);

/**
 *JSnack Bonus (non visto insieme e quindi assolutamente facoltativo)
 Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3)
 fai la somma di tutti gli elementi che sono in posizione dispari.
 Prova prima senza funzione e poi con funzione.
*/
