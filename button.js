$(document).ready(function(){
$("#hide").click(function(){
    $("body").hide();
  });

$("#show").click(function(){
    $("body").show();
  });
});

$(document).ready(function() {
  $('.hidden').hide();
   var i = 0;
      $('button').on('click', function() {
        if (i===0) {
$('.hidden').toggle();

    }
  });
});
