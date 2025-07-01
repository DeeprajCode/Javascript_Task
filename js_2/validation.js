function validation(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    // Get form inputs
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const countryInput = document.getElementById("country");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");

    // Get the values from the inputs and trim any extra spaces
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value.trim();
    const gender = genderInput.value.trim();
    const country = countryInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();

    // Error fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const ageError = document.getElementById("ageError");
    const genderError = document.getElementById("genderError");
    const countryError = document.getElementById("countryError");
    const phoneError = document.getElementById("phoneError");
    const addressError = document.getElementById("addressError");

    // Clear error messages
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";
    countryError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";

    let hasError = false; // This variable is used to track if there are any errors in the form inputs.

    if (!name) { // Checks if the name input is empty.
        nameError.textContent = "Name is required.";
        hasError = true;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Checks if the email input is empty or not in a valid format.
        emailError.textContent = "Valid email is required.";
        hasError = true;
    }
    if (!age || isNaN(age) || age < 18 || age > 100) { // Checks if the age input is empty, not a number, or not within the range of 18 to 100.
        ageError.textContent = "Age must be a number between 18 and 100.";
        hasError = true;
    }
    if (!gender) {
        genderError.textContent = "Gender is required.";
        hasError = true;
    }
    if (!country) {
        countryError.textContent = "Country is required.";
        hasError = true;
    }
    if (!phone || !/^\d{10}$/.test(phone)) { // Checks if the phone input is empty or not a 10-digit number.
        phoneError.textContent = "Valid phone number is required.";
        hasError = true;
    }
    if (!address) { // Checks if the address input is empty.
        addressError.textContent = "Address is required.";
        hasError = true;
    }

    if (hasError) return; // If there are any errors, the function will return and not proceed to submit the form.

    // If all validations pass, you can submit the form or perform further actions.
    alert("Form submitted successfully!");
}
validation(); // Call the validation function to ensure it runs when the script is loaded.
