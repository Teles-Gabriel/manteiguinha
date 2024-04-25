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

document.addEventListener('DOMContentLoaded', function() {
    var breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.addEventListener('click', voltarParaServicos);
    }
});

function toggleForm(formId, serviceName) {
    var forms = document.querySelectorAll('.container'); // Seleciona todos os formulários
    forms.forEach(function(form) {
        if (form.id === formId) {
            form.style.display = 'block'; // Mostra o formulário clicado
        } else {
            form.style.display = 'none'; // Oculta os outros formulários
        }
    });

    // Atualiza os breadcrumbs com o nome do serviço
    var breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
        if (serviceName) {
            breadcrumbs.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16"><path d="M8.646.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354V14.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V10H6v4.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .146-.354z"/></svg> Serviços - ' + serviceName;
        } else {
            breadcrumbs.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16"><path d="M8.646.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354V14.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V10H6v4.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .146-.354z"/></svg> Serviços';
        }
    }
}

function voltarParaServicos(event) {
    // Exibe o formulário de escolha de serviços (os botões)
    toggleForm('servicos');
}
