// Check that Email and Message fields are filled out.

function validityCheck() {
    const email = document.querySelector(".email_input");    
    let message = "Please fill out the ";

    if (!email.checkValidity()) {
        message += "Email ";
    }

    const message_input = document.querySelector(".message_input");
    if (!message_input.checkValidity()) {
        if (message.charAt(20)) {
            message += "and Message fields before submitting.";
        } 
        else {
            message += "Message field before submitting.";
        }
    } 
    else {
        message += "field before submitting.";
    }

    if (!email.checkValidity() || !message_input.checkValidity()) {

        var x = document.getElementById("snackbar");
        x.className = "show";
        x.innerHTML = message;
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4500);
    }
}

