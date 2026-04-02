//Part 1: Date Display

let currentDate = new Date();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

//1st Conditional statement for zero at the beginning of month
//If month is less than 10 add a zero at the beginning of the month
if (month < 10) {
    month = "0" + (currentDate.getMonth() + 1);
}
else {
    month = currentDate.getMonth() + 1;
}

//2nd Conditional statement for zero at the beginning of day
//If day is less than 10 add a zero at the beginning of the day
if (day < 10) {
    day = "0" + (currentDate.getDate());
}
else {
    day = currentDate.getDate();
}

//Format Date as MM/DD/YYYY
let formattedDate = "Today is " + 
    //MM        / DD            / YYYY
    month + "/"+ day + "/" + currentDate.getFullYear();

//Display Date
document.getElementById("dateOutput").textContent = formattedDate;

//Part 2: Number Conversion Tests
//Local Variables
let num1 = "42";
let num2 = "67";
let deci = "3.14";
let str = "Pokemon";

//Convert to Numbers
let newNum1 = Number(num1);
let newNum2 = Number(num2);
let newDeci = Number(deci);
let newStr = Number(str);

//Display as original values
let originalVal1 = "Original value: " + num1 + " --> Converted: " + newNum1 + " --> isNaN: " + Number.isNaN(newNum1) + " --> isInteger: " + Number.isInteger(newNum1) + "<br>";
let originalVal2 = "Original value: " + num2 + " --> Converted: " + newNum2 + " --> isNaN: " + Number.isNaN(newNum2) + " --> isInteger: " + Number.isInteger(newNum2) + "<br>";
let originalVal3 = "Original value: " + deci + " --> Converted: " + newDeci + " --> isNaN: " + Number.isNaN(newDeci) + " --> isInteger: " + Number.isInteger(newDeci) + "<br>";
let originalVal4 = "Original value: " + str + " --> Converted: " + newStr + " --> isNaN: " + Number.isNaN(newStr) + " --> isInteger: " + Number.isInteger(newStr) + "<br>";


//Display Results
document.getElementById("numberConversionOutput").innerHTML = originalVal1 + "<br>" + originalVal2 + "<br>" + originalVal3 + "<br>" + originalVal4;

//Part 3: Math and Number Formatting
//Local Variables
let grade1 = 85.5;
let grade2 = 92.3;
let grade3 = 60.0;

//Calculate Total and Average Scores
let totalScore = grade1 + grade2 + grade3;
let averageScore = totalScore / 3;

//Format Total and Average Scores to 2 Decimal Places
let formattedTotal = totalScore.toFixed(2);
let formattedAverage = averageScore.toFixed(2);

//Display Results
let gradesOutput = "Grades: " + grade1 + " | " + grade2 + " | " + grade3;
let math = "Total Score: " + formattedTotal + "<br>" + "Average Score: " + formattedAverage;

document.getElementById("mathOutput").innerHTML = gradesOutput + "<br>" + math + "<br>";