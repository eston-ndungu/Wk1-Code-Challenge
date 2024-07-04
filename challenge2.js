let speedLimit = 70;
let kmPerDemeritPoint = 5;

// Define a function that takes in speed of car
function speedDetector() { 
    let speed = prompt('ENTER SPEED') 
    speed = Number(speed);
    // validate Speed
    if(isNaN(speed) || speed<0){
        console.log('INPUT A VALID SPEED');
        alert('INPUT A VALID SPEED')
        return;
    }


    //Speed is within the speed limit, print ok
    if (speed <= speedLimit) {
        console.log("Ok")
        alert('Ok')
}   else {
    //Calculate demerit points
    demeritCalculator(speed)
}
     
function demeritCalculator(speed) {
    let surpassedSpeed = speed -speedLimit
    let demeritPoints = Math.ceil(surpassedSpeed/kmPerDemeritPoint)

    if (demeritPoints < 12) {
        console.log(`This are your demerit points: ${demeritPoints}`)
        alert(`This are your demerit points: ${demeritPoints}`)
    } else {
        console.log(`Licence Suspended, Demerit points: ${demeritPoints}`)
        alert(`Licence Suspended, Demerit points: ${demeritPoints}`)
    }
}

}

speedDetector()