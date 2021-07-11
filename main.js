// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function ageToAbilities(num){
    if (num < 16){
        return "You can't drive."
    }
   if (num >= 16 && num <= 17){
       return "You can drive but not vote.";
   } if (num >= 18 && num <= 24){
       return "You can vote but not rent a car."
   } else {
       return "You can do pretty much anything.";
   }
}

evenLengthedStrings = (arr) =>{
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length % 2 == 0){
            answer.push(arr[i]);
        }
    }
    console.log(answer);
}

function countBs(numberofBs) {
    console.log(numberofBs)
    let count = 0;
    for (let i = 0; i < numberofBs.length; i++) {
        if (numberofBs[0] >= 80 && numberofBs[0] <= 89) {
            numberofBs.shift();
            count = count + 1;
            console.log(count)
        } else if (numberofBs[0] < 80 || numberofBs[0] > 89) {
            numberofBs.shift();
        } else if ([""]) {
            numberofBs.shift();
            console.log(numberofBs)
        }
        return count; 
    }
}

function lastIndexOfPunctuation(string){

    let lastPunctuationIndex = -1;

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];

        if ('.!?'.includes(letter)) {
            lastPunctuationIndex = i
        }
    }

    return lastPunctuationIndex;
} 


function divisbles(numbers1, numbers2) {
	let newNumbers = [];
	for (let i = 0; i < numbers1.length; i++) {
		if (numbers1[i] % numbers2[i] === 0) {
			newNumbers.push(true);
		} else {
			newNumbers.push(false);
		}
	}
	return newNumbers;
}

getLetters = (arr, int) =>{
    let newStr = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < int){
            console.log('-');
        }
        else{
            newStr.push(arr[i].charAt(int));
        }
    }
    console.log(newStr);
}

function getCenturies(years) {

    let centuries = [];
    
    for (const year of years) {
        
        const numberCentury = Math.ceil(year / 100);

        let century;

        if (numberCentury === 1) {
            century = '1st';
        } else if (numberCentury === 2) {
            century = '2nd';
        } else if (numberCentury === 3) {
            century = '3rd';
        } else {
            century = numberCentury + 'th';
        }

        centuries.push(century);
    }

    return centuries;

}






// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports = {
    ageToAbilities: isDef(typeof ageToAbilities) ? ageToAbilities : pass,
    evenLengthedStrings: isDef(typeof evenLengthedStrings) ? evenLengthedStrings : pass,
    countBs: isDef(typeof countBs) ? countBs : pass,
    lastIndexOfPunctuation: isDef(typeof lastIndexOfPunctuation) ? lastIndexOfPunctuation : pass,
    divisbles: isDef(typeof divisbles) ? divisbles : pass,
    getLetters: isDef(typeof getLetters) ? getLetters : pass,
    getCenturies: isDef(typeof getCenturies) ? getCenturies : pass,
    gridSum: isDef(typeof gridSum) ? gridSum : pass
};
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
