

function calculateBmi() {

   let Weight = document.getElementById('weight').value;
   let Height = document.getElementById('height').value;
   let bmi = 10000*Weight/Math.pow(Height,2)
   let rBmi = bmi.toFixed(2);
   
   document.getElementById('result').innerHTML="Your BMI is " + rBmi + " Kg/m2";


}


