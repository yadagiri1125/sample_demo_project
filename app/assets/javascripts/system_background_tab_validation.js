// Client Side Validation for System Background
var system_background_validation_options = {
    rules: {
        'tv_cable_system_background[turn_on_year]': { number: true, maxlength: 4, digits:true, range: [1900,new Date().getFullYear()]},
        'tv_cable_system_background[franchise_expires]': { number: true, maxlength: 4, digits:true, min: 1900},
        'tv_cable_system_background[channel_capacity_nbr]': { number: true, digits:true, min: 1, maxlength: 3},
        'tv_cable_system_background[channel_utilized_nbr]': { number: true, digits:true, min: 1, maxlength: 3},
        'tv_cable_system_background[insertable_channels]': { number: true, digits:true, min: 1, maxlength: 3},
        'tv_cable_system_background[home_in_franchise_area]': { number: true, digits:true, min: 1,maxlength: 8},
        'tv_cable_system_background[homes_passed_nbr]': { number: true, digits:true, min: 1,maxlength: 8},
        'tv_cable_system_background[subscriber_nbr]': { number: true, digits:true, min: 1,maxlength: 8}
    },
    messages: {
        'tv_cable_system_background[turn_on_year]':{
            number: 'Must be number',
            digits: 'Only integer',
            maxlength: 'Max 4 digits',
            range: 'Enter 1900 to current date'

        },
        'tv_cable_system_background[franchise_expires]':{
            number: 'Must be number',
            digits: 'Only integer',
            maxlength: 'Max 4 digits',
            min: 'Should be >= 1900'
        },
        'tv_cable_system_background[channel_capacity_nbr]':{
            number: 'Must be number',
            min: 'Should be > 0',
            digits: 'Only integer',
            maxlength: 'Max 3 digits'
        },
        'tv_cable_system_background[channel_utilized_nbr]':{
            number: 'Must be number',
            min: 'Should be > 0',
            digits: 'Only integer',
            maxlength: 'Max 3 digits'
        },
        'tv_cable_system_background[insertable_channels]':{
            number: 'Must be number',
            min: 'Should be > 0',
            digits: 'Only integer',
            maxlength: 'Max 3 digits'
        },
        'tv_cable_system_background[home_in_franchise_area]':{
            number: 'Must be number',
            min: 'Should be > 0',
            digits: 'Only integer',
            maxlength: 'Max 8 digits'
        },
        'tv_cable_system_background[homes_passed_nbr]':{
            number: 'Must be number',
            min: 'Should be > 0',
            digits: 'Only integer',
            maxlength: 'Max 8 digits'
        },
        'tv_cable_system_background[subscriber_nbr]':{
            number: 'Must be number',
            min: 'Should be > 0',
            digits: 'Only integer',
            maxlength: 'Max 8 digits'
        }
    },

    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};