// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(numsArray){
    var squareArray = []
	for(var i = 0; i < numsArray.length; i++){
        var square = numsArray[i] * numsArray[i]
        squareArray.push(square)
    }
    return squareArray
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

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
}


console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 

var newSentence = []
var capitalizeAll = function(sentence){
    var splitSentence = sentence.split(' ')
    //log(splitSentence)
    for (var i = 0; i < splitSentence.length; i++){
       var capital = splitSentence[i][0].toUpperCase() + splitSentence[i].substring(1, splitSentence[i].length + i)
       newSentence.push(capital)
    }
    return newSentence = newSentence.join(' ')
}


console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

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

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function(string){
    var newString = ''
    var middleOfString = string.length / 2
    for(var i = 0; i < string.length; i++){
        if(i === middleOfString - 1){
            newString = newString + string[i] + "fun"
        } else {
   		 	newString = newString + string[i]
        }
    }
    return newString
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

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
