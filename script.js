document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serverLink = document.getElementById('serverLink').value;
    const resultsDiv = document.getElementById('results');

    // Vérifiez si le lien est valide
    if (!isValidDiscordInviteLink(serverLink)) {
        resultsDiv.innerHTML = '<p>Lien de serveur Discord invalide. Veuillez entrer un lien valide.</p>';
        return;
    }

    // Exemple de requête API (vous devez remplacer par votre propre logique)
    fetch(`https://discord.com/api/v9/invites/${extractInviteCode(serverLink)}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bot YOUR_BOT_TOKEN' // Remplacez par votre token de bot
        }
    })
    .then(response => response.json())
    .then(data => {
        resultsDiv.innerHTML = `
            <h2>Résultats de la recherche</h2>
            <p>Nom du serveur: ${data.guild.name}</p>
            <p>ID du serveur: ${data.guild.id}</p>
            <p>Description: ${data.guild.description || 'Aucune description'}</p>
        `;
    })
    .catch(error => {
        resultsDiv.innerHTML = '<p>Erreur lors de la recherche du serveur. Veuillez réessayer.</p>';
        console.error('Error:', error);
    });
});

function isValidDiscordInviteLink(link) {
    const regex = /^https:\/\/discord\.gg\/[a-zA-Z0-9]+$/;
    return regex.test(link);
}

function extractInviteCode(link) {
    const regex = /discord\.gg\/([a-zA-Z0-9]+)/;
    const match = link.match(regex);
    return match ? match[1] : null;
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serverLink = document.getElementById('serverLink').value;
    const resultsDiv = document.getElementById('results');

    // Vérifiez si le lien est valide
    if (!isValidDiscordInviteLink(serverLink)) {
        resultsDiv.innerHTML = '<p>Lien de serveur Discord invalide. Veuillez entrer un lien valide.</p>';
        return;
    }

    // Exemple de requête API (vous devez remplacer par votre propre logique)
    fetch(`https://discord.com/api/v9/invites/${extractInviteCode(serverLink)}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bot YOUR_BOT_TOKEN' // Remplacez par votre token de bot
        }
    })
    .then(response => response.json())
    .then(data => {
        resultsDiv.innerHTML = `
            <h2>Résultats de la recherche</h2>
            <p>Nom du serveur: ${data.guild.name}</p>
            <p>ID du serveur: ${data.guild.id}</p>
            <p>Description: ${data.guild.description || 'Aucune description'}</p>
        `;
    })
    .catch(error => {
        resultsDiv.innerHTML = '<p>Erreur lors de la recherche du serveur. Veuillez réessayer.</p>';
        console.error('Error:', error);
    });
});

function isValidDiscordInviteLink(link) {
    const regex = /^https:\/\/discord\.gg\/[a-zA-Z0-9]+$/;
    return regex.test(link);
}

function extractInviteCode(link) {
    const regex = /discord\.gg\/([a-zA-Z0-9]+)/;
    const match = link.match(regex);
    return match ? match[1] : null;
}

