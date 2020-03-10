const ableSearch = () => {
    $('.search-icon').click(function(){
        // $('.my-navbar').addClass('justify-content-center');
        $('.my-navbar').addClass('search-active'); 
    })
}

const disableSearch = () => {
    $('.times-icon').click(function(){
        $('.my-navbar').removeClass('justify-content-center');
        $('.my-navbar').removeClass('search-active');
    })  

    $(document).click(function(e) {
        const _this = $(e.target);

        if(!_this.closest('.search').length && !_this.hasClass('search')) {
            $('.my-navbar').removeClass('justify-content-center');
            $('.my-navbar').removeClass('search-active');
        }
    });
}

const toggleNav = e => {
    $('.hamburger').click(function(){
        $('.logo').toggleClass('d-none'); 
        $('.nv-collapse').toggleClass('toggle-nav');
    });
    
    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger-active');
    });
}


const toDown = () => {
    $(".to-down").click(() => {
        const topPos = $("#main-content").offset().top;
        $("html,body").animate({scrollTop: topPos-50},700);
    })
}


export {ableSearch, disableSearch,toggleNav,toDown}
