document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const selectedLanguage = event.currentTarget.querySelector('img').outerHTML + " " + event.currentTarget.textContent.trim();
        document.querySelector('.selected-language').innerHTML = selectedLanguage;
    });
});
