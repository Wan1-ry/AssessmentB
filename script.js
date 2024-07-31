document.addEventListener('DOMContentLoaded', function() {
    const mobileInput = document.getElementById('mobileNumber');
    const checkButton = document.getElementById('checkPoints');

    mobileInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    checkButton.addEventListener('click', function() {
        const mobileNumber = '+60' + mobileInput.value;
        if (mobileNumber === '+60173527250') {
            // Save phone number to localStorage
            localStorage.setItem('phoneNumber', mobileNumber);

            // Redirect to Page 2
            window.location.href = 'registration.html';
        } else {
            alert('Invalid mobile number. Please try again.');
        }
    });
});
