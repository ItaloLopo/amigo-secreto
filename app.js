// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome à lista de amigos
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    // Verifica se o campo de nome não está vazio
    if (nome === "") {
        alert("Insira um nome válido");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Atualiza a lista na interface
    atualizarListaAmigos();

    // Limpa o campo de entrada
    nomeInput.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista de amigos antes de atualizar
    listaAmigos.innerHTML = "";

    // Adiciona cada nome de amigo à lista no HTML
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sorteia um amigo aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Seu amigo secreto é: <strong>${sorteado}</strong>`;
}
