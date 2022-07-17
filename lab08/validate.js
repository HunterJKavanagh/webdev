"use strict";
const datePattern = /^((0[13578]|1[02])\/31\/(18|19|20)[0-9]{2})|((01|0[3-9]|1[0-2])\/(29|30)\/(18|19|20)[0-9]{2})|((0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-8])\/(18|19|20)[0-9]{2})|((02)\/29\/(((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
const coursePattern = /^[A-Z]{2,4} \d{3}$/;

$(document).ready(function(){
    const txtArrivalDate = $('#arrival-date');
    const txtNights = $('#nights');
    const selAdults = $('#adults');
    const selChildren = $('#Children');
    const txtName = $('#name');
    const txtEmail = $('#email');
    const txtPhone = $('#phone-number');
    const radVoice = $('#voice');
    const radText = $('#text-message');
    const radEmail = $('#email-message');

    let isValid;

    const makeInvalid = (textbox, message) => {
        textbox.next().text(message);
        textbox.addClass('is-invalid');
        isValid = false;
    }

    const makeValid = (textbox) => {
        textbox.next().text('');
        textbox.removeClass('is-invalid');
    }

    $('#make-reservation').on('click', (evt) => {
        isValid = true;

        const arivalDate = txtArrivalDate.val().trim();
        const nights = txtNights.val().trim();
        const name = txtName.val().trim();
        const email = txtEmail.val().trim();
        const phone = txtPhone.val().trim();

        // make sure a name has been entered
        name === '' ? makeInvalid(txtName, "Enter Name"): makeValid(txtName);

        // Checks if Arrival Date is in the right formate
        // and that the date is in the future
        if (arivalDate === '') {
            makeInvalid(txtArrivalDate, "Enter Arivale Date")
        } else if (datePattern.test(arivalDate) == false) {
            makeInvalid(txtArrivalDate, "Enter Date in (mm/dd/yyyy) Format");
        } else if (Date.parse(arivalDate) <= Date.now()) {
            makeInvalid(txtArrivalDate, "Enter Date in the Future");
        } else {
            makeValid(txtArrivalDate);
        }

        // Checks if Nights is a number less the 31 and greater then 1
        if (nights === '') {
            makeInvalid(txtNights, "Enter Number of Nights");
        } else if (isNaN(nights)) {
            makeInvalid(txtNights, `${nights} is Not a Number`);
        } else if (nights > 30) {
            makeInvalid(txtNights, "Number Can't be Over 30");
        } else if (nights < 1) {
            makeInvalid(txtNights, "Number Must be Greater then 0");
        } else {
            makeValid(txtNights);
        }
        
        // Checks if a valid Email Address has ben entered
        if (email === '') {
            makeInvalid(txtEmail, "Enter Email Address")
        } else if (emailPattern.test(email) == false) {
            makeInvalid(txtEmail, "Enter a Valid Email Address")
        } else {
            makeValid(txtEmail);
        }

        // Checks if a valid Phone Number has ben entered
        if (phone === '') {
            makeInvalid(txtPhone, "Enter Phone Number")
        } else if (phonePattern.test(phone) == false) {
            makeInvalid(txtPhone, "Enter a Valid Phone Number")
        } else {
            makeValid(txtPhone);
        }

        // Checks if a contact method has been selected
        let checkOptions = $(':radio:checked');
        if(checkOptions.length === 0) {
            $(':radio').addClass('is-invalid');
            $('#contact-message').text("Select a contact method")
            isValid = false;
        } else {
            $(':radio').removeClass('is-invalid');
            $('#contact-message').text("")
        }

        // Prevents the submit event
        if (isValid == false) {
            evt.preventDefault();
            txtArrivalDate.select().focus();
        }
    })

    // Resets everything if the rest button is clicked
    $('#reset-reservation-form').on('click', () => {
        $('input[type="text"').val('');
        $('input[type="checkbox"]').prop('checked', false);
        $(':input').removeClass('is-invalid')
        $('small').text('');
        txtArrivalDate.select().focus();

        $(':checked').checked(false);
    })
})
