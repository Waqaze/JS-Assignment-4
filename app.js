// A-1 :

var passWord = "123123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === passWord) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}



// A-2 :

var greeting;
var hour = 13;

if (hour < 18) {
    alert("Good day");
} else {
    alert("Good evening");
}



// A-3 :

// a.
var literalNotation = [];
console.log(literalNotation);

// b.
var objectNotation = [];
console.log(objectNotation);

// c.
var stringsArray = ["laptop", "mobile", "lcd", "printer", "scanner"];
console.log(stringsArray);

// d.
var numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// e.
var booleanArray = [true, false];
console.log(booleanArray);

// f.
var mixedArray = ["laptop", 1, true];
console.log(mixedArray);

// g.
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
console.log(educationQualifications);



// A-4 :

var colorNames = ["red", "green", "blue"];
console.log(colorNames);

// a.
var beginningColor = prompt("Enter color to add at the beginning:");
colorNames.unshift(beginningColor);
console.log(beginningColor);

// b.
var endColor = prompt("Enter color to add at the end:");
colorNames.push(endColor);
console.log(endColor);

// c.
colorNames.unshift("white", "black");
console.log(colorNames);

// d.
colorNames.shift();
console.log(colorNames);

// e.
colorNames.pop();
console.log(colorNames);

// f.
var indexToAddColor = prompt("Enter index number to add color:");
var colorToAdd = prompt("Enter color to add:");
colorNames.splice(indexToAddColor, 0, colorToAdd);
console.log(colorNames);

// g.
var indexToDeleteColor = prompt("Enter index number to delete color(s):");
var numberOfColorsToDelete = prompt("Enter number of colors to delete:");
colorNames.splice(indexToDeleteColor, numberOfColorsToDelete);
console.log(colorNames);



// A-5 :

var studentScores = [40, 25, 30, 45, 35, 50];
studentScores.sort(function(a, b) {
    return a - b;
});
console.log(studentScores);



// A-6 :

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");



document.write("<br>");
document.write("<br>");
document.write("<br>");



// A-7 :

var tableNumber = prompt("Enter the table number:");
var tableLength = prompt("Enter the table length:");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i), ("<br>"));
}

document.write("<br>");
document.write("<br>");



// A-8 :

// a. Counting
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",  ");
}

document.write("<br>");
document.write("<br>");

// b. Reverse counting
document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ",  ");
}

document.write("<br>");
document.write("<br>");

// c. Even
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ",  ");
}

document.write("<br>");
document.write("<br>");

// d. Odd
document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ",  ");
}

document.write("<br>");
document.write("<br>");

// e. Series
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k,  ");
}

document.write("<br>");
document.write("<br>");



// A-9 :

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === searchItem) {
        found = true;
        break;
    }
}
if (found) {
    alert("Yes, " + searchItem + " is found in the list.");
} else {
    alert("No, " + searchItem + " is not found in the list.");
}

document.write("<br>");
document.write("<br>");



// A-10 :



// A-11 :



// A-12 :

var stringNumber = "472";
var convertedNumber = Number(stringNumber);
document.write("Value: " + convertedNumber);

document.write("<br>");

document.write("Type: " + typeof convertedNumber);