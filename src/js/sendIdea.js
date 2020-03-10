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
            $(".modal-alert").addClass("visible");
        }  else {
            const data = {
                name: name,
                surname: surname,
                email: email,
                number: land + number,
                idea: idea
            }
            console.log(data)

            $(".modal-alert").removeClass("visible");
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
        console.log(e.target);
        $(e.target).prev().addClass("invisible");
    }); 

    $('.idea-input').on('blur', (e) => {
        $(e.target).prev().removeClass("invisible");
    }); 
}
export {sendIdea,ideaForm};