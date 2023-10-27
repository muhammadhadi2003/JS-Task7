//! chapter 38 - 42

//1)
/*function power(a,b){
    if (b==0){
        return 1
    }
    else{
    return a**b
}
}
let num=2
let pow=3
var result=power(num,pow)
document.write(result)*/

//2)
/*function LeapYear(year) {
    if ((year % 4 === 0 ) {
        return true;
    } else {
        return false;
    }
}
const year = 2024;
if (LeapYear(year)) {
    document.write(year + " is a leap year.");
} else {
    document.write(year + " is not a leap year.");
}*/

//3)
/*function Semiperimeter(a, b, c) {
    return (a + b + c) / 2;
}

function Area(a, b, c) {
    const S = Semiperimeter(a, b, c);
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

const area = Area(3,4,5);
document.write("The area of the triangle is: " + area);*/

//4)
/*function avg(a,b,c){
    return (a+b+c)/3
}
function per(a,b,c){
    return ((a+b+c)/300)*100
}
function main(){
    let sub1=+prompt("Enter number of 1st subject")
    let sub2=+prompt("Enter number of 2nd subject")
    let sub3=+prompt("Enter number of 3rd subject")
    let average=avg(sub1,sub2,sub3)
    document.write(`The Average marks are ${average}`)
    document.write("<br>")
    let percentage=per(sub1,sub2,sub3).toFixed(2)
    document.write(`The Percentage is ${percentage} %`)
}
main()*/

//5)
/*function IndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1
}

const string =prompt("Enter text");
const charToSearch = prompt("Enter character to search for");

const index = IndexOf(string, charToSearch);

if (index !== -1) {
    document.write(`The character '${charToSearch}' is found at index ${index}.`);
} else {
    document.write(`The character '${charToSearch}' is not found in the string.`);
}*/

//6)
/*function removeVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (vowels.indexOf(char) === -1) {
            result += char;
        }
    }

    return result;
}

const inputSentence = "This is a sample sentence with vowels";
const sentenceWithoutVowels = removeVowels(inputSentence);
document.write("Sentence with vowels: ")
document.write(inputSentence)
document.write("<br>")
document.write("Sentence without vowels: ")
document.write(sentenceWithoutVowels);*/

//7)


//8)
/*function tometer(dist){
    var result=dist*1000
    document.write(`${dist}km is equal to ${result} meters`)
    document.write("<br>")
}
function tofeet(dist){
    var result=(dist*3280.8399)
    result=result.toFixed(2)
    document.write(`${dist}km is equal to ${result} feet`)
    document.write("<br>")
}
function toinches(dist){
    var result=(dist*39370.0787)
    result=result.toFixed(2)
    document.write(`${dist}km is equal to ${result} inches`)
    document.write("<br>")
}
function tocentimeter(dist){
    var result=dist*100000
    document.write(`${dist}km is equal to ${result} centimeters`)
    document.write("<br>")
}
let dist=prompt("Enter distance in kilometers")
dist=parseFloat(dist,10)
tometer(dist)
tofeet(dist)
toinches(dist)
tocentimeter(dist)*/

//9)
/*function OvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;

    if (hoursWorked <= regularHours) {
        return 0;
    }
    else {
        const overtimeHours = hoursWorked - regularHours;
        return overtimeHours * overtimeRate;
    }
}

const hoursWorked =+prompt("Enter hours worked to calculate overtime pay");
const overtimePay = OvertimePay(hoursWorked);
document.write("Overtime Pay: Rs." + overtimePay.toFixed(2))*/

//10)