
//variables
let character = "chicken";
let characterImg = "Assets/Images/Chicken.png";
let bio = "";

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
        characterImg = "Assets/Images/Linus.png";
        bio = "You feel like you're an outcast from other people around town and you're generally slow to trust people. You also like yams and coconuts!";
    }
    else if ((month == 1 && day >19) || (month == 2 && day<=18)){
        character = "Wizard";
        characterImg = "Assets/Images/Wizard.png";
        bio = "You are a very spiritual and whimsical person. You like mushrooms and cucumbers!";
    }
    else if ((month == 2 && day >18) || (month == 3 && day<=20)){
        character = "Clint";
        characterImg = "Assets/Images/Clint.png";
        bio = "You're a handy person and you really like rocks. You also like artichoke dip and risotto!";
    }
    else if ((month == 3 && day >20) || (month == 4 && day<=19)){
        character = "Kent";
        characterImg = "Assets/Images/Kent.png";
        bio = "You're a mysterious one. No one really knows your story. You like risotto and hazelnuts!";
    }
    else if ((month == 4 && day >20) || (month == 5 && day<=20)){
        character = "Vincent";
        characterImg = "Assets/Images/Vincent.png";
        bio = "You're energy and like to explore! You like grapes and ginger ale.";
    }
    else if ((month == 5 && day >20) || (month == 6 && day<=21)){
        character = "Emily";
        characterImg = "Assets/Images/Emily.png";
        bio = "You're crafty and a little shy. You like burgers and precious stones!";
    }
    else if ((month == 6 && day >21) || (month == 7 && day<=22)){
        character = "Maru";
        characterImg = "Assets/Images/Maru.png";
        bio = "You like to help others and you're into science. You also like strawberries cheese!";
    }
    else if ((month == 7 && day >22) || (month == 8 && day<=22)){
        character = "Sam";
        characterImg = "Assets/Images/Sam.png";
        bio = "You are a music junkie and homebody. You like pizza and maple bars";

    }
    else if ((month == 8 && day >22) || (month == 9 && day<=22)){
        character = "Willy";
        characterImg = "Assets/Images/Willy.png";
        bio = "The ocean is your home. You like the beach and sea creatures!";
    }
    else if ((month == 9 && day >22) || (month == 10 && day<=23)){
        character = "Penny";
        characterImg = "Assets/Images/Penny.png";
        bio = "You're someone that people look up to. You like melons and poppies!";
    }
    else if ((month == 10 && day >23) || (month == 11 && day<=21)){
        character = "Sandy";
        characterImg = "Assets/Images/Sandy.png";
        bio = "You like thrifting and the desert. You also like daffodils and mango sticky rice!";
    }
    else if ((month == 11 && day >21) || (month == 12 && day<=21)){
        character = "Robin";
        characterImg = "Assets/Images/Robin.png";
        bio = "You're very comforting and helpful. You like peaches and spaghetti!";
    }

    changeImg();
};

// function to change image and update text
const changeImg = () =>{
    const mainImg = document.querySelector('.js-main-img');
    mainImg.src = characterImg;
    
    const revealText= document.querySelector('.js-reveal-text');
    const bioText = document.querySelector('.js-bio-text');

    revealText.innerHTML = "Your Character is "+character+"!";
    bioText.innerHTML = bio;

    revealText.style.display = "block";
    bioText.style.display = "block"
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
        helpBox.style.display = "none";
        isHelping = false;
    }
    else{
        helpBox.style.display = "flex";
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

const hiddenButton = document.querySelector('.js-hidden-button');
hiddenButton.addEventListener('click', function(event){
    event.preventDefault();
    getBday();
});

const musicButton = document.querySelector('.js-music-button');
musicButton.addEventListener('click', controlMusic);

const helpOpenButton = document.querySelector('.js-help-open-button');
helpOpenButton.addEventListener('click', showHelp);

const helpCloseButton = document.querySelector('.js-help-close-button');
helpCloseButton.addEventListener('click', showHelp);