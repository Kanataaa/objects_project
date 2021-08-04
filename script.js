let content = document.querySelector("#content");
let firstPerson = document.querySelector("#first");
let secondPerson = document.querySelector("#second");
let thirdPerson = document.querySelector("#third");
let fourthPerson = document.querySelector("#fourth");

let fpDiv = document.createElement("div");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

fpDiv.appendChild(p1);
fpDiv.appendChild(p2);
fpDiv.appendChild(p3);
content.appendChild(fpDiv);

let info = {
    zero: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    one: {
        firstName: "Barack",
        lastName: "Obama",
        heightFeet: "6",
        heightInches: "2",
        favoriteFood: "Brocolli",
        favoriteColor: "Blue",

        sayFullName: function() {
            alert("this is " + this.firstName + " " + this.lastName)
        }
    },
    two: {
        firstName: "Johnny",
        lastName: "Chen",
        heightFeet: "5",
        heightInches: "7",
        favoriteFood: "Mashed Potato",
        favoriteColor: "Blue",
        sayFullName: function() {
            alert("this is " + this.firstName + " " + this.lastName)
        }
    },
    three: {
        firstName: "Hoshimati",
        lastName: "Suisei",
        heightFeet: "5",
        heightInches: "3",
        favoriteFood: "Ringo",
        favoriteColor: "Blue",
        sayFullName: function() {
            alert("this is " + this.firstName + " " + this.lastName)
        }
    },
}

firstPerson.onclick = function(event) {
    event.preventDefault();

    p1.innerHTML = "My name is Francisco Bermúdez.";
    p2.innerHTML = "My height is 6 foot 3 inches.";
    p3.innerHTML = "My favorite food is pupusas and my favorite color is pink.";

    fpDiv.style.color = "white";
    fpDiv.style.fontSize = "50px";
    fpDiv.style.margin = "5% 20% 5% 20%";
    fpDiv.style.padding = "30px";
    fpDiv.style.border = "black solid 5px";
}

secondPerson.onclick = function(event) {
    event.preventDefault();

    p1.innerHTML = "My name is Barack Obama.";
    p2.innerHTML = "My height is 6 foot 2 inches.";
    p3.innerHTML = "My favorite food is brocolli and my favorite color is blue.";

    fpDiv.style.color = "white";
    fpDiv.style.fontSize = "50px";
    fpDiv.style.margin = "5% 20% 5% 20%";
    fpDiv.style.padding = "30px";
    fpDiv.style.border = "black solid 5px";

}

thirdPerson.onclick = function(event) {
    event.preventDefault();

    p1.innerHTML = "My name is Johnny Chen.";
    p2.innerHTML = "My height is 5 foot 7 inches.";
    p3.innerHTML = "My favorite food is mashed potatos and my favorite color is blue.";

    fpDiv.style.color = "white";
    fpDiv.style.fontSize = "50px";
    fpDiv.style.margin = "5% 20% 5% 20%";
    fpDiv.style.padding = "30px";
    fpDiv.style.border = "black solid 5px";
}

fourthPerson.onclick = function(event) {
    event.preventDefault();
    
    p1.innerHTML = "My name is Hoshimati Suisei.";
    p2.innerHTML = "My height is 5 foot 3 inches.";
    p3.innerHTML = "My favorite food is ringo(apple) and my favorite color is blue.";

    fpDiv.style.color = "white";
    fpDiv.style.fontSize = "50px";
    fpDiv.style.margin = "5% 20% 5% 20%";
    fpDiv.style.padding = "30px";
    fpDiv.style.border = "black solid 5px";
}