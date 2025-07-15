async function getMinecraftServerStatus(ip, port) {
    const url = `https://mcapi.us/server/status?ip=${ip}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch server status:', error);
        return null;
    }
}

async function displayOnlinePlayers() {
    const serverIP = 'play.cataniaroleplay.it';
    const serverPort = '25565';
    const status = await getMinecraftServerStatus(serverIP, serverPort);
    if (status) {
        if (status.online) {
            document.getElementById('onlinePlayers').innerHTML = status.players.now;
        }
    }
}

displayOnlinePlayers();