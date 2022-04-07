 $('.slider-service').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.slider-service',
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });


  $('.review-slider').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 1
  });

  if( $('.Validation').length)
         {
     $('.Validation').bootstrapValidator({
           feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'form-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
      });
             }