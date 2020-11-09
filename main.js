const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    // Check if the shift key is down
    // And the input is checked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));