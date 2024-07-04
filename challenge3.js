 // Net Salary calculations
function calculateNetSalary() {

    // Inputs basic salary
    let basicSalary = prompt('Input your basic salary');

    // Inputs benefits
    let benefits = prompt('Input your benefits'); 

    //Coverts basic salary to a number 
    basicSalary = Number(basicSalary); 

     // Converts benefits to a number 
    benefits = Number(benefits); 

    if (isNaN(basicSalary)|| isNaN(benefits) ||benefits<0 || basicSalary<0){
      console.log('Please Input Valid Number')
      alert('Please Input Valid Number');
      return;
      
    }

    
    let grossSalary = basicSalary + benefits; 
    let nssfDeductions = grossSalary * 0.06;
    let taxableIncome = grossSalary-nssf;
    let nhif = nhifCalculator(taxableIncome);
    let payee = payeeCalculator(taxableIncome);
    let netSalary = grossSalary-nssfDeductions-nhif-payee;

    console.log(`YOUR GROSS SALARY IS $[grossSalary]`);
    alert(`YOUR GROSS SALARY IS ${grossSalary}`);

    console.log(`YOUR NSSF DEDUCTION IS ${nssfDeductions}`);
    alert(`YOUR NSSF DEDUCTION IS ${nssfDeductions}`);

    console.log(`YOUR TAXABLE INCOME IS ${taxableIncome}`);
    alert(`YOUR TAXABLE INCOME IS ${taxableIncome}`);
       
    console.log(`YOUR NHIF DEDUCTION IS ${nhif}`);
    alert(`YOUR NHIF DEDUCTION IS ${nhif}`);

    console.log(`YOUR PAYEE DEDUCTION IS ${payee}`);
    alert(`YOUR PAYEE DEDUCTION IS ${payee}`);
    
    console.log(`YOUR NET SALARY IS ${netSalary}`);
    alert(`YOUR NET SALARY IS ${netSalary}`);
  

  }

  //Calculate NHIF deductions
  function nhifCalculator(taxableIncome){
    
    if (taxableIncome <= 5999) {
      return 150;
    } 
    else if (taxableIncome >= 6000 && taxableIncome <= 7999) {
      return 300;
    } 
    else if (taxableIncome >= 8000 &&  taxableIncome <= 11999) {
      return 400;
    } 
    else if (taxableIncome >= 12000 && taxableIncome <= 14999) {
      return 500;
    } 
    else if (gtaxableIncome >=15000 && taxableIncome <= 19999) {
      return 600;
    } 
    else if (taxableIncome >= 20000 && taxableIncome <= 24999) {
      return 750;
    } 
    else if (taxableIncome >= 25000 && taxableIncome <= 29999) {
      return 850;
    } 
    else if (taxableIncome >= 30000 && taxableIncome <= 34999) {
      return 900;
    } 
    else if (taxableIncome >= 35000 && taxableIncome<= 39999) {
      return 950;
    } 
    else if (taxableIncome >= 40000 && taxableIncome <= 44999) {
      return 1000;
    } 
    else if (taxableIncome >= 45000 && taxableIncome <= 49999) {
      return 1100;
    } 
    else if (taxableIncome >= 50000 && taxableIncome <= 59999) {
      return 1200;
    } 
    else if (taxableIncome >= 60000 && taxableIncome <= 69999) {
      return 1300;
    }
     else if (taxableIncome >= 70000 && taxableIncome <= 79999) {
      return 1400;
    } 
    else if (taxableIncome >= 80000 && taxableIncome <= 89999) {
      return 1500;
    } 
    else if (taxableIncome >= 90000 && taxableIncome <= 99999 ) {
      return 1600;
    }
     else if (taxableIncome >= 10000){
      return 1700;
    }
      
    }
 
    
// Calculate payee
function payeeCalc(taxableIncome) {
  if ( taxableIncome <= 24000) {
    return taxableIncome * 0.1;
  } 
  else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
    return taxableIncome * 0.25;
  } 
  else if (taxableIncome >= 32334 && taxableIncome <= 500000) {
    return taxableIncome * 0.3;
  } 
  else if (taxableIncome >= 500001 && taxableIncome <= 800000) {
    return taxableIncome * 0.325;
  } 
  else if (taxableIncome >= 800000) {
    return taxableIncome * 0.35;
  }
}

calculateNetSalary();