 // Net Salary calculations
function calculateNetSalary(basicSalary, benefits) {
    let basicSalary = "";
    let benefits = "";
    let grossSalary = basicSalary + benefits;
    

    //calculate nhif deductions
    let nhifDeduction = 0
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
      } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
      } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
      } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
      } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
      } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
      } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
      } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
      } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
      } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
      } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
      } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
      } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
      } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
      } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
      } else {
        nhifDeduction = 1700;
      }

      // Calculate taxable income 
      let taxableIncome = grossSalaryrossSalary - nssfDeductions 

      // Calculate Housing Levy
      let housingLevy = grossSalary * 0.015;

      // Calculate payee
      if (basicSalary <= 24000) {
        payee = basicSalary * 0.1;
      } else if (basicSalary > 24000 && basicSalary <= 32333) {
        peyee = basicSalary * 0.25
      } else if (basicSalary > 32333 && basicSalary <= 50000) {
        payee = basicSalary * 0.35
      } else if (basicSalary > 50000 && basicSalary <= 80000) {
        payee = basicSalary * 0.325
      }  else {
        basicSalary * 0.35
      }

      }
            
    



      
      


    

    

}