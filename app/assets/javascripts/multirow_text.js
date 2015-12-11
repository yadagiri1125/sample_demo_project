var edited_value = '';
var record_id = '';

function addRecord(click_id,field_id,container_id,display,error_id, fld_typ, text_length, edit_flg,tb_width){
    $('#'+click_id).click(function(e){
        if((text_length.length == 0 ? true : $.trim($('#'+field_id).val()).length <= text_length) && $('#'+field_id+'').valid()){
            $('#'+error_id+' label.error').text('');
            var current_value, container_value, container_array;
            current_value = $.trim($('#'+field_id).val());
            var random_val = Math.floor(Math.random() * 1000) + 1;
            container_value = $('#'+container_id).val();
            container_array = $.unique($('#'+container_id).val().split('`'));

            var arr_lowercase = jQuery.map( container_array, function( n,i ){
                return ( n.toLowerCase()  );
            });
            e.preventDefault();
            if(current_value.length != 0){
                if(container_value.length == 0){
                    $('#'+container_id).val(current_value);
                }
                else if($.inArray(current_value.toLowerCase(), arr_lowercase) >= 0) {
                    $('#'+error_id).text('Record already exist').addClass('error');$('.error');
                    return;
                }
            else{
                    $('#'+error_id).text('');
                    $('#'+container_id).val(container_value + '`' + current_value);
                }

                if (fld_typ == 'drop_down'){ $('#'+error_id).text('');  current_value  = $('#'+field_id+' option:selected').text();}
                $('#'+display).prepend('<tr id='+field_id+'_' + random_val + '>' +
                    '<td class="word_wrap ' +tb_width+'" title="'+ current_value+'" >'+ current_value +
                    '</td>' + '<td style="vertical-align:bottom;" class="padding_lft_5"><a href="#" class="glyphicon glyphicon-remove" id='+field_id+'_delete_'+random_val + ' title="Delete">' +
                    '</a></td></tr>');
                current_value = $.trim($('#'+field_id).val());
                if(edit_flg == true) {
                    if(edited_value.length > 0){
                        container_array = $.unique($('#'+container_id).val().split('`'));
                        container_array.splice($.inArray(edited_value, container_array),1);
                        $('table#'+display+' tr#'+field_id+'_' + record_id).remove();
                        $('#'+container_id).val(container_array.join('`') + "");
                        edited_value = '';
                        record_id = '';
                    }
                    $('#'+display).find('tr:first-child').find('td:last-child').prepend('<a href="#" class="glyphicon glyphicon-edit" id='+field_id+'_edit_'+random_val +' title="Edit">');
                    editRecord(field_id,current_value,container_id,display,random_val);
                }
                $('#'+field_id).val('');
            }
            else{
                $('#'+error_id).addClass('error').text('Required Field');
            }
        }
        else{
            e.preventDefault();
            $('#'+error_id).text('Max length is ' + text_length + ' characters').addClass('error');$('.error');
            return;
        }
        deleteRecord(field_id,current_value,container_id,display,random_val);
    })
}

function editRecord(field_id,edit_id,container_id,display,identify_id){
    $('#'+field_id+'_edit_'+identify_id).click(function(e){
        e.preventDefault();
        $('#'+field_id).val(edit_id);
        edited_value = edit_id;
        record_id = identify_id;
    })

}

function deleteRecord(field_id,delete_id,container_id,display_id,identify_id){
    $('#'+field_id+'_delete_'+identify_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#'+container_id).val().split('`'));
        if($.inArray(delete_id, container_array) >= 0){
            if(confirm('Are you sure you want to delete?')){
                container_array.splice($.inArray(delete_id, container_array),1);
                $('#'+container_id).val(container_array.join('`') + "");
                $('table#'+display_id+' tr#'+field_id+'_'+identify_id).delay(300).fadeOut().remove();
            }
        }
    });
}

