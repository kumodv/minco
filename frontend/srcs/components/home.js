function home() {
    return `
        <h1>Welcome to DragonPong</h1>
        <div class="game-options">
            <div class="game-card">
                <h3>1 vs 1</h3>
                <button onclick="playLocal()">Play Local</button>
                <button onclick="playOther()">Play Other</button>
            </div>
            <div class="game-card">
                <h3>Tournament</h3>
                <button onclick="playTournament()">Play Now</button>
            </div>
            <div class="game-card">
                <h3>3D GAME</h3>
                <button onclick="play3D()">Play Now</button>
            </div>
        </div>
    `;
}

export default home;