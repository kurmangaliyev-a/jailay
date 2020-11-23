const  taskText = document.querySelector('#taskText')
const imgTaskText = document.querySelector('#imgTaskText');

taskText.oninput = function () {
    if (taskText.value!=''){
    imgTaskText.src = "https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{100}&space;\\fn_cs&space;\\large&space;"+taskText.value;
    }
};
