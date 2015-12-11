var dm_restriction_validation_options = {
    rules: {
        'dm_restriction[min_order_amount]' : {number: true,min:0, ChkDecimal: true},
        'dm_restriction[max_num_of_inserts]' : {number: true,min:0,max:99999999},
        'dm_restriction[min_order_qty]' : {number: true,min:0,max:99999999}
    },
    messages:{

        'dm_restriction[min_order_amount]' : {
            number: 'Must be number',
            min:'Only positive integer',
            ChkDecimal: 'Max [10,2]'
        },
        'dm_restriction[max_num_of_inserts]' : {
            number: 'Must be number',
            min:'Only positive integer',
            max: 'max length is 8'
        },
        'dm_restriction[min_order_qty]' : {
            number: 'Must be number',
            min:'Only positive integer',
            max: 'max length is 8'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

jQuery.validator.addMethod("ChkDecimal", function (value, element) {
    return this.optional(element) || /^\d{0,8}(\.\d{0,2})?$/i.test(value);
});

var dm_method_of_addressing_validation_options = {
    rules: {
        'dm_method_of_addressing[max_size_length]': {number: true, min: 0.01,max:999.99},
        'dm_method_of_addressing[max_size_width]': {number: true, min: 0.01,max:999.99},
        'dm_method_of_addressing[min_size_length]': {number: true, min: 0.01,max:999.99},
        'dm_method_of_addressing[min_size_width]': {number: true, min: 0.01,max:999.99},
        'dm_method_of_addressing[other_weight]': {number: true, min: 0.01,max:999.99},
        'dm_method_of_addressing[max_other_desc]': {maxlength: 200},
        'dm_method_of_addressing[min_other_desc]': {maxlength: 200}
    },
    messages: {
        'dm_method_of_addressing[max_size_length]': {number: 'Must be decimal',min: 'Should be > 0',max: 'Must be [5,2]'},
        'dm_method_of_addressing[max_size_width]': {number: 'Must be decimal',min: 'Should be > 0',max: 'Must be [5,2]'},
        'dm_method_of_addressing[min_size_length]': {number: 'Must be decimal',min: 'Should be > 0',max: 'Must be [5,2]'},
        'dm_method_of_addressing[min_size_width]': {number: 'Must be decimal',min: 'Should be > 0',max: 'Must be [5,2]'},
        'dm_method_of_addressing[other_weight]': {number: 'Must be decimal',min: 'Should be > 0',max: 'Must be [5,2]'},
        'dm_method_of_addressing[max_other_desc]': 'Max length is 200 character',
        'dm_method_of_addressing[min_other_desc]': 'Max length is 200 character'

    },
    highlight: function (element) {$(element).removeClass('error');},
    errorPlacement: function(error, element) {error.insertAfter(element);}
};