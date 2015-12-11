// specific validation method for tv & radio formerly to compare combination of month and year with current date
$.validator.addMethod('currentDate', function(value, element,params) {
    return this.optional(element) || (new Date() > new Date($('#'+params[0]+'_month').val() + '/' +  1 + '/' + value));
});

// options for client side validations of TV Formerly
var tv_formerly_validation_options = {
    rules: {
        'tv_formerly[month]': {required: true, number: true, digits: true, range: [1,12]},
        'tv_formerly[year]':  {required: true, number: true, digits: true, range: [1900,new Date().getFullYear()], currentDate: ['tv_formerly']},
        'tv_formerly[station_name]':   {required: true, maxlength:100},
        'tv_formerly[analog_channel]': {number: true, digits: true, maxlength:4, min: 1},
        'tv_formerly[signal_cdlk_id]': {required: true },
        'tv_formerly[digital_channel]':{number: true, digits: true, maxlength:4, min: 1}
    },
    messages: {
        'tv_formerly[month]': {
            required: 'Required Field',
            number: 'Must be number',
            digits: 'Only integer',
            range: 'Invalid Month'
        },
        'tv_formerly[year]':  {
            required: 'Required Field',
            number: 'Must be number',
            digits: 'Only integer',
            range: 'Only 1900 to current year',
            currentDate: 'Month & Year should < Current Date'
        },
        'tv_formerly[station_name]': {required: 'Required Field', maxlength: 'Max length is 100 character'},
        'tv_formerly[analog_channel]': {
            number: 'Must be number',
            digits: 'Only integer',
            maxlength:'Max 4 digits',
            min: 'Should be > 0'
        },
        'tv_formerly[signal_cdlk_id]': 'Required Field',
        'tv_formerly[digital_channel]':{
            number: 'Must be number',
            digits: 'Only integer',
            maxlength:'Max 4 digits',
            min: 'Should be > 0'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'tv_formerly[month]')
            $('#tv_formerly_validation_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'tv_formerly[year]')
            $('#tv_formerly_validation_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'tv_formerly[station_name]')
            $('#tv_formerly_validation_errors td:nth-child(3)').html(error);
        else if (element.attr('name') == 'tv_formerly[analog_channel]')
            $('#tv_formerly_validation_errors td:nth-child(4)').html(error);
        else if (element.attr('name') == 'tv_formerly[signal_cdlk_id]')
            $('#tv_formerly_validation_errors td:nth-child(5)').html(error);
        else if (element.attr('name') == 'tv_formerly[digital_channel]')
            $('#tv_formerly_validation_errors td:nth-child(6)').html(error);
        else
            error.insertAfter(element);
    }
};

var rd_formerly_validation_options = {
    rules: {
        'rd_formerly[month]': {required: true, number: true, digits: true, range: [1,12]},
        'rd_formerly[year]':  {required: true, number: true, digits: true, range: [1900,new Date().getFullYear()], currentDate: ['rd_formerly']},
        'rd_formerly[title_name]':   {required: true, maxlength:150},
        'rd_formerly[format_1_override]': {maxlength:150},
        'rd_formerly[format_2_override]': {maxlength:150},
        'rd_formerly[format_3_override]': {maxlength:150},
        'rd_formerly[format_4_override]': {maxlength:150}
    },
    messages: {
        'rd_formerly[month]': {
            required: 'Req- uired Field',
            number: 'Must be number',
            digits: 'Only integer',
            range: 'Invalid Month'
        },
        'rd_formerly[year]':  {
            required: 'Required Field',
            number: 'Must be number',
            digits: 'Only integer',
            range: 'Only 1900 to current year',
            currentDate: 'Month & Year should < Current Date'
        },
        'rd_formerly[title_name]': {required: 'Req- uired Field', maxlength: 'Max length is 150 character'},
        'rd_formerly[format_1_override]': 'Max length is 150 character',
        'rd_formerly[format_2_override]': 'Max length is 150 character',
        'rd_formerly[format_3_override]': 'Max length is 150 character',
        'rd_formerly[format_4_override]': 'Max length is 150 character'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'rd_formerly[month]')
            $('#rd_formerly_validation_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'rd_formerly[year]')
            $('#rd_formerly_validation_errors td:nth-child(3)').html(error);
        else if (element.attr('name') == 'rd_formerly[title_name]')
            $('#rd_formerly_validation_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'rd_formerly[format_1_override]')
            $('#rd_formerly_validation_errors td:nth-child(5)').html(error);
        else if (element.attr('name') == 'rd_formerly[format_2_override]')
            $('#rd_formerly_validation_errors td:nth-child(7)').html(error);
        else if (element.attr('name') == 'rd_formerly[format_3_override]')
            $('#rd_formerly_validation_errors td:nth-child(9)').html(error);
        else if (element.attr('name') == 'rd_formerly[format_4_override]')
            $('#rd_formerly_validation_errors td:nth-child(11)').html(error);
        else
            error.insertAfter(element);
    }
};


var edit_special_programming = '';
var special_programming_id = '';
var dt = new Date();
var month = (dt.getMonth()+1).toString();
var day = dt.getDate().toString();
month = month.length > 1 ? month : '0' + month;
day = day.length > 1 ? day : '0' + day;

$.validator.addMethod("compareFutureDate", function(value, element) {
    return this.optional(element) || (new Date(value) <= new Date(month   + "/" + day + "/" +  dt.getFullYear()));
}, 'Future date not allowed');

function daysInMonth(m, y) {
    switch (m) {
        case '2' :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case '11' : case '4' : case '6' : case '9' :
        return 30;
        default :
            return 31
    }
}
$.validator.addMethod('validate_days', function(value,element){
    date = value.split('/');
    m = (date[0].charAt(0) == 0 ? date[0].charAt(1) : date[0]);
    y = date[2];
    d = date[1];
    return this.optional(element) || d <= daysInMonth(m, y);
}, 'days are invalid');
//end  specific to update/verify validation

var dm_global_update_dates_validation_options = {
    rules: {
        'dm_global_update_date[srds_verified_on]': { dateMonthDayYear: true,compareFutureDate: true, validate_days: true },
        'dm_global_update_date[srds_updated_on]': { dateMonthDayYear: true,compareFutureDate: true, validate_days: true },
        'dm_global_update_date[counts_thru_on]': { dateMonthYear: true }
    },

    messages: {
        'dm_global_update_date[srds_verified_on]': {max: 'Future date not allowed',min: 'Must be >= to Updated date' },
        'dm_global_update_date[srds_updated_on]': {max: 'Future date not allowed'},
        'dm_global_update_date[counts_thru_on]': { number: 'Please enter valid date'}
    },
    highlight: function (element)
    { $(element).removeClass('error'); },

    errorPlacement: function(error, element) {
        if (element.attr('name') == 'dm_global_update_date[srds_verified_on]')
            $('#dm_global_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'dm_global_update_date[srds_updated_on]')
            $('#dm_global_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'dm_global_update_date[counts_thru_on]')
            $('#dm_global_errors td:nth-child(3)').html(error);
    }
};

var update_date_validation_options = {
    rules: {
        'update_date[srds_verified_on]': {dateMonthDayYear: true,compareFutureDate: true, required: true, validate_days: true},
        'update_date[srds_updated_on]': {dateMonthDayYear: true,compareFutureDate: true, required: true,validate_days: true},
        'update_date[srds_received_on]': { dateMonthDayYear: true, validate_days: true },
        'update_verify_dm_facade[srds_verified_on]': {dateMonthDayYear: true,compareFutureDate: true,required: true, validate_days: true},
        'update_verify_dm_facade[srds_updated_on]': { dateMonthDayYear: true,compareFutureDate: true, required: true, validate_days: true },
        'update_verify_dm_facade[srds_received_on]': {dateMonthDayYear: true, validate_days: true},
        'update_verify_dm_facade[counts_thru_on]': { dateMonthYear: true }
    },

    messages: {
        'update_date[srds_verified_on]': {max: 'Future date not allowed', required: 'Required field'},
        'update_date[srds_updated_on]': {max: 'Future date not allowed', min: 'Must be >= to Received date', required: 'Required field'},
        'update_verify_dm_facade[srds_verified_on]': {max: 'Future date not allowed', required: 'Required field'},
        'update_verify_dm_facade[srds_updated_on]': {max: 'Future date not allowed', min: 'Must be >= to Received date', required: 'Required field'},
    },
    highlight: function (element)
    { $(element).removeClass('error'); },

    errorPlacement: function(error, element) {
        if (element.attr('name') == 'update_date[srds_verified_on]')
            $('#update_verify_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'update_verify_dm_facade[srds_verified_on]')
            $('#update_verify_dm_facade_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'update_date[srds_updated_on]')
            $('#update_verify_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'update_verify_dm_facade[srds_updated_on]')
            $('#update_verify_dm_facade_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'update_verify_dm_facade[counts_thru_on]')
            $('#update_verify_dm_facade_next_errors td:nth-child(1)').html(error);
        else if (element.attr('name') == 'update_verify_dm_facade[srds_received_on]')
            $('#update_verify_dm_facade_next_errors td:nth-child(2)').html(error);
        else if (element.attr('name') == 'update_date[srds_received_on]')
            $('#update_verify_errors td:nth-child(3)').html(error);
    }
};

//Profile segment JQuery to store multiple values for single column of another table
function addMultipleValues(click_id,field_id,container_id,display,error_id){
    $('#'+click_id).click(function(e){
        if($('#'+field_id).val().length <= 150){
            $('#'+error_id+' label.error').text('');
            var current_value, container_value, container_array;
            current_value = $('#'+field_id).val();
            var random_val = Math.floor(Math.random() * 1000) + 1;
            container_value = $('#'+container_id).val();
            container_array = $.unique($('#'+container_id).val().split('`'));
            var dot_string = '';
            if (current_value.length > 20) {
                dot_string = '...'
            }
            var arr_lowercase = jQuery.map( container_array, function( n, i ) {
                return ( n.toLowerCase()  );
            });
            e.preventDefault();
            if(current_value.length != 0){
                if(container_value.length == 0){
                    $('#'+container_id).val(current_value);
                }else if($.inArray(current_value.toLowerCase(), arr_lowercase) >= 0) {
                    if(field_id == 'special_programming_text'){$('#'+error_id).text('Record already exist').addClass('error mrgn_lft_1');}
                    return;
                }else{
                    if(field_id == 'special_programming_text'){$('#'+error_id).text('')};
                    $('#'+container_id).val(container_value + '`' + current_value);
                }

                if(field_id == 'dnt_profile_facade_specialities_input' || field_id == 'person_job_function'){
                    $('#'+display).prepend('<tr id='+field_id+'_' + random_val + '>' +
                        '<td class="col-xs-10">'+ $('#'+field_id+' option:selected').text() + '</td>' +
                        '<td  id='+field_id+'_delete_'+random_val +'><a href="#" class="glyphicon glyphicon-remove" title="Delete">' +
                        '</a></td></tr>');
                }
                else if(field_id == 'special_programming_text') {
                    if(edit_special_programming.length > 0){
                        container_array = $.unique($('#'+container_id).val().split('`'));
                        container_array.splice($.inArray(edit_special_programming, container_array),1);
                        $('table#'+display+' tr#'+field_id+'_' +special_programming_id).remove();
                        $('#'+container_id).val(container_array.join('`') + "");
                        edit_special_programming = '';
                        special_programming_id = '';
                    }
                    $('#'+display).prepend('<tr id='+field_id+'_' + random_val + '>' +
                        '<td width="50%" id="special_programming_text_field" class="word_wrap">'+  current_value +'</td><td width="40%" class="padding_lft_13">' +
                        '<a href="#" class="glyphicon glyphicon-edit" id='+field_id+'_edit_'+random_val +' title="Edit">'+
                        '</a><a href="#" class="mrgn_lft_6 glyphicon glyphicon-remove" id='+field_id+'_delete_'+random_val +' title="Delete">' +
                        '</a><input name="special_programming_text_input[]" type="hidden" value="' + current_value +
                        '"><a href="#" class="mrgn_lft_6 glyphicon glyphicon-arrow-up up" title="Move Up"><a href="#" class="mrgn_lft_6 glyphicon glyphicon-arrow-down down" title="Move Down"></td></tr>');
                    editMultiplevalues(field_id,current_value,container_id,display,random_val);
                    moveRow(display, 1);
                }
                else{
                    $('#'+display).prepend('<tr id='+field_id+'_' + random_val + '>' +
                        '<td class="col-xs-10" title="'+ current_value+'" >'+ jQuery.trim(current_value).substr(0,20).trim(this) + dot_string +
                        '</td>' + '<td  id='+field_id+'_delete_'+random_val +'><a href="#" class="glyphicon glyphicon-remove" title="Delete">' +
                        '</a></td></tr>');
                }
                $('#'+field_id).val('');
            }
        }
        else{
            e.preventDefault();
            $('#'+display).append($('#'+error_id).text());
        }
        deleteMultipleValues(field_id,current_value,container_id,display,random_val);
    })
}

function editMultiplevalues(field_id,edit_id,container_id,display,identify_id){
    $('#'+field_id+'_edit_'+identify_id).click(function(e){
        e.preventDefault();
        $('#'+field_id).val(edit_id);
        edit_special_programming = edit_id;
        special_programming_id = identify_id;
    })

}

function deleteMultipleValues(field_id,delete_id,container_id,display_id,identify_id){
    $('#'+field_id+'_delete_'+identify_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#'+container_id).val().split('`'));
        if($.inArray(delete_id, container_array) >= 0){
            if(confirm('Are you Sure?')){
                container_array.splice($.inArray(delete_id, container_array),1);
                $('#'+container_id).val(container_array.join('`') + "");
                $('table#'+display_id+' tr#'+field_id+'_'+identify_id).delay(300).fadeOut().remove();
            }
        }
        moveRow(display_id, 1);
    });
}
var profile_validation_options = {
    rules: {
        "profile[profile_desc]": {require: true},
        "dnt_profile_facade[profile_desc]": { require: true},
        "dig_profile_facade[profile_desc]": { require: true},
        "dm_list_profile_facade[profile_desc]": { require: true},
        "profile[effidia_id]": {number: true, maxlength: 8, min: 0, digits: true},
        "dnt_profile_facade[speciality_others_input]": {maxlength: 150},
        "dnt_profile_facade[target_others_input]": {maxlength: 150}
    },
    messages:{
        "profile[effidia_id]": {
            number: 'Effidia must be number',
            maxlength: 'Please enter not more than 8 digit',
            min: 'Must be positive integer'
        },
        "dnt_profile_facade[speciality_others_input]": {maxlength: 'Please enter not more than 150 char'},
        "dnt_profile_facade[target_others_input]": {maxlength: 'Please enter not more than 150 char'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }


};
// options for client side validations
var validation_options = {
    rules: {
        'title[title_name]': {required: true},
        'title[established_year]':
        { required: true, number: true, minlength: 4, maxlength: 4 },
        'title[when_published]': {required: true},
        'title[published_yyyy]': { number: true, required: true, minlength: 4, maxlength: 4 },
        'title[published_mm]': {
            number: true,
            minlength: 2,
            maxlength: 2,
            range: [01,12],
            required: {
                depends: function(element) {
                    return $('#title_published_dd').val().length > 0;
                }
            }
        },
        'title[published_dd]':{
            number: true, minlength: 2, maxlength: 2, range: [01,31] },
        'title[comments]': {maxlength: 150},
        'title[subtitle_name]':{maxlength: 150},
        'title[sort_name]': {maxlength: 150},
        'title[search_name]': {maxlength: 150},
        'title[formerly]': {maxlength: 150}
    },

    messages: {
        'title[title_name]': "Title Name can't be blank",
        'title[established_year]':{
            required: 'Established Year must be present',
            number: 'Established Year must be number',
            minlength: jQuery.format('Established Year should be of 4 digit')
        },

        'title[when_published]': "When Published can't be blank",
        'title[published_yyyy]':{
            number: 'Year is not a number', required: 'Year must be present' },
        'title[published_mm]': {
            number: 'Month is not a number', required: 'Month must be present' },
        'title[published_dd]': {number: 'Date is not a number'}
    },

    highlight: function (element)
    { $(element).removeClass('error'); },

    errorPlacement: function(error, element) {
        if (element.attr('name') == 'title[published_yyyy]')
            $('#error_tr td:nth-child(2)').html(error);
        else if (element.attr('name') == 'title[published_mm]')
            $('#error_tr td:nth-child(3)').html(error);
        else if (element.attr('name') == 'title[published_dd]')
            $('#error_tr td:nth-child(4)').html(error);
        else error.insertAfter(element);
    }
};

$.validator.addMethod('positiveNumber',
    function (value) {
        return Number(value) > 0;
    }, 'Enter a positive number.');

var list_source_validation_options = {
    rules: {
        'dm_list_source[percentage]':{required: true,digits: true,number:true,range:[01,100], maxlength:3},
        'dm_list_source[source_cdlk_id]':{required: true},
        'dm_list_source[source_other]':{maxlength:150}
    },
    messages: {
        'dm_list_source[percentage]': {required: 'Required Field',digits: 'Only integer',number: 'Must be number' ,range: 'must be >0 and <=100', maxlength:'Max 3 digits'},
        'dm_list_source[source_cdlk_id]': 'Required Field',
        'dm_list_source[source_other]': 'Max 150 characters'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },

    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var tv_facility_validation_options = {
    rules: {
        'tv_facility[air_year]': {number: true, digits: true, range: [1900,2100]},
        'tv_facility[satellite_pgm_pct]': {number: true, digits: true, max: 100},
        'tv_facility[video_watts]': {number: true, digits: true, maxlength: 4, min: 1},
        'tv_facility[audio_watts]': {number: true, digits: true, maxlength: 4, min: 1},
        'tv_facility[digital_watts]': {number: true, digits: true, maxlength: 4, min: 1},
        'tv_facility[antenna_height]': {number: true, digits: true, maxlength: 4, min: 1}
    },
    messages: {
        'tv_facility[air_year]': {number: 'Must be number',digits: 'Only integer',range: 'Enter year (1900 to 2100)'},
        'tv_facility[satellite_pgm_pct]': {number: 'Must be number',digits: 'Only integer',max: 'Should be < 100'},
        'tv_facility[video_watts]': {number: 'Must be number',digits: 'Only integer',maxlength: 'Max 4 digits',min: 'Should be > 0'},
        'tv_facility[audio_watts]': {number: 'Must be number',digits: 'Only integer',maxlength: 'Max 4 digits',min: 'Should be > 0'},
        'tv_facility[antenna_height]': {number: 'Must be number',digits: 'Only integer',maxlength: 'Max 4 digits',min: 'Should be > 0'},
        'tv_facility[digital_watts]': {number: 'Must be number',digits: 'Only integer',maxlength: 'Max 4 digits',min: 'Should be > 0'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var rd_facility_validation_options = {
    rules: {
        'rd_facility[air_date_year]': {number: true, digits: true, range: [1900,2100],
            required: {
                depends: function(element) {
                    return $('#rd_facility_air_date_month').val().length > 0;
                }
            }},
        'rd_facility[air_date_month]': {number: true, digits: true, range: [1,12],required: {
            depends: function(element) {
                return $('#rd_facility_air_date_day').val().length > 0;
            }
        }},
        'rd_facility[air_date_day]': {number: true, digits: true,range: [1,31],daysInMonth: ['rd_facility_air_date']},
        'rd_facility[power_watts]': {number: true,digits: true,maxlength: 8,min: 1},
        'rd_facility[antenna_height]': {number: true, digits: true, maxlength: 4, min: 1},
        'rd_facility[primary_audience_other]': {maxlength: 100},
        'rd_facility[secondary_audience_other]': {maxlength: 100}
    },
    messages: {
        'rd_facility[air_date_year]': {number: 'Must be number',digits: 'Only integer',range: 'Enter year (1900 to 2100)',required: 'Required if month present'},
        'rd_facility[air_date_month]': {number: 'Must be number',digits: 'Only integer',range: 'Invalid Month',required: 'Required if day present'},
        'rd_facility[air_date_day]': {number: 'Must be number',digits: 'Only integer',range: 'Invalid Day',daysInMonth: 'Invalid Day'},
        'rd_facility[power_watts]': {number: 'Must be number',digits: 'Only integer',maxlength: 'Max 8 digits',min: 'Should be > 0'},
        'rd_facility[antenna_height]': {number: 'Must be number',digits: 'Only integer',maxlength: 'Max 4 digits',min: 'Should be > 0'},
        'rd_facility[primary_audience_other]': 'Max length is 100 chars',
        'rd_facility[secondary_audience_other]': 'Max length is 100 chars'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var usage_url_validation = {
    rules: {
        'usage_url_facade[usage_url]': {maxlength: 150, url: true}
    },
    messages:{
        'usage_url_facade[usage_url]': {maxlength: 'Max length is 150 characters'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var ooh_location_facade_validation_options = {
    rules: {
        'ooh_location_facade[location]':{maxlength:100}
    },
    messages: {
        'ooh_location_facade[location]': 'Max length is 100 characters'
    },

    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
        $('label.error').css('text-align','left')
    }

};
var programming_url_validation = {
    rules: {
        'programming_url[programming_url]': {maxlength: 150, url: true}
    },
    messages:{
        'programming_url[programming_url]': {maxlength: 'Please enter not more than 150 characters'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var special_feature_validation_options = {
    rules: {
        'special_feature_facade[billboard_duration_sec]':{number: true, maxlength:10, positiveNumber: true, digits: true},
        'special_feature_facade[inform_duration_min]':{number: true, maxlength:10, positiveNumber: true, digits: true}
    },
    messages: {
        'special_feature_facade[billboard_duration_sec]':{
            number: 'Must be number',
            maxlength:'Max 10 digits',
            positiveNumber: 'Only +ve numbers',
            digits: 'Must be number'
        },
        'special_feature_facade[inform_duration_min]':{
            number: 'Must be number',
            maxlength:'Max 10 digits',
            positiveNumber: 'Only +ve numbers',
            digits: 'Must be number'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },

    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};


jQuery.validator.addMethod("positiveNumber", function(value) {
    return Number(value) == 0 || Number(value) > 0 ;
});

