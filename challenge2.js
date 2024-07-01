// Define a function that takes in speed of car
function speedDetector() { 
    let speed = prompt('ENTER SPEED') 
    // validate Speed
    if(isNaN(speed) || speed<0){
        console.log('INPUT A VALID SPEED');
        alert('INPUT A VALID SPEED')
        return;
    }

    //Define speed limit
    const speedLimit = 70
    //Numnber of km per demerit point
    const kmPerDemeritPoint = 5

    //Speed is within the speed limit, print ok
    if (speed <=  70) {
        console.log("Ok")
        alert('Ok')
}   else if (speed > 70 ) {
    //Calculate demerit points
     const demeritPoints = (speed - speedLimit ) / kmPerDemeritPoint
    //Print licence suspended if demerit points > 1
    if (demeritPoints > 12) {
        console.log("Licence Suspended")
        alert('Licence Suspended')
    } else {
        // Else print number of demerit points
        console.log(`Points: ${demeritPoints}`)
        alert(`Points: ${demeritPoints}`)
    }

}
}

speedDetector()