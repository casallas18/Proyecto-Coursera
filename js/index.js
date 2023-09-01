
$(function(){
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
    interval: 5000
  });
  
  $('#contacto').on('show.bs.modal', function(e){
    console.log('El modal contacto se esta mostrando');
  
    $('#contactoBtn').removeClass('btn-outline-success');
    $('#contactoBtn').addClass('btn-contacto');
    $('#contactoBtn').prop('disabled', true);
  
  });

  $('#contacto').on('hidden.bs.modal', function(e){
    console.log('El modal contacto se oculto');
    $('#contactoBtn').prop('disabled', false);
  });

});