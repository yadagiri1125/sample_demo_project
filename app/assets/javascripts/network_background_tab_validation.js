// Client Side Validation for Network Background
var network_background_validation_options = {
    rules: {
        'tv_cable_network_background[launch_year]': { number: true, maxlength: 4, digits:true, range: [1900,new Date().getFullYear()]},
        'tv_cable_network_background[nbr_of_subscribers]': { number: true,digits:true, maxlength: 8, min: 1}
    },
    messages: {
        'tv_cable_network_background[launch_year]':{
            number: 'Must be number',
            digits: 'Only integer',
            maxlength: 'Max 4 digits',
            range: 'Enter 1900 to current date'

        },
        'tv_cable_network_background[nbr_of_subscribers]':{
            number: 'Must be number',
            digits: 'Only integer',
            min: 'Should be > 0',
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