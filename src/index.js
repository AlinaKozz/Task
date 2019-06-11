const form = document.querySelector('.main');
const inputList = document.querySelectorAll('.row>input');
const inputArr = Array.prototype.slice.call(inputList);
const saveButton = document.querySelector('.btn');
var inputsValue = {};

function createObject(obj) {
    inputArr.forEach(function (e) {
        let key = e.name,
            tmp = obj;
        !tmp[key] && (tmp[key] = {});
        tmp[key] = e.value;
    });

    form.innerHTML = '<div class="container">Hi</div>';

    for (let key in obj) {
        let block = `<div class="row">${key}: ${obj[key]}</div>`;
        form.insertAdjacentHTML('beforeend', block);
        console.log(key + " = " + obj[key]);
    }

    let buttons = '<button class="download">Download JSON</button>' +
        '<button class="print" onclick="window.print()">Print</button>';
    form.insertAdjacentHTML('beforeend', buttons);

    return obj;
}

saveButton.addEventListener('click', function () {
    createObject(inputsValue);
    console.log(JSON.stringify(inputsValue));
});