var field = document.getElementById("field");
var tiles = [];
var freeCell = {x: 3, y: 3};
var started = false;

function setCellOffset(cell, x, y) {
    function getOffset(c) {
        return (15 + (15 + 81.25) * c) + "px";
    }

    cell.style.left = getOffset(cell.x);
    cell.style.top = getOffset(cell.y);
}

function createCellNull() {
    var cell;
    cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
    return cell;
}

function appendCell(cell) {
    field.appendChild(cell);
}

function createField() {
    var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            cell = createCellNull();
            cell.y = y;
            cell.x = x;
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}