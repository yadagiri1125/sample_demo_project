$.validator.addMethod("compareDate", function(value, element) {
    return this.optional(element) || /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.test(value);
}, 'Invalid date');

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

$.validator.addMethod("month_date", function(dtMonth, dtDay, dtYear ) {
    var dtMonth = $('#magazine_title_facade_published_month').val();
    var dtDay = $('#magazine_title_facade_published_day').val();
    var dtYear = $('#magazine_title_facade_published_year').val();
    if(dtDay.length == 0 || dtMonth.length == 0 ){
        return true;
    }else{
        if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay> 31)
            return false;
        else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
            return false;
        else if (dtMonth == 2)
        {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap))
                return false;
        }
        return true;
        }
}, 'Invalid day');

var title_validation_options = {
    rules: {
        'magazine_title_facade[published_year]': { required: true, number: true, minlength: 4, maxlength: 4, digits: true},
        'magazine_title_facade[published_month]': {
            range: [1,12],
            required: {
                depends: function(element) {
                    return $('#magazine_title_facade_published_day').val().length > 0;
                }
            }
        },
        'magazine_title_facade[published_day]':{
            range: [1,31],
            month_date: true
        },
        'magazine_title_facade[official_publication_of]': {maxlength: 200},
        'img_title_facade[frequency]':{maxlength: 50},
        'img_title_facade[english_translation]': {maxlength: 150},
        'img_title_facade[incorporating_text]': {maxlength: 150},
        'magazine_group_title_facade[established_year]':  {minlength: 4, maxlength: 4, number: true, digits: true},
        'magazine_title_facade[established_year]':{number: true, minlength: 4, maxlength: 4, digits: true},
        'img_title_facade[established_year]':{number: true, minlength: 4, maxlength: 4, digits: true },
        'magazine_group_title_facade[formerly]':{maxlength: 150},
        'magazine_title_facade[formerly]':{maxlength: 150},
        'img_title_facade[formerly]': {maxlength: 150},
        'newspaper_title_facade[formerly]': {maxlength: 150},
        'dm_insert_list_title_facade[formerly]': {maxlength: 150},
        'magazine_group_title_facade[formerly_expire_on]':{
            compareDate: true,
            date: true,
            required: {
                depends: function(element) {
                    return $('#title_formerly').val().length > 0; }
            }
        },
        'magazine_title_facade[formerly_expire_on]':{
            compareDate: true,
            date: true,
            required: {
                depends: function(element) { return $('#title_formerly').val().length > 0; }
            }
        },
        'img_title_facade[formerly_expire_on]':{
            compareDate: true,
            date: true,
            required: {
                depends: function(element) { return $('#title_formerly').val().length > 0; }
            }
        },
        'newspaper_title_facade[formerly_expire_on]':{
            compareDate: true,
            date: true,
            required: {
                depends: function(element) { return $('#title_formerly').val().length > 0; }
            }
        },
        'dm_insert_list_title_facade[formerly_expire_on]':{
            compareDate: true,
            date: true,
            required: {
                depends: function(element) { return $('#title_formerly').val().length > 0; }
            }
        },
        'radio_title_facade[code_call]': {maxlength: 100},
        'radio_title_facade[slogan]': {maxlength: 100},
        'tv_station_title_facade[air_year]': {minlength: 4, maxlength: 4, number: true, digits: true},
        'tv_station_title_facade[station_name]': {maxlength: 100},
        'tv_station_title_facade[call_letter]':{maxlength: 8},
        'tv_station_title_facade[analog_channel]': {maxlength: 8, digits: true, number: true},
        'tv_station_title_facade[digital_channel]': {maxlength: 8, digits: true, number: true}
    },

    messages: {
        'magazine_title_facade[published_year]':{
            number: 'Only number',
            digits: 'Only number',
            required: 'Published Year Required',
            maxlength: 'Max 4 digits',
            minlength: jQuery.format('Min 4 digits')
        },
        'magazine_title_facade[published_month]': {
            required: 'Required',
            range: 'Invalid month'
        },
        'magazine_title_facade[published_day]': {
            range: 'Invalid day'
        },
        'img_title_facade[frequency]':{maxlength: 'Max Length is 50 Character'},
        'img_title_facade[english_translation]': {maxlength: 'Max Length is 150 Character'},
        'img_title_facade[incorporating_text]': {maxlength: 'Max Length is 150 Character'},
        'magazine_group_title_facade[established_year]':{
            number: 'Established Year must be number',
            digits: 'Established Year must be number',
            maxlength: 'Established year length must be equal to 4',
            minlength: jQuery.format('Established year length must be equal to 4')

        },
        'magazine_title_facade[established_year]':{
            number: 'Established Year must be number',
            digits: 'Established Year must be number',
            maxlength: 'Established year length must be equal to 4',
            minlength: jQuery.format('Established year length must be equal to 4')
        },
        'img_title_facade[established_year]':{
            number: 'Established Year must be number',
            digits: 'Established Year must be number',
            maxlength: 'Established year length must be equal to 4',
            minlength: jQuery.format('Established year length must be equal to 4')
        },
        'magazine_title_facade[official_publication_of]': {maxlength: 'Max Length is 200 Character'},
        'magazine_group_title_facade[formerly]':{maxlength: 'Max Length is 150 Character'},
        'magazine_title_facade[formerly]':{maxlength: 'Max Length is 150 Character'},
        'img_title_facade[formerly]': {maxlength: 'Max Length is 150 Character'},
        'newspaper_title_facade[formerly]': {maxlength: 'Max Length is 150 Character'},
        'dm_insert_list_title_facade[formerly]':{maxlength: 'Max Length is 150 Character'},
        'magazine_group_title_facade[formerly_expire_on]':{required: 'Formerly Expire On Required', date: 'Invalid date'},
        'magazine_title_facade[formerly_expire_on]':{required: 'Formerly Expire On Required', date: 'Invalid date'},
        'img_title_facade[formerly_expire_on]':{required: 'Formerly Expire On Required', date: 'Invalid date'},
        'newspaper_title_facade[formerly_expire_on]':{required: 'Formerly Expire On Required', date: 'Invalid date'},
        'dm_insert_list_title_facade[formerly_expire_on]':{required: 'Formerly Expire On Required', date: 'Invalid date'},
        'radio_title_facade[code_call]': {maxlength: 'Max Length is 100 Character'},
        'radio_title_facade[slogan]': {maxlength: 'Max Length is 100 Character'},
        'tv_station_title_facade[air_year]': {
            number: 'Must be number',
            digits: 'Only integer',
            minlength: 'Air date length must be equal to 4',
            maxlength: 'Air date length must be equal to 4'
        },
        'tv_station_title_facade[station_name]': {maxlength: 'Max Length is 100 Character'},
        'tv_station_title_facade[call_letter]':{maxlength: 'Max Length is 8 Character'},
        'tv_station_title_facade[analog_channel]': {
            maxlength: 'Max Length is 8 Digit',
            number: 'Must be number',
            digits: 'Only integer'
        },
        'tv_station_title_facade[digital_channel]': {
            maxlength: 'Max Length is 8 Digit',
            number: 'Must be number',
            digits: 'Only integer'
        }
    },

    highlight: function (element)
    { $(element).removeClass('error'); },

    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

