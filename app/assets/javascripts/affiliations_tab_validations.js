var translator_validation_options = {
    rules: {
        'translator[text]': {required: true,maxlength:200}
    },
    messages: {
        'translator[text]': {required: 'Required field',maxlength:'Max 200 characters'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};