function validateSum(sum){
	if(isNaN(sum.value)) {
		sum.style.backgroundColor = "#FF0000";
		sum.focus();
		return false;
	}else{
		sum.style.backgroundColor = "#FFFFFF";
		return true;
	}
}

function validateSumInput(sumaCaz){
	var sum = document.getElementById(sumaCaz);
	sum.onchange = function(){
		validateSum(sum);
	}
}

function send(sumaCazDeAlocat, sumaCazDejaAlocata) {
	var sumaTotala = parseInt(document.getElementById('suma').innerHTML, 10);
	var sumaAlocataCaz = parseInt(document.getElementById(sumaCazDeAlocat).value, 10);
	
	if(sumaTotala - sumaAlocataCaz < 0) {
		toastr.error('Nu sunt suficienţi bani în cont!');
		document.getElementById(sumaCazDeAlocat).value = "";
		return false;
	}else {
		var sumaTotalaAlocataCaz = sumaAlocataCaz;
		if(!isNaN(parseInt(document.getElementById(sumaCazDejaAlocata).innerHTML, 10))) {
			sumaTotalaAlocataCaz += parseInt(document.getElementById(sumaCazDejaAlocata).innerHTML, 10);
		}
		document.getElementById(sumaCazDejaAlocata).innerHTML = sumaTotalaAlocataCaz;
		document.getElementById('suma').innerHTML = sumaTotala - sumaAlocataCaz;
		document.getElementById(sumaCazDeAlocat).value = "";
		toastr.info('Repartizare realizată cu succes!');
		return true;
	}
}