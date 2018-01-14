function isValid(nume, prenume, email, adresa, telefon) {

    var regx_adresa = /^[a-zA-Z\s\d\/.]{3,30}\d[a-zA-Z\s\d\/]*$/;
    var regx_telefon=/^[0-9]\d{9}$/;
    var regx_mail = /^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$/;

    if (nume === "" || nume.length<3) {
        toastr.error('Introduceți o valoare valida pentru nume');
        return false;
    }
    if (prenume === "" || prenume.length<3) {
        toastr.error('Introduceți o valoare valida pentru prenume');
        return false;
    }
    if(email.search(regx_mail)==-1)
    {
        toastr.error('Introduceți o valoare valida pentru email');
        return false;
    }
    if(adresa.search(regx_adresa)==-1) {
        toastr.error('Introduceți o valoare valida pentru adresa');
        return false;
    }
    if(telefon.search(regx_telefon)==-1) {
        toastr.error('Introduceți o valoare valida pentru telefon');
        return false;
    }else {
        return true;
    }
}
