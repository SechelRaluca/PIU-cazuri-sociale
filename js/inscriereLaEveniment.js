var evenimente = [{numeEveniment:'Eveniment 1',dataEveniment:'02/01/2018',oraEveniment:'12:00',locatieEveniment:'Cluj-Napoca',numarPersoaneEveniment:'10',transportEveniment:'Autocar',informatiiEveniment:'Evenimentul va avea loc pentru ajutarea bătrânilor',poza:"../images/eveniment1.jpg"},
				{numeEveniment:'Eveniment 2',dataEveniment:'03/12/2018',oraEveniment:'10:00',locatieEveniment:'Cluj-Napoca',numarPersoaneEveniment:'8',transportEveniment:'Pe jos',informatiiEveniment:'Evenimentul va avea loc pentru ajutarea casei de copii',poza:"../images/eveniment2.jpg"},
				{numeEveniment:'Eveniment 3',dataEveniment:'04/08/2018',oraEveniment:'17:00',locatieEveniment:'Cluj-Napoca',numarPersoaneEveniment:'5',transportEveniment:'Mașina',informatiiEveniment:'Evenimentul va avea loc pentru a duce rechizite copiilor',poza:"../images/eveniment3.png"}];

var nrEvenimente = 3;
var evenimentSelectat;

function inscriereEveniment()
{
	validareNumeParticipant();
	validarePrenumeParticipant();
	validareTelefonParticipant();
		
	if (validareNumeParticipant() && 
		validarePrenumeParticipant() &&
		validareTelefonParticipant())	
		{			
			var nrPers = parseInt(evenimente[evenimentSelectat].numarPersoaneEveniment);
			nrPers --;
			evenimente[evenimentSelectat].numarPersoaneEveniment = nrPers;
			
			resetForm();
			$('#numarPersoaneEvenimentInfo').text("Număr persoane: " + evenimente[evenimentSelectat].numarPersoaneEveniment);
						 toastr.info('V-ați înscris cu succes la eveniment!');
			$('#modalParticipaLaEveniment').modal('hide');
			
		}
		
}

function resetForm()
{
	document.getElementById('numeParticipant').value = "";
	document.getElementById('prenumeParticipant').value = "";
	document.getElementById('telefonParticipant').value  = "";
}

document.addEventListener("DOMContentLoaded", function() {
  
	document.getElementById('numeParticipant').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Numele trebuie introdus !");
            }
        };
		
	document.getElementById('prenumeParticipant').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Prenumele trebuie introdus !");
            }
        };
		
	document.getElementById('telefonParticipant').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Telefonul trebuie introdus și trebuie să conțină 10 cifre !");
            }
        };
		
});

function validareNumeParticipant()
{
	var numeParticipant = document.getElementById('numeParticipant').value;
	
	if (numeParticipant === "" || (!numeParticipant.replace(/\s/g, '').length))
	{
		document.getElementById('numeParticipant').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('numeParticipant').style.borderColor = "#d6d6d6";
	return true;
}

function validarePrenumeParticipant()
{
	var prenumeParticipant = document.getElementById('prenumeParticipant').value;
	
	if (prenumeParticipant === "" || (!prenumeParticipant.replace(/\s/g, '').length))
	{
		document.getElementById('prenumeParticipant').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('prenumeParticipant').style.borderColor = "#d6d6d6";
	return true;
	
}

function validareTelefonParticipant()
{
	var telefonParticipant = document.getElementById('telefonParticipant').value;
	
	if (telefonParticipant === "" || (!telefonParticipant.replace(/\s/g, '').length))
	{
		document.getElementById('telefonParticipant').style.borderColor = "red";
		return false;
	}
	
	if (telefonParticipant.length!=10)
	{
		document.getElementById('telefonParticipant').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('telefonParticipant').style.borderColor = "#d6d6d6";
	return true;
}

function fillModalData(event)
{
	evenimentSelectat = event.target.name;

	var modal = $('#modalParticipaLaEveniment');
	 
	modal.find('.modal-title').text(evenimente[evenimentSelectat].numeEveniment);
	
	$('#imgModalEveniment').attr("src", evenimente[evenimentSelectat].poza);
	$('#dataEvenimentInfo').text("Data: " + evenimente[evenimentSelectat].dataEveniment);
	$('#oraEvenimentInfo').text("Ora: " + evenimente[evenimentSelectat].oraEveniment);
	$('#transportEvenimentInfo').text("Transport: " + evenimente[evenimentSelectat].transportEveniment);
	$('#locatieEvenimentInfo').text("Locație: " + evenimente[evenimentSelectat].locatieEveniment);
	$('#numarPersoaneEvenimentInfo').text("Număr persoane: " + evenimente[evenimentSelectat].numarPersoaneEveniment);
	$('#informatiiEvenimentInfo').text( evenimente[evenimentSelectat].informatiiEveniment);
}
