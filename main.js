const getS = selector => document.querySelector(selector);

function editBtn() { //Edit button
    getS('.bottom').classList.remove('hidden')
    getS('.edit-block').classList.remove('hidden');
    getS('.style-block').classList.add('hidden')
    getS('.area').value = getS('.top').innerHTML;
    if (getS('.colors') != null) getS('.colors').remove();
}

function styleBtn() { //Style button
    getS('.bottom').classList.remove('hidden')
    getS('.style-block').classList.remove('hidden')
    getS('.edit-block').classList.add('hidden');
    getS('.area').style.height = '245px'
}

function saveBtn() { //Save button
    getS('.top').innerHTML = getS('.area').value;
    getS('.area').style.height = '245px'
    getS('.second-step').classList.add('hidden')
    getS('.bottom').classList.add('hidden');
}

function fontSize() {
    getS('.top').style.fontSize = event.target.value;
}

function fontFamily() {
    getS('.top').style.fontFamily = event.target.value;
}

function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
}

//Container for colors to choose on Style form
const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'pink', 'coral', 'purple'];

//Set text color
function textColor() {
    let clrs = getS('.colors');
    if (clrs == null) {
        let divColors = document.createElement('div');
        divColors.classList.add('colors');
        for (let i = 0; i < colors.length; i++) {
            let divColorBox = document.createElement('div');
            divColorBox.classList.add('color-box');
            divColorBox.style.background = colors[i];
            divColorBox.setAttribute('onclick', 'chooseTextColor()');
            divColors.appendChild(divColorBox);
        }
        getS('.bottom').appendChild(divColors);
    } else
        for (let e of clrs.children) e.setAttribute('onclick', 'chooseTextColor()');
}

//Set background
function bgdColor() {
    let clrs = getS('.colors');
    if (clrs == null) {
        let divColors = document.createElement('div');
        divColors.classList.add('colors');
        for (let i = 0; i < colors.length; i++) {
            let divColorBox = document.createElement('div');
            divColorBox.classList.add('color-box');
            divColorBox.style.background = colors[i];
            divColorBox.setAttribute('onclick', 'chooseBgColor()');
            divColors.appendChild(divColorBox);
        }
        getS('.bottom').appendChild(divColors);
    } else
        for (let e of clrs.children) e.setAttribute('onclick', 'chooseBgColor()');
}

function chooseTextColor() {
    getS('.top').style.color = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}

function chooseBgColor() {
    getS('.top').style.backgroundColor = event.target.style.backgroundColor;
    event.target.parentElement.remove();
}

function addBtn() {
    getS('.area').style.height = '100px'
    getS('.second-step').classList.remove('hidden')
}

function createTableControls() {
    getS('.table-box').classList.remove('hidden')
    getS('.list-box').classList.add('hidden');
}

function createListControls() {
    getS('.list-box').classList.remove('hidden');
    getS('.table-box').classList.add('hidden')
}

//Create table html
function createTable() {
    const countTr = getS('#countTr').value;
    const countTd = getS('#countTd').value;
    const tw = getS('#widthTd').value + 'px';
    const th = getS('#heightTd').value + 'px';
    const bw = getS('#widthBorder').value + 'px';
    const stl = getS('#typeBorder').value;
    const clr = getS('#colorBorder').value;
    let table = `<table>`
    for (let i = 1; i <= countTr; i++) {
        table += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            table += `<td style="width: ${tw}; height: ${th}; border: ${bw} ${stl} ${clr};">TD</td>`;
        }
        table += `</tr>`;
    }
    table += `</table>`
    getS('#countTr').value = '';
    getS('#countTd').value = '';
    getS('.area').value += table;
    getS('.second-step').classList.add('hidden');
    getS('.area').style.height = '245px'
}

//Create list html
function createList() {
    const liCount = +getS('#countLi').value;
    const markType = getS('#typeOfMarks').value;

    let list = `<ul style="list-style-type: ${markType}">`
    for (let i = 1; i <= liCount; i++) {
        list += `<li>Li ${i}</li>`
    }
    list += '</ul>'
    getS('.area').value += list;
    getS('.second-step').classList.add('hidden');
    getS('.area').style.height = '245px'
}