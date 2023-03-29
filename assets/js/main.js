


function controlloEmail(){
    /* read the email from the input */
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
        document.writeln('Email scritta è presente')
    } else{
        document.writeln('Email scritta non è presente')
    }

    console.log(email)
}


