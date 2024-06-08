

let tempInput = document.getElementById("inputTemperature");
let inputUnit = document.getElementById("inputUnit");
let outputUnit = document.getElementById("outputUnit");
let btn = document.getElementById("button");

function convertion(event){
    event.preventDefault();
    let temperature = parseFloat(tempInput.value);
    let convertedTemperature;
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    if(inputUnit.value === "celsius"){
        if(outputUnit.value === "fahrenheit"){
            convertedTemperature = (temperature * 9/5)+32;
        }
        else if(outputUnit.value === "kelvin"){
            convertedTemperature = temperature + 273.15;
        }
        else {
            convertedTemperature = temperature;
        }
    }
    else if(inputUnit.value === "fahrenheit"){
        if(outputUnit.value === "celsius"){
            convertedTemperature = (temperature-32)*5/9;
        }
        else if(outputUnit.value === "kelvin"){
            convertedTemperature = (temperature + 459.67) * 5/9;
        }
        else {
            convertedTemperature = temperature;
        }
    }
    else if(inputUnit.value === "kelvin"){
        if(outputUnit.value === "celsius"){
            convertedTemperature = temperature-273.15;
        }
        else if(outputUnit.value === "fahrenheit"){
            convertedTemperature = (temperature * 9/5) - 459.67;
        }
        else {
            convertedTemperature = temperature;
        }
    }
    document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2);
    document.getElementById('result').style.display = 'block';
}

btn.addEventListener('click',convertion);
