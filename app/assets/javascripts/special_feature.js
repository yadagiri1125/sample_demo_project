function add_billboard_dayparts(){
    $('#add_billboard_dayparts').click(function(e){
        var billboard_daypart_id, container_array, container_value;
        billboard_daypart_id = $('#billboard_dayparts_select').val();
        container_value = $('#container_for_billboard_daypart').val();
        container_array = $.unique($('#container_for_billboard_daypart').val().split(','));
        e.preventDefault();
        if(billboard_daypart_id.length != 0){
            if(container_value.length == 0){
                $('#container_for_billboard_daypart').val(billboard_daypart_id);
            }else if($.inArray(billboard_daypart_id, container_array) >= 0) {
                $('#billboard_daypart_error').fadeIn(300).html('Record already exist').addClass('error');
                return;
            }else{
                $('#container_for_billboard_daypart').val(container_value + ',' + billboard_daypart_id);
            }
            $('#billboard_daypart_display').prepend('<tr id="billboard_daypart_'+ billboard_daypart_id +'"><td width="85%" style="word-wrap: break-word;">'+ $('#billboard_dayparts_select option:selected').text() +'</td>' +
                '<td><a id="billboard_daypart_value_'+ billboard_daypart_id +'" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a></td></tr>');
            $('#billboard_dayparts_select').val('');
            $('#billboard_daypart_error').hide();
            deleteBillboardDaypart(billboard_daypart_id);
        }
    });
}

// delete the BillboardDaypart from the table
function deleteBillboardDaypart(billboard_daypart_id){
    $("#billboard_daypart_value_"+ billboard_daypart_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#container_for_billboard_daypart').val().split(','));
        if($.inArray(billboard_daypart_id, container_array) >= 0) {
            if(confirm('Are you sure?')){
                container_array.splice($.inArray(billboard_daypart_id, container_array),1);
                $('#container_for_billboard_daypart').val(container_array + "");
                $('table#billboard_daypart_display tr#billboard_daypart_' + billboard_daypart_id).delay(300).fadeOut();
            }

        }
    })
}

function add_inform_dayparts(){
    $('#add_inform_daypart').click(function(e){
        var inform_daypart_id, inform_daypart_container_array, inform_daypart_container_value;
        inform_daypart_id = $('#inform_daypart_select').val();
        inform_daypart_container_value = $('#container_for_inform_daypart').val();
        inform_daypart_container_array = $.unique($('#container_for_inform_daypart').val().split(','));
        e.preventDefault();
        if(inform_daypart_id.length != 0){
            if(inform_daypart_container_value.length == 0){
                $('#container_for_inform_daypart').val(inform_daypart_id);
            }else if($.inArray(inform_daypart_id, inform_daypart_container_array) >= 0) {
                $('#inform_daypart_error').fadeIn(300).html('Record already exist').addClass('error');
                return;
            }else{
                $('#container_for_inform_daypart').val(inform_daypart_container_value + ',' + inform_daypart_id);
            }
            $('#inform_daypart_display').prepend('<tr id="inform_daypart_'+ inform_daypart_id +'"><td width="85%" style="word-wrap: break-word;">'+ $('#inform_daypart_select option:selected').text() +'</td>' +
                '<td><a id="inform_daypart_value_'+ inform_daypart_id +'" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a></td></tr>');
            $('#inform_daypart_select').val('');
            $('#inform_daypart_error').hide();
            deleteInformDaypart(inform_daypart_id);
        }
    });
}

function deleteInformDaypart(inform_daypart_id){
    $("#inform_daypart_value_"+ inform_daypart_id).click(function(e){
        var inform_daypart_container_array;
        e.preventDefault();
        inform_daypart_container_array = $.unique($('#container_for_inform_daypart').val().split(','));
        if($.inArray(inform_daypart_id, inform_daypart_container_array) >= 0) {
            if(confirm('Are you sure?')){
                inform_daypart_container_array.splice($.inArray(inform_daypart_id, inform_daypart_container_array),1);
                $('#container_for_inform_daypart').val(inform_daypart_container_array + "");
                $('table#inform_daypart_display tr#inform_daypart_' + inform_daypart_id).delay(300).fadeOut();
            }

        }
    })
}


