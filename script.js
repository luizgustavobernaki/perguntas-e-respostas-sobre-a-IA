const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está termiando o ensimo médio e têm planos de ingressar na faculdade no próximo ano. Para isso o estudo é primordial. Como você engloba essa tarefa na sua vida?",
        alternativas: [
            {
                texto: "Criar um cronogrâma no tempo fora do colégio e seguir um rítimo próprio, trilha de assuntos e conteúdos.",
                afirmacao: "Você é uma pessoa que nunca desiste e fará de tudo pelos seus sonhos,"
            },
            {
                texto: "Focar exclusivamente na escola e tentar extrair tudo das aulas, assim, investindo o tempo fora do colégio em outras atividades.",
                afirmacao: "Você é mestre em autocontrole e determinado,"
            }
        ]
    },
    {
        enunciado: "É totalmente comum você se sentir desgastado e até pensar em desistir de seus objetivos devido a ansiedade do dia a dia. Você precisa descansar para se renovar. Qual seria a melhor alternativa para a sua realidade?",
        alternativas: [
            {
                texto: "Organizar o seu dia a dia a propósito de terminar tudo até o final da tarde, assim tendo toda a noite para relaxar e dormir.",
                afirmacao: "seu forte é organizar o seu dia, criar uma rotina"
            },
            {
                texto: "Levar a semana no rítimo cotidiano e desmrcar todos os afazeres do final de samana, assim, tendo 2 dias livres para relaxar.",
                afirmacao: "seu forte é aproveitar cada segundo do seu tempo livre"
            }
        ]
    },
    {
        enunciado: "Saber separa seus projetos pessoais e rotina do seu tempo de lazer é inerente para viver bem e ser feliz. O que mais te atrai alegria em seu tempo livre?",
        alternativas: [
            {
                texto: "Passar seu tempo livre no conforto de casa, lendo, usando a internet, jogando online, ouvindo música ou assistindo séries ou filmes.",
                afirmacao: "e é extrovertido."
            },
            {
                texto: "Programar algum passeio e sair com seus amigos e/ou familiares.",
                afirmacao: "e é extrovertido.."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
