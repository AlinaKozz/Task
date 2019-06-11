const form = document.querySelector('.main');
const inputList = document.querySelectorAll('.row>input');
const inputArr = Array.prototype.slice.call(inputList);
const saveButton = document.querySelector('.btn');
var inputsValue = {};

function fileDownload(url) {
    let link = document.createElement('a');
    link.setAttribute('download', 'file.json');
    link.setAttribute('href', url);
    document.body.appendChild(link);
    link.click();
}

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

    const downloadButton = document.querySelector('.download');

    downloadButton.addEventListener('click', function () {
        let objectData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
        fileDownload(objectData);
    });

    return obj;
}

saveButton.addEventListener('click', function () {
    createObject(inputsValue);
    console.log(JSON.stringify(inputsValue));
});