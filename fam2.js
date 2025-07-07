let display = document.querySelector('#display');

function addToDisplay(par) {
    display.value += par;
}

function clearData() {
    display.value = "";
}

function deleteData() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Securely evaluate the expression using Function constructor
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "Error";
    }
}
+_