// Seleciona os elementos do DOM
var adicionarTarefaBotao = document.getElementById('adicionarTarefaBotao');
var novaTarefaInput = document.getElementById('novaTarefaInput');
var listaTarefas = document.getElementById('listaTarefas');

// Função para criar um novo item de tarefa
function criarItemTarefa(textoTarefa) {
    var itemTarefa = document.createElement('li');
    itemTarefa.className = 'item-tarefa';

    var tarefaSpan = document.createElement('span');
    tarefaSpan.textContent = textoTarefa;

    var containerBotoes = document.createElement('div');

    var editarBotao = document.createElement('button');
    editarBotao.className = 'editarTarefaBotao';
    editarBotao.textContent = 'Editar';
    editarBotao.addEventListener('click', () => editarTarefa(itemTarefa, tarefaSpan));

    var removerBotao = document.createElement('button');
    removerBotao.className = 'removerTarefaBotao';
    removerBotao.textContent = 'Remover';
    removerBotao.addEventListener('click', () => removerTarefa(itemTarefa));

    containerBotoes.appendChild(editarBotao);
    containerBotoes.appendChild(removerBotao);

    itemTarefa.appendChild(tarefaSpan);
    itemTarefa.appendChild(containerBotoes);

    return itemTarefa;
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var textoTarefa = novaTarefaInput.value;
     itemTarefa = criarItemTarefa(textoTarefa);
    listaTarefas.appendChild(itemTarefa);
    novaTarefaInput.value = '';
    novaTarefaInput.focus();
    
}

// Função para editar uma tarefa
function editarTarefa(itemTarefa, tarefaSpan) {
    var novoTextoTarefa = prompt('Edite a tarefa:', tarefaSpan.textContent);
    if (novoTextoTarefa !== null && novoTextoTarefa.trim() !== '') {
        tarefaSpan.textContent = novoTextoTarefa.trim();
    }
}

// Função para remover uma tarefa
function removerTarefa(itemTarefa) {
    listaTarefas.removeChild(itemTarefa);
}

// Adiciona um evento de clique ao botão de adicionar tarefa
adicionarTarefaBotao.addEventListener('click', adicionarTarefa);

// Adiciona um evento de tecla "Enter" ao input de nova tarefa
novaTarefaInput.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});
