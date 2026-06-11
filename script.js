// Banco de dados de perguntas do Quiz Agrinho 2026
const perguntasQuiz = [
    {
        pergunta: "Qual é o principal objetivo do equilíbrio entre produção e meio ambiente?",
        opcoes: [
            "Produzir o máximo possível sem se preocupar com o amanhã.",
            "Garantir alimentos para a população preservando os recursos naturais para o futuro.",
            "Deixar de plantar para proteger as florestas.",
            "Utilizar apenas processos manuais e antigos na agricultura."
        ],
        correta: 1 // Índice da resposta correta (segunda opção)
    },
    {
        pergunta: "Qual tecnologia ajuda a economizar água na agricultura sustentável?",
        opcoes: [
            "Irrigação por inundação.",
            "Uso de tratores movidos a diesel.",
            "Sistemas de irrigação por gotejamento automatizado.",
            "Desvio de cursos de rios naturais."
        ],
        correta: 2 // Terceira opção
    },
    {
        pergunta: "O que significa o termo 'Agro Forte' no contexto da sustentabilidade?",
        opcoes: [
            "Um agro que usa tecnologia avançada e práticas verdes para resistir a crises ambientais.",
            "Um agro que desmata para expandir território rapidamente.",
            "O uso excessivo de produtos químicos pesados.",
            "A dependência exclusiva de energias não renováveis."
        ],
        correta: 0 // Primeira opção
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

// Elementos do HTML
const textoPergunta = document.getElementById("texto-pergunta");
const containerOpcoes = document.getElementById("opcoes-respostas");
const boxPergunta = document.getElementById("pergunta-box");
const boxResultado = document.getElementById("resultado-box");
const mensagemResultado = document.getElementById("mensagem-resultado");

// Função para iniciar ou atualizar o Quiz
function carregarPergunta() {
    if (indicePerguntaAtual < perguntasQuiz.length) {
        // Mostra a pergunta atual
        const dadosPergunta = perguntasQuiz[indicePerguntaAtual];
        textoPergunta.innerText = dadosPergunta.pergunta;
        
        // Limpa opções antigas
        containerOpcoes.innerHTML = "";
        
        // Cria os botões para as novas opções
        dadosPergunta.opcoes.forEach((opcao, index) => {
            const botao = document.createElement("button");
            botao.innerText = opcao;
            botao.classList.add("btn-opcao");
            botao.addEventListener("click", () => verificarResposta(index));
            containerOpcoes.appendChild(botao);
        });
    } else {
        // Fim do quiz, mostra resultados
        mostrarResultado();
    }
}

// Função para checar se a resposta clicada está certa
function verificarResposta(indiceSelecionado) {
    const respostaCorreta = perguntasQuiz[indicePerguntaAtual].correta;
    
    if (indiceSelecionado === respostaCorreta) {
        pontuacao++;
    }
    
    // Avança para a próxima pergunta
    indicePerguntaAtual++;
    carregarPergunta();
}

// Exibe a tela final com a pontuação
function mostrarResultado() {
    boxPergunta.classList.add("escondido");
    boxResultado.classList.remove("escondido");
    mensagemResultado.innerText = `Você acertou ${pontuacao} de ${perguntasQuiz.length} perguntas!`;
}

// Reseta o jogo
function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    boxResultado.classList.add("escondido");
    boxPergunta.classList.remove("escondido");
    carregarPergunta();
}

// Inicializa o quiz assim que a página carrega
window.onload = carregarPergunta;