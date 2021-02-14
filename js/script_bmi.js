function getBMImsg(bmi) {
 
var result = document.getElementById('result');
  if( bmi <= 18.5)
  {
    resault.textContent = "Neuhranjenost";
  }
  else if(bmi > 18.5 && bmi <= 25 ){
    resault.textContent = "Normalna telesna težina";
  }
  else if(bmi > 25 && bmi <= 30){
   resault.textContent = "Prekomerna telesna težina";
  }
  else{
    resault.textContent = "Gojaznost";
  }

}

function calcBMI(height, weight) {
  var bmi = 0;
  if (height > 0 && weight > 0) {
    bmi = Math.round((weight / Math.pow(height/100, 2)) * 10) / 10;
  }
  return bmi;
}

function bmiFunction() {
  var height = document.getElementById('height');
  var weight = document.getElementById('weight');
  var output = document.getElementById('output');
  var result = document.getElementById('result');
  var bmi = calcBMI(height.value, weight.value);
  
  if (bmi > 0) {
    output.textContent = bmi.toPrecision(3);
    result = getBMImsg(bmi);
  }
}
