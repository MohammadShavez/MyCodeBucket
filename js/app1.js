const phoneInput = document.querySelector('#number');

// Validate phone number input
phoneInput.addEventListener('input', function() {
    if (phoneInput.value.length === 10 && /^\d{10}$/.test(phoneInput.value)) {
        phoneInput.style.borderColor = 'green';
        console.log("Yes, this is working.");
    } else if (phoneInput.value === '') {
        phoneInput.style.borderColor = 'yellow';
    } else {
        console.log("Something is wrong.");
        phoneInput.style.borderColor = 'red';
    }
});

document.querySelector('#btn-submit').addEventListener('click', function() {
    const otp = OtpGenerate();  // Generate OTP
    const phoneInput = document.querySelector('#number');
    const otpContainer = document.querySelector('.otp-varified');
    const submitButton = document.querySelector('#btn-submit');
    

    submitButton.id = "btn-submit2"; // Change the button ID
    
    if (phoneInput.value.length === 10) {
        otpContainer.style.display = 'flex'; // Show OTP input field
        window.alert('Generated OTP: '+  otp);
        // store mobail number 
        localStorage.setItem('mobileNumber', phoneInput.value);
        // console.log("this the saving in local storage");
        // console.log(phoneInput.value);
        // const mobailNumber = phoneInput ;
    } else {
        otpContainer.style.display = 'none'; // Hide OTP input field
    }

    // Now, let's handle OTP verification in a separate event listener for the new button ID
    document.querySelector('#btn-submit2').addEventListener('click', function() {
        const userOtp = document.querySelector('.width-input-otp').value;
        // console.log( " User OTP" + userOtp);
        // console.log( "OTP  generate by system" +otp);
        if (userOtp === otp) {
            // console.log("Page change successful");
            window.location.href = '/new/newPage.html';  // Uncomment to redirect to a new page
        } else {
            alert("Incorrect OTP, please try again.");
        }
    });
});

// Function to generate OTP
function OtpGenerate() { 
    return Math.floor(1000 + Math.random() * 9000).toString(); // Ensure OTP is a string for comparison
}
