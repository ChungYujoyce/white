window.onload = function () {
    answer = document.getElementById("screen");
};

var numstring = "";

function getValue(a) {
    answer.value += a;
    numstring += a;
}

function reset() {
    numstring = "";
    answer.value = "";
}

function getAnswer() {
    try {
        eval(numstring);
    } catch (e) {
        if (e instanceof SyntaxError) { // object instanceof constructor
            answer.value = "error";
        }
    }
    answer.value = eval(numstring);
    // numstring = eval(numstring).toString();
}