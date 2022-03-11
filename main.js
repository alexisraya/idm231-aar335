// TODO: clean up

/**
 * Initialize variables for the program
 * character, characterImg, bio represent assets/values associated w each character
 * month and day are for the month and day the user inputs
 * isPlaying indicates whether the music is playing
 * isHelping indicates whther the help block is showing
 */
let character = "chicken";
let hoveredChar = "chicken"
let characterImg = "Assets/Images/Chicken.png";
let bio = "";
let sfxmp3 = "";
let sfxogg = "";

let month = "";
let day = "";

let isPlaying = false;
let isHelping = false;
let isEgging = false;

/**
 * Function to retrieve the month and day that the user inputs
 * Both values are held into previously initiated variables
 */
const getBday = () => {
    // retrieve the value of the form input
    const date = document.querySelector('#date').value;
    // if there is no value placed, exit the function
    if (date.length <= 0) return;
    // set month and day to their respective values
    month = parseInt(date.substring(5,7));
    day = parseInt(date.substring(8,10));
    // go to the next step/function
    findBday();
};

/**
 * Function to find which character to user's bday matches with
 * Each character has their own if statement with the proper date ranges
 * The values of character, characterImg, and bio are then changed to the respective values that are associated w the character
 */
const findBday = () =>{
    // if statement for Linus
    if ((month == 1 && day <=19) || (month == 12 && day>21)){
        character = "Linus";
    }
    // if statement for Wizard
    else if ((month == 1 && day >19) || (month == 2 && day<=18)){
        character = "Wizard";
    }
    // if statement for Clint
    else if ((month == 2 && day >18) || (month == 3 && day<=20)){
        character = "Clint";
    }
    // if statement for Kent
    else if ((month == 3 && day >20) || (month == 4 && day<=19)){
        character = "Kent";
    }
    // if statement for Vincent
    else if ((month == 4 && day >20) || (month == 5 && day<=20)){
        character = "Vincent";
    }
    // if statement for Emily
    else if ((month == 5 && day >20) || (month == 6 && day<=21)){
        character = "Emily";
    }
    // if statement for Maru
    else if ((month == 6 && day >21) || (month == 7 && day<=22)){
        character = "Maru";
    }
    // if statement for Sam
    else if ((month == 7 && day >22) || (month == 8 && day<=22)){
        character = "Sam";
    }
    // if statement for Willy
    else if ((month == 8 && day >22) || (month == 9 && day<=22)){
        character = "Willy";
    }
    // if statement for Penny
    else if ((month == 9 && day >22) || (month == 10 && day<=23)){
        character = "Penny";
    }
    // if statement for Sandy
    else if ((month == 10 && day >23) || (month == 11 && day<=21)){
        character = "Sandy";
    }
    // if statement for Robin
    else if ((month == 11 && day >21) || (month == 12 && day<=21)){
        character = "Robin";
    }
    // move to the next step/function
    setBdayInfo();
};

const findClickedChar = () =>{
    if (hoveredChar == "Linus"){
        character = "Linus";
    }
    // if statement for Wizard
    else if (hoveredChar == "Wizard"){
        character = "Wizard";
    }
    // if statement for Clint
    else if (hoveredChar == "Clint"){
        character = "Clint";
    }
    // if statement for Kent
    else if (hoveredChar == "Kent"){
        character = "Kent";
    }
    // if statement for Vincent
    else if (hoveredChar == "Vincent"){
        character = "Vincent";
    }
    // if statement for Emily
    else if (hoveredChar == "Emily"){
        character = "Emily";
    }
    // if statement for Maru
    else if (hoveredChar == "Maru"){
        character = "Maru";
    }
    // if statement for Sam
    else if (hoveredChar == "Sam"){
        character = "Sam";
    }
    // if statement for Willy
    else if (hoveredChar == "Willy"){
        character = "Willy";
    }
    // if statement for Penny
    else if (hoveredChar == "Penny"){
        character = "Penny";
    }
    // if statement for Sandy
    else if (hoveredChar == "Sandy"){
        character = "Sandy";
    }
    // if statement for Robin
    else if (hoveredChar == "Robin"){
        character = "Robin";
    }
    setBdayInfo();
};

