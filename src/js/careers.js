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

const handleCareersForm = () => {
  const careersJoinBtn = document.getElementById("careersJoinBtn")
  if (careersJoinBtn) {
    const careersForm = document.getElementById("careersForm")
    careersForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const selectPosition = document.getElementById("selectPosition")
      const position = selectPosition.options[selectPosition.selectedIndex].textContent.trim();
      const email = document.getElementById("careersEmail").value.trim();
      const data = {position, email}

      console.log(data)//POST

      document.querySelector("button.close").click();
    })
}
  }
  

export {careersAccordion,fileInput, handleCareersForm}