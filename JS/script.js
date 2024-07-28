let alegria = 0;
let tristeza = 0;
let raiva = 0;
let nojinho = 0;
let medo = 0;
let tess = '';

const questoes = [
    {
        question: "Como você se sente quando está sob pressão?",
        answers: [
            { option: "Determinado e focado", emotion: "raiva" },
            { option: "Frustrado e irritado", emotion: "raiva" },
            { option: "Ansioso e nervoso", emotion: "medo" },
            { option: "Calmo e controlado", emotion: "alegria" }
        ],
    },
    {
        question: "Como você reage a uma crítica construtiva?",
        answers: [
            { option: "Fico defensivo e irritado", emotion: "nojinho" },
            { option: "Fico motivado a provar meu valor", emotion: "raiva" },
            { option: "Fico chateado, mas tento aprender", emotion: "tristeza" },
            { option: "Aceito bem e procuro melhorar", emotion: "alegria" }
        ],
    },
    {
        question: "O que você sente quando alcança um objetivo importante?",
        answers: [
            { option: "Orgulhoso e energizado", emotion: "raiva" },
            { option: "Contente, mas já pensando em possíveis problemas futuros", emotion: "nojinho" },
            { option: "Satisfeito e em paz", emotion: "alegria" },
            { option: "Aliviado e ansioso pelo próximo desafio", emotion: "medo" }
        ],
    },
    {
        question: "Qual é sua reação ao ver alguém em necessidade?",
        answers: [
            { option: "Motivado a agir imediatamente", emotion: "raiva" },
            { option: "Tranquilo e disposto a ajudar", emotion: "alegria" },
            { option: "Preocupado e ansioso para ajudar", emotion: "medo" },
            { option: "Frustrado por não poder fazer mais", emotion: "tristeza" }
        ],
    },
    {
        question: "Como você lida com mudanças inesperadas?",
        answers: [
            { option: "Adapto-me calmamente", emotion: "alegria" },
            { option: "Vejo como um desafio e fico animado", emotion: "raiva" },
            { option: "Fico irritado e resistente", emotion: "nojinho" },
            { option: "Fico ansioso e preocupado", emotion: "medo" }
        ],
    },
    {
        question: "Como você se sente ao encontrar amigos após muito tempo?",
        answers: [
            { option: "Um pouco desconfortável", emotion: "nojinho" },
            { option: "Feliz e animado", emotion: "alegria" },
            { option: "Ansioso sobre como vai ser", emotion: "medo" },
            { option: "Energizado e entusiasmado", emotion: "raiva" },
            { option: "Um pouco melancólico", emotion: "tristeza" }
        ],
    },
    {
        question: "Qual é sua reação ao assistir um filme de terror?",
        answers: [
            { option: "Fico irritado com as decisões dos personagens", emotion: "raiva" },
            { option: "Fico triste com o sofrimento dos personagens", emotion: "tristeza" },
            { option: "Acho repulsivo e desinteressante", emotion: "nojinho" },
            { option: "Me divirto e dou risada", emotion: "alegria" },
            { option: "Fico assustado e ansioso", emotion: "medo" }
        ],
    },
    {
        question: "O que você sente ao experimentar uma comida nova?",
        answers: [
            { option: "Indiferente, depende do sabor", emotion: "raiva" },
            { option: "Nervoso e apreensivo", emotion: "medo" },
            { option: "Relutante e triste", emotion: "tristeza" },
            { option: "Excitado e curioso", emotion: "alegria" },
            { option: "Desconfiado e enojado", emotion: "nojinho" }
        ],
    },
    {
        question: "Como você reage a uma situação de conflito?",
        answers: [
            { option: "Tento manter a calma e resolver pacificamente", emotion: "alegria" },
            { option: "Fico ansioso e preocupado", emotion: "medo" },
            { option: "Fico irritado e confrontador", emotion: "raiva" },
            { option: "Fico triste pela situação", emotion: "tristeza" },
            { option: "Fico desconfortável e quero evitar", emotion: "nojinho" }
        ],
    },
    {
        question: "Como você se sente ao ver alguém quebrar as regras?",
        answers: [
            { option: "Tento entender e não julgar", emotion: "alegria" },
            { option: "Fico irritado pela injustiça", emotion: "raiva" },
            { option: "Fico enojado com a atitude", emotion: "nojinho" },
            { option: "Fico preocupado com as consequências", emotion: "medo" },
            { option: "Fico triste pela falta de ordem", emotion: "tristeza" }
        ],
    },
];

