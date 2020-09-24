const random_number = Math.ceil(Math.random()*100)
let counter = 0

function getNumber() {
    let myNumber = document.querySelector("#inp_num").value;
    if (myNumber < 0 || myNumber>100 ) {
        document.querySelector('#result').innerHTML='Please enter a number between 0 and 100';
    } else {
        checkNumber(myNumber);
    }
}

function checkNumber(myNumber) {
    counter = counter + 1;
    if (myNumber > random_number) {
        document.querySelector('#result').innerHTML='it\'s low';     
    } else if (myNumber < random_number) {
        document.querySelector('#result').innerHTML='it\'s high';
    }else {
        feedback();
    }
}

function feedback() {
    alert(`${counter}. denemede buldun, tebrikler :) `);
    var txt;
    var r = confirm("Tekrar oynayalım mı?");
    if (r == true) {
        location.reload();
    } else {
        txt = "OK! Görüşürüz öyleyse";
    }
    
}