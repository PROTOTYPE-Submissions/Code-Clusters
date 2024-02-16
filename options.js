function updateSelectedOptions() {
    const selectElement = document.getElementById('loginOptions');
    const selectedOptionsContainer = document.getElementById('selectedOptionsContainer');

    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);

    selectedOptionsContainer.innerHTML = ''; // Clear previous content

    if (selectedOptions.length > 0) {
        selectedOptions.forEach(option => {
            const optionBox = document.createElement('div');
            optionBox.className = 'selected-option-box';
            optionBox.textContent = option;
            selectedOptionsContainer.appendChild(optionBox);
        });
    }
}


function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Perform validation here if needed

    // Simulate sending data to a server (you can replace this with actual AJAX request)
    setTimeout(() => {
        document.getElementById("response").innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
    }, 1000);
}
