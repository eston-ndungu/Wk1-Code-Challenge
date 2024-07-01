// Define a function that takes in speed of car
function speedDetector(speed) {
    //Define speed limit
    const speedLimit = 70
    //Numnber of km per demerit point
    const kmPerDemeritPoint = 5

    //Speed is within the speed limit, print ok
    if (speed <=  70) {
        console.log("Ok")
}   else if (speed > 70 ) {
    //Calculate demerit points
     const demeritPoints = (speed - speedLimit ) / kmPerDemeritPoint
    //Print licence suspended if demerit points > 1
    if (demeritPoints > 12) {
        console.log("Licence Suspended")
    } else {
        // Else print number of demerit points
        console.log(`Points: ${demeritPoints}`)
    }

}
}

//Call function with different arguments
speedDetector(180) //Prints Licence Suspended
speedDetector(30) //Prints Ok
speedDetector(80) //Prints Points: 2
speedDetector(70) // Prints Ok