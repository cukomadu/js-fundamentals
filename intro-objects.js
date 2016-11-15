// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.


var tile = {
    width: "200px",
    height: "200px",
    background: "black",
    color: "blue"
}


var flipColor = function(object) {
        if(object.color === "blue") {
            object.color = "red"
        } else {
            object.color = "blue"
        }
        return object
}

var tile2 = flipColor(tile)
console.assert(tile2.color === "red")
console.assert(flipColor(tile2).color === "blue")


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]


var getFullNames = function(objectsArray){
var arrayOfStrings = []
    for(var i = 0; i < objectsArray.length; i++){
        var fullName = objectsArray[i].first + ' ' + objectsArray[i].last
        arrayOfStrings.push(fullName)
    }
    return arrayOfStrings
}

console.assert(getFullNames(customers)[1] === "John Smith")




// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

function GenerateDog(name){
    this.name = name
    this.legs = 4
    this.weight = 20
    this.color = "black"  
    this.speak = function(str){
        var newArray = []
        var strToArray = str.split(' ')
        for(var i = 0; i < strToArray.length; i++){
            var exchange = strToArray[i].replace(strToArray[i][0], 'r')
            newArray.push(exchange)
        }
        return newArray.join(" ")
    } 
}

var dog = new GenerateDog('rex')

console.assert(dog.legs === 4)
console.assert(dog.name === 'rex')

var dog = new GenerateDog('carl')
console.assert(dog.name === 'carl')


// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


console.assert(dog.speak('i love you') === 'r rove rou')
console.assert(dog.speak('so hungry') === 'ro rungry')




// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// e.g:
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]


var pluck = function(inputObjectArray,propName) {
    var outputObjectArray = []
    for (var i = 0; i < inputObjectArray.length; i++) {
        var objectArrayElement = inputObjectArray[i]
        var targetObject = objectArrayElement[propName]
        outputObjectArray.push(targetObject)
    }
    return outputObjectArray
}



console.assert(pluck(stooges, 'name')[0] === 'moe')
console.assert(pluck(stooges, 'age')[2] === 60)



// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.

var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doubt. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."


function removePunc(strOfWords){
     var puncDictionary = [",", ".", "’", "—", "?", ":", "-", "”", "“"]
     var strToArray = strOfWords.split("")
    for (var i = 0; i < strToArray.length; i++) {
          for (var j = 0; j < puncDictionary.length; j++) {
               if(strToArray[i] === puncDictionary[j]){
                    strToArray[i] = ""
               }
          }
    }
    return strToArray.join("").toLowerCase()
}


var getCounts = function(text){
    var frequencyObj = {},
        transformedText = removePunc(text),
        textToArray = transformedText.split(" ")

    for(var i = 0; i < textToArray.length; i++){
        var word = textToArray[i]

        if(frequencyObj[word]){
            frequencyObj[word] += 1
            
        } else {
            frequencyObj[word] = 1
        }
    }
        
    return frequencyObj
}

var wordFrequencyObject = getCounts(text)

console.assert(wordFrequencyObject.but === 3)
console.assert(wordFrequencyObject.black === 5)




// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop, and the special 
// `this` keyword.


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.

/* 
Algorithm
1. Define a function called reverseObject() with input as object
2. Define an empty output object
3. Define a Loop through the key in the object 
4. Assign the current value at key to a new variable called newKey as you loop 
5. Reverse the assignment key = value and value = key    
*/


var object = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}

function reverseObject(obj){
    var newObj = {}
    for(var key in obj){
        //detailed solution
        //var newKey = obj[key]
        //newObj[newKey] = key 
        newObj[obj[key]] = key
    }
    return newObj
}

var reversed = reverseObject(object)
console.assert(reversed['2b'] === 'apartment_no')


// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

/* 
Algorithm
1. Define a function called reverseAll() with input as array of objects
2. Define an empty output array
3. Define a Loop through the array of objects
4. Invoke the reverseObject function and pass each array element as a parameter
5. Push reversed element into output array and return output array
*/

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

function reverseAll(arrayOfObjects){
    var outputArray = []
    for(var i = 0; i < arrayOfObjects.length; i++){
        var reverse = reverseObject(arrayOfObjects[i])
        outputArray.push(reverse)
    }
    return outputArray
}

var flippedUsers = reverseAll(users)

console.assert(flippedUsers[0]['president@gmail.com'] === 'obama')
console.assert(flippedUsers[1]['americamoneywin@yahoo.com'] === 'trump')
console.assert(flippedUsers[1].dealmaking === 'hobby')


// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

/* 
Algorithm
1. Define a function called where() with input as array of objects and object property
2. Define an empty output array
3. Define a Loop through the array of objects
4. Define a Loop through the object property parameter
4. Define a condition that checks the key value at the current array position in the loop with the key value of the object property parameter
5. If there is a match, Push the object at the current array position to the output array. If no match, keep looping
6. Return the output array.
*/


function where(arrayOfObjects, objectProp){
    var outputArray = []
    for (var i = 0; i < arrayOfObjects.length; i++) {
        var currentTarget = arrayOfObjects[i],
            truthy = true

        for (var key in objectProp){ 
            if(currentTarget[key] !== objectProp[key]){
                truthy = false
            }
        }

        if(truthy){
            outputArray.push(currentTarget)
        }    
    }
    return outputArray
} 


var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0]['title'] === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)

// Part 8

// Create an object that has a name attribute and a method called personalize. 
// personalize should take a function as input. when personalize is called, 
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period! 

/* Algorithm
1. Define an object constructor called Polite with a name attribute and a personalize method
2. Define a variable called politeObject and assign a new instance of the Polite constructor to it
3. Call the personalize method on the politeObject 
*/

function Polite(name){
    this.name = name
    this.personalize = function(func){
        var intro = "Hi, my name is " + this.name + ", " + "and the result is " + func() + "."
        return intro
    }
}


var politeObject = new Polite("Frank")

var helloWorld = function() {
    return "hello world"
}

var personalizedResult = politeObject.personalize(helloWorld)
console.assert(personalizedResult === "Hi, my name is Frank, and the result is hello world.")
