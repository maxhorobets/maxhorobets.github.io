$(function () {
  
  var links = $('.link');  

  var linksLength = $(links).length;

  for (let i = 0; i < links.length; i++) {    
      
    if ($(links[i]).attr('href') === ('#drop-' + i)) {
      
      $(links[i]).on('click', function (e) {    
        e.preventDefault();
        $('#drop-' + i).slideToggle();       
        $(links[i]).parent().siblings().children('.dropdown').slideUp();
        $(links[i]).addClass('active');
        $(links[i]).parent().siblings().children('.link').removeClass('active');
      })
    }
      
  }

});