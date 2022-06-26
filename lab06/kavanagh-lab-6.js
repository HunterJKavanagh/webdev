"use strict";

const $ = selector => document.querySelector(selector);

window.onload = () => {
    $('#input-temp').focus();
    $('#to-celsius').addEventListener('click', fahrToCeli);
    $('#to-fahrenheit').addEventListener('click', celiToFahr);
}

const toggleLableText = (topLableText, bottomLableText) => {
    $('#input-lable').textContent = topLableText;
    $('#output-lable').textContent = bottomLableText;
}

const fahrToCeli = () => {
    toggleLableText('Enter Temperature in Fahrenheit', 'Converted Temperature in Celsius');
}

const celiToFahr = () => {
    toggleLableText('Enter Temperature in Celsius', 'Converted Temperature in Fahrenheit');
}