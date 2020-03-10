const scrollPortfolio = () => {

  $(".work-row:gt(2)").addClass("d-none");

  $(".show-more").click(() => {
    $(".work-row:gt(2)").toggleClass("d-none");
    $(".show-more img").toggleClass("rotate-arrow");
    $(".scroll-text.more").toggleClass("d-none");
    $(".scroll-text.few").toggleClass("d-none")

    // const topPos = $(".portfolio-wrapper").offset().top;
    // $("html,body").animate({scrollTop: topPos + 702},700);
  });
};
export default scrollPortfolio;