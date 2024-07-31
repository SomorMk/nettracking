document.addEventListener('DOMContentLoaded', function () {
    // Get all tabs and content elements
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to remove the 'active' class from all tabs and contents
    function clearActive() {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
    }

    // Add click event listener to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Clear the active class from all tabs and contents
            clearActive();

            // Set the clicked tab and corresponding content as active
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Set the first tab and content as active initially
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
});