let numQuestao = document.querySelector('#numQuestao');
let pergunta = document.querySelector('#pergunta');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let e = document.querySelector('#e');

let numero = document.querySelector('#numero');
let total = document.querySelector('#total')

let totalDeQuestoes = questoes.length;

total.textContent = totalDeQuestoes;

function proximaQuestao(nQuestao) {
    let questao = questoes[nQuestao];
    numero.textContent = nQuestao + 1;
    numQuestao.textContent = nQuestao + 1;
    pergunta.textContent = questao.question;
    a.textContent = questao.answers[0]?.option || '';
    b.textContent = questao.answers[1]?.option || '';
    c.textContent = questao.answers[2]?.option || '';
    d.textContent = questao.answers[3]?.option || '';
    e.textContent = questao.answers[4]?.option || '';

    a.setAttribute('data-emotion', questao.answers[0]?.emotion || '');
    b.setAttribute('data-emotion', questao.answers[1]?.emotion || '');
    c.setAttribute('data-emotion', questao.answers[2]?.emotion || '');
    d.setAttribute('data-emotion', questao.answers[3]?.emotion || '');
    e.setAttribute('data-emotion', questao.answers[4]?.emotion || '');
}

function verificarSeAcertou(nQuestao, resposta) {
    let emotion = resposta.getAttribute('data-emotion');

    switch (emotion) {
        case 'alegria':
            alegria++;
            break;
        case 'tristeza':
            tristeza++;
            break;
        case 'raiva':
            raiva++;
            break;
        case 'nojinho':
            nojinho++;
            break;
        case 'medo':
            medo++;
            break;
    }

    if (nQuestao + 1 < totalDeQuestoes) {
        proximaQuestao(nQuestao + 1);
    } else {
        fimDoJogo();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    proximaQuestao(0);
    document.querySelectorAll('.respostas').forEach((el) => {
        el.addEventListener('click', () => verificarSeAcertou(parseInt(numQuestao.textContent) - 1, el));
    });
});

const modalHTML = `
    <div id="fimModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Fim do Jogo!</h2>
            <div id="resultado">
                <!-- Removido as pontuações das emoções -->
                <p><strong>Você é: <span id="finalEmotion"></span></strong></p>
                <p>Reiniciando em <span id="timer">3</span> segundos...</p>
            </div>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);


function fimDoJogo() {
    if (alegria > tristeza && alegria > raiva && alegria > nojinho && alegria > medo) {
        tess = "Alegria";
    } else if (tristeza > alegria && tristeza > raiva && tristeza > nojinho && tristeza > medo) {
        tess = "Tristeza";
    } else if (raiva > alegria && raiva > tristeza && raiva > nojinho && raiva > medo) {
        tess = "Raiva";
    } else if (nojinho > alegria && nojinho > tristeza && nojinho > raiva && nojinho > medo) {
        tess = "Nojinho";
    } else if (medo > alegria && medo > tristeza && medo > raiva && medo > nojinho) {
        tess = "Medo";
    } else {
        tess = "Indefinido";
    }

    document.getElementById('finalEmotion').textContent = tess;

    const modal = document.getElementById("fimModal");
    modal.style.display = "block";

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    let timer = 3;
    const timerElement = document.getElementById('timer');
    const intervalId = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer === 0) {
            clearInterval(intervalId);
            location.reload();
        }
    }, 1000);
}