const setBdayInfo = () =>{
    // if statement for Linus
    if (character == "Linus"){
        characterImg = "Assets/Images/Linus.png";
        bio = "You feel like you're an outcast from other people around town and you're generally slow to trust people. You also like yams and coconuts!";
        sfxmp3 = "Assets/CharacterSounds/Linus.mp3";
        sfxogg = "Assets/CharacterSounds/Linus.ogg";
    }
    // if statement for Wizard
    else if (character == "Wizard"){
        characterImg = "Assets/Images/Wizard.png";
        bio = "You are a very spiritual and whimsical person. You like mushrooms and cucumbers!";
        sfxmp3 = "Assets/CharacterSounds/Wizard.mp3";
        sfxogg = "Assets/CharacterSounds/Wizard.ogg";
    }
    // if statement for Clint
    else if (character == "Clint"){
        characterImg = "Assets/Images/Clint.png";
        bio = "You're a handy person and you really like rocks. You also like artichoke dip and risotto!";
        sfxmp3 = "Assets/CharacterSounds/Clint.mp3";
        sfxogg = "Assets/CharacterSounds/Clint.ogg";
    }
    // if statement for Kent
    else if (character == "Kent"){
        characterImg = "Assets/Images/Kent.png";
        bio = "You're a mysterious one. No one really knows your story. You like risotto and hazelnuts!";
        sfxmp3 = "Assets/CharacterSounds/Kent.mp3";
        sfxogg = "Assets/CharacterSounds/Kent.ogg";
    }
    // if statement for Vincent
    else if (character == "Vincent"){
        characterImg = "Assets/Images/Vincent.png";
        bio = "You're energy and like to explore! You like grapes and ginger ale.";
        sfxmp3 = "Assets/CharacterSounds/Vincent.mp3";
        sfxogg = "Assets/CharacterSounds/Vincent.ogg";
    }
    // if statement for Emily
    else if (character == "Emily"){
        characterImg = "Assets/Images/Emily.png";
        bio = "You're crafty and a little shy. You like burgers and precious stones!";
        sfxmp3 = "Assets/CharacterSounds/Emily.mp3";
        sfxogg = "Assets/CharacterSounds/Emily.ogg";
    }
    // if statement for Maru
    else if (character == "Maru"){
        characterImg = "Assets/Images/Maru.png";
        bio = "You like to help others and you're into science. You also like strawberries and cheese!";
        sfxmp3 = "Assets/CharacterSounds/Maru.mp3";
        sfxogg = "Assets/CharacterSounds/Maru.ogg";
    }
    // if statement for Sam
    else if (character == "Sam"){
        characterImg = "Assets/Images/Sam.png";
        bio = "You are a music junkie and homebody. You like pizza and maple bars";
        sfxmp3 = "Assets/CharacterSounds/Sam.mp3";
        sfxogg = "Assets/CharacterSounds/Sam.ogg";

    }
    // if statement for Willy
    else if (character == "Willy"){
        characterImg = "Assets/Images/Willy.png";
        bio = "The ocean is your home. You like the beach and sea creatures!";
        sfxmp3 = "Assets/CharacterSounds/Willy.mp3";
        sfxogg = "Assets/CharacterSounds/Willy.ogg";
    }
    // if statement for Penny
    else if (character == "Penny"){
        characterImg = "Assets/Images/Penny.png";
        bio = "You're someone that people look up to. You like melons and poppies!";
        sfxmp3 = "Assets/CharacterSounds/Penny.mp3";
        sfxogg = "Assets/CharacterSounds/Penny.ogg";
    }
    // if statement for Sandy
    else if (character == "Sandy"){
        characterImg = "Assets/Images/Sandy.png";
        bio = "You like thrifting and the desert. You also like daffodils and mango sticky rice!";
        sfxmp3 = "Assets/CharacterSounds/Sandy.mp3";
        sfxogg = "Assets/CharacterSounds/Sandy.ogg";
    }
    // if statement for Robin
    else if (character == "Robin"){
        characterImg = "Assets/Images/Robin.png";
        bio = "You're very comforting and helpful. You like peaches and spaghetti!";
        sfxmp3 = "Assets/CharacterSounds/Robin.mp3";
        sfxogg = "Assets/CharacterSounds/Robin.ogg";
    }
    // move to the next step/function
    changeImg();
};
/**
 * Function to change image and update text elements
 * This will change the main image and reveal the name of the character that the user matches with and their bio
 */ 
const changeImg = () =>{
    // retrieve the character image element
    const mainImg = document.querySelector('.js-main-img');
    // retrieve the character name element
    const revealText= document.querySelector('.js-reveal-text');
    // retrieve the character bio element
    const bioText = document.querySelector('.js-bio-text');

    // change the source of the image to the correct character image
    // the value of characterImg was determined through findBday()
    mainImg.src = characterImg;
    // change the text of the element to be the character's name
    // the value of character was determined through findBday()
    revealText.innerHTML = "Your Character is "+character+"!";
    // change the text of the element to be the character's bio
    // the value of bio was determined through findBday()
    bioText.innerHTML = bio;

    // change the display of the character's name element and bio element to block so that they are not hidden
    revealText.style.display = "block";
    bioText.style.display = "block";
    // change the text of the button to 'Find Another Character'
    findButton.innerHTML = "Find Another Character!";
    playSFX();
};

