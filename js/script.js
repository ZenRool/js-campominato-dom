// MAIN Function
const btnClick = () => {
    const gridArray = [];
    let gridSize = 0;
    let counter = 0;
    const lv = document.getElementById("levels").value;
    switch(lv) {
        case 'normal':
            gridSize = 100;
            break;
        case 'hard':
            gridSize = 81;
            break;
        case 'crazy':
            gridSize = 49;
            break;
        default:
            gridSize = 100;     
    }
    const mines = loserArray (gridSize); 
    mines.sort(); // debug
    console.log(mines); // debug
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        gridArray.push(i+1)

        const box = generateGridItem(i+1, lv);

        box.addEventListener("click", boxClick );
        box.minesPos = mines;

        gridContainer.append(box);
    }
    
    



    gridContainer.classList.remove("none");
    function boxClick() {
        const num = parseInt(this.querySelector("span").textContent);
        this.removeEventListener("click", boxClick );
        if (mines.includes(num)) {
            console.log (counter);
            for (let i = 0 ; i < gridSize ; i++) { 
                const boxControl = document.getElementsByClassName("grid-item")[i];
                boxControl.removeEventListener("click", boxClick);
                const numControl = parseInt(boxControl.querySelector("span").textContent);
                if (mines.includes(numControl)) {
                    boxControl.classList.add("boom");
                }
            }

        }
        else {
            this.classList.add("active");
            counter ++;
        }
    } 
}

function generateGridItem(number , lv) {
    const newElement = document.createElement("div");

    newElement.classList.add("grid-item");
    newElement.classList.add(lv);
    
    newElement.innerHTML = `<span>${number}</span>`

    return newElement;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function loserArray(max) {
    const arr = [];
    while (arr.length < 16) {
        const rnd = getRndInteger(1 , max);
        console.log(rnd);
        if (!arr.includes(rnd)) {
            arr.push(rnd);
        }
    }
    return arr;
}