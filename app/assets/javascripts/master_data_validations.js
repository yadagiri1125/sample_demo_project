var address_validation_options = {
    rules: {
        "address[line_1]": {
            maxlength: 100
        },
        "address[line_2]": {
            maxlength: 100
        },
        "address[county]": {
            maxlength: 50
        },
        "address[state_province]": {
            maxlength: 50
        },
        "address[zip]": {
            maxlength: 20
        },
        "address[city]": {
            maxlength: 50
        },
        "address[country]": {
            maxlength: 50
        }

    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var person_validation_options = {
    rules: {
        'person[first_name]': {required: true, maxlength: 150},
        'person[last_name]':  {required: true,  maxlength: 150},
        'person[job_title]': {maxlength: 150},
        'person[middle_name]': {maxlength: 50}
    },
    messages: {
        'person[first_name]': { maxlength: 'Maxlength is 150 characters' },
        'person[last_name]': {  maxlength: 'Maxlength is 150 characters' },
        'person[job_title]': {maxlength: 'Maxlength is 150 characters'},
        'person[middle_name]': {maxlength: 'Maxlength is 50 characters'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var address_phone_validation_options = {
    rules: {
        "phone[phone_number]": {
            required: {
                depends: function(element){
                    return $('#address_phone_extension').val().length > 0;
                }
            },
            digits: true,
            maxlength: 35
        },
        "phone[extension]": {
            digits: true,
            maxlength: 5
        },
        "phone[phone_type_cdlk_id]": {
            required: true
        },
        "phone[country_code]": {
            required:  {
                depends: function(element){
                    return $('#address_phone_number').val().length > 0;
                }
            },
            digits: true,
            maxlength: 5
        }
    },
    messages:{
        "phone[country_code]": {maxlength: 'Maxlength 5', digits: 'Only integer'},
        "phone[extension]": {maxlength: 'Maxlength 5', digits: 'Only integer'},
        "phone[phone_number]": {digits: 'Only integer', maxlength: 'Maximum 35 digit allowed'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var person_phone_validation_options = {
    rules: {
        "phone[phone_number]": {
            required: {
                depends: function(element){
                    return $('#person_phone_extension').val().length > 0;
                }
            },
            maxlength: 35,
            digits: true
        },
        "phone[extension]": {digits: true,maxlength: 5 },
        "phone[phone_type_cdlk_id]": {required: true},
        "phone[country_code]": {
            maxlength: 5,
            digits: true,
            required:  {
                depends: function(element){
                    return $('#person_phone_number').val().length > 0;
                }
            }
        }
    },
    messages: {
        "phone[phone_number]": {
            digits: 'Only integer',
            maxlength: 'Maximum 35 digit allowed'
        },
        "phone[country_code]": {
            digits: 'Only integer',
            maxlength: 'Maxlength 5'
        },
        "phone[extension]": {
            digits: 'Only integer',
            maxlength: 'Maxlength 5'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var email_validation_options = {
    rules: {
        'email[email_type_cdlk_id]': {required: true},
        'email[email]': {required: true,email: true }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};


var url_validation_options = {
    rules: {
        'url[url_type_cdlk_id]': {required: true},
        'url[url]': {required: true,url: true }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};