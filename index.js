class Quaternion {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    conjugate() {
        return new Quaternion(this.a, -this.b, -this.c, -this.d);
    }

    determinant() {
        return this.a * this.a + this.b * this.b + this.c * this.c + this.d * this.d
    }

    magnitude() {
        return Math.sqrt(this.determinant());
    }

    reciprocal() {
        const denominator = this.determinant();
        const a1 = this.a / denominator;
        const b1 = this.b / denominator;
        const c1 = this.c / denominator;
        const d1 = this.d / denominator;

        return new Quaternion(a1, b1, c1, d1)
    }


    toString() {
        let output = `${this.a}e`
        if (this.b < 0)
            output += ` - ${-this.b}i`
        else
            output += ` + ${this.b}i`

        if (this.c < 0)
            output += ` - ${-this.c}j`
        else
            output += ` + ${this.c}j`

        if (this.d < 0)
            output += ` - ${-this.d}k`
        else
            output += ` + ${this.d}k`

        return output
    }


}

function validateForm() {

    let input1value = document.getElementById("input-1").value;
    let input2value = document.getElementById("input-2").value;
    let input3value = document.getElementById("input-3").value;
    let input4value = document.getElementById("input-4").value;

    let mathMode = document.getElementById("inputMathMode").value;

    let quaternion = new Quaternion(input1value, input2value, input3value, input4value);
    document.getElementById("quaternionAlgebraicOutput").innerText = quaternion;


    switch (mathMode) {
        case "Sprzężenie":
            document.getElementById("quaternionOutputValue").innerText = `Jego sprzężenie wynosi: ${quaternion.conjugate()}`;
            document.getElementById("quaternionOutput").style.visibility="unset";
            break;

        case "Wyznacznik":
            document.getElementById("quaternionOutputValue").innerText = `Jego wyznacznik wynosi: ${quaternion.determinant()}`;
            document.getElementById("quaternionOutput").style.visibility="unset";
            break;

        case "Moduł":
            document.getElementById("quaternionOutputValue").innerText = `Jego moduł wynosi: ${quaternion.magnitude()}`;
            document.getElementById("quaternionOutput").style.visibility="unset";
            break;

        case "Odwrotność":
            document.getElementById("quaternionOutputValue").innerText = `Jego odwrotność wynosi: ${quaternion.reciprocal()}`;
            document.getElementById("quaternionOutput").style.visibility="unset";
            document.getElementById("quaternionOutput").style.height="8em";
            break;
    }
}
