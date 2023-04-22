function printOutput(myFirstform) {
    var TestVar = myFirstform.inputBox.value;
    document.getElementById('return').innerText = `You typed: ${TestVar}`;
}

