//Validation for digital publisher provided metrics
//Add custom method to validate time in HH:MM:SS Format
$.validator.addMethod("time24", function(value, element) {
    var parts = value.split(':');
    if (!/(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/.test(value) && parts[0] > 24 || parts[1] > 60 || parts[2] > 60 ) return false;
    return true;
});

var publisher_provided_validation_options = {
    rules: {
        'digital_publisher_provided_metric[time_period_of_metrics]':{dateMonthYear: true},
        'digital_publisher_provided_metric[site_audience_metric_cdlk_id]' :{required: true},
        'digital_publisher_provided_metric[site_visit_freq_metric_cdlk_id]':{
            required: {
                depends: function(element) {
                    return $('#digital_publisher_provided_metric_site_visit_freq_metric_override').val().length > 0;
                }
            }
        },
        'digital_publisher_provided_metric[content_consumption_metric_cdlk_id]':{
            required: {
                depends: function(element) {
                    return $('#digital_publisher_provided_metric_content_consumption_metric_override').val().length > 0;
                }
            }
        },
        'digital_publisher_provided_metric[time_spent_content_metric_cdlk_id]':{
            required: {
                depends: function(element) {
                    return $('#digital_publisher_provided_metric_time_spent_content_metric_override').val().length > 0;
                }
            }
        },
        'digital_publisher_provided_metric[time_on_site_metric_cdlk_id]':{
            required: {
                depends: function(element) {
                    return $('#digital_publisher_provided_metric_time_on_site_metric_override').val().length > 0;
                }
            }
        },
        'digital_publisher_provided_metric[other_metric_cdlk_id]':{
            required: {
                depends: function(element) {
                    return $('#digital_publisher_provided_metric_other_metric_override').val().length > 0;
                }
            }
        },
        'digital_publisher_provided_metric[site_audience_metric_override]': { required: true, maxlength: 60},
        'digital_publisher_provided_metric[site_visit_freq_metric_override]': {maxlength: 60},
        'digital_publisher_provided_metric[content_consumption_metric_override]': { maxlength: 60},
        'digital_publisher_provided_metric[time_spent_content_metric_override]': { maxlength: 60},
        'digital_publisher_provided_metric[time_on_site_metric_override]': { maxlength: 60},
        'digital_publisher_provided_metric[other_metric_override]': { maxlength: 60},
        'digital_publisher_provided_metric[site_audience_metric_value]': { required: true, number: true, digits: true},
        'digital_publisher_provided_metric[site_visit_freq_metric_value]': { number: true, digits: true},
        'digital_publisher_provided_metric[content_consumption_metric_value]': { number: true, digits: true},
        'digital_publisher_provided_metric[time_spent_content_metric_value]': { time24: true},
        'digital_publisher_provided_metric[time_on_site_metric_value]': { time24: true},
        'digital_publisher_provided_metric[other_metric_value]': { number: true, digits: true}

    },
    messages:{
        'digital_publisher_provided_metric[time_period_of_metrics]':{dateMonthYear: "Invalid date (Format should be MM/YYYY)"},
        'digital_publisher_provided_metric[site_audience_metric_cdlk_id]' :{required: 'Metric Name is required'},
        'digital_publisher_provided_metric[site_visit_freq_metric_cdlk_id]': { required: 'Metric Name is required'},
        'digital_publisher_provided_metric[content_consumption_metric_cdlk_id]': { required: 'Metric Name is required'},
        'digital_publisher_provided_metric[time_spent_content_metric_cdlk_id]': { required: 'Metric Name is required'},
        'digital_publisher_provided_metric[time_on_site_metric_cdlk_id]': { required: 'Metric Name is required'},
        'digital_publisher_provided_metric[other_metric_cdlk_id]': { required: 'Metric Name is required'},
        'digital_publisher_provided_metric[site_audience_metric_override]': { required: 'Required Field', maxlength: 'Only 60 Characters Allowed'},
        'digital_publisher_provided_metric[site_visit_freq_metric_override]': { maxlength: 'Only 60 Characters Allowed'},
        'digital_publisher_provided_metric[content_consumption_metric_override]': { maxlength: 'Only 60 Characters Allowed'},
        'digital_publisher_provided_metric[time_spent_content_metric_override]': { maxlength: 'Only 60 Characters Allowed'},
        'digital_publisher_provided_metric[time_on_site_metric_override]': { maxlength: 'Only 60 Characters Allowed'},
        'digital_publisher_provided_metric[other_metric_override]': { maxlength: 'Only 60 Characters Allowed'},
        'digital_publisher_provided_metric[site_audience_metric_value]': {
            number: 'Must be number',
            digits: 'Only integer',
            required: 'Metric Text is required'
        },
        'digital_publisher_provided_metric[site_visit_freq_metric_value]': {
            number: 'Must be number',
            digits: 'Only integer'
        },
        'digital_publisher_provided_metric[content_consumption_metric_value]': {
            number: 'Must be number',
            digits: 'Only integer'
        },
        'digital_publisher_provided_metric[time_spent_content_metric_value]': {
            time24: 'HH:MM:SS format. Max Limit is: 24:60:60'
        },
        'digital_publisher_provided_metric[time_on_site_metric_value]': {
            time24: 'HH:MM:SS format. Max Limit is: 24:60:60'
        },
        'digital_publisher_provided_metric[other_metric_value]': {
            number: 'Must be number',
            digits: 'Only integer'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

// options for client side validations
var dnt_reach_validation_options = {
    rules: {
        'dnt_reach[source]': {maxlength: 50},
        'dnt_reach[period]': {maxlength: 50},
        'dnt_reach[platform_display_pct]': {number: true, min: 0, max: 100},
        'dnt_reach[platform_video_pct]': {number: true, min: 0, max: 100},
        'dnt_reach[platform_mobile_pct]': {number: true, min: 0, max: 100}
    },
    messages: {
        'dnt_reach[source]': 'Enter 50 chars or less',
        'dnt_reach[period]': 'Enter 50 chars or less',
        'dnt_reach[platform_display_pct]': {
            number: 'Must be integer',
            min: 'Only positive',
            max: 'Must be < 100'
        },
        'dnt_reach[platform_video_pct]': {
            number: 'Must be integer',
            min: 'Only positive',
            max: 'Must be < 100'
        },
        'dnt_reach[platform_mobile_pct]': {
            number: 'Must be integer',
            min: 'Only positive',
            max: 'Must be < 100'
        }

    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'dnt_reach[platform_display_pct]')
            $('#reach_display_error td:nth-child(1)').html(error);
        else if (element.attr('name') == 'dnt_reach[platform_video_pct]')
            $('#reach_video_error td:nth-child(1)').html(error);
        else if (element.attr('name') == 'dnt_reach[platform_mobile_pct]')
            $('#reach_mobile_error td:nth-child(1)').html(error);
        else
            error.insertAfter(element);
    }
};