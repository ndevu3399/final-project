document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation
  
    // Clear previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    let isValid = true;
  
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Validate phone number
    if (!phone || phone.length < 10) {
      document.getElementById("phoneError").textContent = "Phone number must be at least 10 digits.";
      isValid = false;
    }
  
    // Validate message
    if (!message) {
      document.getElementById("messageError").textContent = "Please enter a message.";
      isValid = false;
    }
  
    // If everything is valid, you can proceed with form submission
    if (isValid) {
      // Submit form or handle submission logic (e.g., save data)
      alert("Form submitted successfully!");
    }
  });
  