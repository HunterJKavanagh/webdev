"use strict";

const dobPattern = /^((0[13578]|1[02])\/31\/(18|19|20)[0-9]{2})|((01|0[3-9]|1[0-2])\/(29|30)\/(18|19|20)[0-9]{2})|((0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-8])\/(18|19|20)[0-9]{2})|((02)\/29\/(((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.edu$/;
const zipPattern = /^\d{5}-\d{4}$/;
const coursePattern = /^[A-Z&]{2,4} \d{3}$/;

$(document).ready(function(){
    const course = $('#course');
    const email = $('#email');
    const zip = $('#zip');
    const dob = $('#dob');
    const validMsg = $('#valid-msg')

    let isValid;

    // Add invalid formatting to a textbox  
    const makeInvalid = (textbox, message) => {
        textbox.next().text(message);
        textbox.addClass('is-invalid');
        textbox.removeClass('is-valid');
        isValid = false;
    }
    // Remove invalid formatting to a textbox
    const makeValid = (textbox) => {
        textbox.next().text('');
        textbox.addClass('is-valid');
        textbox.removeClass('is-invalid');
    }

    // Validates all Fields when pressed
    $('#validate-btn').on('click', () => {
        isValid = true;

        // Validate Course Field
        if (course.val().trim() === '') {
            makeInvalid(course, "Enter a Course the has a subject and course number e.g. CSC 150");
        } else if (coursePattern.test(course.val().trim()) == false) {
            makeInvalid(course, "Enter a Course the has a subject and course number e.g. CSC 150");
        } else {
            makeValid(course);
        }

        // Validate Email Field
        if (email.val().trim() === '') {
            makeInvalid(email, "Enter a Email that ends in eud e.g. name@school.edu");
        } else if (emailPattern.test(email.val().trim()) == false) {
            makeInvalid(email, "Enter a Email that ends in eud e.g. name@school.edu");
        } else {
            makeValid(email);
        }

        // Validate Zip Code Field
        if (zip.val().trim() === '') {
            makeInvalid(zip, "Enter a Zip Code in the 99999-9999 format e.g. 12345-1234");
        } else if (zipPattern.test(zip.val().trim()) == false) {
            makeInvalid(zip, "Enter a Zip Code in the 99999-9999 format e.g. 12345-1234");
        } else {
            makeValid(zip);
        }

        // Validate date of birth
        if (dob.val().trim() === '') {
            makeInvalid(dob, "Enter a DoB MM/DD/YYY format e.g. 02/24/2000");
        } else if (dobPattern.test(dob.val().trim()) == false) {
            makeInvalid(dob, "Enter a DoB MM/DD/YYY format e.g. 02/24/2000");
        } else if (Date.parse(dob.val().trim()) >= Date.now()) {
            makeInvalid(dob, "Date Can't be in the Future");
        } else {
            makeValid(dob);
        }

        course.select().focus();

        // if all fields are valid gather data and store it is a session variable
        if (isValid) {
            let lab9info = []
            lab9info['course'] = course.val().trim();
            lab9info['email'] = email.val().trim();
            lab9info['zip-code'] = zip.val().trim();
            lab9info['date-of-birth'] = dob.val().trim();

            sessionStorage.lab9info = '';

            for (let i in lab9info) {
                sessionStorage.lab9info += i + '=' + lab9info[i] + '|';
            }
        }

        // go to profile page
        location.href = 'profile.html';
    });
});