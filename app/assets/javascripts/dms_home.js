//-------------------------------------------------------------------------------------------------
/* Write all the Jquery function related to the application. It will be included in application.js.*/
//-------------------------------------------------------------------------------------------------

// Common Date Picker Function which will handle date picker calendar in entire application
var np_closing_time_validation = {
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

function common_date_picker(){
    $(".date_picker" ).datepicker({
        showOn : "both",
        dateFormat : "mm/dd/yy",
        buttonText: '<i class="glyphicon glyphicon-calendar"></i>'
    }).next(".ui-datepicker-trigger").addClass('mrgn_lft_1 mrgn_top_1 cursor_styling');
}

function deleteEmail(delete_id,field_id,container_id){
    $('#'+field_id+'_delete_'+delete_id).click(function(e){
        e.preventDefault();
        if(confirm('Are you Sure?')){
            $('#'+field_id+'_'+delete_id).delay(300).fadeOut().hide();
            var container = $('#'+container_id).val() + ',' + delete_id;
            $('#'+container_id).val(container);
        }

    })
}

function add_foreign_language(){
    // steps to add multi languages and submit in one go also checks the uniqueness validations
    $('#add_foreign_language').click(function(e){
        var lang_id, container_array, container_value;
        lang_id = $('#foreign_language_select').val();
        container_value = $('#container_for_foreign_language').val();
        container_array = $.unique($('#container_for_foreign_language').val().split(','));
        e.preventDefault();
        if(lang_id.length != 0){
            if(container_value.length == 0){
                $('#container_for_foreign_language').val(lang_id);
            }else if($.inArray(lang_id, container_array) >= 0) {
                $('#display_foreign_language_error').fadeIn(300).html('Record already exist').addClass('error').delay(1000).fadeOut(300);
                return;

            }else{
                $('#container_for_foreign_language').val(container_value + ',' + lang_id);
            }
            $('#foreign_language_display').prepend('<tr id="foreign_language_'+ lang_id +'"><td width="60%" style="word-wrap: break-word;">'+ $('#foreign_language_select option:selected').text() +'</td>' +
                '<td><a id="foreign_language_value_'+ lang_id +'" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a></td></tr>');
            $('#foreign_language_select').val('');
            deleteForeignLanguage(lang_id);
        }
    });
}

// delete the foreign languages from the table
function deleteForeignLanguage(lang_id){
    $("#foreign_language_value_"+ lang_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#container_for_foreign_language').val().split(','));
        if($.inArray(lang_id, container_array) >= 0) {
            if(confirm('Are you Sure?')){
                container_array.splice($.inArray(lang_id, container_array),1);
                $('#container_for_foreign_language').val(container_array + "");
                $('table#foreign_language_display tr#foreign_language_' + lang_id).delay(300).fadeOut();
            }

        }
    })
}

function addOfficialPublication(){
    $('#add_official_publication').click(function (e) {
        var official_pub_val, container_array, container_value;
        official_pub_val = $('#official_publication_value').val();
        container_value = $('#container_for_official_pub').val();
        container_array = $.unique($('#container_for_official_pub').val().split('`'));
        e.preventDefault();
        if (official_pub_val.length != 0 && official_pub_val.length <= 200 ) {
            if (container_value.length == 0 ) {
                $('#container_for_official_pub').val(official_pub_val);
            }else if ($.inArray(official_pub_val, container_array) >= 0) {
                $('#display_official_pub_error').fadeIn(300).html('Record already exist').addClass('error').delay(1000).fadeOut(300);
                return;
            }else {
                $('#container_for_official_pub').val(container_value + '`' + official_pub_val);
            }
            container_array = $.unique($('#container_for_official_pub').val().split('`'));
            $('#official_publication_display tr').remove();
            $('#official_publication_value').val('');
            $.each(container_array, function(i, val){
                if(val.length > 0){
                    $('#official_publication_display').prepend('<tr id="official_pub_' + (i+1) + '">' +
                        '<td width="60%" style="word-wrap: break-word;">' + val + '</td>' +
                        '<td><a id="official_pub_edit_' + (i+1) + '" href= "#" class="glyphicon glyphicon-edit" title="Edit"></a>' +
                        '  <a id="official_pub_value_' + (i+1) + '" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a>' +
                        '</td></tr>');
                    editOfficialPublication((i+1));
                    deleteOfficialPublication((i+1));
                }
            });
        }
    });
}

