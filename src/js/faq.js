const faqAcc = () => {

    const acc = document.getElementsByClassName("faq-acc-item__header");
    let i;

    const  closeOthers = n => {
        for(let el of  acc) {
        const panel = el.nextElementSibling;
        if(el !== n)  {
            panel.style.maxHeight = null;
            panel.parentElement.classList.remove("faq-acc-item--active");
        }
           
        }
    }
        
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() { 
        closeOthers(this)
        const panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.parentElement.classList.remove("faq-acc-item--active");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";    
          panel.parentElement.classList.add("faq-acc-item--active");
        } 
      });
    }

}
const  questionAlert = (alerType,alertMessage) => {
  document.querySelector(".question-alert").classList.add("visible");
  document.querySelector(".question-alert").classList.add(alerType);
  document.querySelector(".question-alert").textContent = alertMessage;

  setTimeout(() => {
      document.querySelector(".question-alert").classList.remove("visible");
      document.querySelector(".question-alert").classList.remove(alerType);
  }, 3000);
}

const handleQuestionForm = () => {
  const sendBtn = document.getElementById("questionBtn");
    sendBtn.addEventListener("click", () => {
        const name = document.getElementById("questionName").value.trim();
        const email = document.getElementById("questionEmail").value.trim();
        const question = document.getElementById("yourQuestion").value.trim();

        if(name === "" || email === "" || question === "") {
          questionAlert("alert-danger","Please fill all inputs!");
        }  else {
            const data = {name,email,question};
            console.log(data)//POST

            questionAlert("alert-success", "Your question was successfully sent");

            //Clear Inputs
            document.getElementById("questionName").value = "";
            document.getElementById("questionEmail").value = "";
            document.getElementById("yourQuestion").value = "";

        }
       
    })
}

export {faqAcc,handleQuestionForm}