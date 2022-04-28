// empty array to store Animal objects
let animals: Array<Animal> = [];

// create parent class Animal
class Animal {
    constructor(public name: string, public type: string, public age: number, public gender: string, public size: string, public vaccine: boolean, public img: string) {
        animals.push(this);
    }
    display() {
        return `
        <div class="col">
        <div class="card h-100">
            <img src="${this.img}" class="card-img-top" alt="Photo of ${this.name}">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.type}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Size (and/or weight): ${this.size}</p>
            <p class="card-text">Vaccinated? <span class="vaccine${this.vaccine}">${this.vaccine}</span></p>
        </div>
        </div>
        </div>`;    
        // span classes will either be vaccinetrue or vaccinefalse, making css styling easy
    }
}

// create child class Cat
class Cat extends Animal {
    catBreed: string;
    catFur: string;
    catInfo: string;
    constructor(name: string, type: string, age: number, gender: string, size: string, vaccine: boolean, img: string, catBreed: string, catFur: string, catInfo: string) {
        super(name, type, age, gender, size, vaccine, img);
        this.catBreed = catBreed;
        this.catFur = catFur;
        this.catInfo = catInfo;
    }
// override parent method
    display() {
        return `
        <div class="col">
        <div class="card h-100">
            <img src="${this.img}" class="card-img-top" alt="Photo of ${this.name}">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.type}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Size (and/or weight): ${this.size}</p>
            <p class="card-text">Vaccinated? <span class="vaccine${this.vaccine}">${this.vaccine}</span></p>
            <p class="card-text">Breed: ${this.catBreed}</p>
            <p class="card-text">Fur color(s): ${this.catFur}</p>
            <p class="card-text"><a href="${this.catInfo}">Click for breed information</a></p>
        </div>
        </div>
        </div>`;
    }
}
// create child class Dog
class Dog extends Animal {
    dogBreed: string;
    dogTraining: string;
    constructor(name: string, type: string, age: number, gender: string, size: string, vaccine: boolean, img: string, dogBreed: string, dogTraining: string) {
        super(name, type, age, gender, size, vaccine, img);
        this.dogBreed = dogBreed;
        this.dogTraining = dogTraining;
    }
// override parent method
    display() {
        return `
        <div class="col">
        <div class="card h-100">
            <img src="${this.img}" class="card-img-top" alt="Photo of ${this.name}">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.type}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Size (and/or weight): ${this.size}</p>
            <p class="card-text">Vaccinated? <span class="vaccine${this.vaccine}">${this.vaccine}</span></p>
            <p class="card-text">Breed: ${this.dogBreed}</p>
            <p class="card-text">Trained? ${this.dogTraining}</p>
        </div>
        </div>
        </div>`;
    }
}

// create objects
new Animal("Jim Bob", "African spurred tortoise", 39, "male", "1 meter, 45 kg", true, "img/tortoise.jpg");
new Animal("Grumpy", "Horned lizard", 2, "female", "30 cm", false, "img/lizard.jpg");

new Cat("Wolfie", "Cat", 4, "male", "6 kg", true, "img/cat1.jpg", "European shorthair", "Black/white", "https://en.wikipedia.org/wiki/European_Shorthair");
new Cat("Bella", "Cat", 4, "female", "4 kg", true, "img/cat2.jpg", "European shorthair", "Calico", "https://en.wikipedia.org/wiki/European_Shorthair");

new Dog("Mila", "Dog", 3, "female", "8 kg", true, "img/dog1.jpg", "Terrier/corgi mix", "Yes");
new Dog("OG", "Blob", 13, "female", "12 kg", true, "img/dog2.jpg", "Pug", "No");



// send display() information to html. wrapped in a function to use for sorting (below)
function displayDisplay() {
    (document.getElementById("row") as HTMLElement).innerHTML = "";

animals.forEach((val) => {
    (document.getElementById("row") as HTMLElement).innerHTML += val.display();
});
}

// call the function to initiate first load
displayDisplay();


// create sort
var sortBtn = (document.getElementById("sortBtn") as HTMLElement);


for (let i = 0; i < animals.length; i++) {

    sortBtn.addEventListener("click", sortAge);
}

function sortAge() {
    animals.sort(function (a, b) {
        return b.age - a.age;        
    });
    displayDisplay();
}