function editOfficialPublication(random_val){
    $('#official_pub_edit_' + random_val).click(function(e){
        e.preventDefault();
        var container_array_official= $('#container_for_official_pub').val();
        var official_pub_old = $('#official_pub_'+ random_val).children(':first').text().trim();
        var arr = '';  var txt = '';
        if ( !String.prototype.contains ) {
            String.prototype.contains = function() {
                return String.prototype.indexOf.apply( this, arguments ) !== -1;
            };
        }
        if($('#official_publication_value').val().length == 0){
            if(container_array_official.contains(official_pub_old + '`')){
                $('#container_for_official_pub').val(container_array_official.replace((official_pub_old + '`'),''));
            }else{
                $('#container_for_official_pub').val(container_array_official.replace((official_pub_old),''));
            }
        }else{
            $.each($('#official_publication_display tr'), function(i,val){
                txt= $('#'+ val.id).children('td:first').text().trim();
                if(txt != official_pub_old){
                    arr = arr + '`'+ txt;
                }
            });
            $('#container_for_official_pub').val(arr);
        }
        $('#official_publication_value').val(official_pub_old);
    });
}

function deleteOfficialPublication(random_val){
    $("#official_pub_value_"+ random_val).click(function(e){
        var official_pub_old = $('#official_publication_value').val().trim();
        var arr = '';  var txt = '';
        e.preventDefault();
        if(confirm('Are you sure?')){
            if(official_pub_old.length > 0){
                $('#container_for_official_pub').val($('#container_for_official_pub').val()+ '`'+ official_pub_old);
            }
            $('table#official_publication_display tr#official_pub_' + random_val).remove();
            $.each($('#official_publication_display tr'), function(i,val){
                txt = $('#'+ val.id).children('td:first').text().trim();
                arr = arr + '`'+ txt;
            });
            $('#container_for_official_pub').val(arr);
            $('#official_publication_value').val('');
        }
    });
}

//Enable disable formerly and formerly expire on for title segment
function enable_formely(){
    $('#title_formerly').keyup(function(){
        if ($('#title_formerly').val().length == 0){
            $('#title_formerly_expire .error').hide();
            $('#title_formerly_expire').prop('disabled','disabled').datepicker("disable");

        }else{
            $('#title_formerly_expire').prop('disabled', false).datepicker("enable");
            common_date_picker();
        }
    });
}


// Jquery to count number of character entered in Comment section
function check_character_count(field_id, div_id, char_count){
    $("#"+ field_id).keyup(function(){
        var box=$(this).val();
        var count= char_count - box.length;
        if(box.length <= char_count){
            $('#'+ div_id + ' ' +'span.count').html(count + ' ').css('color','#66afe9');
            $('#'+ div_id + ' ' +'span.character').html('Character Left').css('color','black');
        }else{
            $('#'+ div_id + ' ' +'span.character').html('Limit Exceeded').css('color','red');
            $('#'+ div_id + ' ' +'span.count').html('');
        }
    });

}

//Allow user to enter only Specified digits after decimal
function check_decimal_parsing(num)
{
    $('.decimal_field').keyup(function(){
        if($(this).val().indexOf('.')!=-1){
            if($(this).val().split(".")[1].length > num){
                if( isNaN( parseFloat( this.value ) ) ) return;
                this.value = parseFloat(this.value).toFixed(num);
            }
        }
        return this; //for chaining
    });
    $('.decimal_field').focusout(function(){
        if( isNaN( parseFloat( this.value ) ) ) return;
        this.value = parseFloat(this.value).toFixed(num);
        return this; //for chaining
    });
}

