document.addEventListener('DOMContentLoaded', () => {
    const noteElement = document.getElementById('note');
    const rulesListElement = document.getElementById('rules-list');

    fetch('/data')
        .then(response => response.json())
        .then(data => {
            noteElement.textContent = data.note;
            data.rules.forEach(rule => {
                const listItem = document.createElement('li');
                listItem.textContent = rule;
                rulesListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
