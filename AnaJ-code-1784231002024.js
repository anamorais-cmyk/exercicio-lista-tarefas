// Busca os dados salvos ou inicia um array vazio
let curtidas = JSON.parse(localStorage.getItem('listaCurtidas')) || [];

const input = document.getElementById('inputNome');
const btnCurtir = document.getElementById('btnCurtir');
const btnLimpar = document.getElementById('btnLimpar');
const p = document.getElementById('paragrafoResultado');

// Função para salvar no localStorage
function salvarEAtualizar() {
    localStorage.setItem('listaCurtidas', JSON.stringify(curtidas));
    atualizarTexto();
}

btnCurtir.addEventListener('click', () => {
    const nome = input.value.trim();
    if (nome !== "" && !curtidas.includes(nome)) {
        curtidas.push(nome);
        salvarEAtualizar();
    }
    input.value = "";
});

btnLimpar.addEventListener('click', () => {
    curtidas = [];
    salvarEAtualizar();
});

function atualizarTexto() {
    const n = curtidas.length;
    if (n === 0) {
        p.textContent = "Ninguém curtiu";
    } else if (n === 1) {
        p.textContent = `${curtidas[0]} curtiu`;
    } else if (n === 2) {
        p.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        p.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${n - 2} pessoas curtiram`;
    }
}

// Inicializa a tela ao carregar
atualizarTexto();