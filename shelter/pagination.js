import {pets} from './pets-data.js';
import {showModal} from './module.js';

const butFirst = document.querySelector("#but-first");
const butLeft = document.querySelector("#but-left");
const butRight = document.querySelector("#but-right");
const butLast = document.querySelector("#but-last");
const currPage = document.querySelector("#current-page");

const friendsList = document.querySelector(".friends_list");
let sliderCard;

let divPetsArray = [];
let cardsOnPage = 8;
let currPageNum = 1;
let canMove = {
    left: false,
    right: true
};


fillDivPetsArray();


cardCountOnResize();
window.addEventListener('resize', cardCountOnResize);

function fillDivPetsArray() {
    let basicPets = pets.slice();
    shuffle(basicPets, 0, pets.length);

    let startPos = 0, endPos = startPos + 5;

    for (let i = 0; i < 6; i++) {
        let shuffledArr = basicPets.slice();

        if (i % 3 === 0) {
            shuffle(shuffledArr, 0, 5);
            shuffle(shuffledArr, 6 ,7);
        } else if (i % 3 === 1) {
            shuffle(shuffledArr, 0, 3);
            shuffle(shuffledArr, 4, 8);
        } else {
            shuffle(shuffledArr, 0, 1);
            shuffle(shuffledArr, 2, 7);
        }

        for (let j = 0; j < shuffledArr.length; j++) {
            let divGenerated = generateCard(shuffledArr, j);
            divPetsArray.push(divGenerated);
        }
    }
}

// function fillDivPetsArray() {
//     let basicPets = pets.slice();
//     shuffle(basicPets, 0, pets.length);
//
//     let startPos = 0, endPos = startPos + 5;
//
//     for (let i = 0; i < 6; i++) {
//         let shuffledArr = basicPets.slice();
//         shuffle(shuffledArr, startPos, endPos);
//
//         for (let j = 0; j < shuffledArr.length; j++) {
//             let divGenerated = generateCard(shuffledArr, j);
//             divPetsArray.push(divGenerated);
//         }
//         if (startPos === 2) {
//             startPos = 0;
//         } else {
//             startPos++;
//         }
//         endPos = startPos + 5;
//     }
// }

function shuffle(array, startPos, endPos) {
    for (let i = startPos; i < endPos; i++) {
        const j = Math.floor(Math.random() * (endPos - startPos) + startPos);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function cardCountOnResize() {
    clear();
    if (window.innerWidth >= 1240) {
        cardsOnPage = 8;
    } else if (window.innerWidth >= 750) {
        cardsOnPage = 6;
    } else {
        cardsOnPage = 3;
    }
    currPageNum = 1;
    fillCurrentPage();
}

function clear() {
    friendsList.innerHTML = '';
}

function fillCurrentPage() {
    for (let i = cardsOnPage * currPageNum - cardsOnPage; i < cardsOnPage * currPageNum; i++) {
        friendsList.append(divPetsArray[i]);
    }
    sliderCard = document.querySelectorAll(".slider_card");
    sliderCard.forEach(element =>
        element.addEventListener('click', event => showModal(event))
    );
}


function generateCard(array, index) {
    const divCard = document.createElement('div');
    divCard.classList.add('slider_card');
    const cardIMG = document.createElement('img');
    cardIMG.src = array[index].src;
    const cardP = document.createElement('p');
    cardP.classList.add('slider_p');
    cardP.textContent = array[index].name;
    const button = document.createElement('button');
    button.classList.add('learn_more', 'btn');
    button.textContent = 'Learn more';
    divCard.append(cardIMG, cardP, button);

    return divCard;
}

butFirst.addEventListener('click', moveFirst);
butLeft.addEventListener('click', moveLeft);
butRight.addEventListener('click', moveRight);
butLast.addEventListener('click', moveLast);

function moveFirst() {
    if (canMove.left) {
        currPageNum = 1;
        currPage.innerHTML = currPageNum;
        clear();
        fillCurrentPage();

        inactivateLeftButtons();
        activateRightButtons();

        canMove.left = false;
        canMove.right = true;
    }
}

function moveLeft() {
    if (canMove.left) {
        currPageNum--;
        currPage.innerHTML = currPageNum;
        clear();
        fillCurrentPage();
        activateRightButtons();

        canMove.right = true;
    }
    if (currPageNum === 1) {
        canMove.left = false;
        inactivateLeftButtons();
    }

}

function moveRight() {
    if (canMove.right) {
        currPageNum++;
        currPage.innerHTML = currPageNum;
        clear();

        fillCurrentPage();
        activateLeftButtons();

        canMove.left = true;
    }
    if (currPageNum === divPetsArray.length / cardsOnPage) {
        canMove.right = false;
        inactivateRightButtons()
    }

}

function moveLast() {

    if (canMove.right) {
        currPageNum = divPetsArray.length / cardsOnPage;
        currPage.innerHTML = currPageNum;
        clear();
        fillCurrentPage();
        activateLeftButtons();
        inactivateRightButtons();
        canMove.right = false;
        canMove.left = true;
    }
}

function inactivateLeftButtons() {
    butFirst.classList.remove('active');
    butFirst.classList.add('inactive');
    butLeft.classList.remove('active')
    butLeft.classList.add('inactive');
}

function inactivateRightButtons() {
    butRight.classList.remove('active');
    butRight.classList.add('inactive');
    butLast.classList.remove('active')
    butLast.classList.add('inactive');
}

function activateLeftButtons() {
    butFirst.classList.remove('inactive');
    butFirst.classList.add('active');
    butLeft.classList.remove('inactive');
    butLeft.classList.add('active');
}

function activateRightButtons() {
    butRight.classList.remove('inactive');
    butRight.classList.add('active');
    butLast.classList.remove('inactive');
    butLast.classList.add('active');
}



