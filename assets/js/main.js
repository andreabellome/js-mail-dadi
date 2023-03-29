

/* start: check if email is in the list */
function controlloEmail(){
    
    let email = document.getElementById('inputEmail').value;

    let arrayEmail = [
        'email1@gmail.com',
        'email2@gmail.com',
        'email3@gmail.com',
        'email4@gmail.com'
    ]

    let dummyVar = false;

    for(let i = 0; i < arrayEmail.length; i++){
        if( arrayEmail[i] == email ){
            dummyVar = true;
        }
    }

    if(dummyVar == true){
        var emailWrite = 'Email scritta è presente';
    } else{
        var emailWrite = 'Email scritta non è presente';
    }

    document.getElementById('generateResult-1').innerText = emailWrite;

    /* start: soluzione con .includes */
    /* if( arrayEmail.includes(email) ){
        document.writeln('Email scritta è presente')
    } else{
        document.writeln('Email scritta non è presente')
    } */
    /* end: soluzione con .includes */

}
/* end: check if email is in the list */

var elementDiv2 = document.getElementById("generateResult-1");
const buttonGen2 = document.getElementById("genPressButt-1");
buttonGen2.addEventListener("click", () => {
    elementDiv2.style.display = "block";
})


/* var elementDiv1 = document.getElementById("generateResult-1");
const buttonGen1 = document.getElementById("genPressButt-1")
buttonGen.addEventListener("click", () => {
    elementDiv1.style.display = "block";
}) */


/* start: generate a random number in [min,max] */
function randNum(min, max){
    var randNum1 = Math.floor( Math.random() * max ) + min 
    return randNum1
}
/* end: generate a random number in [min,max] */

function letsPlay(){
    let cpuNum = randNum(1, 6);
    let userNum = randNum(1, 6);

    if (cpuNum == userNum){
        var result = 'Pareggio';
    } else if (cpuNum > userNum){
        var result = 'Vittoria CPU';
    } else if (cpuNum < userNum){
        var result = 'Vittoria USER';
    }

    document.getElementById('generateResult-2').innerText = result;

}

var elementDiv = document.getElementById("generateResult-2");
const buttonGen = document.getElementById("genPressButt-2")
buttonGen.addEventListener("click", () => {
    elementDiv.style.display = "block";
})

