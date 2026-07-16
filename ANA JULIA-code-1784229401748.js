let curtidas = [];
const input = document.getElementById('inputNome');
const btn = document.getElementById('btnCurtir');
const p = document.getElementById('paragrafoResultado');

btn.addEventListener('click', () => {
    const nome = input.value.trim();
    
    // Verifica se não está vazio e se já não foi adicionado
    if (nome !== "" && !curtidas.includes(nome)) {
        curtidas.push(nome);
        atualizarTexto();
    }
    input.value = "";
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