// script.js

// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        encryptedText += String.fromCharCode(charCode + 3);
    }
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        decryptedText += String.fromCharCode(charCode - 3);
    }
    return decryptedText;
}

// Manejar eventos de botones
document.getElementById('encrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
});

// Función para copiar el texto al portapapeles
document.getElementById('copy-button').addEventListener('click', function() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
