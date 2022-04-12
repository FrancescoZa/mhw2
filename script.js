/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

function deselectContainers(data_question_id){


    for (var i = 0; i < container.length; i++) {
        
        if(container[i].dataset.questionId == data_question_id){
            checkbox[i].setAttribute('src', './images/unchecked.png')
            container[i].setAttribute("style", "background-color: #f4f4f4;");
            container[i].setAttribute("style", "opacity: 0.6;");
        }
    }

}

let unoSelected = false;
let dueSelected = false;
let treSelected = false;

function removeEventListeners(){
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].removeEventListener('click', onClick);
    }
}

function onClick(event){
    
    const checkB = event.currentTarget;
    const container = event.target.parentNode;
    const data_question_id = container.dataset.questionId
    deselectContainers(data_question_id); //with same data-question-id

    if(checkB.getAttribute('src') != "./images/checked.png"){

        checkB.setAttribute('src', './images/checked.png')
        container.setAttribute("style", "background-color: #cfe3ff;");
    
        switch(data_question_id){
            case "one":
                unoSelected = true;
                break;
    
            case "two":
                dueSelected = true;
                break;
    
            case "three":
                treSelected = true;
                break;
        }
        if(unoSelected == true && dueSelected == true && treSelected == true){
            removeEventListeners();
            getResult();
        }

    }
    
}



    /*
    blep: 0,
    burger: 1,
    cart: 2,
    dopey: 3,
    happy: 4,
    nerd: 5,
    shy: 6,
    sleeping: 7,
    sleepy: 8
    */

   
function getResult(){

    var finalRes = document.querySelector("#final_result");

    finalRes.setAttribute("style", "display: block;");

    
    let resultArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let strings = ["blep", "burger", "cart", "dopey", "happy", "nerd", "shy", "sleeping", "sleepy"]

    for(var i = 0; i < container.length; i++){
        if(checkbox[i].getAttribute('src') == "./images/checked.png")
        switch(container[i].dataset.choiceId){
            case "blep":
                resultArray[0] += 1;
                break;
            case "burger":
                resultArray[1] += 1;
                break;
            case "cart":
                resultArray[2] += 1;
                break;
            case "dopey":
                resultArray[3] += 1;
                 break;
            case "happy":
                resultArray[4] += 1;
                break;
            case "nerd":
                resultArray[5] += 1;
                break;
            case "shy":
                resultArray[6] += 1;
                break;
            case "sleeping":
                resultArray[7] += 1;
                break;
            case "sleepy":
                resultArray[8] += 1;
                break;
        
        }


    }

    
    //find the max

    let max = 0;
    let maxIndex = 0;

    for(let i= 0; i<9; i++){

        if(resultArray[i] > max){
            max = resultArray[i];
            maxIndex = i;
        }
    }

    
    const new_h1 = document.createElement('h1');
    const new_p = document.createElement('p');
    const new_button = document.createElement('button');
    new_button.addEventListener('click', onClickButton);

    new_h1.textContent = RESULTS_MAP[strings[maxIndex]].title;
    new_p.textContent = RESULTS_MAP[strings[maxIndex]].contents;
    new_button.textContent = "Ricomincia il quiz";
    const res = document.querySelector('#final_result');
    res.innerHTML = '';
    res.appendChild(new_h1);
    res.appendChild(new_p);
    res.appendChild(new_button);
}

function onClickButton(){

    for (var i = 0; i < container.length; i++) {                //reset boxes
        container[i].setAttribute("style", "opacity: 0.6;");
        checkbox[i].setAttribute('src', './images/unchecked.png')
    }
    
    for (var i = 0; i < checkbox.length; i++) {                 //reset event listeners
        checkbox[i].addEventListener('click', onClick);
    }

    unoSelected = false;
    dueSelected = false;
    treSelected = false;

    var finalRes = document.querySelector("#final_result");

    finalRes.setAttribute("style", "display: none;");

}

var checkbox = document.querySelectorAll(".checkbox");
var container = document.querySelectorAll(".choice-grid div");
var button = document.querySelector("button");

button.addEventListener('click', onClickButton);

for (var i = 0; i < container.length; i++) {
    container[i].setAttribute("style", "opacity: 0.6;");
}

for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', onClick);
}
