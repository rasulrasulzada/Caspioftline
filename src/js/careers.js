const careersAccordion = () => {

    var acc = document.getElementsByClassName("accordion-item__header");
    var i;

    const  closeOthers = n => {
        for(let el of  acc) {
        const panel = el.nextElementSibling;
        if(el !== n)  {
            panel.style.maxHeight = null;
            panel.parentElement.classList.remove("accordion-item--active");
        }
           
        }
    }
        
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() { 
        closeOthers(this)
        // this.classList.toggle("active");
        var panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.parentElement.classList.remove("accordion-item--active");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";    
          panel.parentElement.classList.add("accordion-item--active");
        } 
      });
    }

}

const scrollCareers = () => {

  $(".accordion-item:gt(2)").addClass("d-none");

  $(".more-career img").click(() => {
    $(".accordion-item:gt(2)").toggleClass("d-none");
    $(".more-career img").toggleClass("rotate-arrow");
    $(".more-career-text.more").toggleClass("d-none");
    $(".more-career-text.few").toggleClass("d-none")

  });
};
export {careersAccordion,scrollCareers}