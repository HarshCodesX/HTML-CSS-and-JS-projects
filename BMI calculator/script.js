const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height: (height you entered ${height})`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight: (weight you entered ${weight})`;
  } else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //now telling if the user in under weight, normal or over weight
  if(bmi<18.6){
    results.innerHTML = `under weight and bmi is ${bmi}`;
  } else if (bmi == 18.6 || bmi <= 24.9){
    results.innerHTML = `normal range and bmi is ${bmi}`;
  } else {
    results.innerHTML = `over weight and bmi is ${bmi}`;
  }
  }
});