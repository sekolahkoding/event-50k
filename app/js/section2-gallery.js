$(function (){
  
  // Cache vars
  var $gallery = $('.gallery'),
      $lightbox = $('.lightbox'),
      $figure = $('figure'),
      $close = $('.close');


  var linkKeGambar = ["images/sekolahkoding.JPEG",
                      "images/sekolahkoding6.png",
                      "images/sekolahkoding3.jpeg",
                      "images/sekolahkoding4.jpeg",
                      "images/sekolahkoding5.jpeg",
                      "images/sekolahkoding2.jpeg"]
    
      
//       var item = $('<div class="item" data-full="'+full+'"><img src="'+thumb+'" /></div>');
      
//       $gallery.append(item);
 for (var i = 0; i < linkKeGambar.length; i++) {
    $gallery.append('<div class="item" data-full="'+linkKeGambar[i]+'"><img src="'+linkKeGambar[i]+'" /></div>');
  }

  $('.item').on('click', function() {
    
    var full = $(this).attr('data-full');
    
    toggleLightbox(full);
    
    console.log(full);
        
  });

  // Toggle lightbox
  function toggleLightbox(srcHolder) {
    if ($lightbox.is('.open')) {
      
      $lightbox
        .removeClass('open')
        .fadeOut(200);
      
    } else {
      $figure.css('background-image', "url("+srcHolder+")");
      $lightbox
        .addClass('open')
        .fadeIn(200);
      
    }
    
  }
  
  // Close 
  $lightbox.on('click', toggleLightbox);
  
  // Dribbble API shizzz
//   var token = 'b5501bcf1ef8eca0ef89aa3982ca742556d65b1832e077019397bbe0960df317';
//   var url = 'https://api.dribbble.com/v1/shots?sort=recent&access_token=' + token;
  
//   // Grab Dribbble popular
//   $.getJSON(url, function(data) {

//     $.each(data, function(index, shot) {
      
//       var thumb = shot.images.teaser,
//           full = shot.images.hidpi || shot.images.normal;
      
//       var item = $('<div class="item" data-full="'+full+'"><img src="'+thumb+'" /></div>');
      
//       $gallery.append(item);

//     });
    
//     // Handle item click
//     $('.item').on('click', function() {
      
//       var full = $(this).attr('data-full');
      
//       toggleLightbox(full);
      
//       console.log(full);
          
//     });
    
//     // Toggle lightbox
//     function toggleLightbox(url) {
      
//       if ($lightbox.is('.open')) {
        
//         $lightbox
//           .removeClass('open')
//           .fadeOut(200);
        
//       } else {
                
//         $figure.css('background-image', 'url(' + url + ')');
//         $lightbox
//           .addClass('open')
//           .fadeIn(200);
        
//       }
      
//     }
    
//     // Close 
//     $lightbox.on('click', toggleLightbox);

// });
  
});