document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serverName = document.getElementById('serverName').value;
    const serverLink = document.getElementById('serverLink').value;
    const serverDescription = document.getElementById('serverDescription').value;
    const submitResultsDiv = document.getElementById('submitResults');

    // Vérifiez si le lien est valide
    if (!isValidDiscordInviteLink(serverLink)) {
        submitResultsDiv.innerHTML = '<p>Lien de serveur Discord invalide. Veuillez entrer un lien valide.</p>';
        return;
    }

    // Exemple de requête API pour soumettre le serveur (vous devez remplacer par votre propre logique)
    fetch('/submit_server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: serverName,
            link: serverLink,
            description: serverDescription
        })
    })
    .then(response => response.json())
    .then(data => {
        submitResultsDiv.innerHTML = `
            <h2>Serveur soumis avec succès</h2>
            <p>Votre serveur a été soumis et sera visible dans la recherche.</p>
        `;
    })
    .catch(error => {
        submitResultsDiv.innerHTML = '<p>Erreur lors de la soumission du serveur. Veuillez réessayer.</p>';
        console.error('Error:', error);
    });
});

function isValidDiscordInviteLink(link) {
    const regex = /^https:\/\/discord\.gg\/[a-zA-Z0-9]+$/;
    return regex.test(link);
}

