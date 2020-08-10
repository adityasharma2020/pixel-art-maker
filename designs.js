//variables to get canvas element,height,width
const c = document.getElementById('pixel_canvas');
let h = $("#input_height");
let w = $("#input_width");

//An event listener that comes into action when Submit button is clicked .
$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");


function makeGrid() {

    c.innerHTML = '';
    let height = h.val();
    let width = w.val();

    
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
