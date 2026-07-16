let tarefas = [];

const input = document.getElementById('novaTarefa');
const btn = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');

btn.addEventListener('click', () => {
    if(input.value.trim() !== "") {
        tarefas.push({ descricao: input.value, status: false });
        input.value = "";
        renderizar();
    }
});

function renderizar() {
    lista.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${tarefa.status ? 'checked' : ''} onchange="toggleStatus(${index})">
            <span class="${tarefa.status ? 'concluida' : ''}">${tarefa.descricao}</span>
        `;
        lista.appendChild(li);
    });
}

function toggleStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    renderizar();
}