function showDetails(name, matches, runs, bestScore, wickets = null, economy = null) {
    let info = `Name: ${name}\nMatches Played: ${matches}\nRuns Scored: ${runs}\nBest Score: ${bestScore}`;

    if (wickets !== null && economy !== null) {
        info += `\nWickets: ${wickets}\nEconomy: ${economy}`;
    }

    alert(info);
}

function searchCricketer() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const playerName = card.querySelector('h3').innerText.toUpperCase();
        if (playerName.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function showDetails(name, matches, runs, bestScore, wickets = null, economy = null) {
    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-matches').innerText = `Matches Played: ${matches}`;
    document.getElementById('popup-runs').innerText = `Runs Scored: ${runs}`;
    document.getElementById('popup-best').innerText = `Best Score: ${bestScore}`;

    if (wickets !== null && economy !== null) {
        document.getElementById('popup-wickets').innerText = `Wickets: ${wickets}`;
        document.getElementById('popup-economy').innerText = `Economy: ${economy}`;
        document.getElementById('popup-wickets').style.display = 'block';
        document.getElementById('popup-economy').style.display = 'block';
    } else {
        document.getElementById('popup-wickets').style.display = 'none';
        document.getElementById('popup-economy').style.display = 'none';
    }

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function searchCricketer() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const playerName = card.querySelector('h3').innerText.toUpperCase();
        if (playerName.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
