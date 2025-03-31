const espresse = require('express');
const http = require('http');
const stocketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use (express.static('public'));

let players = {};

io.on('connection', socket => {
    console.log('New Client Connected');
    
    // Générer un ID unique pour le nouveau joueur
const   playerId = socket.id;
players[playerId] = { x: 50, y: 50, color: 'red'};

// Envoyer la liste des joueurs à tous les clients
io.emit('updatePlayers', players);

socket.on('disconnect', () => {
    console.log('Client disconnected');
    delete players[playerId];
    io.emit('updatePlayers', players);
});

socket.on('move', (data) => {
    players[playerId] = data;
    io.emit('updatePlayers', players);
});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

