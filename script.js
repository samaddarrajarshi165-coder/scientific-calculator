let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}

function square() {
    try {
        let num = eval(display.value);
        display.value = num * num;
    }
    catch {
        display.value = "Error";
    }
}

function power() {
    let exponent = prompt("Enter Power:");
    try {
        let num = eval(display.value);
        display.value = Math.pow(num, exponent);
    }
    catch {
        display.value = "Error";
    }
}

function appendPi() {
    display.value += Math.PI;
}

function sin() {
    try {
        display.value = Math.sin(eval(display.value) * Math.PI / 180);
    }
    catch {
        display.value = "Error";
    }
}

function cos() {
    try {
        display.value = Math.cos(eval(display.value) * Math.PI / 180);
    }
    catch {
        display.value = "Error";
    }
}

function tan() {
    try {
        display.value = Math.tan(eval(display.value) * Math.PI / 180);
    }
    catch {
        display.value = "Error";
    }
}

function log() {
    try {
        display.value = Math.log10(eval(display.value));
    }
    catch {
        display.value = "Error";
    }
}
