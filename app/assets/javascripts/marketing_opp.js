function addMarketingOpp(){
    $('#add_marketing_opp').click(function (e) {
        var marketing_opp_val, container_array, container_value;
        marketing_opp_val = $('#marketing_opp_value').val();
        container_value = $('#container_for_marketing_opp').val();
        container_array = $.unique($('#container_for_marketing_opp').val().split('`'));
        e.preventDefault();
        if (marketing_opp_val.length != 0 && marketing_opp_val.length <= 200 ) {
            if (container_value.length == 0 ) {
                $('#container_for_marketing_opp').val(marketing_opp_val);
            }else if ($.inArray(marketing_opp_val, container_array) >= 0) {
                $('#display_marketing_opp_error').fadeIn(300).html('Record already exist').addClass('error');
                return;
            }else {
                $('#container_for_marketing_opp').val(container_value + '`' + marketing_opp_val);
            }
            container_array = $.unique($('#container_for_marketing_opp').val().split('`'));
            $('#marketing_opp_display tr').remove();
            $('#marketing_opp_value').val('');
            $.each(container_array, function(i, val){
                if(val.length > 0){
                    $('#marketing_opp_display').prepend('<tr id="marketing_opp_' + (i+1) + '">' +
                        '<td width="60%" style="word-wrap: break-word;">' + val + '</td>' +
                        '<td><a id="marketing_opp_edit_' + (i+1) + '" href= "#" class="glyphicon glyphicon-edit" title="Edit"></a>' +
                        '  <a id="marketing_opp_value_' + (i+1) + '" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a>' +
                        '</td></tr>');
                    editMarketingOpp((i+1));
                    deleteMarketingOpp((i+1));
                }
            });
        }else{
            e.preventDefault();
            $('#display_marketing_opp_error').text('Max Length is 200 Character').addClass('error');
        }
    });
}

function editMarketingOpp(random_val){
    $('#marketing_opp_edit_' + random_val).click(function(e){
        e.preventDefault();
        var container_array_opp= $('#container_for_marketing_opp').val();
        var marketing_opp_old = $('#marketing_opp_'+ random_val).children(':first').text().trim();
        var arr = '';  var txt = '';
        if ( !String.prototype.contains ) {
            String.prototype.contains = function() {
                return String.prototype.indexOf.apply( this, arguments ) !== -1;
            };
        }
        if($('#marketing_opp_value').val().length == 0){
            if(container_array_opp.contains(marketing_opp_old + '`')){
                $('#container_for_marketing_opp').val(container_array_opp.replace((marketing_opp_old + '`'),''));
            }else{
                $('#container_for_marketing_opp').val(container_array_opp.replace((marketing_opp_old),''));
            }
        }else{
            $.each($('#marketing_opp_display tr'), function(i,val){
                txt= $('#'+ val.id).children('td:first').text().trim();
                if(txt != marketing_opp_old){
                    arr = arr + '`'+ txt;
                }
            });
            $('#container_for_marketing_opp').val(arr);
        }
        $('#marketing_opp_value').val(marketing_opp_old);
    });
}

function deleteMarketingOpp(random_val){
    $("#marketing_opp_value_"+ random_val).click(function(e){
        var marketing_opp_old = $('#marketing_opp_value').val().trim();
        var arr = '';  var txt = '';
        e.preventDefault();
        if(confirm('Are you sure?')){
            if(marketing_opp_old.length > 0){
                $('#container_for_marketing_opp').val($('#container_for_marketing_opp').val()+ '`'+ marketing_opp_old);
            }
            $('table#marketing_opp_display tr#marketing_opp_' + random_val).remove();
            $.each($('#marketing_opp_display tr'), function(i,val){
                txt = $('#'+ val.id).children('td:first').text().trim();
                arr = arr + '`'+ txt;
            });
            $('#container_for_marketing_opp').val(arr);
            $('#marketing_opp_value').val('');
        }
    });
}
