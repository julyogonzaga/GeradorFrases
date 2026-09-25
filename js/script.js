const frases = [
    "O segredo para progredir é simplesmente dar o primeiro passo.",
    "A constância supera o talento quando o talento não é constante.",
    "Grandes conquistas levam tempo; não confunda ritmo com falta de progresso.",
    "O fracasso não é o oposto do sucesso, é parte do caminho até ele.",
    "Não espere pelas condições perfeitas; comece onde está e faça o que puder.",
    "A disciplina de hoje é a liberdade do seu amanhã.",
    "Coragem não é a ausência de medo, mas a decisão de que algo é mais importante do que ele.",
    "Seus limites só existem onde a sua mente permite que eles fiquem.",
    "Pequenas ações diárias constroem resultados extraordinários ao longo do tempo.",
    "Acredite no processo, confie no seu esforço e continue em frente."
];

const btnNova = document.getElementById("btn-nova");
const textoFrase = document.getElementById("texto-frase");

btnNova.addEventListener("click", function() {
    // 1. Faz a frase atual sumir suavemente
    textoFrase.classList.add("escondido");

    // 2. Aguarda a animação (300ms), troca o texto e faz reaparecer
    setTimeout(function() {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        textoFrase.textContent = frases[indiceAleatorio];
        
        textoFrase.classList.remove("escondido");
    }, 500);
});