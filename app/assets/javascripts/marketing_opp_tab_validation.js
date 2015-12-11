var event_budget_validation_options = {
    rules: {
        'ooh_event_budget_facade[event_budget]':{number: true,min:0, dollarsscents: true}
    },
    messages: {
        'ooh_event_budget_facade[event_budget]':{
            number: 'Must be number',
            dollarsscents: 'Max [10,2]',
            min: 'Only positive integer'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },

    errorPlacement: function(error, element) {
         error.insertAfter(element);
        $('#client_side_errors').html(error);
        $('label.error').css('margin-left','132px');
    }
};


jQuery.validator.addMethod("dollarsscents", function (value, element) {
    return this.optional(element) || /^\d{0,8}(\.\d{0,2})?$/i.test(value);
});