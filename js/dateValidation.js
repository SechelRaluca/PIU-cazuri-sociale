function isValid(startDate, endDate) {
    if (startDate === "") {
        toastr.error('Introduceți o valoare pentru data de început');
        return false;
    } else if (endDate === "") {
        toastr.error('Introduceți o valoare pentru data de final');
        return false;
    } else if (startDate >= endDate) {
        toastr.error('Introduceți date valide! (început < final)');
        return false;
    } else {
        return true;
    }
}

