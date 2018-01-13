var evenimente = [];
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
			 toastr.info('Eveniment creat cu succes cu succes!');
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
	
	if (nrPersoane === "" || parseInt(nrPersoane)<=0)
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

