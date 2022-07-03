

$(document).ready(function() {
    // focus on the Enter Temperature textbox
    $('#input-temp').focus();

    // clear the textboxes when the clear button is clicked
    // and removes is-invalid class
    $('#clear-inputs').click(function() {
        $('#input-temp').val('');
        $('#output-temp').val('');
        $('#input-temp-validation').text('');
        $('#input-temp').removeClass('is-invalid');
        $('#input-temp').focus();
    });

    // trigger the click event on the clear button 
    // when the input button is double clicked
    $('#input-temp').dblclick(function() {
        $('#clear-inputs').click();
    });

    // change text based on radio button selected
    $('#to-celsius').click(function() {
        $('#input-label').text('Enter Temperature in Fahrenheit');
        $('#output-label').text('Converted Temperature in Celsius');
        $('#clear-inputs').click();
    });
    $('#to-fahrenheit').click(function() {
        $('#input-label').text('Enter Temperature in Celsius');
        $('#output-label').text('Converted Temperature in Fahrenheit');
        $('#clear-inputs').click();
    });

    $('#convert-temp-button').click(function() {
        let tmpi = $('#input-temp').val();

        if (isNaN(tmpi)) {
            $('#input-temp-validation').text(`${tmpi} is not a number`);
            $('#input-temp').addClass('is-invalid');
            $('#output-temp').val('');
        } else if (tmpi == '') {
            $('#input-temp-validation').text(`number needed`);
            $('#input-temp').addClass('is-invalid');
            $('#output-temp').val('');
        } else {
            $('#input-temp-validation').text('');
            $('#input-temp').removeClass('is-invalid');
    
            
            if ($(':checked').val() == 'convert-to-celsius') {
                $('#output-temp').val(((tmpi-32) * 5/9).toFixed(1));
            } else {
                $('#output-temp').val((tmpi * 9/5 + 32).toFixed(1));
            }
        }
        $('#input-temp').focus();
    });
})
