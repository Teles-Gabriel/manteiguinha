function displayFileName(input) {
    var fileName = input.files[0].name;
    document.getElementById("fileName").innerText = fileName;
}

function checkNumberInput(input) {
    // Se o valor for menor que 0, defina-o como 0
    if (input.value < 0) {
        input.value = 0;
    }
}