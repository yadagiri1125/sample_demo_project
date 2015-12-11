var update_frequency_validation_options = {
    rules: {
        'dm_update_frequency[update_frequency_override]' : {maxlength: 25}
    },
    messages:{
        'dm_update_frequency[update_frequency_override]' : {maxlength: 'Max 25 characters'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

var dm_dnet_validation_options = {
    rules: {
        'dm_dnet[min_order_qty]' : {number: true,digits: true,min:0, maxlength: 8},
        'dm_dnet[total_file_qty]' : {number: true,digits: true,maxlength: 8},
        'dm_dnet[change_address_qty]' : {number: true,digits: true,min:0, maxlength: 8},
        'dm_dnet[hotline_qty]' : {number: true,digits: true,min:0, maxlength: 8},
        'dm_dnet[gender_male_pct]' : {number: true,digits: true,min:0, maxlength: 3},
        'dm_dnet[gender_female_pct]' : {number: true,digits: true,min:0, maxlength: 3},
        'dm_dnet[age_average]' : {number: true,digits: true,min:0, maxlength: 3},
        'dm_dnet[age_from]' : {number: true,digits: true,min:0, maxlength: 3},
        'dm_dnet[age_to]' : {number: true,digits: true,min:0, maxlength: 3},
        'dm_dnet[min_order_amt]': {number: true, min:.01, max: 99999999.999},
        'dm_dnet[total_file_amt]': {number: true, min:.01, max: 99999999.999},
        'dm_dnet[average_unit_of_sale]': {number: true, min:0.01, max: 999.999}
    },
    messages:{

        'dm_dnet[min_order_qty]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 8',
            digits:'Must be integer'
        },
        'dm_dnet[total_file_qty]' : {
            number: 'Must be number',
            digits:'Must be integer',
            maxlength: 'Max length is 8'
        },
        'dm_dnet[change_address_qty]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 8',
            digits:'Must be integer'
        },
        'dm_dnet[hotline_qty]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 8',
            digits:'Must be integer'
        },
        'dm_dnet[gender_male_pct]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 3',
            digits:'Must be integer'
        },
        'dm_dnet[gender_female_pct]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 3'
        },
        'dm_dnet[age_average]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 3',
            digits:'Must be integer'
        },
        'dm_dnet[age_from]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 3',
            digits:'Must be integer'
        },
        'dm_dnet[age_to]' : {
            number: 'Must be number',
            min:'Only positive integer',
            maxlength: 'Max length is 3',
            digits:'Must be integer'
        },
        'dm_dnet[min_order_amt]': {
            number: 'Must be Number',
            min: 'should be > 0',
            max: 'Must be [8,2]'
        },
        'dm_dnet[total_file_amt]': {
            number: 'Must be Number',
            min: 'should be > 0',
            max: 'Must be [8,2]'
        },
        'dm_dnet[average_unit_of_sale]': {
            number: 'Must be Number',
            min: 'should be > 0',
            max: 'Must be [3,2]'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

var other_selection_validation = {
    rules: {
        'dm_other_selection[other_description]':
        {
            maxlength: 200,
            required: {
                depends: function(element) {
                    return $('#dm_other_selection_select_cdlk_id :selected').text() == 'Other';
                }
            }
         },
        'dm_other_selection[fee_amt]': {number: true, min:.01, max: 99999999.999},
        'dm_other_selection[per]':{ maxlength: 1,noSpecialChar: true}
    },
    messages: {
        'dm_other_selection[other_description]': {maxlength: 'Max length is 200 character', required: "Field is required for 'Other'"},
        'dm_other_selection[fee_amt]': {number: 'Must be Decimal',min: 'should be > 0',max: 'Must be in[8,2]'},
        'dm_other_selection[per]': {maxlength: 'Max length is 1 character', noSpecialChar: 'No Special Char allowed'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {error.insertAfter(element);
    }
};


