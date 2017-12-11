$(document).ready(function() {
 
     $('.nav-link').on('click', function() {
    $(this).parents().siblings().children().removeClass('active');
    $(this).addClass('active');
  });
});