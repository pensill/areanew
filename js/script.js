$( document ).ready(function() {

  /*scroll - плавный скрол по якорям*/
  $(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
    return false;
  });
/*scroll end*/

/*mail send*/
  $("#form-feedback").submit(function() {
    $.ajax({
      type: "POST",
      url: "form-feedback.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Ваше письмо успешно отправлено! Скоро мы с вами свяжемся.");
      $("#form-feedback").trigger("reset");
    });
    return false;
  });
/*mail send end*/
});