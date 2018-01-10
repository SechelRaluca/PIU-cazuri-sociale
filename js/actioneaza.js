function validateSum(sumaDeDonat){
	var sumaDeDonatCazului = parseInt(document.getElementById(sumaDeDonat).value, 10);
	
	if(isNaN(parseInt(document.getElementById(sumaDeDonat).value, 10))) {
		toastr.error('Câmpul numeric trebuie completat!');
		document.getElementById(sumaDeDonat).focus();
		return false;
	}
	
	if(sumaDeDonatCazului <= 0){
		toastr.error('Introduceţi o valoare pozitivă nenulă!');
		document.getElementById(sumaDeDonat).value = "";
		document.getElementById(sumaDeDonat).focus();
		return false;
	}
	
	return true;
}

function validateLastName(nume){
	var lastName = document.getElementById(nume);
	if(lastName.value.search(/[^a-zA-Z]+/) === -1){
		if(lastName.value.length < 3) {
			toastr.error('Lungimea câmpului trebuie să fie mai mare sau egală cu 3!');
			lastName.focus();
			return false;
		}else{
			return true;
		}
	}else{
		toastr.error('Câmpul trebuie să conţină doar litere!');
		lastName.focus();
		return false;
	}
}

function validateFirstName(prenume){
	var firstName = document.getElementById(prenume);
	if(firstName.value.search(/[^a-zA-Z]+/) === -1){
		if(firstName.value.length < 3) {
			toastr.error('Lungimea câmpului trebuie să fie mai mare sau egală cu 3!');
			firstName.focus();
			return false;
		}else{
			return true;
		}
	}else{
		toastr.error('Câmpul trebuie să conţină doar litere!');
		firstName.focus();
		return false;
	}
}

function validatePhoneNumber(telefon){
	var phoneNumber = document.getElementById(telefon);
	if(!/^\d{4}\-\d{6}$/.test(phoneNumber.value)){
		toastr.error("Numarul de telefon nu respecta formatul nnnn-nnnnnn (4 - 6)");
		phoneNumber.focus();
		return false;
	}else{
		return true;
	}
}

function validateEmail(mail){
	var email = document.getElementById(mail);
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
		return true;
	}
	toastr.error("Adresa de email nu este validă!");
	email.focus();
	return false;
}

function donate(frecventa1, frecventa2, suma, nume, prenume, telefon, email, buton, popup) {
	var flag = 0;
	
	if(!validateSum(suma)) {
		flag = 1;
	}
	
	if(!validateLastName(nume)) {
		flag = 1;
	}
	
	if(!validateFirstName(prenume)) {
		flag = 1;
	}

	if(!validatePhoneNumber(telefon)) {
		flag = 1;
	}
	
	if(!validateEmail(email)) {
		flag = 1;
	}	
     
	if(!$(frecventa1).prop('checked') && !$(frecventa2).prop('checked')) {
		flag = 1;
	}
	
	if(flag == 1){
		toastr.error("Verificaţi câmpurile formularului şi completaţile corespunzător pentru a efectua donaţia!");
		return false;
	}else{
		$(buton).attr('data-target', popup);
		return true;
	}
}