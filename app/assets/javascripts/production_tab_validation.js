//Jquery used for New Digital Data
function addDigitalDataValues(click_id,field_id,display,desc_field_id, container_id, container_desc_id, error_id, presence_error_id){
    $('#'+click_id).click(function(e){
        if(($('#'+desc_field_id).val().length <= 200) && (!($('#'+field_id+' :selected').text() == 'Other') || !($('#'+desc_field_id).val() == ''))){
            e.preventDefault();
            var input_values = [];
            $('#'+display +' tr').each(function(){
                input_values.push($(this).find('td:first').text())
            });

            $('#'+presence_error_id).text('');
            $('#'+error_id+' label.error').text('');
            var current_value, container_value, container_array, random_val, container_desc_value,container_array_desc;
            current_value = $('#'+field_id).val();
            random_val = Math.floor(Math.random() * 1000) + 1;
            if(current_value.length == 0 || $.inArray($('#'+field_id+' :selected').text(), input_values) >= 0)
            {
              if($.inArray($('#'+field_id+' :selected').text(), input_values) >= 0){
                  $('#'+presence_error_id).show();
                  $('#'+presence_error_id).text('Record already exist').addClass('error')
              }
              return;
            }
            else {
               container_value = $('#'+container_id).val();
               container_desc_value = $('#'+container_desc_id).val();
               $('#'+container_id).val(current_value +  '`'  + container_value);
               $('#'+container_desc_id).val($('#'+desc_field_id).val() + '`' + container_desc_value );
               $('#' + display).prepend('<tr id=' + field_id + '_' + random_val + '>' +
              '<td colspan="2">' + $('#' + field_id + ' option:selected').text() + '</td>' +
              '<td width="45%" class="word_wrap" title="' + $('#' + desc_field_id).val() + '">' + $('#' + desc_field_id).val() + '</td>' +
              '<td width="5%" class="padding_lft_2" id=' + field_id + '_delete_' + random_val + '><a href="#" class="glyphicon glyphicon-remove" title="Delete">' +
              '</a></td></tr>');
              $('#' + field_id).val('');
              $('#' + desc_field_id).val('');
            }
        }
        else{
            e.preventDefault();
            if(($('#'+field_id+' :selected').text() == 'Other') && ($('#'+desc_field_id).val() == '')){
                $('#'+presence_error_id).text('Enter Other description').addClass('error');
                $('#'+presence_error_id).show();
            }
            else{
                $('#'+presence_error_id).hide();
            }
        }
        deleteDigitalDataValues(field_id,current_value,$('#'+desc_field_id).val(),container_id,container_desc_id,display,random_val);
    })
}

function deleteDigitalDataValues(field_id,delete_id,delete_desc,container_id,container_desc_id,display_id,identify_id){
  $('#'+field_id+'_delete_'+identify_id).click(function(e){
    var container_array, container_array_desc;
    e.preventDefault();
    container_array = $.unique($('#'+container_id).val().split('`'));
    container_array_desc = $.unique($('#'+container_desc_id).val().split('`'));
    if($.inArray(delete_id, container_array) >= 0){
      if(confirm('Are you Sure?')){
        container_array.splice($.inArray(delete_id, container_array),1);
        container_array_desc.splice($.inArray(delete_desc, container_array_desc),1);
        $('#'+container_id).val(container_array.join('`') + "");
        $('#'+container_desc_id).val(container_array_desc.join('`') + "");
        $('table#'+display_id+' tr#'+field_id+'_'+identify_id).delay(300).fadeOut().remove();
      }
    }
  })
}// End of New digital Data jquery

