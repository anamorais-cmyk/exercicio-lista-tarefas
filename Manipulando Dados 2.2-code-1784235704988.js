let feedPosts = [];

const btnPostar = document.getElementById('btnPostar');
const textarea = document.getElementById('textoPost');
const feedContainer = document.getElementById('feed');

btnPostar.addEventListener('click', async () => {
    const texto = textarea.value.trim();
    if (!texto) return;

    // Busca imagem aleatória de gato
    const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await resposta.json();
    const urlGatinho = data[0].url;

    // Cria o objeto da postagem
    const novoPost = {
        data: new Date().toLocaleString(),
        usuario: "Ana Júlia Morais",
        avatar: "https://i.pravatar.cc/50", // Avatar aleatório
        texto: texto,
        imagem: urlGatinho,
        likes: 0
    };

    feedPosts.unshift(novoPost); // Insere no início do array
    textarea.value = "";
    renderizarFeed();
});

function renderizarFeed() {
    feedContainer.innerHTML = "";
    feedPosts.forEach((post, index) => {
        const div = document.createElement('article');
        div.innerHTML = `
            <img src="${post.avatar}" width="40"> <strong>${post.usuario}</strong>
            <p>${post.texto}</p>
            <img src="${post.imagem}" width="200">
            <br>
            <button onclick="curtir(${index})">❤️ ${post.likes} Likes</button>
            <hr>
        `;
        feedContainer.appendChild(div);
    });
}

function curtir(index) {
    feedPosts[index].likes++;
    renderizarFeed();
}