function add_billboard_duration_sec() {
    $('#add_billboard_duration_sec').click(function (e) {
        var billboard_duration_sec_val, billboard_duration_container_array, billboard_duration_container_value;
        billboard_duration_sec_val = $('#billboard_duration_sec_value').val();
        billboard_duration_container_value = $('#container_for_billboard_duration_sec').val();
        billboard_duration_container_array = $.unique($('#container_for_billboard_duration_sec').val().split(','));
        e.preventDefault();
        if (billboard_duration_sec_val.length != 0 && billboard_duration_sec_val.length <= 10 && $.isNumeric(billboard_duration_sec_val) && isInteger(billboard_duration_sec_val)) {
            if (billboard_duration_container_value.length == 0) {
                $('#container_for_billboard_duration_sec').val(billboard_duration_sec_val);
            } else if ($.inArray(billboard_duration_sec_val, billboard_duration_container_array) >= 0) {
                $('#billboard_duration_sec_error').fadeIn(300).html('Record already exist').addClass('error');
                return;
            } else {
                $('#container_for_billboard_duration_sec').val(billboard_duration_container_value + ',' + billboard_duration_sec_val);
            }
            $('#billboard_duration_display').prepend('<tr id="billboard_duration_' + billboard_duration_sec_val + '"><td width="86%" style="word-wrap: break-word;">' + $('#billboard_duration_sec_value').val() + '</td>' +
                '<td><a id="billboard_duration_sec_value_' + billboard_duration_sec_val + '" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a></td></tr>');
            $('#billboard_duration_sec_value').val('');
            $('#billboard_duration_sec_error').hide();
            deleteBillboardDurationSec(billboard_duration_sec_val);
        }
    });
}

function deleteBillboardDurationSec(billboard_duration_sec_val){
    $("#billboard_duration_sec_value_"+ billboard_duration_sec_val).click(function(e){
        var billboard_duration_container_array;
        e.preventDefault();
        billboard_duration_container_array = $.unique($('#container_for_billboard_duration_sec').val().split(','));
        if($.inArray(billboard_duration_sec_val, billboard_duration_container_array) >= 0) {
            if(confirm('Are you sure?')){
                billboard_duration_container_array.splice($.inArray(billboard_duration_sec_val, billboard_duration_container_array),1);
                $('#container_for_billboard_duration_sec').val(billboard_duration_container_array + "");
                $('table#billboard_duration_display tr#billboard_duration_' + billboard_duration_sec_val).delay(300).fadeOut();
            }

        }
    });
}


function add_inform_duration_min() {
    $('#add_inform_duration_min').click(function (e) {
        var inform_duration_min_val, inform_duration_min_container_array, inform_duration_min_container_value;
        inform_duration_min_val = $('#inform_duration_min_value').val();
        inform_duration_min_container_value = $('#container_for_inform_duration_min').val();
        inform_duration_min_container_array = $.unique($('#container_for_inform_duration_min').val().split(','));
        e.preventDefault();
        if (inform_duration_min_val.length != 0 && inform_duration_min_val.length <= 10 && $.isNumeric(inform_duration_min_val) && isInteger(inform_duration_min_val)) {
            if (inform_duration_min_container_value.length == 0) {
                $('#container_for_inform_duration_min').val(inform_duration_min_val);
            } else if ($.inArray(inform_duration_min_val, inform_duration_min_container_array) >= 0) {
                $('#inform_duration_min_error').fadeIn(300).html('Record already exist').addClass('error');
                return;
            } else {
                $('#container_for_inform_duration_min').val(inform_duration_min_container_value + ',' + inform_duration_min_val);
            }
            $('#inform_duration_display').prepend('<tr id="inform_duration_' + inform_duration_min_val + '"><td width="86%" style="word-wrap: break-word;">' + $('#inform_duration_min_value').val() + '</td>' +
                '<td><a id="inform_duration_sec_value_' + inform_duration_min_val + '" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a></td></tr>');
            $('#inform_duration_min_value').val('');
            $('#inform_duration_min_error').hide();
            deleteInformDurationMin(inform_duration_min_val);
        }
    });
}

function deleteInformDurationMin(inform_duration_min_val){
    $("#inform_duration_sec_value_"+ inform_duration_min_val).click(function(e){
        var inform_duration_min_container_array;
        e.preventDefault();
        inform_duration_min_container_array = $.unique($('#container_for_inform_duration_min').val().split(','));
        if($.inArray(inform_duration_min_val, inform_duration_min_container_array) >= 0) {
            if(confirm('Are you sure?')){
                inform_duration_min_container_array.splice($.inArray(inform_duration_min_val, inform_duration_min_container_array),1);
                $('#container_for_inform_duration_min').val(inform_duration_min_container_array + "");
                $('table#inform_duration_display tr#inform_duration_' + inform_duration_min_val).delay(300).fadeOut();
            }

        }
    });
}

function isInteger(n) {
    return /^[0-9]+$/.test(n);
}