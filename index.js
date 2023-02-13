
function validateForm() {
    let input1value = document.getElementById("input-1").value;
    let input2value = document.getElementById("input-2").value;
    let input3value = document.getElementById("input-3").value;
    let input4value = document.getElementById("input-4").value;

    let mathMode = document.getElementById("inputMathMode").value;
    let output;
    switch (mathMode) {

        case "Sprzężenie":
            output = `${input1value}e - ${input2value}i - ${input3value}j - ${input4value}k`
            document.getElementById("fajnyWynik").innerText = output;
            break;
        case "Moduł":
            output = Math.sqrt(input1value*input1value + input2value*input2value + input3value*input3value + input4value*input4value)
            document.getElementById("fajnyWynik").innerText = output;
            break;

        case "Wyznacznik":
            output = input1value*input1value + input2value*input2value + input3value*input3value + input4value*input4value
            document.getElementById("fajnyWynik").innerText = output;
            break;
    }

    //let output = `${input1value}e + ${input2value}i + ${input3value}j + ${input4value}k`
    // document.getElementById("fajnyWynik").innerText = output;
}

document.getElementById('input-1').addEventListener("keydown", () => {
    console.log(document.getElementById('input-1').value)
})

const x = document.getElementById("browsers").options.length;
document.getElementById("fajnyWynik").innerText = x;


