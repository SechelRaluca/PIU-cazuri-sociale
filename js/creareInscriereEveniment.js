var evenimente = [{numeEveniment:'Eveniment 1',dataEveniment:'02/01/2018',oraEveniment:'12:00',locatieEveniment:'Cluj-Napoca',numarPersoaneEveniment:'10',transportEveniment:'Autocar',informatiiEveniment:'Evenimentul va avea loc pentru ajutarea bătrânilor',poza:"../images/caz1.jpg"}
/*,
					{'Eveniment 2','03/12/2018','10:00','Cluj-Napoca','8','Pe jos','Evenimentul va avea loc pentru ajutarea casei de copii',"../images/caz2.jpg"},
					{'Eveniment 3', '04/08/2018','17:00','Cluj-Napoca','5','Mașina','Evenimentul va avea loc pentru a duce rechizite copiilor',"../images/caz3.jpg"}*/];

					var nrEvenimente = 0;

function creareEveniment()
{
	var numeEveniment = document.getElementById('numeEveniment').value;
	var dataEveniment = document.getElementById('dataEveniment').value;
	var oraEveniment = document.getElementById('oraEveniment').value;
	var locatieEveniment = document.getElementById('locatieEveniment').value;
	var numarPersoaneEveniment = document.getElementById('numarPersoaneEveniment').value;
  	var transportEvenimentSelect = document.getElementById('transportEveniment');
	var transportEveniment = transportEvenimentSelect.options[transportEvenimentSelect.selectedIndex].text;
	var informatiiEveniment = document.getElementById('informatiiEveniment').value;
	
	validareNume();
	validareData();
	validareOra();
	validareLocatie();
	validareNumarPersoane();
	validareTransport();
		
	if (validareNume() && 
		validareData() &&
		validareOra() &&
		validareLocatie() &&
		validareNumarPersoane() && 
		validareTransport())
		
		{			
			evenimente[nrEvenimente] = {numeEveniment, dataEveniment, oraEveniment, locatieEveniment, numarPersoaneEveniment, transportEveniment, informatiiEveniment};
			nrEvenimente ++;
			 $('#modalAdaugaEveniment').modal('hide');
			 resetForm();
			 toastr.info('Eveniment creat cu succes!');
		}
		
}

function resetForm()
{
	document.getElementById('numeEveniment').value = "";
	document.getElementById('dataEveniment').value = "";
	document.getElementById('oraEveniment').value  = "";
	document.getElementById('locatieEveniment').value = "";
	document.getElementById('numarPersoaneEveniment').value = "";
	document.getElementById('transportEveniment').selectedIndex = 0;
	document.getElementById('informatiiEveniment').value  = "";
}
function validareNume()
{
	var numeEveniment = document.getElementById('numeEveniment').value;
	
	if (numeEveniment === "" || (!numeEveniment.replace(/\s/g, '').length))
	{
		document.getElementById('numeEveniment').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('numeEveniment').style.borderColor = "#d6d6d6";
	return true;
}

function validareData()
{
	var data = document.getElementById('dataEveniment').value;
	
	if (data === "")
	{
		document.getElementById('dataEveniment').style.borderColor = "red";
		
		return false;
	}
	
	var varData = new Date(data); 
	var azi = new Date();
	azi.setHours(0,0,0,0);
	
	if(varData <= azi) 
	{
		document.getElementById('dataEveniment').style.borderColor = "red";
		
		return false;
	}
	
	document.getElementById('dataEveniment').style.borderColor = "#d6d6d6";
	return true;
}

function validareOra()
{
	var ora = document.getElementById('oraEveniment').value;
		
	if (ora === "")
	{
		document.getElementById('oraEveniment').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('oraEveniment').style.borderColor = "#d6d6d6";
	return true;
}

function validareLocatie()
{
	var locatie = document.getElementById('locatieEveniment').value;
	
	if (locatie  === "" || (!locatie.replace(/\s/g, '').length))
	{
		document.getElementById('locatieEveniment').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('locatieEveniment').style.borderColor = "#d6d6d6";
	return true;
}

function validareNumarPersoane()
{
	var nrPersoane = document.getElementById('numarPersoaneEveniment').value;
	
	if (nrPersoane === "")
	{
		document.getElementById('numarPersoaneEveniment').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('numarPersoaneEveniment').style.borderColor = "#d6d6d6";
	return true;
}

function validareTransport()
{
	var transportEvenimentSelect = document.getElementById('transportEveniment');
	var transport = transportEvenimentSelect.options[transportEvenimentSelect.selectedIndex].text;	
			
	if (transport === "" )
	{
		document.getElementById('transportEveniment').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('transportEveniment').style.borderColor = "#d6d6d6";
	return true;
}

document.addEventListener("DOMContentLoaded", function() {
  
	document.getElementById('numeEveniment').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Numele trebuie introdus !");
            }
        };
	
	document.getElementById('dataEveniment').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Data trebuie introdusa si trebuie sa fie in viitor!");
            }
        };
		
	document.getElementById('oraEveniment').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Ora trebuie introdusa");
            }
        };
		
	document.getElementById('locatieEveniment').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Locatia trebuie introdusa !");
            }
        };
		
	document.getElementById('numarPersoaneEveniment').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Numarul persoanelor trebuie introdus !");
            }
        };
});

