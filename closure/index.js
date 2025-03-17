//  Q-1   For Loop and Array
//        Write a for loop to iterate over an array of numbers [1, 2, 3, 4, 5] and print each number to the console

let array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}



//  Q-2     While Loop and Array
//          Write a while loop to print all the elements of the array [10, 20, 30, 40, 50] to the console.


let i = 0;
let arrayWhile = [10, 20, 30, 40, 50]

while (i < arrayWhile.length) {
    console.log(arrayWhile[i])
    i++
}



// Q -3  String Length
//       Given a string let str = "Hello, World!";, use a for loop to find and print the length of the string.


let str = "Hello, World!"
let count = 0

for (let i = 0; i < str.length; i++) {
    count++
}

console.log("Length of the string using Count :", count)
console.log("Length of the string: ", str.length)


// Q - 4  String Characters
//        Use a for loop to print each character of the string "JavaScript" one by one

let strChar = "JavaScript"

for (let i = 0; i < strChar.length; i++) {
    console.log(strChar[i])
}


// Q - 5    Sum of Array Elements
//         Write a for loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].

let arraySum = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < arraySum.length; i++) {
    sum += arraySum[i]
}

console.log("Sum of the array elements: ", sum)


//  Q - 6      Find Maximum in Array
//            Given an array [3, 1, 4, 1, 5, 9], use a for loop to find and print the maximum value 



let arrayMax = [3, 1, 4, 1, 5, 9]

let max = arrayMax[0]

for (let i = 1; i < arrayMax.length; i++) {
    if (arrayMax[i] > max) {
        max = arrayMax[i]
    }
}

console.log("Maximum value in the array: ", max)


// Q - 7  Array Reversal

//        Write a for loop to reverse the array [1, 2, 3, 4, 5] and print the reversed array.



let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr[reversedArr.length] = arr[i];
}

console.log(reversedArr);


// Q - 9    Counting Elements
//         Write a while loop to count the number of elements in the array [2, 4, 6, 8, 10] and print the count




let arrayCount = [2, 4, 6, 8, 10]

let count1 = 0
let i1 = 0

while (i1 < arrayCount.length) {

    count1++
    i1++
}

console.log("Count of the array elements: ", count1)



// Q -10    Find Even Numbers
//         Given an array [1, 2, 3, 4, 5, 6], use a for loop to print only the even numbers.



let evenCount = [1, 2, 3, 4, 5, 6]


for (let i=0 ; i< evenCount.length;i++)
{
    if(evenCount[i] % 2 === 0)
        console.log(evenCount[i])
}



// Q -11  Array Length
//        Write a while loop to find and print the length of the array [5, 10, 15].


let arraylength = [5,10,15]


let i2 = 0

while (i1 < arrayCount.length) {

    
    i2++
}

console.log("lenghth of the array elements: ", count1)