const playSFX = () =>{
    const sfxAudio = document.querySelector('.js-sfx');
    const sfxSource_ogg = document.querySelector('.js-ogg');
    const sfxSource_mp3 = document.querySelector('.js-mp3');

    sfxSource_ogg.src = sfxogg;
    sfxSource_mp3.src = sfxmp3;
    sfxAudio.load();
    sfxAudio.play();
};
/**
 * Function to play/pause music
 * This will retrieve the music element and the music button's image
 * Depending on what isPlaying image is, the music will either play or pause
 * It will also set the button's image to it's opposite sign
 */
const controlMusic = () =>{
    // retrieve the music element
    const music = document.querySelector('.js-music');
    // retrieve the button's image element
    const musicImg = document.querySelector('.js-music-button-img');

    // if the music is playing, then pause the music and change the button's image to the play button
    if (isPlaying){
        music.pause();
        musicImg.src = "Assets/Images/Play.png";
        isPlaying = false;
    }
    // if the music isn't playing, then play the music and change the button's image to the pause button
    else{
        music.play();
        musicImg.src = "Assets/Images/Pause.png";
        isPlaying = true;
    }
};

/**
 * Function to show/hide the help box
 * This will retrieve the help box element
 * Then it will check if the help box is being displayed
 * Depending on if it is displayed or not, it will then hide/show the box
 */
const showHelp = () =>{
    // retrieve the help box element
    const helpBox = document.querySelector('.js-help-box');

    // if the help box is showing, then hide the box
    if (isHelping){
        helpBox.style.display = "none";
        isHelping = false;
    }
    // if the help box isn't showing, then show the box
    else{
        helpBox.style.display = "flex";
        isHelping = true;
    }

    // next step, displaying the main box that contains the character and form
    displayMainBox(isHelping);
};

/**
 * Function to show/hide the main box
 * This will retrieve the main box div element
 * Then it will check if the main box is being displayed
 * Depending on if it is displayed or not, it will then hide/show the box
 * This function will only play if the user clicks on the help button
 */
function displayMainBox(isHiding){
    const mainBox = document.querySelector('.js-main-box');
    if (isHiding){
        mainBox.style.display = "none";
    }
    else{
        mainBox.style.display = "flex";
    }
}

/**
 * Function to show/hide the main box
 * This will retrieve the main box div element
 * Then it will check if the main box is being displayed
 * Depending on if it is displayed or not, it will then hide/show the box
 * This function will only play if the user clicks on the help button
 */
 const showEgg = () =>{
    // retrieve the character container element
    const characterContainer = document.querySelector('.js-characters');

    // if the character container is showing, then hide the container
    if (isEgging){
        characterContainer.style.display = "none";
        isEgging = false;
    }
    // if the character container isn't showing, then show the container
    else{
        characterContainer.style.display = "grid";
        isEgging = true;
    }

};

/**
 * Event Listeners
 * These are for the 3 main actions the user can do:
 *  -enter their bday
 *  -play/pause the music
 *  -click on the help button
 */

// Retrieve element and add event for the submit button
const findButton = document.querySelector('.js-find-button');
findButton.addEventListener('click',getBday);

// Retrieve element and add event for the hidden submit button
// This button is hidden bc it's for those who use screen readers since the other main button is not in the form
const hiddenButton = document.querySelector('.js-hidden-button');
hiddenButton.addEventListener('click', function(event){
    // prevent the form from refreshing
    event.preventDefault();
    getBday();
});

// Retrieve element and add event for the music button
const musicButton = document.querySelector('.js-music-button');
musicButton.addEventListener('click', controlMusic);

// Retrieve element and add event for the help button
const helpOpenButton = document.querySelector('.js-help-open-button');
helpOpenButton.addEventListener('click', showHelp);

// Retrieve element and add event for the close button that is displayed when the help box is visible
const helpCloseButton = document.querySelector('.js-help-close-button');
helpCloseButton.addEventListener('click', showHelp);

// Retrieve element and add event for the easter egg button
const easterEggButton = document.querySelector('.js-easter-egg');
easterEggButton.addEventListener('click', showEgg);

const easterEggImgs = document.querySelectorAll('.js-character-card-img');
easterEggImgs.forEach((element) =>{
    element.addEventListener('click', function(){
        const altValue = element.getAttribute("alt");
        hoveredChar = altValue;
        findClickedChar();
    })
});