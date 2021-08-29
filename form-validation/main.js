const email = document.querySelector('#email');
const zip = document.getElementById('zip');
const log = document.querySelector('.err-log');
const country = document.querySelector('#country');
const pass1 = document.querySelector('#password1');
const pass2 = document.querySelector('#password2');

email.addEventListener('focusout', () => {
    if (email.validity.patternMismatch || email.validity.typeMismatch) {
        email.setCustomValidity('Enter a valid email address');
    } else {
        email.setCustomValidity('');
    }
});

country.addEventListener('focusout', () => {
    if (country.validity.valueMissing) {
        country.setCustomValidity('Enter a country');
        log.innerHTML = country.validationMessage;
    } else {
        country.setCustomValidity('');
        log.innerHTML = country.validationMessage;
    }
});

zip.addEventListener('focusout', () => {
    if (zip.validity.patternMismatch) {
        zip.setCustomValidity('Zip code can only be numbers.');
        log.innerHTML = zip.validationMessage;
    } else {
        zip.setCustomValidity('');
        log.innerHTML = zip.validationMessage;
    }
});

pass2.addEventListener('input', () => {
    if (pass2.value !== pass1.value) {
        pass2.setCustomValidity('Passwords do not match');
        log.innerHTML = pass2.validationMessage;
    } else {
        pass2.setCustomValidity('');
        log.innerHTML = pass2.validationMessage;
    }
});
