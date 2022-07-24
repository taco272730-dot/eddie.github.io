$('.wrapper header a, .top_btn, #intro_more_btn').click(function(e){
    $.scrollTo( this.hash || 0, 1200);
    e.preventDefault();
});

// slider
$('.multiple-items').slick({
  infinite: true,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
