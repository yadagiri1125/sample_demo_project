var special_programming_validation_options = {
  rules: {'special_programming_text': {maxlength: 200}},
  messages: {'special_programming_text': 'Max length is 200 character'},
  highlight: function (element){ $(element).removeClass('error'); },
  errorPlacement: function(error, element) {$('#error_special_programming_input').html(error);}
};
var tv_cable_promo_tie_ins_validation_options = {
    rules: {
        'tv_cable_promo_tie_in[year]':{
            number:true,
            maxlength:4,
            min:1900,
            max:2100
        }
    },
    messages: {
        'tv_cable_promo_tie_in[year]': {min: 'must be > 1900',max:'must be < 2100',maxlength:'Max 4 digits'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },

    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

// Fill other desc values for radio and tv syndicator
function fill_syndicator_other_desc(id,other_desc_id,seg){
    $('#'+other_desc_id).prop('disabled', ($('#'+id).val() != ''));
    if ($('#'+id).val() != '' && $('#'+other_desc_id).val() != ''){
        var str = id[0].toUpperCase()+id.substr(1);
        $('#'+seg+'_syndicator_programming_errors td:nth-child(4)').text(str+' and Other '+str+' both can not be entered');
        $('#'+other_desc_id).val('');
    }
    else{ $('#'+seg+'_syndicator_programming_errors td:nth-child(4)').text('');}
}

// Client Side Validation for Radio Syndicator Programming
var rd_syndicator_validation_options = {
    rules: {
        'rd_syndicator_programming[program_cdlk_id]': {required: true},
        'rd_syndicator_programming[format_cdlk_id]': {required: true},
        'rd_syndicator_programming[demographic_other_desc]': {maxlength: 25},
        'rd_syndicator_programming[coverage]': {maxlength:50}
    },
    messages: {
        'rd_syndicator_programming[program_cdlk_id]': {required: 'Required Field'},
        'rd_syndicator_programming[format_cdlk_id]': {required: 'Required Field'},
        'rd_syndicator_programming[demographic_other_desc]': {maxlength: 'Max 25 chars'},
        'rd_syndicator_programming[coverage]':{maxlength: 'Max 50 chars'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'rd_syndicator_programming[program_cdlk_id]')
            $('#rd_syndicator_programming_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'rd_syndicator_programming[format_cdlk_id]')
            $('#rd_syndicator_programming_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'rd_syndicator_programming[demographic_other_desc]')
            $('#rd_syndicator_programming_errors td:nth-child(4)').html(error);
        else if (element.attr('name') == 'rd_syndicator_programming[coverage]')
            $('#rd_syndicator_programming_errors td:nth-child(5)').html(error);
        else
            error.insertAfter(element);
    }
};

// Client Side Validation for TV Syndicator Programming
var tv_syndicator_validation_options = {
    rules: {
        'tv_syndicator_program[name]': {required: true, maxlength: 60},
        'tv_syndicator_program[length_in_minutes]': { number: true, maxlength: 3, digits:true, min: 1},
        'tv_syndicator_program[frequency_other_info]': {maxlength: 20},
        'tv_syndicator_program[demographics]': {maxlength: 20},
        'tv_syndicator_program[national_coverage_pct]': { number: true, maxlength: 3, digits:true, max:100}
    },
    messages: {
        'tv_syndicator_program[name]': {required: 'Required Field',maxlength: 'Max 60 chars'},
        'tv_syndicator_program[length_in_minutes]':{number: 'Must be number',digits: 'Only integer',maxlength: 'Max 3 digit',min: 'Should be > 0'},
        'tv_syndicator_program[frequency_other_info]': {maxlength: 'Max 20 chars'},
        'tv_syndicator_program[demographics]': {maxlength: 'Max 20 chars'},
        'tv_syndicator_program[national_coverage_pct]':{number: 'Must be number',digits: 'Only integer',maxlength: 'Max 3 digit',max: 'Max 100%'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'tv_syndicator_program[name]')
            $('#tv_syndicator_programming_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'tv_syndicator_program[length_in_minutes]')
            $('#tv_syndicator_programming_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'tv_syndicator_program[frequency_other_info]')
            $('#tv_syndicator_programming_errors td:nth-child(4)').html(error);
        else if (element.attr('name') == 'tv_syndicator_program[demographics]')
            $('#tv_syndicator_programming_errors td:nth-child(5)').html(error);
        else if (element.attr('name') == 'tv_syndicator_program[national_coverage_pct]')
            $('#tv_syndicator_programming_errors td:nth-child(6)').html(error);
        else
            error.insertAfter(element);
    }
};