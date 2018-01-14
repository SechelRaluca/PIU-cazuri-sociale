var produse = [{nume:'Cutie de bijuterii',cantitate:'10',pret:'30',poza:"../images/produs1.jpg"},
				{nume:'Papusa',cantitate:'18',pret:'25',poza:"../images/produs2.jpg"},
				{nume:'Minioni',cantitate:'16',pret:'20',poza:"../images/produs3.jpg"},
				{nume:'Ceainic',cantitate:'15',pret:'18',poza:"../images/produs4.jpg"},
				{nume:'Colier',cantitate:'20',pret:'35',poza:"../images/produs3.jpg"},
				{nume:'Esarfa',cantitate:'15',pret:'30',poza:"../images/produs3.jpg"}];

var nrProduse = 6;
var produsSelectat;

var shoppingCartList = [{id:'0',cantitate:'0'},
						{id:'1',cantitate:'0'},
						{id:'2',cantitate:'0'},
						{id:'3',cantitate:'0'},
						{id:'4',cantitate:'0'},
						{id:'5',cantitate:'0'}];

function adaugareProdusInCos(event){

	produsSelectat = event.target.name;
	var inputIdcantitateIntrodusa = "cantitateIntrodusa"+produsSelectat;
	validareCantitate(inputIdcantitateIntrodusa);
	
}

function confirmareComanda()
{
	var n = validareNume();
	var t = validareTelefon();
		
	if (validareNume() && 
		validareTelefon())	
		{					
			resetForm();
			$('#modalPlata').modal('show');
			$('#modalAfisareCos').modal('hide');
			
		}		
}

function platesteComanda(){

	var valid = true;
	if (document.getElementById("numarCard").value.length != 19)
	{
		document.getElementById('numarCard').style.borderColor = "red";
		valid = false;
	}
	else
	{
		document.getElementById('numarCard').style.borderColor = "#777";
	}
	
	if (!validareData())
		valid = false;
		
	if (document.getElementById("numarVerificareCard").value.length != 3)
	{
		document.getElementById('numarVerificareCard').style.borderColor = "red";
		valid = false;
	}
	else
	{
		document.getElementById('numarVerificareCard').style.borderColor = "red";
	}
	
	if (valid)
	{
			$('#modalPlata').modal('hide'); 
			toastr.info('Plată efectuată cu succes!');
	}
		
}

function validareCantitate(inputId){
	
	var cantitate = document.getElementById(inputId).value;
	document.getElementById(inputId).value = "";
	if (cantitate === "" )
		toastr.error('Nu s-a introdus cantitatea dorita');
	else
		if (parseInt(cantitate) > produse[produsSelectat].cantitate )
			toastr.error('Nu exista cantitatea dorita');
		else
		{
			$('#modalAdaugăProdus').modal('show'); 
			produse[produsSelectat].cantitate = parseInt(produse[produsSelectat].cantitate) - parseInt(cantitate);
			shoppingCartList[produsSelectat].cantitate = parseInt(shoppingCartList[produsSelectat].cantitate) + parseInt(cantitate);
			document.getElementById("cantitateProdus"+produsSelectat).innerHTML = "Cantitate: " + produse[produsSelectat].cantitate + " <input type=\"number\" min=\"1\" class=\"form-control inputCantitate\" id=\"" +inputId + "\" placeholder=\"Cantitate dorita\">";
			
			var itemsCount = 0;
			
			for (var i = 0; i < shoppingCartList.length; i++) {
				if(parseInt(shoppingCartList[i].cantitate) > 0) {
					itemsCount++;
				}
			}
			
			document.getElementById("shoppingCartBadgeLabel").innerHTML = itemsCount;
		}
		
	
}


function afisareCosProduse() {
	if(parseInt(document.getElementById("shoppingCartBadgeLabel").innerHTML) > 0) {
		finalizareComanda();
	}
	else
	{
		toastr.error('Nu exista produse in cos');
	}
}

function finalizareComanda()
{
	$('#modalAdaugăProdus').modal('hide'); 
	 
	var i = 1;
	var produs = 0;
	var table = document.getElementById("tabelProduse");
		
	var rowCount = table.rows.length;
	for (var j = 1; j < rowCount; j++) {
		table.deleteRow(1);
	}

	var total = 0;
	for (produs=0;produs<6;produs++)
	{
		if (shoppingCartList[produs].cantitate > 0)
		{
			var row = table.insertRow(i);
			i++;
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = produs;
			cell2.innerHTML = produse[produs].nume;
			cell3.innerHTML = produse[produs].pret;
			cell4.innerHTML = shoppingCartList[produs].cantitate;
			cell5.innerHTML = shoppingCartList[produs].cantitate * produse[produs].pret;
			
			total += shoppingCartList[produs].cantitate * produse[produs].pret;
		}
	}
	
	var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.colSpan = 4;
	cell1.innerHTML = "TOTAL";
	cell2.innerHTML = total;
			
	
	$('#modalAfisareCos').modal('show');
}


function resetForm()
{
	document.getElementById('nume').value = "";
	document.getElementById('telefon').value = "";
}

document.addEventListener("DOMContentLoaded", function() {
  
	document.getElementById('nume').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Numele trebuie introdus !");
            }
        };
		
	document.getElementById('dataExpirare').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Data trebuie introdusă și să fie în viitor!");
            }
        };
		
				
	document.getElementById('numarVerificareCard').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("CVC trebuie introdus !");
            }
        };
	
	document.getElementById('shoppingCartDiv').onclick = function() {
		afisareCosProduse();
	}
});


function validateCardNumber(event) {
	var el = document.getElementById("numarCard");
	
	if(el.value.length == 19 && event.keyCode != 8)
	{
		event.preventDefault();
	}
	else if((event.keyCode >= 48 && event.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
		if(el.value.length == 4 || el.value.length == 9 || el.value.length == 14){
			el.value += '-';
		}
	}
	else if(event.keyCode != 8)
	{
		event.preventDefault();
	}
}

function validareData()
{
	var data = document.getElementById('dataExpirare').value;
	
	if (data === "")
	{
		document.getElementById('dataExpirare').style.borderColor = "red";
		
		return false;
	}
	
	var varData = new Date(data); 
	var azi = new Date();
	azi.setHours(0,0,0,0);
	
	if(varData <= azi) 
	{
		document.getElementById('dataExpirare').style.borderColor = "red";
		
		return false;
	}
	
	document.getElementById('dataExpirare').style.borderColor = "#d6d6d6";
	return true;
}

function validateCVC(event) {
	
	var el = document.getElementById("numarVerificareCard");
	if(el.value.length == 3 && event.keyCode != 8)
	{
		event.preventDefault();
	}
	else if((event.keyCode >= 48 && event.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
		//Good
	}
	else if(event.keyCode != 8)
	{
		event.preventDefault();
	}
}

function validareNume()
{
	var nume = document.getElementById('nume').value;
	
	if (nume === "" || (!nume.replace(/\s/g, '').length))
	{
		document.getElementById('nume').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('nume').style.borderColor = "#d6d6d6";
	return true;
}


function validareTelefon()
{
	var telefon = document.getElementById('telefon').value;
	
	if (telefon === "" || (!telefon.replace(/\s/g, '').length))
	{
		document.getElementById('telefon').style.borderColor = "red";
		return false;
	}
	
	if (telefon.length!=10)
	{
		document.getElementById('telefon').style.borderColor = "red";
		return false;
	}
	
	document.getElementById('telefon').style.borderColor = "#d6d6d6";
	return true;
}