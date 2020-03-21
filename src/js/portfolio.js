const scrollPortfolio = () => {

  if(document.getElementById("portfolioWrapper")) {

    const accItems = document.getElementsByClassName("work-row")
    const lastAccItemPos = accItems[accItems.length - 1].offsetTop; 
    const lastAccItemHeight = accItems[accItems.length - 1].offsetHeight;

    if(window.innerHeight >= (lastAccItemPos + lastAccItemHeight) * 1.5) {
      $(".show-more").addClass("d-none");
    } else {
      $(".show-more").removeClass("d-none");
    }

    window.addEventListener("scroll", () => {
      const winScroll = window.scrollY;
     
        if(winScroll >= lastAccItemPos - 120) {
          $(".show-more").addClass("absolute-show-more");
          $(".show-more img").addClass("rotate-arrow");
        } else {
          $(".show-more").removeClass("absolute-show-more");
          $(".show-more  img").removeClass("rotate-arrow");
        }
  
      
    })
  }
  
};
export default scrollPortfolio;