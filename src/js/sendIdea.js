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
        const number = $("#number").val().trim();
        const sel = document.querySelector("#selectLand");
        const land = sel.options[sel.selectedIndex].value;

        if(name === "" || surname === "" || email === "" || number === "" || idea === "") {
            ideaAlert("alert-danger", "Please fill all inputs!")
        }  else {
            const data = {
                name,
                surname,
                email,
                number: land + number,
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
    
    $('.idea-input').on('focus', (e) => {
        $(e.target).prev().addClass("visible");
    }); 

    $('.idea-input').on('blur', (e) => {
        $(e.target).prev().removeClass("visible");
    }); 

    $('#number.idea-input').on('focus', (e) => {
        $(e.target).parent().prev().addClass("visible");
    }); 

    $('#number.idea-input').on('blur', (e) => {
        $(e.target).parent().prev().removeClass("visible");
    }); 
}
export {sendIdea,ideaForm};