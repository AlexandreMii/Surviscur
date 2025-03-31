const socket = io();

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 50, y: 50, color: 'red' };
let players = {};
let obstacles = [
    { x: 200, y: 200, width: 50, height: 50, color: 'black' },
    { x: 400, y: 400, width: 50, height: 50, color: 'black' }
];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner les obstacles
    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    // Dessiner les joueurs
    for (const id in players) {
        const p = players[id];
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 50, 50);
    }
}

function update() {
    draw();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        player.y = Math.max(0, player.y - 10);
    } else if (event.key === 'ArrowDown') {
        player.y = Math.min(canvas.height - 50, player.y + 10);
    } else if (event.key === 'ArrowLeft') {
        player.x = Math.max(0, player.x - 10);
    } else if (event.key === 'ArrowRight') {
        player.x = Math.min(canvas.width - 50, player.x + 10);
    }
    socket.emit('move', player);
});

socket.on('updatePlayers', (data) => {
    players = data;
});

update();

