// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//     var ans = a;
//     for (var i = 1; i < b; i++) {
//         ans = ans * a;
//     }
//     return ans;
// }
// var a = +prompt('Enter any number to find its power');
// var b = +prompt('Enter power to find');
// var result = power(a, b);
// document.write(a + '^' + b + ' = ' + result);





// 2. Any year is entered through the keyboad. Writ
//  a function to
// determine whether the year is a leap year or not.



// function leapYear(year) {
//     if ((year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         var result = year + " is a leap year";
//     } else {
//         result = year + " is not a leap year";
//     }
//     return result;
// }
// var yearToCheck = +prompt("Enter any year in YYYY format to check whether it is leap or not")
// var ans = leapYear(yearToCheck);
// document.write(ans);






// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S− a)(S− b)(S− c)
// where, S = (a + b + c) / 2
// Calculate area of triangle using 2 functions


// function semiPerimeter(a, b, c) {
//     var s = (a + b + c) / 2;
//     return s;
// }

// function areaOfTriangle(a, b, c) {
//     var s = semiPerimeter(a, b, c);
//     var A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return A.toFixed(4);
// }
// var side1 = +prompt('Enter length of side 1 of a triangle');
// var side2 = +prompt('Enter length of side 2 of a triangle');
// var side3 = +prompt('Enter length of side 3 of a triangle');
// var area = areaOfTriangle(side1, side2, side3);
// document.write('Area of triangle: ' + area);



// 4. Write a
// function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks.there should be 3 functions one is the mainFunction
// and other are
// for average and percentage.Call those functions
// from mainFunction and display result in mainFunction.



// function average(marks1, marks2, marks3) {
//     var avg = (marks1 + marks2 + marks3) / 3;
//     return avg.toFixed(2);
// }

// function percentage(marks1, marks2, marks3) {
//     var percent = (marks1 + marks2 + marks3) * 100 / 300;
//     return percent.toFixed(2);
// }

// function avg_percent(marks1, marks2, marks3) {
//     var avg = average(marks1, marks2, marks3);
//     var percent = percentage(marks1, marks2, marks3);
//     document.write('Average marks: ' + avg + '<br/>Percentage: ' + percent + '%');
// }
// var sub1 = +prompt('Enter marks obtained in subject 1');
// var sub2 = +prompt('Enter marks obtained in subject 2');
// var sub3 = +prompt('Enter marks obtained in subject 3');
// avg_percent(sub1, sub2, sub3);



// 6. Write a function to delete all vowels from a sentence.Assume that the sentence is not more than 25 characters long.


// function delVowels(string) {
//     newStr = string.replace(/[aeiou]/g, '');
//     return newStr;
// }
// var string = prompt('Enter any sentence to delete vowels');
// var newString = delVowels(string);
// document.write('<h3>Given sentence: </h3>' + string + '<h3>After deleting vowels: </h3>' + newString);



// 8. The distance between two cities( in km.) is input through the
// keyboard.Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.



// function convertToMeters(distInKm) {
//     var inMeters = distInKm * 1000;
//     document.write('<h3>Distance in meters: </h3>' + inMeters);
//     return inMeters;
// }

// function convertToFeet(distInKm) {
//     var inFeet = distInKm * 3281;
//     document.write('<h3>Distance in feets: </h3>' + inFeet);
//     return inFeet;
// }

// function convertToInches(distInKm) {
//     var inInches = distInKm * 39370;
//     document.write('<h3>Distance in inches: </h3>' + inInches);
//     return inInches;
// }

// function convertToCentimeters(distInKm) {
//     var inCentimeters = distInKm * 100000;
//     document.write('<h3>Distance in centimeters: </h3>' + inCentimeters);
//     return inCentimeters;
// }
// var distanceInKm = +prompt('Enter the distance between two cities in km');
// document.write('<h3>Distance in km: <h3/>' + distanceInKm);

// convertToMeters(distanceInKm);
// convertToFeet(distanceInKm);
// convertToInches(distanceInKm);
// convertToCentimeters(distanceInKm);


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs.12.00 per hour
// for every hour
// worked above 40 hours.Assume that employees do not work
// for fractional part of an hour.


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.



// function totalNotes(amount) {
//     var notesOf100 = Math.floor(amount / 100);
//     var notesOf50 = Math.floor((amount % 100) / 50);
//     var notesOf10 = Math.floor(((amount % 100) % 50) / 10);
//     document.write('You will have ' + notesOf100 + ' hundred note(s) ' + notesOf50 + ' fifty note(s) & ' + notesOf10 + ' ten notes.');
// }
// var amount = +prompt('Enter the amount to withdraw');
// totalNotes(amount);


// --------------------------------------Assignment # 43-48---------------------------------------

// 1 Show an alert box on click on a link.

//    var elems = document.getElementsByClassName('confirmation');
//     var confirmIt = function (e) {
//         if (!confirm('Are you sure?')) e.preventDefault();
//     };
//     for (var i = 0, l = elems.length; i < l; i++) {
//         elems[i].addEventListener('click', confirmIt, false);
//     }

// 2 Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// var elems = document.getElementsByClassName('confirmation');
//     var confirmIt = function (e) {
//         if (!confirm('Thanks for purcahsing a phone form us')) e.preventDefault();
//     };
//     for (var i = 0, l = elems.length; i < l; i++) {
//         elems[i].addEventListener('click', confirmIt, false);
//     }


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

//  function SomeDeleteRowFunction(o) {
//      //no clue what to put here?
//      var p=o.parentNode.parentNode;
//          p.parentNode.removeChild(p);
//     }

// Q#4
// index.html
 

