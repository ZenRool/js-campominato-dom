// MAIN Function
const btnClick = () => {
    const gridArray = [];
    let gridSize = 0
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
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        gridArray.push(i+1)

        const box = generateGridItem(i+1, lv);

        box.addEventListener("click", function() {
            this.classList.add("active");
        });

        gridContainer.append(box);
    }    
    gridContainer.classList.remove("none");


}

function generateGridItem(number , lv) {
    const newElement = document.createElement("div");

    newElement.classList.add("grid-item");
    newElement.classList.add(lv);
    
    newElement.innerHTML = `<span>${number}</span>`

    return newElement;
}