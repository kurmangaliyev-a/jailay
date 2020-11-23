const  taskText = document.querySelector('#taskText')
const textAreaTaskText = document.querySelector('#divAreaTaskText')
const imgTaskText = document.querySelector('#imgTaskText');
var input = document.body.children[0];


taskText.oninput = function () {
    textAreaTaskText.innerHTML = taskText.value;
    imgTaskText.src = "https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{100}&space;\\fn_cs&space;\\large&space;"+taskText.value;
};

//textAreaTaskText.innerHTML = textAreaTaskText.value;
