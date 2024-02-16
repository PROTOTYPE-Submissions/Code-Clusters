function updateSelectedOptions() {
    const selectElement = document.getElementById('loginOptions');
    const selectedOptionsContainer = document.getElementById('selectedOptionsContainer');

    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const details = selectedOption.getAttribute('data-details');

    selectedOptionsContainer.innerHTML = ''; // Clear previous content

    if (details) {
        const card = document.createElement('div');
        card.className = 'hover-card';
        card.textContent = details;
        selectedOptionsContainer.appendChild(card);
    }
}
