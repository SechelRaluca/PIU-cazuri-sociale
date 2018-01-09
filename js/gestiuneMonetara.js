function checkSumInput(sumaCazDeAlocat, sumaCazDejaAlocata, buton, popup){
	var sumaTotala = parseInt(document.getElementById('suma').innerHTML, 10);
	var sumaAlocataCaz = parseInt(document.getElementById(sumaCazDeAlocat).value, 10);
	
	if(isNaN(parseInt(document.getElementById(sumaCazDeAlocat).value, 10))) {
		toastr.error('Câmpul numeric trebuie completat!');
		return false;
	}
	
	if(sumaAlocataCaz <= 0){
		toastr.error('Introduceţi o valoare pozitivă nenulă!');
		document.getElementById(sumaCazDeAlocat).value = "";
		return false;
	}
	
	if(sumaTotala < sumaAlocataCaz) {
		toastr.error('Nu sunt suficienţi bani în cont!');
		document.getElementById(sumaCazDeAlocat).value = "";
		return false;
	}else{
		$(buton).attr('data-target', popup);
		return true;
	}
}

function disablePopup(buton) {
	$(buton).attr('data-target', "");
}

function send(sumaCazDeAlocat, sumaCazDejaAlocata) {
	var sumaTotala = parseInt(document.getElementById('suma').innerHTML, 10);
	var sumaAlocataCaz = parseInt(document.getElementById(sumaCazDeAlocat).value, 10);
	
	var sumaTotalaAlocataCaz = sumaAlocataCaz;
	sumaTotalaAlocataCaz += parseInt(document.getElementById(sumaCazDejaAlocata).innerHTML, 10);
	document.getElementById(sumaCazDejaAlocata).innerHTML = sumaTotalaAlocataCaz;
	document.getElementById('suma').innerHTML = sumaTotala - sumaAlocataCaz;
	document.getElementById(sumaCazDeAlocat).value = "";
	toastr.info('Repartizare realizată cu succes!');
	
	return true;
}