// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var tablet_edition_validation_options = {
    rules: {
        'tablet_edition[media_kit_url]' : {maxlength: 150}
    },
    messages:{
        'tablet_edition[media_kit_url]' : {
            maxlength: 'Max 150 characters'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
        $('label.error').css('margin-left','11%')
    }
};

var paid_url_validation_options = {
    rules: {
        'paid_url[url_type_cdlk_id]': {required: true},
        'paid_url[url]': {required: true, url: true,  maxlength: 150 }
    },
    messages:{
        'paid_url[url_type_cdlk_id]': {required: 'Required field'},
        'paid_url[url]': {
            required: 'Required field',
            maxlength: 'Max Length is 150 Character'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};
var positioning_stmt_validation_options = {
    rules: {
        'positioning_statement[note]': {maxlength: 100},
        'positioning_statement[statement]': {required: true}
    },
    messages:{
        'positioning_statement[note]': {maxlength: 'Max Length is 100 Character'},
        'positioning_statement[statement]': {required: 'Required field'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }


};

function remove_sponsored_results(){
    $("[id^='sponsored_results_remove_']").click(function(e){
        e.preventDefault();
        delete_obj = $(this);
        if(confirm('Are you Sure?')){
            $("#search_result_sponsored_result tr :checkbox").map(function(){
                if ($(this).val() == delete_obj.closest('tr').attr('id')){
                    $(this).attr('disabled',false);
                    $(this).attr('checked',false);
                }
            });
            delete_obj.closest('tr').delay(300).fadeOut().remove();
        }
    })
};

function remove_recommended_lists(){
    $("[id^='recommended_lists_remove_']").click(function(e){
        e.preventDefault();
        delete_obj = $(this);
        if(confirm('Are you Sure?')){
            $("#search_result_recommended_list tr :checkbox").map(function(){
                if ($(this).val() == delete_obj.closest('tr').attr('id')){
                    $(this).attr('disabled',false);
                    $(this).attr('checked',false);
                }
            });
            delete_obj.closest('tr').delay(300).fadeOut().remove();
            $('#target_recommended_sq_nbr').trigger('update');
        }
    });
};


