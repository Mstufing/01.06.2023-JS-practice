// ? Task #1
// ? Enharmonic Equivalents

// function getEquivalent(note) {
// 	let obj = {
// 		"C#": "Db",
// 		"D#": "Eb",
// 		"F#": "Gb",
// 		"G#": "Ab",
// 		"A#": "Bb",
// 		"Db": "C#",
// 		"Eb": "D#",
// 		"Gb": "F#",
// 		"Ab": "G#",
// 		"Bb": "A#"
// 	}
// 	return obj[note]
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = getEquivalent(firstInp.value);
// }

// ? Task #2
// ? The Reverser!

// function reverse(str) {
// 	let res = str.split("").reverse().map(elem => elem === elem.toLowerCase() ? elem.toUpperCase() : elem.toLowerCase())
// 	return res.join("")	
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = reverse(firstInp.value);
// }

// ? Task #3
// ? Sum of Found Indexes

// function sumFoundIndexes(arr, n) {
// 	let res = arr.map((elem, index) => elem === n ? index : 0);
// 	return res.reduce((acc, cur) => acc + cur)
// }

// let myButton = document.querySelector(".my-button");

// myButton.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let numInput = document.querySelector(".num-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = sumFoundIndexes(arrInput.value.trim().split(" "), numInput.value);
// }

// ? Task #4
// ? Positive Count / Negative Sum

// function countPosSumNeg(arr) {
// 	let pos = arr.filter(elem => elem > 0);
// 	let neg = arr.filter(elem => elem < 0);
// 	if(arr.length == 0)
// 		return [];
// 	return [pos.length, neg.reduce((acc, cur) => {return Number(acc) + Number(cur)}, 0)]
// }

// let myButton = document.querySelector(".my-button");

// myButton.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = countPosSumNeg(arrInput.value.trim().split(" "));
// }

// ? Task #5
// ? Upper or Lower Case

// function stepsToConvert(str) {
// 	let low = str.split("").filter(elem => elem === elem.toLowerCase())
// 	let cap = str.split("").filter(elem => elem === elem.toUpperCase())
	
// 	return low.length > cap.length ? cap.length 
// 					: cap.length > low.length ? low.length
// 					: cap.length
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let strInput = document.querySelector(".str-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = stepsToConvert(strInput.value);
// }