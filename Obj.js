In this exercise, you’ll refactor some ES5 code into ES2015.
Write your code in the sections with a comment to “Write an ES2015 Version”.

function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName,
    }
}

var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"



let favoriteNumber = 42;

const instructor = {

    firstName = "Colt",
    [favoriteNumber]: "That is my favorite!"

}

OBJECT METHODS


var instructor = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName " + "says bye!";
    }
}


OBJECT METHODS ES2015

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

Write a function which generates an animal Object.The function should accept 3 arguments:

species: the species of animal('cat', 'dog')
verb: a string used to name a function ('bark', 'bleet')
noise: a string to be printed when above function is called(‘woof’, ‘baaa’)

const d = createAnimal("dog", "bark", "Woooof!")
//{species: "dog", bark: f}
d.bark() //"Woooof!"



const s = createAnimal("sheep", "bleet", "BAAAaaaaa")
//{species: "sheep", bleet: f}
s.bleet() // "BAAAaaaaa"

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}
