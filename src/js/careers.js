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

const fileInput = () => {
  const fileInputs = document.querySelectorAll("input[type=file]");
  for (let elem of fileInputs) {
    elem.addEventListener("change", function(e) {
      if(elem.files.length >= 1) {
        elem.previousElementSibling.classList.add("visible")
      } else {
        elem.previousElementSibling.classList.remove("visible")
      }
      
    })
  }
}

const scrollCareers = () => {

  if(document.getElementById("careersAccordion")) {


    const accElems = document.getElementsByClassName("accordion-item")
    const lastAccElemPos = accElems[accElems.length - 1].offsetTop;
    const lastAccElemHeight = accElems[accElems.length - 1].offsetHeight;
    console.log("window.innerHeight: " + window.innerHeight)
    if(window.innerHeight >= (lastAccElemPos + lastAccElemHeight) * 2) {
      $(".more-career").addClass("d-none")
      console.log("BIG")
    } else {
      $(".more-career").removeClass("d-none")
      console.log("NORMAL")
    }

    window.addEventListener("scroll", () => {
      const winScroll = window.scrollY;
      
        if(winScroll >= lastAccElemPos - 120) {
          $(".more-career").addClass("absolute-career-icon");
          $(".more-career img").addClass("rotate-arrow");
        } else {
          $(".more-career").removeClass("absolute-career-icon");
          $(".more-career img").removeClass("rotate-arrow");
        }
    })

  }
  

};
export {careersAccordion,fileInput,scrollCareers}