"use strict";

const $ = selector => document.querySelector(selector);

window.onload = () => {
    $('#input-temp').focus();
    $('#to-celsius').addEventListener('click', fahrToCeli);
    $('#to-fahrenheit').addEventListener('click', celiToFahr);
    $('#clear-inputs').addEventListener('click', clearInputs);
    $('#convert-temp-button').addEventListener('click', convert);

}

const toggleLableText = (topLableText, bottomLableText) => {
    $('#input-lable').textContent = topLableText;
    $('#output-lable').textContent = bottomLableText;
    clearInputs()
}

const fahrToCeli = () => {
    toggleLableText('Enter Temperature in Fahrenheit', 'Converted Temperature in Celsius');
}

const celiToFahr = () => {
    toggleLableText('Enter Temperature in Celsius', 'Converted Temperature in Fahrenheit');
}

const clearInputs = () => {
    $('#input-temp').value = '';
    $('#output-temp').value = '';
    $('#input-temp-validation').textContent = '';
    $('#input-temp').focus();
}

const convert = (toFahr) => {
    let tmpi = $('#input-temp').value;

    if (isNaN(tmpi)) {
        $('#input-temp-validation').textContent = `${tmpi} is not a number`;
        $('#output-temp').value = '';
    } else {
        $('#input-temp-validation').textContent = '';

        if ($('#to-celsius').checked) {
            $('#output-temp').value = (tmpi-32) * 5/9
        } else {
            $('#output-temp').value = tmpi * 9/5 + 32
        }
    }
}