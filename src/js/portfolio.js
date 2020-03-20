const scrollPortfolio = () => {

  if(document.getElementById("portfolioWrapper")) {
    window.addEventListener("scroll", () => {
      const winScroll = window.scrollY;
      const accItems = document.getElementsByClassName("work-row")
        const lastAccItemPos = accItems[accItems.length - 1].offsetTop; 
        if(winScroll >= lastAccItemPos) {
          $(".show-more").addClass("position-absolute");
          $(".show-more img").addClass("rotate-arrow");
          $(".scroll-text.more").addClass("d-none");
        } else {
          $(".show-more").removeClass("position-absolute");
          $(".show-more  img").removeClass("rotate-arrow");
          $(".scroll-text.more").removeClass("d-none");
        }
  
      
    })
  }
  
};
export default scrollPortfolio;