function create_dynamic_table(table,container_for_col,container_for_row,existing_val,seg_name, input_name){
    console.log(table);
    console.log(container_for_col);
    console.log(container_for_row);
    console.log(existing_val);
    console.log(seg_name);
    console.log(input_name);
    $('#'+table).html('<tr class="background_gray"></tr>');
    var cell_val = existing_val.length == 0 ? '' : existing_val.split('`');
    var container_for_col = container_for_col.split('`');
    var container_for_row = container_for_row.split('`');
    $('#'+table+' tr').html('<td width="20%"></td>');
    var i = 0,j = 0;
    while(container_for_col.length > i){
        $('#'+table+' tr').append('<td id="'+container_for_col[i]+'" class="col_header">'+ container_for_col[i]+'</td>');
        i = i + 1
    }
    i = 0;
    while(container_for_row.length > i){
        j = 0;
        var col = container_for_col.length;
        $('#'+table+' tbody').append('<tr id="'+container_for_row[i]+'"><td>'+container_for_row[i]+'</td></tr>');
        while(col > j){
            $('#'+table+' tr:nth-child('+(i+2)+')').append('<td><input type="text" value="'+
                (cell_val == '' ? '' : (cell_val[i+j+(i*(col-1))] == undefined ? '' : cell_val[i+j+(i*(col-1))])) +'"' +
                ' id="'+i+'_'+j+'" class="form-control ooh_spec_tb_cell_length_50"><input type="hidden" ' +
                'id="'+ container_for_col[j]+'" name="'+input_name+'[]"></td>');
            j = j + 1;
        }
        i = i + 1
    }
}

function create_complete_array_for_table_header(name){
    var temp_arr = [];
    $('[name^='+name+']').each(function(i){
        input_val = $(this).closest('td').find('input:first');
        val = input_val.val();
        row = $(this).closest('tr').attr('id');
        col = $(this).attr('id');
        temp_arr.push(row,col,val.trim(),input_val.attr('id').split('_')[0],input_val.attr('id').split('_')[1]);
        $(this).val([temp_arr]);
        temp_arr = []
    });
}

// Specific to date tab for Special day feature
function all_or_specific_day(){
    $('.np_closing_times_special_feature_all').each(function(){
        $(this).change(function(){
            $(this).closest('tr').find(':checkbox').not($(this)).attr('disabled',$(this).is(':checked'));
            if($(this).is(':checked')){
                $(this).closest('tr').find(':checkbox').not($(this)).attr('checked',false);
            }
        })
    });
    $('.np_closing_times_special_feature_all').each(function(){
        if($(this).is(':checked')){
            $(this).closest('tr').find(':checkbox').not($(this)).attr('disabled',true);
            $(this).closest('tr').find(':checkbox').not($(this)).attr('checked',false);
        }
    });
}

function moveRow(table_id, excluded_rows){
    $('#'+ table_id +' .up:last').next().hide();
    $('#'+ table_id +' .down:first').prev().hide();
    $('#'+ table_id +' .up,#'+ table_id +'  .down').one('click',function (e) {
        e.preventDefault();
        var total = ($('#' + table_id +' tbody tr').length - 1);
        var row_index = $(this).parent().parent().parent().children().index($(this).parent().parent());
        var row = $(this).parents('tr:first');
        if (($(this).is('.up') && row_index > 0)) {
            row.insertBefore(row.prev()).effect( "highlight", "slow" );
            $('#'+ table_id +'.up').each( setRow(row_index, table_id, excluded_rows) );
        }else if (($(this).is('.down') && row_index < total)){
            row.insertAfter(row.next()).effect( "highlight", "slow" );
            $('#'+ table_id +'.down').each( setRow(row_index, table_id, excluded_rows) );
        }
    });
    $('#'+ table_id +' .up').show();
    $('#'+ table_id +' .down').show();
    $('#'+ table_id +' .up:last').next().hide();
    $('#'+ table_id +' .down:first').prev().hide();
}

function setRow( index, table_id , excluded_rows) {
    var id = "index_" + ( index + 1 );
    var tr = $(this).closest("tr");
    tr.attr( { id: id } );
    $(this)
        .unbind( "click" )
        .click( moveRow(table_id, excluded_rows) )
        .attr( { href: "#" } )
        .text( "Insert row after: " + id );
}

function is_other_selected(list_id,text_id ){
    $('[id^='+list_id+']').change(function(){
        $(this).closest('tr').find('[id^='+text_id+']').attr('readonly',$("option:selected", this).text() != 'Other');
        if($("option:selected", this).text() != 'Other') {
            $(this).closest('tr').find('[id^='+text_id+']').val('');
            $(this).closest('tr').find('[id^='+text_id+']').removeClass('required_other_selection_other_description');
            $(this).closest('tr').find('label.error').remove();
        }
        else{ $(this).closest('tr').find('[id^='+text_id+']').addClass('required_other_selection_other_description'); }
    });
    $('[id^='+list_id+']:not(:last)').closest('tr').find('[id^='+text_id+']').each(function(){
        $(this).attr('readonly',$(this).closest('tr').find('td:first select :selected').text() != 'Other')
    });
}

