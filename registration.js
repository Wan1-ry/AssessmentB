document.addEventListener('DOMContentLoaded', function () {
    const noEmailCheckbox = document.getElementById('noEmail');
    const emailInput = document.getElementById('email');

    // Function to toggle email input based on checkbox
    function toggleEmailInput() {
        if (noEmailCheckbox.checked) {
            emailInput.disabled = true;
            emailInput.value = ''; // Optionally clear the value if disabled
        } else {
            emailInput.disabled = false;
        }
    }

    // Initial state of email input
    toggleEmailInput();

    // Add event listener to the checkbox
    noEmailCheckbox.addEventListener('change', toggleEmailInput);

    // Handle form submission
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect data from form fields
        const name = document.getElementById('name').value;
        const dd = document.getElementById('dd').value;
        const mm = document.getElementById('mm').value;
        const yyyy = document.getElementById('yyyy').value;
        const email = emailInput.value;
        const noEmail = noEmailCheckbox.checked;

        // Format birthday
        const birthday = `${dd}/${mm}/${yyyy}`;

        // Save data to localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('email', noEmail ? 'Not provided' : email);

        // Redirect to Page 3
        window.location.href = 'page3.html';
    });
});
