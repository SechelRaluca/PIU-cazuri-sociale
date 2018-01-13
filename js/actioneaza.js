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
		toastr.error("Numărul de telefon nu respectă formatul nnnn-nnnnnn (4-6)");
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
		$(buton).attr('data-dismiss', 'modal');
		return true;
	}
}

function disablePopup(buton) {
	$(buton).attr('data-target', "");
			$(buton).attr('data-dismiss', "");
}

function resetFieldsDonatePopup(frecventa1, frecventa2, suma, nume, prenume, telefon, email){	
	$(frecventa1).attr('checked',false);
	$(frecventa2).attr('checked',false);
	document.getElementById(suma).value="";
	document.getElementById(nume).value="";
	document.getElementById(prenume).value="";
	document.getElementById(telefon).value="";
	document.getElementById(email).value="";
}

function validateCardNumber(numarCard){
	var cardNumber = document.getElementById(numarCard);
	if(!/^\d{4}\ \d{4}\ \d{4}\ \d{4}$/.test(cardNumber.value)){
		toastr.error("Numărul cardului nu respectă formatul nnnnn-nnnn-nnnnn-nnnn (4-4-4-4)");
		cardNumber.focus();
		return false;
	}else{
		return true;
	}
}

function validateCardVerificationNumber(numarVerificareCard){
	var cardVerificationNumber = document.getElementById(numarVerificareCard);
	if(!/^\d{3}$/.test(cardVerificationNumber.value)){
		toastr.error("Numărul de verificare a cardului nu respectă formatul nnn (3)");
		cardVerificationNumber.focus();
		return false;
	}else{
		return true;
	}
}

function isValid(expirationDate) {

	var cardExpirationDate = document.getElementById(expirationDate).value;
	var today = new Date().toISOString().slice(0,10);
	
    if (cardExpirationDate === "") {
        toastr.error('Introduceți o valoare pentru data expirării cardului!');
		document.getElementById(expirationDate).focus();
        return false;
    } else if (cardExpirationDate < today) {
        toastr.error('Reverificaţi data scrisă pe card sau cardul dumneavoatră nu mai este valabil.');
		document.getElementById(expirationDate).focus();
        return false;
    } else {
        return true;
    }
}

function resetFieldsCardPopup(cardNumber, expirationDate, cardVerificationNumber){	
	document.getElementById(cardNumber).value="";
	document.getElementById(expirationDate).value="";
	document.getElementById(cardVerificationNumber).value="";
}

function pay(cardNumber, expirationDate, cardVerificationNumber, buton) {
	var flag = 0;
	
	if(!validateCardNumber(cardNumber)) {
		flag = 1;
	}
	
	if(!isValid(expirationDate)) {
		flag = 1;
	}
	
	if(!validateCardVerificationNumber(cardVerificationNumber)) {
		flag = 1;
	}
	
	if(flag == 1){
		toastr.error("Verificaţi câmpurile formularului şi completaţile corespunzător pentru a efectua plata!");
		return false;
	}else{
		$(buton).attr('data-dismiss', 'modal');
		resetFieldsCardPopup(cardNumber, expirationDate, cardVerificationNumber);
		toastr.info('Donaţie efectuată cu succes!');
		return true;
	}
}
