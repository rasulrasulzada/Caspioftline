const inputContactFocus = () => {
    $('#yourEmail.message-input').on('blur', (e) => {
        const email = $("#yourEmail.message-input").val().trim();
        if (email) {
            $("#yourEmail.message-input").parent().addClass("email-item-active");
        } else {
            $("#yourEmail.message-input").parent().removeClass("email-item-active");
        }
    }); 
     
}

const  messageAlert = (alerType,alertMessage) => {
    document.querySelector(".message-alert").classList.add("visible");
    document.querySelector(".message-alert").classList.add(alerType);
    document.querySelector(".message-alert").textContent = alertMessage;

    setTimeout(() => {
        document.querySelector(".message-alert").classList.remove("visible");
        document.querySelector(".message-alert").classList.remove(alerType);
    }, 3000);
}

const handleMessageForm = () => {
    const sendBtn = document.getElementById("messageBtn");

    if(sendBtn) {
        sendBtn.addEventListener("click", () => {
            const name = document.getElementById("yourName").value.trim();
            const surname = document.getElementById("yourSurname").value.trim();
            const email = document.getElementById("yourEmail").value.trim();
            const subject = document.getElementById("yourSubject").value.trim();
            const message = document.getElementById("yourMessage").value.trim();
    
            if(name === "" || surname === "" || email === "" || subject === "" || message === "") {
                messageAlert("alert-danger","Please fill all inputs!");
            }  else {
                const data = {name,surname,email,subject,message};
                console.log(data)//POST
    
                messageAlert("alert-success", "Your message was successfully sent");
    
                //Clear Inputs
                document.getElementById("yourName").value = "";
                document.getElementById("yourSurname").value = "";
                document.getElementById("yourEmail").value = "";
                document.getElementById("yourSubject").value = "";
                document.getElementById("yourMessage").value = "";
    
            }
           
        })


    }
    
    
}
export {inputContactFocus,handleMessageForm}