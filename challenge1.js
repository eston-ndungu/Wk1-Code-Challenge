
// Define function that determines grade based on the studentmarks 
function grade() {
    prompt('ENTER MARKS');
    if (marks >= 80 && marks <= 100) {
        console.log("A")
    } else if (marks >= 60 && marks <= 79) {
        console.log("B")
    } else if (marks >= 50 && marks <= 59) {
        console.log("C")
    } else if (marks >= 40 && marks <= 49) {
        console.log ("D")
    } else if (marks >= 0 && marks <= 39) {
        console.log("E")
    } else {
        console.log ("Please Input Valid Marks")
    }
    }

grade();