// Recupera do localStorage ou inicia um array vazio
let tarefas = JSON.parse(localStorage.getItem('minhasTarefas')) || [];

const input = document.getElementById('novaTarefa');
const btn = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');

function salvarDados() {
    localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
    renderizar();
}

btn.addEventListener('click', () => {
    if(input.value.trim() !== "") {
        tarefas.push({ descricao: input.value, status: false });
        input.value = "";
        salvarDados();
    }
});

function renderizar() {
    lista.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${tarefa.status ? 'checked' : ''} onchange="toggleStatus(${index})">
            <span class="${tarefa.status ? 'concluida' : ''}">${tarefa.descricao}</span>
            <button onclick="excluirTarefa(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

function toggleStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    salvarDados();
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    salvarDados();
}

// Renderiza a lista ao abrir a página
renderizar();