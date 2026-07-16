const input = document.getElementById('inputBusca');
const btn = document.getElementById('btnBuscar');
const lista = document.getElementById('resultadoLista');

btn.addEventListener('click', async () => {
    const termo = input.value.trim();
    if (!termo) return;

    lista.innerHTML = ""; // Limpa resultados anteriores

    try {
        // A API de busca do GitHub retorna um objeto com uma propriedade 'items'
        const resposta = await fetch(`https://api.github.com/search/users?q=${termo}`);
        const dados = await resposta.json();

        if (dados.items && dados.items.length > 0) {
            dados.items.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `<img src="${user.avatar_url}" width="50"> ${user.login}`;
                lista.appendChild(li);
            });
        } else {
            lista.innerHTML = "<li>Não foram encontrados usuários para esta pesquisa</li>";
        }
    } catch (erro) {
        lista.innerHTML = "<li>Erro ao buscar usuários. Tente novamente.</li>";
    }
});