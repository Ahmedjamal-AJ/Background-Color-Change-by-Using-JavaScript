let colors = ['Aquamarine', 'Cornflowerblue', 'Darkgoldenrod', 'Lightgreen', 'Pink', 'Violet', ];
let colorName = document.querySelector('span');

function colorHandler() {
    const randomColor =Math.floor(Math.random()*6);
    document.body.style.backgroundColor = colors[randomColor];
    colorName.textContent = colors[randomColor];
}