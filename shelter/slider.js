let pets = [
    {
        name: "Jennifer",
        src: "pic/pets-jennifer.png",
        img: null,
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        name: "Sophia",
        src: "pic/pets-sophia.png",
        img: null,
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        name: "Woody",
        src: "pic/pets-woody.png",
        img: null,
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"]
    },
    {
        name: "Scarlett",
        src: "pic/pets-scarlett.png",
        img: null,
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        name: "Katrine",
        src: "pic/pets-katrine.png",
        img: null,
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        name: "Timmy",
        src: "pic/pets-timmy.png",
        img: null,
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"]
    },
    {
        name: "Freddie",
        src: "pic/pets-freddie.png",
        img: null,
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        name: "Charly",
        src: "pic/pets-charly.png",
        img: null,
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"]
    }
];
const imgArray = [];

function loadImages() {
    for (let i = 0; i < pets.length; i++) {
        let src = pets[i].src;
        const img = document.createElement('img');
        img.src = src;
        pets[i].img = img;
        imgArray.push(img);
    }
}
loadImages();


const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const slider = document.querySelector(".slider-pets");
const itLeft = document.querySelector("#it-left");
const itRight = document.querySelector("#it-right");
const itActive = document.querySelector("#it-active");
const generateActiveCard = document.querySelector("#div_generate");
const sliderItem = document.querySelector(".slider_item");
const sliderIMG = document.querySelector(".slider_img");
const sliderP = document.querySelector(".slider_item_p");

let cardsCount;

go();
window.addEventListener('resize', go);

function go(){
    if (window.innerWidth >= 1220) {
        cardsCount = 2;
    } else if (window.innerWidth >= 750) {
        cardsCount = 1;
    } else {
        cardsCount = 0;
    }
    generateSlider();
}


function generateSlider() {
    let alreadyGenerated = [];
    let rand = random();
    alreadyGenerated.push(rand);
    generateActiveCard.querySelector(".slider_img").src = pets[rand].src;
    sliderP.innerHTML = pets[rand].name;

    for (let i = 0; i < cardsCount; i++) {
        do {
            rand = random();
        } while(alreadyGenerated.includes(rand));
        alreadyGenerated.push(rand);
        createCards(rand);
    }
}

function random() {
    return Math.floor(Math.random() * pets.length);
}


function createCards(rand) {
    let generateActiveCard1 = generateActiveCard.cloneNode(true);

    generateActiveCard1.querySelector('.slider_img').src = pets[rand].src;
    generateActiveCard1.querySelector('.slider_item_p').innerHTML = pets[rand].name;
    itActive.prepend(generateActiveCard1);
}