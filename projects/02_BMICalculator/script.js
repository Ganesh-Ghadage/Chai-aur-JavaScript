// const button = document.getElementsByTagName('button')[0]
// const heightInput = document.getElementById('height')
// const weightInput = document.getElementById('weight')
// const result = document.getElementById('results')

// let height;
// let weight;

// heightInput.addEventListener('input', (e) => {
//     height = Number.parseInt(e.target.value)
// })

// weightInput.addEventListener('input', (e) => {
//     weight = Number.parseInt(e.target.value)
// })

// // height = height / 100;

// button.addEventListener(('click'), (e) => {
//     e.preventDefault()
//     const bmi = Math.round(((weight * 10000) / (height * height)))
//     console.log(bmi)
//     result.textContent = `Your BMI index is ${bmi}`
// })

//-------------------------------------------------------------------------

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi < 18.6){
        results.innerHTML = `<span>your BMI is ${bmi} and it's Under Weight</span>`;
    }else if(bmi >= 18.6 && bmi < 24.9){
        results.innerHTML = `<span>your BMI is ${bmi} and it's in Normal Range</span>`;
    }else {
        results.innerHTML = `<span>your BMI is ${bmi} and it's Overweight</span>`;
    }
    
  }
});