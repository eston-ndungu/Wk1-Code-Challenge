
// Define function that determines grade based on the studentmarks 
function grade() {
    let marks = prompt('ENTER MARKS'); //Prompts user to input marks
    marks = Number(marks); //Converts marks to number
    if (isNaN(marks) || marks<0 || marks>100){
        alert('ENTER VALID MARKS BETWEEN 0-100')
    }
    if (marks >= 80 && marks <= 100) {
        console.log("A")
        alert('A')
    } else if (marks >= 60 && marks <= 79) {
        console.log("B")
        alert('B')
    } else if (marks >= 50 && marks <= 59) {
        console.log("C")
        alert('C')
    } else if (marks >= 40 && marks <= 49) {
        console.log ("D")
        alert('D')
    } else if (marks >= 0 && marks <= 39) {
        console.log("E")
        alert('E')
    } 
    }
;
grade();