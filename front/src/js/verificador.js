const dropFile = document.getElementById('drop-file');
// const dropAss = document.getElementById('drop-ass');

// Função para tratar o evento de mudança e capturar o arquivo selecionado
document.getElementById('file-input-file').addEventListener('change', function(event) {
  var files = event.target.files;
  handleFiles(files, 'arquivo');
});



// Evento ao arrastar o arquivo sobre a área de soltura
dropFile.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropFile.classList.add('dragover');
});

// Evento ao sair do arquivo da área de soltura
dropFile.addEventListener('dragleave', () => {
  dropFile.classList.remove('dragover');
});

// Evento ao soltar o arquivo na área de soltura
dropFile.addEventListener('drop', (event) => {
  event.preventDefault();
  dropFile.classList.remove('dragover');
  const files = event.dataTransfer.files;

  document.getElementById('file-input-file').files = files;

  handleFiles(files, 'arquivo');
});




function validaCamposVerificador(arquivo) {
  // const assinaturaValida = assinatura.files.length !== 0;
  const fileValido = arquivo.files.length !== 0;

  dropFile.classList.remove('input-invalido');
  // dropAss.classList.remove('input-invalido');

  // Força o navegador a reprocessar a remoção da classe antes de re-adicioná-la
  void dropFile.offsetWidth;
  // void dropAss.offsetWidth;

  // if (!assinaturaValida) dropAss.classList.add('input-invalido');
  if (!fileValido) dropFile.classList.add('input-invalido');

  return fileValido;
}

// Função para processar os arquivos
function handleFiles(files) {
    document.getElementById('file-name-file').textContent = files[0].name;

}

const formVerificar = document.getElementById("form-verificar");

// Adiciona um ouvinte de evento para o envio do formulário
formVerificar.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // const assinatura = document.getElementById("file-input-ass");
    const arquivo = document.getElementById("file-input-file");

    if (validaCamposVerificador(arquivo)) sendVerificador(arquivo.files[0])
})

function handleDrop(event, inputId) {
  event.preventDefault();
  const dropArea = document.getElementById(inputId.replace('input', 'drop'));
  dropArea.classList.remove('dragover');
  const files = event.dataTransfer.files;
  
  const dataTransfer = new DataTransfer();
  for (let i = 0; i < files.length; i++) {
      dataTransfer.items.add(files[i]);
  }

  document.getElementById(inputId).files = dataTransfer.files;
  handleFiles(dataTransfer.files, inputId === 'file-input-file' ? 'arquivo' : 'assinatura');
}

dropFile.addEventListener('drop', (event) => handleDrop(event, 'file-input-file'));
// dropAss.addEventListener('drop', (event) => handleDrop(event, 'file-input-ass'));
