
let form = document.querySelector("form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);
    let result = document.querySelector('#result');
    let bmi;
    document.querySelector(".one").style.backgroundColor = "";
    document.querySelector(".two").style.backgroundColor = "";
    document.querySelector(".three").style.backgroundColor = "";
    document.querySelector(".four").style.backgroundColor = "";

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please give a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please give a valid weight';
    } else {
        bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`;

        if (bmi < 18.5) {
            document.querySelector(".one").style.backgroundColor = "red";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            document.querySelector(".two").style.backgroundColor = "green";
        } else if (bmi >= 25 && bmi <= 29.9) {
            document.querySelector(".three").style.backgroundColor = "orange";
      
        } else if (bmi >= 30) {
            document.querySelector(".four").style.backgroundColor = "red";
        }
    }
});
