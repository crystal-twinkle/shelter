import {pets} from './pets-data.js';
import {showModal} from './module.js';

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const sliderContainer = document.querySelector(".slider-pets");
const itLeft = document.querySelector("#it-left");
const itRight = document.querySelector("#it-right");
const itActive = document.querySelector("#it-active");
let sliderCard;


let cardsCount;
let activeRandom = [];
let leftRandom = [];
let rightRandom = [];

let leftContent = [];
let activeContent = [];
let rightContent = [];

go();
window.addEventListener('resize', go);

function go() {
    clear();
    if (window.innerWidth >= 1130) {
        cardsCount = 3;
    } else if (window.innerWidth >= 750) {
        cardsCount = 2;
    } else {
        cardsCount = 1;
    }
    generateCardActive();
    generateCardRight();
    generateCardLeft();
}

function clear() {
    itActive.innerHTML = '';
    itLeft.innerHTML = '';
    itRight.innerHTML = '';
    leftContent = [];
    activeContent = [];
    rightContent = [];
    activeRandom = [];
}

function random() {
    return Math.floor(Math.random() * pets.length);
}


function generateCardActive() {
    for (let i = 0; i < cardsCount; i++) {
        let rand;
        do {
            rand = random();
        } while (activeRandom.includes(rand));
        activeRandom.push(rand);

        let divGenerated = generateCard(rand);
        itActive.append(divGenerated);
        activeContent.push(divGenerated);
    }
    forModule();

}

function generateCardLeft() {
    leftRandom = [];
    for (let i = 0; i < cardsCount; i++) {
        let rand;
        do {
            rand = random();
        } while (activeRandom.includes(rand) || leftRandom.includes(rand));
        leftRandom.push(rand);

        let divGenerated = generateCard(rand);
        itLeft.append(divGenerated);
        leftContent.push(divGenerated);
    }
    forModule();
}
function generateCardRight() {
    rightRandom = [];
    for (let i = 0; i < cardsCount; i++) {
        let rand;
        do {
            rand = random();
        } while (activeRandom.includes(rand) || rightRandom.includes(rand));
        rightRandom.push(rand);

        let divGenerated = generateCard(rand);
        itRight.append(divGenerated);
        rightContent.push(divGenerated);
    }
    forModule();
}

function generateCard(rand) {
    const divCard = document.createElement('div');
    divCard.classList.add('slider_card');
    const cardIMG = document.createElement('img');
    cardIMG.src = pets[rand].src;
    const cardP = document.createElement('p');
    cardP.classList.add('slider_p');
    cardP.textContent = pets[rand].name;
    const button = document.createElement('button');
    button.classList.add('learn_more', 'btn');
    button.textContent = 'Learn more';
    divCard.append(cardIMG, cardP, button);

    return divCard;

}

function forModule() {
    sliderCard = document.querySelectorAll(".slider_card");
    console.log(sliderCard);
    sliderCard.forEach(element =>
        element.addEventListener('click', event => showModal(event))
    );
}

arrowLeft.addEventListener('click', moveLeft);
arrowRight.addEventListener('click', moveRight);

function moveLeft() {
    if (leftContent.length === 0) {
        generateCardLeft();
    }
    sliderContainer.classList.add('trans-left');
    arrowLeft.removeEventListener("click", moveLeft);

    setTimeout(() => {
        sliderContainer.classList.remove('trans-left');
        itRight.innerHTML = itActive.innerHTML;
        itActive.innerHTML = itLeft.innerHTML;
        itLeft.innerHTML = '';
        rightContent = activeContent;
        activeContent = leftContent;
        leftContent = [];
        rightRandom = activeRandom;
        activeRandom = leftRandom;
        leftRandom = [];
        arrowLeft.addEventListener("click", moveLeft);
        forModule();
    }, 1000)
}


function moveRight() {
    if (rightContent.length === 0) {
        generateCardRight();
    }
    sliderContainer.classList.add('trans-right');
    arrowRight.removeEventListener("click", moveRight);

    setTimeout(() => {
        sliderContainer.classList.remove('trans-right');
        itLeft.innerHTML = itActive.innerHTML;
        itActive.innerHTML = itRight.innerHTML;
        itRight.innerHTML = '';
        leftContent = activeContent;
        activeContent = rightContent;
        rightContent = [];
        leftRandom = activeRandom;
        activeRandom = rightRandom;
        rightRandom = [];
        arrowRight.addEventListener("click", moveRight);
        forModule();
    }, 1000)


}

