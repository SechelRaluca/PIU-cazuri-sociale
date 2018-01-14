function adaugaCazSocial() {
	var numeCazSocial = document.getElementById('numeCazSocial').value.length;
	var detaliiCazSocial = document.getElementById('detaliiCazSocial').value.length;
	
	if(numeCazSocial > 0 && detaliiCazSocial > 0){
		toastr.info('Cazul social a fost adăugat cu succes!');
		document.getElementById('numeCazSocial').value = "";
		document.getElementById('detaliiCazSocial').value = "";
		$('#modalAdaugaCazSocial').modal('hide');
		return true;
	}
	else {
		toastr.error('Completați câmpurile.');
		return false;
	}
}