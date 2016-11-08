// PART 0: Write a function called squareDance() that squares each number in an array.
/* 
Algorithm
1. Define a function called squareDance that takes an array as input
2. Define an empty output array to store the squared array version
3. Loop through each array element and perform math operation to square each element
4. Assign each squared element to the empty output array as you loop through
5. Return the output array
*/

function squareRoot(num){
    return num * num
}

var squareDance = function(numsArray){
    var squareArray = []
	for(var i = 0; i < numsArray.length; i++){
        squareArray.push(squareRoot(numsArray[i]))
    }
    return squareArray
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
/* 
Algorithm for solution 1
1. Define a function called nicer that takes a string of words as input
2. Define a variable called badWords with all the bad words you want to check for and replace
3. Define a new Regular Expression using the "new RegEx constructor" e.g new RegEx(pattern(words you want to check for), flags(search criteria))
3. Convert the string of words into an array, so its easier to loop through
4. Define 2 loops - 1. to loop through
*/

// Solution 1
    // RegExp constructor creates a regular expression object for matching text with a pattern.
    // Regular Expression Syntax - new RegExp(pattern, flags)
    //e.g new RegExp(pattern(e.g. the words you are checking for), flags(g - means check every word in the string of words
    // i - means ignore case i.e. the search is case insensitive))

function nicer(dirtyStr){
    var badWords = ['heck |darn |crappy |dang '],    
        wordChecker = new RegExp(badWords, "gi"),
        cleanStr = dirtyStr.replace(wordChecker, "")
    return cleanStr
}

/* Solution 2

var nicer = function(badSentence){
	var niceSentence = ''
    var badWordsDictionary = ["heck", "darn", "crappy", "dang", "shit", "fuck", "what the hell", "what the fuck"]
    var splitSentence = badSentence.split(' ')
    // log("this is initial split ==" + ' ' + splitSentence)
    for(var i = 0; i < splitSentence.length; i++){
        var counter = splitSentence[i]
    	for(var j = 0; j < badWordsDictionary.length; j++){
        	if(badWordsDictionary[j] === counter){
                splitSentence.splice(i,1)
                // log(splitSentence)
            }
        }
    }
    return  niceSentence = splitSentence.join(' ')
} */


console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.
/* 
Algorithm
1. Define a sub function called capitalize that takes a string as input and capitalizes the first letter of the string 
and returns a new version of the string capitalized.
2. Define a  function called capitalizeAll that takes a string of words as input 
3. Define output string to store capitalize string version
4. Convert string of words to array so its easy to loop through individual words 
5. Invoke the capitalie sub function, pass each individual word as parameters during the loop, 
and assign it to the output string defined initially
6. Return the output string
*/ 

function capitalize(str){
    return str[0].toUpperCase() + str.substring(1, str.length)
}

var capitalizeAll = function(sentence){
    var newSentence = [],
        splitSentence = sentence.split(' ')
    for (var i = 0; i < splitSentence.length; i++){ 
       newSentence.push(capitalize(splitSentence[i]))
    }
    return newSentence = newSentence.join(' ')
}


console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. 
//(For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

/* Algorithm 
1. Define a function called properSentences that takes a string of words as input 
2. Define output string to store capitalize string version
3. Convert string of words to array so its easy to loop through individual words by calling the split method
4. Loop through the converted string to array
5. Invoke the capitalize sub function created earlier and pass each word in the array as input so the first letter
    of each sentence is capitalized.
6. Return the output string and invoke the join method to convert the array back to a string of words

*/

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

var properSentences = function(sentence){
    var newSentence = []
    var strToArray = sentence.split(/["."\"?"\"!"] /)
    for (var i = 0; i < strToArray.length; i++){
            newSentence.push(capitalize(strToArray[i]))
    }
    return newSentence = newSentence.join('. ')
} 

/* Solution 2

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

var properSentences = function(sentence){
    var newSentence = []
    var sentsArray = sentence.split(/["."\"?"\"!"] /)
    for (var i = 0; i < sentsArray.length; i++){
            var proper = sentsArray[i][0].toUpperCase() + sentsArray[i].substring(1, sentsArray[i].length)
            newSentence.push(proper) 
    }
    return newSentence = newSentence.join('. ')
}
*/

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
/* 
Algorithm
1. Define a function called iPutTheFunIn that takes a string as input 
2. Define output string to store new version of the string
3. Define a sub function called median to calculate the middle of the string 
4. Loop through the string 
5. Check if the postion of the current character in the loop is the middle position; invoke the median function and pass the input string as an argument
5. If yes, insert the word fun after the current string; if no, add the current string to the output string
6. Return the output string
*/

function median(str){
    return str.length / 2
}

var iPutTheFunIn = function(string){
    var newString = ''
    for(var i = 0; i < string.length; i++){
        if(i === median(string) - 1){
            newString = newString + string[i] + "fun"
        } else {
            newString = newString + string[i]
        }
    }
    return newString
}


console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

/* PART 5: write a function called pipeline(). 
it should take three inputs: 
(1) a starting value, 
(2) a function, and 
(3) another function. 
it should use functions (2) and (3) on the starting value, 
one after the other, and return a new value that has been processed by both function (2) and function (3).

the following three tests all correspond to the pipeline() function. */ 

/* Algorithm 
1. Define a function called pipeline that takes 3 inputs - value, and 2 functions
2. Pass the value as a parameter for function 1
3. Pass function 1(value) as a parameter for function 2
4. Return the expression
*/
// Note - Javascript expressions are evaluated from right to left or inside out. That means the first function will be invoke first
// then the result from function 1 will become the argument for function 2. Once function 2 is evaluated, a final result is returned.

var pipeline = function(value, func1, func2){      
       return 	func2(func1(value))
}

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
	return newArr
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
