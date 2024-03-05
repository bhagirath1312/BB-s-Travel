var isDisplayed = false;

function toggleDisplay() {
    var elements = document.getElementsByClassName("hide");
    if (!isDisplayed) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.transition = "width 1s"
            elements[i].style.hover= "width = 500px"
            elements[i].style.display = "flex"; // Show the elements
        }
        isDisplayed = true;
    } else {
        window.location.href = "about_me.html"; // Redirect to index.html
    }
}

function fun1() {
    var email = document.getElementById("subscribe_email").value.trim(); // Get the value of the input field and remove leading/trailing whitespace
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regular expression for validating email addresses

    if (email === "") {
        alert("Please enter an email address.");
        return; // Stop execution if email is empty
    } 
    
    if (!regex.test(email)) {
        alert("Invalid Email");
        return; // Stop execution if email is invalid
    }
    
    var confirmation = confirm("Congratulations!!");
    if (confirmation) {
        window.location.href = "index.html";
    }
}


