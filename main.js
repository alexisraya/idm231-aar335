
//variables
let character = "chicken";
let characterImg = "Assets/Images/Chicken.png";

let month = "";
let day = "";

let isPlaying = false;
let isHelping = false;

//function to find the month and day
const getBday = () => {
    const date = document.querySelector('#date').value;
    
    if (date.length > 0){
        month = parseInt(date.substring(5,7));
        day = parseInt(date.substring(8,10));
        findBday();
    }
};

// function to figure out zodiac
const findBday = () =>{
    if ((month == 1 && day <=19) || (month == 12 && day>21)){
        character = "Linus";
        characterImg = "Assets/Images/Linus.png"
    }
    if ((month == 1 && day >19) || (month == 2 && day<=18)){
        character = "Wizard";
        characterImg = "Assets/Images/Wizard.png"
    }
    if ((month == 2 && day >18) || (month == 3 && day<=20)){
        character = "Clint";
        characterImg = "Assets/Images/Clint.png"
    }
    if ((month == 3 && day >20) || (month == 4 && day<=19)){
        character = "Kent";
        characterImg = "Assets/Images/Kent.png"
    }
    if ((month == 4 && day >20) || (month == 5 && day<=20)){
        character = "Vincent";
        characterImg = "Assets/Images/Vincent.png"
    }
    if ((month == 5 && day >20) || (month == 6 && day<=21)){
        character = "Emily";
        characterImg = "Assets/Images/Emily.png"
    }
    if ((month == 6 && day >21) || (month == 7 && day<=22)){
        character = "Maru";
        characterImg = "Assets/Images/Maru.png"
    }
    if ((month == 7 && day >22) || (month == 8 && day<=22)){
        character = "Sam";
        characterImg = "Assets/Images/Sam.png"
    }
    if ((month == 8 && day >22) || (month == 9 && day<=22)){
        character = "Willy";
        characterImg = "Assets/Images/Willy.png"
    }
    if ((month == 9 && day >22) || (month == 10 && day<=23)){
        character = "Penny";
        characterImg = "Assets/Images/Penny.png"
    }
    if ((month == 10 && day >23) || (month == 11 && day<=21)){
        character = "Sandy";
        characterImg = "Assets/Images/Sandy.png"
    }
    if ((month == 11 && day >21) || (month == 12 && day<=21)){
        character = "Robin";
        characterImg = "Assets/Images/Robin.png"
    }

    changeImg();
};

// function to change image and update text
const changeImg =() =>{
    const mainImg = document.querySelector('.js-main-img');
    mainImg.src = characterImg;
    
    const revealText= document.querySelector('.js-reveal-text');

    revealText.innerHTML = "Your Character is "+character+"!";
    revealText.style.display = "block";
    findButton.innerHTML = "Find Another Character!";
};

// function to play/pause music
const controlMusic = () =>{
    const music = document.querySelector('.js-music');
    const musicImg = document.querySelector('.js-music-button-img');

    if (isPlaying){
        music.pause();
        musicImg.src = "Assets/Images/Play.png";
        isPlaying = false;
    }
    else{
        music.play();
        musicImg.src = "Assets/Images/Pause.png";
        isPlaying = true;
    }
};

//function to hide/show help box
function showHelp(){
    const helpBox = document.querySelector('.js-help-box');

    if (isHelping){
        helpBox.classList.remove("help__help-text--open");
        helpBox.classList.add("help__help-text--close");
        isHelping = false;
    }
    else{
        helpBox.classList.remove("help__help-text--close");
        helpBox.classList.add("help__help-text--open");
        isHelping = true;
    }
    displayMainBox(isHelping);
}

function displayMainBox(isHiding){
    const mainBox = document.querySelector('.js-main-box');
    if (isHiding){
        mainBox.style.display = "none";
    }
    else{
        mainBox.style.display = "flex";
    }
}

//Event Listeners
const findButton = document.querySelector('.js-find-button');
findButton.addEventListener('click', getBday);

const musicButton = document.querySelector('.js-music-button');
musicButton.addEventListener('click', controlMusic);

const helpOpenButton = document.querySelector('.js-help-open-button');
helpOpenButton.addEventListener('click', showHelp);

const helpCloseButton = document.querySelector('.js-help-close-button');
helpCloseButton.addEventListener('click', showHelp);