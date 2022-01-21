let character = "chicken";
let characterImg = "Assets/Images/Chicken.png";

let month = 00;
let day = 00;

const getBday = () => {
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;

    if (month != 00 && day !=00) {
        findBday();
    }
};

const findBday = () =>{
    if (month == 01){
        if (day <= 19){
            character = "Linus";
        }
        else{
        character = "Wizard";
        }
    }
    else if (month == 02){
        if (day <= 18){
            character = "Wizard";
        }
        else{
            character = "Clint";
        }
    }
    else if (month == 03){
        if (day <= 20){
            character = "Clint";
        }
        else{
            character = "Kent";
        }
    }
    else if (month == 04){
        if (day <= 19){
            character = "Kent";
        }
        else{
            character = "Vincent";
        }
    }
    else if (month == 05){
        if (day <= 20){
            character = "Vincent";
        }
        else{
            character = "Emily";
        }
    }
    else if (month == 06){
        if (day <= 21){
            character = "Emily";
        }
        else{
            character = "Maru";
        }
    }
    else if (month == 07){
        if (day <= 22){
            character = "Maru";
        }
        else{
            character = "Sam";
        }
    }
    else if (month == 08){
        if (day <= 22){
            character = "Sam";
        }
        else{
            character = "Willy";
        }
    }
    else if (month == 09){
        if (day <= 22){
            character = "Willy";
        }
        else{
            character = "Penny";
        }
    }
    else if (month == 10){
        if (day <= 23){
            character = "Penny";
        }
        else{
            character = "Sandy";
        }
    }
    else if (month == 11){
        if (day <= 21){
            character = "Sandy";
        }
        else{
            character = "Robin";
        }
    }
    else if (month == 12){
        if (day <= 21){
            character = "Robin";
        }
        else{
            character = "Linus";
        }
    }
};

