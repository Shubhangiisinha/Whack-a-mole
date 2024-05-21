let score = 0;
let gameOver = false;
let currMoleTile = null;
let currPlantTile = null; // Corrected name to be consistent

window.onload = function() {
    setGame();
};

function setGame() {
    // Setup the grid in HTML
    for (let i = 0; i < 9; i++) {
        // Create a <div> element for each tile
        let tile = document.createElement("div");
        tile.id = i.toString(); // Set the ID of the tile (0 to 8)
        tile.addEventListener("click", selectTile); // Add click event listener
        document.getElementById("board").appendChild(tile); // Append tile to the board
    }
    setInterval(setMole, 2000);
    setInterval(setPlant, 2000); // Set interval for plant appearance
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    // Clear any existing mole from the current tile
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    // Create a new <img> element for the mole
    let mole = document.createElement("img");
    mole.src = "images/monty-mole.png"; // Adjust the path as needed

    // Get a random tile ID and set currMoleTile to that tile
    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);

    // Append the mole image to the current tile
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "images/piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(event) {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