//add and remove rows having multiple columns
function add_new_row(click_id,tb,seg,select_arr,is_sequence,row_size){
    $('[id^='+click_id+']').click(function(e){
        e.preventDefault();
        var validate_fields = [], empty_fields = [];
        $(this).closest('tr').find('input, select').each(function () {
            if($(this).val().trim() != ''){empty_fields.push($(this).val().trim())}
        });
        $(this).closest('tr').find('input, select').each(function () {
            validate_fields.push($(this).valid());
        });
        var identifier = isNaN(parseInt($(this).closest('table').attr('id').split('_').pop())) ? '' : '_' + $(this).closest('table').attr('id').split('_').pop();
        if(($.inArray(false, validate_fields) == -1 && empty_fields.length != 0)) {
            if ($(this).closest('table').find('tr').length < row_size || row_size == 'nil') {
                $(this).closest('tr').find('.error').remove();
                var row_count = $(this).closest('table').find('tr').length;
                $current_row = $(this).closest('tr');
                $new_row = $current_row.clone(true);
                $new_row.attr('id', $new_row.attr('id') + '_' + row_count);
                $.each(select_arr, function (i, v) {
                    eval("selected_index_" + v + identifier + " = " + $('#' + v + identifier).prop('selectedIndex') + "")
                });
                $(this).closest('table').find('tr:first').after($new_row);
                $new_row.children('td:last').find('a').unbind('click');
                $new_row.find('input').each(function (e) {
                    current_id = $(this).attr('id');
                    $(this).attr({id: current_id + '_' + row_count});
                });
                $new_row.find('select').attr({id: $new_row.find('select').attr('id') + '_' + row_count, class: 'form-control'});
                $.each(select_arr, function (i, v) {
                    $new_row.find('select').prop("selectedIndex", eval("selected_index_" + v + identifier))
                });
                $new_row.children('td:last').find('a').removeClass('glyphicon-plus').addClass('glyphicon-remove mrgn_lft_4').
                    attr({id: ('new_row_' + $('#' + tb + '_table tr').length), title: 'Delete'});
                if (is_sequence) {
                    $new_row.children('td:last').find('a').before('<a href="#" class="glyphicon glyphicon-arrow-up up" ' +
                        'title="Move Up"><a href="#" class="mrgn_lft_6 glyphicon glyphicon-arrow-down down" title="Move Down">');
                }
                $current_row.find('input').each(function () {
                    $(this).val('')
                });
                $.each(select_arr, function (i, v) {
                    $('#' + v + identifier).prop('selectedIndex', 0)
                });
                remove_records_without_container($new_row);
                moveRow(tb + '_table', 1);
            }
            else {
                $('#' + seg + '_errors').html('<div id="error_explanationx" class="alert  alert-danger">' +
                    '<a href="#" class="close" data-dismiss="alert">x</a><h5>Max five enteries are allowed</h5></div>').show();
                return false;
            }
        }
    });
}

function remove_records_without_container(row){
    row.children('td:last').find('a:last').click(function (e) {
        e.preventDefault();
        if (confirm('Are you Sure you want to delete?')) {
            $(this).closest('tr').delay(300).fadeOut().remove();
        }
    });
}

//collect all rows columns value in hidden field on save
function collect_all_row_values(tb){
    var collect_td_value = [];
    $('#'+tb+' tr:not(:last,:first)').each(function() {
        $(this).find('td:not(:last)').each(function(){
            $(this).find('input, select').is('input') ? collect_td_value.push($(":input",this).val().trim()) : collect_td_value.push($("option:selected", this).val());
        });
        $(this).find('input[type=hidden]').val(collect_td_value.join('`'));
        collect_td_value = [];
    });
}

//collapse and expand on click of play icon
function collapse_and_expand(span_id){
    $('[id^='+span_id+']').click(function () {
        $header = $(this);
        $content = $header.parent().next().next();
        $content.slideToggle(500, function () {
            return $content.is(":visible") ? $('#'+$header.attr('id')).html("<i title='Expand/Collapse' class='cursor_styling  glyphicon glyphicon-play rotate_icon'></i>") :
                $('#'+$header.attr('id')).html("<i title='Expand/Collapse' class='cursor_styling glyphicon glyphicon-play'></i>");
        });
    });
}

var common_validation = {
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {error.insertAfter(element);
    }
};