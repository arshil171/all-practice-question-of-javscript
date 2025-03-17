// Question 
 // Arithmetic operator
 
 
 // Q-1 calculate the area of circle
 
 
 let radius = 7
 let Area = 3.14 * radius *radius
  
 console.log("Area of circle is = " + Area)
 
 
 
 
 // Q-2 find the value of (a * b) / c + (b - a)
 
 
 let a = 10
 let b = 20
 let c = 5
 
 console.log( Result = (a * b) / c + (b - a))
 
 
 
 // Assignment operator
 
 // Q-3   increment 
 
 let x = 5
 let y = 10
 
 x = ++x
 x = ++x
 y = y * x
 
 console.log("New value of x = " + x ) 
 console.log("New Value of y = " + y)
 
 
 
 // Q-4  compound assignment operator
 
 let num = 10
 
 // add 15 to num 
 num += 15
 console.log(num)
 
 // subtract 5 from num 
 num -= 5
 console.log(num)
 
 // multiply 3 by num 
 num *= 3
 console.log(num)
 
 // divide 2 by num 
 num /= 2
 console.log(num)
 
 
 
 
 
 // comparison operator 
 
 
 // Q-5 comparison operator
 
 
 var score1 = 85
 var score2 = 90
 
 console.log(score1>80)
 console.log(score2>80)
 console.log("Both score are grater than 80")
 
 
 
 
 // Q -6 compare two string using comparison operator
 
 
 let string = "apple"
 let string1 = "banana"
 
 string3 = string<string1
 console.log(string3)
 console.log("yes , first string is less than second string")
 
 
 
 
 // Logical operator 
 
 
 // Q-7 check person is eligible to drive 
 
 
 let age = 19
 age1 = age>18
 hasedrivingLicence = true
 
 console.log(age1 && hasedrivingLicence)
 console.log("if true than is aligible to drive and false then it is not aligible")
 
 
 
 // Q-8   logical operator
 
 
 let number = 80
 
 number1 = 10 < number
 number2 = 50 > number 
 // console.log(number1)
 // console.log(number2)
 number3 = number * 5
 console.log (number1 == true && number2 ==true && number3)
 
 console.log ("if number is come with multiply by 5 than your number is between 10 and 50")
 console.log("if false than your number is not between 10 to 50")
 
 
 
 
 // type conversion
 
 
 // Q -9 convert string to number and add 10
 
 
 let string4 = "123.45"
 console.log("type of string = "+typeof(string4))
 
 let resultNum = Number(string4)
 console.log("type of string = "+typeof(resultNum))
 
 resultNum +=10 
 console.log(resultNum)
 
 
 
 
 
 // Q-10   convert boolean value true to string concatenate with "is the value"
 
 
 
 let boolean = true
 console.log("type of = "+typeof(boolean))
 
 let resutlBoolean = String(boolean)
 console.log("type of = "+typeof(resutlBoolean))
 
 console.log(resutlBoolean + string5)
  
  
  
  // if statement 
  
  // Q-13 if 
  
  let a4 = 10
  
  if(a4 > 0){
      console.log("a is positive")
  }
  
  
  // Q-14 if
  
  
  let temperature = 30
  
  if(temperature > 25){
      console.log("It's hot day outside")
  }
  
  if(temperature <   25){
      console.log("It's cold day outside")   
  }
  
  
  // Nested  if-else   
  
  // Q-15 nested if-else
  
  
  let a5 = 0
  
  
  if(a5 > 0){
      console.log("a is positive")
  
  }
  else {
      console.log("a is negative")
  }
  if (a5 == 0){
      console.log("a is  zero")
  }
  
  
  // Q-16 if elase
  
  
  let grade = 75
  
  
  if(grade == 90 || grade > 90){
      console.log("Grade is A")
      if(grade < 89 && grade > 80 ){
         console.log("Grade is B")
      }
      if(grade < 79 && grade > 70)
      {
         console.log("Grade is c")
      }
      if (grade < 70)
      {
         console.log("Grade is D")
      }
  }
 
 
 
 
  // Q-17 Combination Questions
 
   let num1 = 65
 
   if(num1 >10 && num1 % 2 ==0){
     console.log(num1 + "is even and grater than 10")
   }
   else
   {
     console.log (num1 + "nuber does not match criteria")
   }
  
 
 // Q-19 
 
 let num3 = 8;
 let num4 =3;
 
 num3 += 1;
 
 let isMultiple = (num3 % num4 === 0)
 
 console.log("Is ", num3 , "a multiple of" , num4, "?" , isMultiple)
 
 
 
 // Q-20 
 
 let age3=65;
 
 if (age3 <18 || age >60){
     console.log("Not eligible")
 }else{
     console.log("Eligible")
 }
 
 
 
 // if else lader
 
 
 // Q-1 
 
 let temp = 27;
 
 if (temp < 18) {
     console.log("it is too cold , turn on the heater")
 }
 else if (temp > 18 && temp < 25) {
     console.log("The tempetature is comfortable")
 }
 else if (temp > 25) {
     console.log("it's too hot,turn on fan")
 }
 
 
 
 // Q-2 
 
 let score = 45
 
 if (score >= 90) {
     console.log("Grade A")
 }
 else if (score >= 75 && score <= 89) {
     console.log("Grade B")
 }
 else if (score >= 50 && score <= 74) {
     console.log("Grade C")
 }
 else if (score <= 50) {
     console.log("Grade D")
 }
 
 
 
 
 
 // Q-3
 let Red;
 let Yellow;
 let Green;
 
 let light = Red ;
 
 if (light === Red)  {
     console.log("stop the vehicle")
 }
 else if (light == Yellow)  {
     console.log("slow down vehicle")
 }
 else if (light == Green) {
     console.log("Go")
 }
 else {
     console.log("use appropriat color")
 }
 
 
 // Q-4 
 
 let billAmount = 70;
 
 
 if (billAmount < 50){
     console.log("No Discount")
 }
 else if(billAmount > 50  && billAmount < 100){
     console.log("Give a 10% Discount")
 }
 else if(billAmount > 100){
     console.log("Give 20% Discount")
 }
 
 
 // Q - 5
 
 const  currentTime = new Date();
 const currentHour = currentTime.getHours();
 
 if(currentHour < 7){
     console.log("It's too early , sleep a bit more.")
 }
 else if(currentHour >=7 && currentHour < 10){
     console.log("Time for breakfast and morning exersise.")
 }
 else if(currentHour >= 10 &&  currentHour < 18){
     console.log("Time to work or study.")
 }
 else{
     console.log("Relax for the day")
 }
 
 
 
 
 
 
 // for loop Questions 
 
 // Q-1 
  
  
 let num8 = 15;
 for (let i = 1; i <= num8; i++){
    if (i % 2 == 0 ||  i % 5 == 0)
    {
        console.log(i);
    }
 }
 
 // Q-2
 
 let num9= 3;
 for (let i = 1; i <= 10 ; i++){
    console.log(num9 + " x " + i + " = " + num9 * i );
   
 }
 
 // Q-3
 
 for ( let i = 1;i<=5;i++ ) {
    let str =""
    for(let j = 1;j<=i;j++ )
    {
       str+="*"
    }
    console.log(str);
 }
 
 
 // Q-4
 
 let number2 = 29;
 let sum = 0  ;
 
 for (let i=1;i<number2;i++){
   if(number2 % i == 0){
       sum +=i;
   }
 }
 
 if(sum === number2){
   console.log(number2 + " is a perfect number.")
 }else{
   console.log(number2 + " is not a perfect number.")
 }