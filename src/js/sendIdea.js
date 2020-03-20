const  ideaAlert = (alerType,alertMessage) => {
    document.querySelector(".modal-alert").classList.add("visible");
    document.querySelector(".modal-alert").classList.add(alerType);
    document.querySelector(".modal-alert").textContent = alertMessage;
  
    setTimeout(() => {
        document.querySelector(".modal-alert").classList.remove("visible");
        document.querySelector(".modal-alert").classList.remove(alerType);
    }, 3000);
  }
  
const sendIdea = () => {
    $("#sendBtn").click(() => {
        const name = $("#name").val().trim();
        const surname = $("#surname").val().trim();
        const email = $("#email").val().trim();
        const idea = $("#idea").val().trim();    
        const ideaTitle = $("#idea-title").val().trim();    
        const number = $("#number").val().trim();
        const sel = document.querySelector("#selectLand");
        const land = sel.options[sel.selectedIndex].value;

        if(name === "" || surname === "" || email === "" || number === "" || ideaTitle === "" || idea === "") {
            ideaAlert("alert-danger", "Please fill all inputs!")
        }  else {
            const data = {
                name,
                surname,
                email,
                number: land + number,
                ideaTitle,
                idea
            }
            console.log(data)//POST

            ideaAlert("alert-success", "Your idea was successfully sent")

            //Clear inputs
            $("#name").val("")
            $("#surname").val("")
            $("#email").val("")
            $("#number").val("")
            $("#idea").val("")

            $("button.close").click();
        }
        
    })
    
}

const ideaForm = () => {
    $('#email.idea-input').on('blur', (e) => {
        const email = $("#email.idea-input").val().trim();
        if (email) {
            $("#email.idea-input").parent().addClass("email-item-active");
        } else {
            $("#email.idea-input").parent().removeClass("email-item-active");
        }
    }); 

    $('#number.idea-input').on('blur', (e) => {
        const number = $("#number.idea-input").val().trim();
        if (number) {
            $("#number.idea-input").parent().addClass("idea-item--active");
        } else {
            $("#number.idea-input").parent().removeClass("idea-item--active");
        }
    }); 
    


    
}
export {sendIdea,ideaForm};