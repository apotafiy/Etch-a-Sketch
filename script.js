const fullGrid = document.querySelector(".full-grid");

const populateGrid = function (num) {
    num = Math.pow(Math.ceil(Math.sqrt(num)), 2);
    while (fullGrid.firstChild) {
        fullGrid.removeChild(fullGrid.firstChild);
    }
    fullGrid.style.cssText += `grid-template-columns: repeat(${Math.sqrt(num)}, 1fr);`;
    for (let i = 0; i < num; i++) {
        let newChild = document.createElement("div");
        let changeColor = function (e) {
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            newChild.style = `background-color: rgb(${Math.floor(r)}, ${Math.floor(
                g
            )}, ${Math.floor(b)});`;
        };
        newChild.addEventListener("mouseenter", changeColor);
        fullGrid.appendChild(newChild);
    }
};
populateGrid(1000);

let eventFunc = function (e) {
    let num;
    do {
        let pro = prompt("How many sqaures would you like?");
        num = parseInt(pro);
    } while (isNaN(num));
    num = Math.min(num, 5000);
    num = Math.abs(num);
    populateGrid(num);
};

document.querySelector("#clear-button").addEventListener("click", eventFunc);
