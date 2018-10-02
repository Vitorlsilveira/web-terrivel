
$('input[name=metodo]').change(function(){
    var value = $( 'input[name=metodo]:checked' ).val();
    $('form').attr("method", value);
});