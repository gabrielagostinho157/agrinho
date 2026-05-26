// 1. Alternador de Modo Escuro / Modo Claro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// 2. Lógica da Calculadora de Impacto Sustentável
function calcularImpacto() {
    const agrofloresta = document.getElementById('agrofloresta').checked;
    const gotejamento = document.getElementById('gotejamento').checked;
    const solar = document.getElementById('solar').checked;
    
    let pontosSustentaveis = 0;
    let mensagem = "";

    if (agrofloresta) pontosSustentaveis += 1;
    if (gotejamento) pontosSustentaveis += 1;
    if (solar) pontosSustentaveis += 1;

    const resultadoDiv = document.getElementById('resultado-calculo');
    resultadoDiv.style.display = 'block';

    // Condicionais simples baseadas nas escolhas do usuário
    if (pontosSustentaveis === 3) {
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
        mensagem = "🏆 Excelente! Sua fazenda atingiu o nível máximo de sustentabilidade. Produção forte e planeta protegido!";
    } else if (pontosSustentaveis > 0) {
        resultadoDiv.style.backgroundColor = '#fff3cd';
        resultadoDiv.style.color = '#856404';
        mensagem = "🌱 Bom começo! Cada prática adotada ajuda o meio ambiente. Que tal tentar implementar mais uma?";
    } else {
        resultadoDiv.style.backgroundColor = '#f8d7da';
        resultadoDiv.style.color = '#721c24';
        mensagem = "⚠️ Alerta! Nenhuma prática sustentável foi selecionada. Sem o equilíbrio, o futuro da produção pode ser ameaçado.";
    }

    resultadoDiv.innerText = mensagem;
}

// 3. Lógica de Verificação do Quiz
function verificarQuiz() {
    // Busca o radio button selecionado que tem o nome 'q1'
    const respostaSelecionada = document.querySelector('input[name="q1"]:checked');
    const resultadoQuizDiv = document.getElementById('resultado-quiz');
    
    resultadoQuizDiv.style.display = 'block';

    if (!respostaSelecionada) {
        resultadoQuizDiv.style.backgroundColor = '#fff3cd';
        resultadoQuizDiv.style.color = '#856404';
        resultadoQuizDiv.innerText = "Por favor, selecione uma alternativa antes de verificar!";
        return;
    }

    if (respostaSelecionada.value === 'certo') {
        resultadoQuizDiv.style.backgroundColor = '#d4edda';
        resultadoQuizDiv.style.color = '#155724';
        resultadoQuizDiv.innerText = "🎉 Resposta Correta! A rotação de culturas e o plantio direto protegem a estrutura do solo e evitam o desgaste da terra.";
    } else {
        resultadoQuizDiv.style.backgroundColor = '#f8d7da';
        resultadoQuizDiv.style.color = '#721c24';
        resultadoQuizDiv.innerText = "❌ Tente novamente! Essa prática prejudica o meio ambiente e reduz a força da produção a longo prazo.";
    }
}