var digital_data_info_validation_options = {
    rules: {
        "digital_data_info_facade[qty_of_proofing_req]": {number: true,maxlength: 2, min: 0, digits: true},
        "digital_data_info_facade[file_type_override_desc]": {maxlength: 200},
        "digital_data_info_facade[media_transport_override_desc]": {maxlength: 200},
        "digital_data_info_facade[proofing_override_desc]": {maxlength: 200}
    },
    messages: {
        "digital_data_info_facade[qty_of_proofing_req]": {number: 'Must be Number', maxlength: 'Max 2 digits', min: 'Must be positive',digits: 'Only Digits'},
        "digital_data_info_facade[file_type_override_desc]": 'Max length is 200 characters',
        "digital_data_info_facade[media_transport_override_desc]": 'Max length is 200 characters',
        "digital_data_info_facade[proofing_override_desc]": 'Max length is 200 characters'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

var digital_spot_delivery_validation_options = {
    rules: {
        'digital_spot_delivery[code_lookup_id]' : {required: true}
    },
    messages:{
        'digital_spot_delivery[code_lookup_id]' : 'Please Select digital spot delivery Value.'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

// options for client side validations
var print_specification_validation_options = {
    rules: {
        // Print Specification Validations
        "bc_print_specification[preferred_other_desc]": {maxlength: 100},
        "bc_print_specification[additional_other_desc]": {maxlength: 100},
        "bc_print_specification[rotation_color_other_desc]": {
            maxlength: 50,
            required: {
                depends: function(element){
                    return $('#bc_print_specification_rotation_color_bcmy_other').is(':checked');
                }
            }
        },
        "bc_print_specification[proofing_other_desc]": {maxlength: 20},
        "bc_print_specification[textcover_other_paper_stock]": {maxlength: 40},
        "bc_print_specification[textcover_other_ink_type]": {maxlength: 40},
        "bc_print_specification[textcover_text_ink_type]": {maxlength: 40},
        "bc_print_specification[textcover_text_paper_stock]": {maxlength: 40},
        "bc_print_specification[textcover_cover_ink_type]": {maxlength: 40},
        "bc_print_specification[textcover_cover_paper_stock]": {maxlength: 40},
        "bc_print_specification[proofing_comprehensive]": {number: true,maxlength: 2, min: 0, digits: true},
        "bc_print_specification[proofing_progressive]": {number: true,maxlength: 2, min: 0, digits: true},
        "bc_print_specification[proofing_cromalines]": {number: true,maxlength: 2, min: 0, digits: true},
        "bc_print_specification[proofing_match_print]": {number: true,maxlength: 2, min: 0, digits: true},
        "bc_print_specification[bw2c_recommended_screen]": {number: true,maxlength: 3, min: 0, digits: true},
        "bc_print_specification[bw2c_max_screen]": {number: true,maxlength: 3, min: 0, digits: true},
        "bc_print_specification[bw2c_max_tone_pct]": {number: true,maxlength: 3,min: 0, digits: true},
        "bc_print_specification[bw2c_2ndcolormax_tone_pct]": {number: true,maxlength: 3,min: 0, digits: true},
        "bc_print_specification[c4_recommended_screen]": {number: true,maxlength: 3, min: 0, digits: true},
        "bc_print_specification[c4_max_tone_pct]": {number: true,maxlength: 3,min: 0, digits: true},
        "bc_print_specification[c4_cyan_tone_pct]": {number: true,maxlength: 3, min: 0, digits: true},
        "bc_print_specification[c4_yellow_tone_pct]": {number: true,maxlength: 3, min: 0, digits: true},
        "bc_print_specification[c4_magenta_tone_pct]": {number: true,maxlength: 3,min: 0, digits: true},
        "bc_print_specification[c4_black_tone_pct]": {number: true,maxlength: 3,min: 0, digits: true},
        "bc_print_specification[textcover_other_paper_weight]": { number: true, max:999.99},
        "bc_print_specification[textcover_text_paper_weight]": {number: true, max:999.99},
        "bc_print_specification[textcover_cover_paper_weight]": {number: true, max:999.99}
    },
    messages: {
        "bc_print_specification[preferred_other_desc]": 'Max Length is 100 Character',
        "bc_print_specification[additional_other_desc]": 'Max Length is 100 Character',
        "bc_print_specification[rotation_color_other_desc]": {maxlength:'Max Length is 50 Character',required: 'Required If Other selected'},
        "bc_print_specification[proofing_other_desc]": 'Max Length is 20 Character',
        "bc_print_specification[textcover_other_paper_stock]": 'Max Length is 40 Character',
        "bc_print_specification[textcover_other_ink_type]": 'Max Length is 40 Character',
        "bc_print_specification[textcover_text_ink_type]": 'Max Length is 40 Character',
        "bc_print_specification[textcover_text_paper_stock]": 'Max Length is 40 Character',
        "bc_print_specification[textcover_cover_ink_type]": 'Max Length is 40 Character',
        "bc_print_specification[textcover_cover_paper_stock]": 'Max Length is 40 Character',
        "bc_print_specification[proofing_comprehensive]": {number: 'Must be Number',maxlength: 'Max is 2 digit', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[proofing_progressive]": {number: 'Must be Number',maxlength: 'Max is 2 digit', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[proofing_cromalines]": {number: 'Must be Number',maxlength: 'Max is 2 digit', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[proofing_match_print]": {number: 'Must be Number',maxlength: 'Max is 2 digit', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[bw2c_recommended_screen]": {maxlength: 'Max is 3 digit', number: 'Must be number', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[bw2c_max_screen]": {maxlength: 'Max is 3 digit', number: 'Must be number', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[bw2c_max_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[bw2c_2ndcolormax_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[c4_recommended_screen]": {maxlength: 'Max is 3 digit', number: 'Must be number', min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[c4_max_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[c4_cyan_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[c4_yellow_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[c4_magenta_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[c4_black_tone_pct]": {maxlength: 'Max is 3 digit', number: 'Must be number',min: 'Must be positive',digits: 'Must be digit'},
        "bc_print_specification[textcover_other_paper_weight]": { number: 'Must be [5,2]',  max: 'Must be [5,2]'},
        "bc_print_specification[textcover_text_paper_weight]": { number: 'Must be [5,2]',  max: 'Must be [5,2]'},
        "bc_print_specification[textcover_cover_paper_weight]": { number: 'Must be [5,2]',  max: 'Must be [5,2]'}

    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
            error.insertAfter(element);
    }
};

$.validator.addMethod('positiveNumber',
    function (value) {
        return Number(value) > 0;
    }, 'Enter a positive number.');

var materials_due_validation_options = {
    rules: {
        'materials_due[days_prior_to_airdate]': {number: true,positiveNumber:true,digits: true, maxlength: 2}
    },
    messages: {
        'materials_due[days_prior_to_airdate]': {number: 'Must be number',digits: 'Enter Only Integer value',maxlength: 'Enter max 2 digit'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var tape_validation_options = {
    rules: {
        'tape[code_lookup_id]' : {required: true}
    },
    messages:{
        'tape[code_lookup_id]' : 'Please Select Tape Value.'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};
var mechanical_requirements_validation_options = {
    ignore: [],
    rules: {
        'mechanical_requirement[trim_size_width_inch]': {number: true, digits: true, min:1,maxlength: 3 },
        'mechanical_requirement[trim_size_width_numerator]': {
            number: true,
            digits: true,
            min: 1,
            maxlength: 2,
            required:{
                depends: function(element){
                    return $('#mechanical_requirement_trim_size_width_denominator').val().length > 0;
                }
            }
        },
        'mechanical_requirement[trim_size_width_denominator]': {
            number: true,
            digits: true,
            maxlength: 2,
            min: 1,
            required:{
                depends: function(element){
                    return $('#mechanical_requirement_trim_size_width_numerator').val().length > 0;
                }
            }
        },
        'mechanical_requirement[trim_size_depth_inch]': {number: true, digits: true,min: 1,maxlength: 3 },
        'mechanical_requirement[trim_size_depth_numerator]': {
            number: true,
            digits: true,
            min: 1,
            maxlength: 2,
            required:{
            depends: function(element){
                return $('#mechanical_requirement_trim_size_depth_denominator').val().length > 0;
            }
            }
        },
        'mechanical_requirement[trim_size_depth_denominator]': {
            number: true,
            digits: true,
            maxlength: 2,
            min: 1,
            required:{
                depends: function(element){
                    return $('#mechanical_requirement_trim_size_depth_numerator').val().length > 0;
                }
            }
        },
        'mechanical_requirement[trim_size_metric_width]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_metric_depth]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_column_1]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_column_2]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_decimal_depth]': {number: true, min: 1,max:999.999},
        'mechanical_requirement[trim_size_decimal_width]': {number: true, min: 1, max:999.999},

        'mechanical_requirement[exception_issue_1]': {maxlength:10},
        'mechanical_requirement[exception_issue_2]': {maxlength:10},
        'mechanical_requirement[exception_issue_3]': {maxlength:10},
        'mechanical_requirement[print_other_desc]': {
            maxlength: 20,
            required: {
                depends: function (element) {
                    return ($('#fullrun_print :checked').val() == 'Other') || ($('#regional_print :checked').val() == 'Other') || ($('#cover_print :checked').val() == 'Other')
                }
            }
        },
        'mechanical_requirement[cover_other_desc]': {maxlength:20},
        'mechanical_requirement[color_other_desc]': {maxlength:20},
        'mechanical_requirement[bind_method_other]': {
            maxlength:20,
            required:{
                depends: function(element){
                    return ($('#binding_method :checked').val() == 'Other')
                }
            }
        },
        'mechanical_requirement[exception_bind_method_desc_1]': {maxlength:20},
        'mechanical_requirement[exception_bind_method_desc_2]': {maxlength:20},
        'mechanical_requirement[exception_bind_method_desc_3]': {maxlength:20}
    },
    messages: {

        'mechanical_requirement[trim_size_width_inch]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_column_1]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_column_2]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_width_numerator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_width_denominator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_depth_inch]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_depth_numerator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_depth_denominator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_metric_width]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_metric_depth]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_decimal_depth]': {
            number: 'Must be decimal',
            min: 'should be > 0',
            max: 'Must be in [3,3]'
        },
        'mechanical_requirement[trim_size_decimal_width]': {
            number: 'Must be decimal',
            min: 'should be > 0',
            max: 'Must be in[3,3]'
        },

        'mechanical_requirement[exception_issue_1]': 'Maximum Length is 10 character',
        'mechanical_requirement[exception_issue_2]': 'Maximum Length is 10 character',
        'mechanical_requirement[exception_issue_3]': 'Maximum Length is 10 character',
        'mechanical_requirement[print_other_desc]': {maxlength: 'Maximum Length is 20 character', required: "Required for 'Other' printing method"},
        'mechanical_requirement[other]': 'Maximum Length is 20 character',
        'mechanical_requirement[bind_method_other]': {maxlength: 'Maximum Length is 20 character', required: "Required for 'Other' binding method"},
        'mechanical_requirement[exception_bind_method_desc_1]': 'Maximum Length is 20 character',
        'mechanical_requirement[exception_bind_method_desc_2]': 'Maximum Length is 20 character',
        'mechanical_requirement[exception_bind_method_desc_3]': 'Maximum Length is 20 character'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'mechanical_requirement[trim_size_width_inch]')
            $('#fraction_error_width td:nth-child(2)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_width_numerator]')
            $('#fraction_error_width td:nth-child(3)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_width_denominator]')
            $('#fraction_error_width td:nth-child(4)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_depth_inch]')
            $('#fraction_error_depth td:nth-child(2)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_depth_numerator]')
            $('#fraction_error_depth td:nth-child(3)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_depth_denominator]')
            $('#fraction_error_depth td:nth-child(4)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_decimal_width]')
            $('#trim_decimal_width_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_decimal_depth]')
            $('#trim_decimal_depth_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_metric_width]')
            $('#trim_metric_width_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_metric_depth]')
            $('#trim_metric_depth_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[color_other_desc]')
            $('#mechanical_color_other_error').html(error);
         else if (element.attr('name') == 'mechanical_requirement[cover_other_desc]')
            $('#mechanical_cover_other_error').html(error);
        else
            error.insertAfter(element);
    }
};

// Start Specific to Specifiocation segment for NpMagazine
$(document).ready(function(){
    swop_checkbox_operation();
    rotation_color_other();
});
var party_status;
function rotation_color_other(val){
    $('#bc_print_specification_rotation_color_other_desc').attr('disabled', (party_status || val || $('#bc_print_specification_rotation_of_color_bcmy').is(':checked')));
}
function rotation_color_other_on_current_page(val){
    party_status = val;
    $('#rot_clr :input').change(function() { rotation_color_other(party_status) });
}
function swop_checkbox_operation_on_current_page(){
    $('#bc_print_specification_swop_specifications_apply').change(function(){
        swop_checkbox_operation();
    });
    $('#bc_print_specification_film_accepted').change(function(){
        swop_checkbox_operation();
    })
}
function swop_checkbox_operation(){
    var swop_disabled = $('#bc_print_specification_swop_specifications_apply').is(':disabled');
    var swop_checked =  $('#bc_print_specification_swop_specifications_apply').is(':checked');
    $('#text_cover_other :input, #black_an_white_color :input, #rec_scrn_4c :input, #density_of_tone :input').attr('disabled',swop_checked || swop_disabled);
    $('#preferred_material :input').attr('disabled', $('#bc_print_specification_film_accepted').is(':checked'));
}
// End Specific to Specification segment for NpMagazine

var ooh_closing_time_validation_options = {
    rules: {
        'ooh_closing_time[title]' : {maxlength: 150},
        'ooh_closing_time[header]' : {maxlength: 150}
    },
    messages:{
        'ooh_closing_time[title]' : 'Max length is 150 characters',
        'ooh_closing_time[header]' : 'Max length is 150 characters'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};
