
// Define function that determines grade based on the studentmarks 
function determineGrade() {
    let marks = prompt('ENTER MARKS'); //Prompts user to input marks
    marks = Number(marks); //Converts marks to number
    if (isNaN(marks) || marks<0 || marks>100){
        console.log('ENTER VALID MARKS BETWEEN 0-100')
        alert('ENTER VALID MARKS BETWEEN 0-100')
    }
    if (marks >= 80 && marks <= 100) {
        console.log('YOUR GRADE IS : A')
        alert('YOUR GRADE IS : A')
    } else if (marks >= 60 && marks <= 79) {
        console.log('YOUR GRADE IS : B')
        alert('YOUR GRADE IS : B')
    } else if (marks >= 50 && marks <= 59) {
        console.log('YOUR GRADE IS : C')
        alert('YOUR GRADE IS : C')
    } else if (marks >= 40 && marks <= 49) {
        console.log('YOUR GRADE IS : D')
        alert('YOUR GRADE IS : D')
    } else if (marks >= 0 && marks <= 39) {
        console.log('YOUR GRADE IS : E')
        alert('YOUR GRADE IS : E')
    } 
    }

determineGrade()