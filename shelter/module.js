import {pets} from './pets-data.js';

const body = document.querySelector("body");
const blackout = document.querySelector(".blackout");
let modal = document.querySelector(".modal");
let crossModal = document.querySelector(".cross-modal");

function showModal(event){
    let target = event.currentTarget;
    let targetName = target.querySelector(".slider_p").innerHTML;
    let targetPet;
    for (let pet of pets) {
        if (pet.name === targetName) {
            targetPet = pet;
            break;
        }
    }

    body.classList.toggle("scroll-no");
    blackout.classList.toggle("blackout-yes");
    modal.classList.remove("hidden");

    const modalHead = document.querySelector(".modal-head");
    const modalIMG = document.querySelector(".modal img");
    const modalSub = document.querySelector(".modal-sub");
    const modalDes = document.querySelector(".modal-des");
    const dogAge = document.querySelector(".modal-dog-age");
    const dogInoculations = document.querySelector(".modal-dog-inoculations");
    const dogDiseases = document.querySelector(".modal-dog-diseases");
    const dogParasites = document.querySelector(".modal-dog-parasites");
    modalIMG.src = targetPet.src;
    modalHead.innerHTML = targetPet.name;
    modalSub.innerHTML = targetPet.type + ' - ' + targetPet.breed;
    modalDes.innerHTML = targetPet.description;
    dogAge.innerHTML = targetPet.age;
    dogInoculations.innerHTML = targetPet.inoculations;
    dogDiseases.innerHTML = targetPet.diseases;
    dogParasites.innerHTML = targetPet.parasites;
}


crossModal.addEventListener("click", closeModule);
blackout.addEventListener("click", closeModule);
export {showModal};

function closeModule() {
    modal.classList.add("hidden");
    body.classList.remove("scroll-no");
    blackout.classList.remove("blackout-yes");
}