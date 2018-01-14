function adaugaCazSocial() {
	var numeCazSocial = document.getElementById('numeCazSocial').value.length;
	var detaliiCazSocial = document.getElementById('detaliiCazSocial').value.length;
	
	if(numeCazSocial > 0 && detaliiCazSocial > 0){
		toastr.success('Cazul social a fost adăugat cu succes!');
		$('#modalAdaugaCazSocial').modal('hide');
		return true;
	}
	else {
		toastr.error('Completați câmpurile.');
		return false;
	}
}