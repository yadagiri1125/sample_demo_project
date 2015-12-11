$.validator.addMethod("compareDate", function(value, element) {
    return this.optional(element) || /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.test(value);
}, 'Invalid date');

$.validator.addMethod("endDate", function(value, element) {
    var startDate = $('#ooh_event_duration_start_on').val();
        return Date.parse(startDate) <= Date.parse(value) || value == "";

}, 'End date should be greater than or equal to start date');

$(function () {
    $.validator.methods.date = function (value, element) {
        return this.optional(element) || isDate(value);
    }
});

function isDate(dateString) {
    var isValid = true;
    var datePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var matchArray = dateString.match(datePattern);

    if (matchArray == null) {
        isValid = false;
    } else {
        month = matchArray[1]; // parse date into variables
        day = matchArray[3];
        year = matchArray[5];

        if (month < 1 || month > 12) { // check month range
            isValid = false;
        }

        if (day < 1 || day > 31) {
            isValid = false;
        }

        if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
            isValid = false;
        }

        if (month == 2) { // check for February 29th
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day > 29 || (day == 29 && !isleap)) {
                isValid = false;
            }
        }
    }
    return isValid;
}

var event_duration_validation_options = {
    focusInvalid: false,
    rules: {
        'ooh_event_duration[start_on]':{
            compareDate: true,
            date: true,
            required: {
                depends: function(element) {
                    return $('#ooh_event_duration_end_on').val().length > 0;
                }
            }
        },

        'ooh_event_duration[end_on]':{compareDate: true, endDate:true, date: true},
        'ooh_event_duration[duration]':{maxlength:50}
    },
    messages: {
        'ooh_event_duration[start_on]':{required:'Start date required', date: 'Invalid date'},
        'ooh_event_duration[end_on]':  {date: 'Invalid date'},
        'ooh_event_duration[duration]':{maxlength:'Max 50 characters', date: 'Invalid date'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },

    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};