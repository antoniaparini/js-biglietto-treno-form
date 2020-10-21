// TRAIN TICKET

// ELEMENTI INPUT FORM
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-tratta');
var formEta = document.getElementById('form-eta');
var prezzo = formKm.value * 0.21;

// BOTTONI
var formGenera = document.getElementById('form-genera');
var formAnnulla = document.getElementById('form-annulla');


// ELEMENTI BIGLIETTO
var biglNome = document.getElementById('ticket-nome');
var biglCosto = document.getElementById('ticket-costo');
var biglOfferta = document.getElementById('ticket-offerta');
var biglCarrozza = document.getElementById('ticket-carrozza');
var biglCodiceCp = document.getElementById('ticket-codice');


// Eventi Click Genera
formGenera.addEventListener('click',
  function() {


    // Costo biglietto normale
    var prezzo = formKm.value * 0.21;
    offerta = 'Prezzo standard';
    console.log(prezzo);

    // Sconti
    if (formEta.value == 'min') {
      prezzo = prezzo - ( prezzo * 20 / 100);
      var offerta = 'Sconto minorenni';
    } else if (formEta.value == 'over') {
      prezzo = prezzo - ( prezzo * 40 / 100);
      var offerta = 'Sconto over 65';
    }

    //Numero Carrozza
    var carrozza = Math.floor(Math.random() * 10) + 1;

    //CodiceCP
    var codiceCp = Math.floor(Math.random() * 1000) + 1;


    // Genera contenuto biglietto
    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
    biglOfferta.innerHTML = offerta;
    biglCarrozza.innerHTML = carrozza;
    biglCodiceCp.innerHTML = codiceCp;
  }
)


// Eventi Click Annulla
formAnnulla.addEventListener('click',
  function() {
    // RESET FORM
    formNome.value = '';
    formKm.value = '';
    formEta.value = 'mag';

    // RESET TICKET
    biglNome.innerHTML = '';
    biglCosto.innerHTML = '';

    // NASCONDI TICKET
    var ticketPrev = document.getElementById('ticket-preview');
    ticketPrev.className = 'hidden';
  }
)
