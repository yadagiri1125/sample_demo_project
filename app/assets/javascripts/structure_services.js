// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
 $(document).ready(function() {

    $('#structure_service_media_type_id').change(function(){
      $('#structure_selection').children().remove();
      var id = $(this).val();
      $.ajax({
        url: "/structures_sel",
        type: 'GET',
        data: {"media_type_id": id}        
      });
    });
  });