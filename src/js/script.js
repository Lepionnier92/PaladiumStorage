// src/js/script.js

/* Votre code JavaScript personnalisé */
// Attend que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://api.paladium.games/v1/status';
    const serverStatusElement = document.getElementById('serverStatus');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Récupération des informations spécifiques du serveur
            const javaGlobalStatus = data.java.global.status;
            const javaGlobalPlayers = data.java.global.players;
            const factions = data.java.factions;
            const launcherStatus = data.launcher.status;

            // Construction du contenu à afficher dans le <p>
            let serverInfo = `Statut du serveur Java : ${javaGlobalStatus}, ${javaGlobalPlayers} joueurs en ligne<br>`;
            serverInfo += `Statut du launcher : ${launcherStatus}<br><br>`;
            serverInfo += 'Factions :<br>';
            // Boucle à travers les factions
            Object.keys(factions).forEach(faction => {
                serverInfo += `- ${faction} : ${factions[faction]}<br>`;
            });

            // Affichage des données dans l'élément <p>
            serverStatusElement.innerHTML = serverInfo;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            serverStatusElement.textContent = 'Erreur lors de la récupération du statut du serveur';
        });
});

