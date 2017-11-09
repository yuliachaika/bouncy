;(function($) {


$(document).ready(function(){
	
/* ---isotope filter--- */

const $elements = $('.grid').isotope({
 itemSelector: '.grid-item',
 percentPosition: true
});

$('.grid__btn').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    console.log(this);
     $elements.isotope({ filter: filterValue });
});

$('.grid__btn').on('click', function() {
    $('.grid__filters').find('.grid__btn--checked').removeClass('grid__btn--checked');
    $( this ).addClass('grid__btn--checked');
    console.log(this);
});

/* ---isotope filter--- */

/* ---slider--- */

$('.team__sliders').slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  arrows: false
});

$('.post-sliders').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  slidesToShow: 1,
  arrows: false
});

/* ---slider--- */


/* ---scroll--- */

$(".hero__menu").on("click","a", function (event) {
  event.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
 }, 500);
  $(".hero__menu").find('.hero__link--active').removeClass('hero__link--active');
  $( this ).addClass('hero__link--active');
});

$(".scroll-to").on("click", function (event) {
  event.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
 }, 1000);
});

/* ---scroll--- */

/* ----map--- */

function initMap() {
  var map;
  var mapContainer = $('#map')[0];
  var myCenter = {lat: 46.4782851, lng: 30.7235399};
  map = new google.maps.Map(mapContainer, {
    center: myCenter,
    zoom: 14,
  });

  var contentString = "<div style='float:left; padding-top: 20px;'><img width='80px' src='https://beetroot.se/wp-content/uploads/2016/04/logo.svg?x17685'></div><div style='float:right; padding: 20px;'><h3>Beetroot</h3>Astahkina Street 29<br/> Odessa,Ukraine</div>";
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
    position: myCenter,
    icon: {
          url: 'https://beetroot.se/wp-content/uploads/2016/04/cropped-favicon-150x150.png?x17685',
          scaledSize: new google.maps.Size(76, 76) 
        },
    map: map,
    title: 'Beetroot'
  });

  marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
  

}

$(window).on('load', function () {
  initMap();
});

/* ---map--- */

});

})(jQuery);




















