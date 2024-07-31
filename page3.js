document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const phoneNumber = localStorage.getItem('phoneNumber') || 'Not provided';
    const name = localStorage.getItem('name') || 'Not provided';
    const email = localStorage.getItem('email') || 'Not provided';
    const birthday = localStorage.getItem('birthday') || 'Not provided';

    // Create and populate summary content
    const summaryContent = `
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
    `;

    // Insert summary content into the page
    document.getElementById('summaryContent').innerHTML = summaryContent;
});
