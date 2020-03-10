const slickSlider = () => {
    $(".my-slider-area").slick({
        dots: false,
        slidesToShow: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        // centerMode: true,
        speed: 600,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              centerMode: true
            }
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1
            }
        }
    ]       
});
}
export default slickSlider