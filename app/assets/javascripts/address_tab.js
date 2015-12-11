var delivery_validation_options = {
    rules: {
        'dm_delivery[from_days]' : {maxlength: 2, number: true, digits: true},
        'dm_delivery[to_days]' : {
            maxlength: 2,
            number: true,
            digits: true,
            required: {
                depends: function(element) {
                    return $('#dm_delivery_from_days').val().length > 0;
                }
            }
        },
        'dm_delivery[delivery_guarantee_pct]':{number: true, digits: true, range: [0, 100]},
        'dm_delivery[days_material_due_before_insertion]' : {maxlength: 3, number: true, digits: true},
        'dm_delivery[cost_24_hour]' : {number: true,min:0, ChkDecimal: true},
        'dm_delivery[cost_48_hour]' : {number: true,min:0, ChkDecimal: true}
    },
    messages:{
        'dm_delivery[from_days]' : {
            number: 'Must be integer',
            digits: 'Must be integer',
            maxlength: 'Max 2 digits'
        },
        'dm_delivery[to_days]' : {
            number: 'Must be integer',
            digits: 'Must be integer',
            maxlength: 'Max 2 digits',
            required: 'Field should be required'
        },
        'dm_delivery[days_material_due_before_insertion]' : {
            number: 'Must be integer',
            digits: 'Must be integer',
            maxlength: 'Max 3 digits'
        },
        'dm_delivery[cost_24_hour]' : {
            number: 'Must be integer',
            min:'Only positive integer',
            ChkDecimal: 'Max [10,2]'
        },
        'dm_delivery[cost_48_hour]' : {
            number: 'Must be integer',
            min:'Only positive integer',
            ChkDecimal: 'Max [10,2]'
        },
        'dm_delivery[delivery_guarantee_pct]':{
            number: 'Must be integer',
            digits: 'Must be integer',
            range: 'Max [0, 100]'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

var dm_list_delivery_validation_options = {
    rules: {
        'dm_list_delivery_facade[from_days]' :{maxlength: 2, number: true, digits: true},
        'dm_list_delivery_facade[to_days]' :{
            maxlength: 2,
            number: true,
            digits: true,
            required: {
                depends: function(element) {
                    return $('#dm_list_delivery_facade_from_days').val().length > 0;
                }
            }
        },
        'dm_list_delivery_facade[delivery_guarantee_pct]':{number: true, digits: true, range: [0, 100]},
        'dm_list_delivery_facade[cost_24_hour]' :{number: true,min:0, ChkDecimal: true},
        'dm_list_delivery_facade[cost_48_hour]' :{number: true,min:0, ChkDecimal: true}
    },
    messages:{
        'dm_list_delivery_facade[from_days]' : {
            number: 'Must be integer',
            digits: 'Must be integer',
            maxlength: 'Max 2 digits'
        },
        'dm_list_delivery_facade[to_days]' : {
            number: 'Must be integer',
            digits: 'Must be integer',
            maxlength: 'Max 2 digits',
            required: 'Field should be required'

        },
        'dm_list_delivery_facade[cost_24_hour]' : {
            number: 'Must be integer',
            min:'Only positive integer',
            ChkDecimal: 'Max [10,2]'
        },
        'dm_list_delivery_facade[cost_48_hour]' : {
            number: 'Must be integer',
            min:'Only positive integer',
            ChkDecimal: 'Max [10,2]'
        },
        'dm_list_delivery_facade[delivery_guarantee_pct]':{
            number: 'Must be integer',
            digits: 'Must be integer',
            range: 'Max [0, 100]'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

jQuery.validator.addMethod("ChkDecimal", function (value, element) {
    return this.optional(element) || /^\d{0,8}(\.\d{0,2})?$/i.test(value);
});