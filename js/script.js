// script.js

const traduccion = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

function encriptar(texto, traduccion) {
    return texto.split('').map(char => traduccion[char] || char).join('');
}

function desencriptar(texto, traduccion) {
    Object.keys(traduccion).forEach(key => {
        texto = texto.replace(new RegExp(traduccion[key], 'g'), key);
    });
    return texto;
}

function validateInput(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function toggleWarning(show) {
    const warning = document.querySelector("#warning");
    warning.style.display = show ? "block" : "none";
}

function handleEncryption() {
    const textarea = document.querySelector("#texto");
    const texto = textarea.value.trim();
    if (!validateInput(texto)) {
        toggleWarning(true);
        return;
    }
    toggleWarning(false);
    const resultado = encriptar(texto, traduccion);
    mostrarResultado(resultado);
}

function handleDecryption() {
    const textarea = document.querySelector("#texto");
    const texto = textarea.value.trim();
    if (!validateInput(texto)) {
        toggleWarning(true);
        return;
    }
    toggleWarning(false);
    const resultado = desencriptar(texto, traduccion);
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const areaDefault = document.querySelector("#default");
    const areaResult = document.querySelector("#result");
    const textoOut = document.querySelector("#texto_out");
    
    if (resultado) {
        areaDefault.classList.add("invisible");
        areaResult.classList.remove("invisible");
        textoOut.value = resultado;
    } else {
        areaDefault.classList.remove("invisible");
        areaResult.classList.add("invisible");
    }
}

function copyToClipboard() {
    const textoOut = document.querySelector("#texto_out");
    navigator.clipboard.writeText(textoOut.value)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => alert('Error al copiar el texto: ' + err));
}

document.querySelector('#enc').addEventListener('click', handleEncryption);
document.querySelector('#des').addEventListener('click', handleDecryption);
document.querySelector('#copiar').addEventListener('click', copyToClipboard);
