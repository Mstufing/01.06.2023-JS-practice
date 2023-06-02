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

// ? Task #6
// ? Maskify the String

// function maskify(str) {
// 	let last4Digits = str.slice(-4);
// 	let res =  last4Digits.padStart(str.length, "#");
// 	if(str.length < 4)
// 		return str;
// 	return res;
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let strInput = document.querySelector(".str-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = maskify(strInput.value);
// }

// ? Task #7
// ? Index Multiplier

// function indexMultiplier(arr) {
// 	let res = arr.map((elem,index) => Number(elem) * Number(index));
// 	if(res.length > 0)
// 		return res.reduce((acc, cur) => Number(acc) + Number(cur))
// 	return 0;
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = indexMultiplier(arrInput.value.trim().split(" "));
// }

// ? Task #8
// ? Capitalize the Names

// function capMe(arr) {
// 	let res = arr.map(elem => elem[0].toUpperCase() + elem.slice(1, elem.length).toLowerCase())
// 	return res
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = capMe(arrInput.value.trim().split(" "));
// }

// ? Task #9
// ? Recursion: Array Sum

// function sum(arr) {
// 	if(arr.length === 0)
// 		return 0
// 	return Number(arr.pop()) + sum(arr)
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = sum(arrInput.value.trim().split(" "));
// }

// ? Task #10
// ? Purge and Organize

// function uniqueSort(arr) {
// 	return arr.sort((a, b) => a - b).filter((elem, index) => arr.indexOf(elem) === index)
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = uniqueSort(arrInput.value.trim().split(" "));
// }

// ? Task #11
// ? Number to Reversed Array

// function reverseArr(num) {
// 	return num.toString().split("").reverse().map(elem => Number(elem))
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = reverseArr(inp.value);
// }

// ? Task #12
// ? Return the Sum of the Two Smallest Numbers

// function sumTwoSmallestNums(arr) {
// 	let res = arr.sort((a, b) => a - b).filter(elem => elem > 0);
// 	let last2 = [];
// 	last2.push(res[0]);
// 	last2.push(res[1]);
// 		 return last2.reduce((acc, cur) => Number(acc) + Number(cur))
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = sumTwoSmallestNums(arrInput.value.trim().split(" "));
// }

// ? Task #13
// ? Sum of Resistance in Parallel Circuits

// function parallelResistance(arr) {
// 	let res = arr.map(elem => 1 / Number(elem));
// 	let sum = res.reduce((acc, cur) => Number(acc) + Number(cur));
// 	return Number((1 / sum).toFixed(1));
// }

// let myBtn = document.querySelector(".my-button");

// myBtn.onclick = () => {
//     let arrInput = document.querySelector(".arr-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = parallelResistance(arrInput.value.trim().split(" "));
// }