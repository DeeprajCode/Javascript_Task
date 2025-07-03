// Get the elements from the ID
const actionBtn = document.getElementById("actionBtn");
const usernameInput = document.getElementById("username");
const otpGroup  = document.getElementById("otpGroup");
const otpInput = document.getElementById("otp");

// Get the error elements
const userError = document.getElementById("userError");
const otpError = document.getElementById("otpError");


let generatedOTP = "";

// FUnction to generate OTP
actionBtn.addEventListener("click", function(){
    
    if(actionBtn.textContent === "Send OTP"){
        const username = usernameInput.value.trim();
         
        if(!username != " "){
            userError.textContent = "Please enter a username";
            return;
        }

        userError.textContent = "";

        // Generate OTP
        generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();

        // Send OTP to the user
        otpGroup.style.display = "block";
        actionBtn.textContent = "Verify OTP";

        // Display the OTP to the user
        alert("Your OTP is " + generatedOTP);
    }else if(actionBtn.textContent === "Verify OTP"){
        const otpValue = otpInput.value.trim();

        if(otpValue === ""){
            otpError.textContent = "Please enter the OTP";
            return;
        }

        if(otpValue !== generatedOTP){
            otpError.textContent = "Invalid OTP please try again";
            return;
        }


        otpError.textContent = "";

        alert("Login Successfully " + usernameInput.value);
        window.location.href = "employeeList.html";
    }
});