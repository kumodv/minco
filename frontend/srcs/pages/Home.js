function Home() {
    const content = document.getElementById('content');

    content.innerHTML = `
        <div class="container-fluid py-4">
            <div class="row g-4">
                <div class="col-12">
                    <div class="game-card" style="background-image: url('srcs/logo/1vs1.png');">
                        <div class="card-content">
                            <h2>1 vs 1</h2>
                            <div class="button-group">
                                <button class="play-button">Play Local</button>
                                <button class="play-button">Play Other</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="game-card" style="background-image: url('srcs/logo/TM.png');">
                        <div class="card-content">
                            <h2>Tournament</h2>
                            <button class="play-button">Play Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="game-card" style="background-image: url('srcs/logo/3D.png');">
                        <div class="card-content">
                            <h2>3D GAME</h2>
                            <button class="play-button">Play Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default Home;