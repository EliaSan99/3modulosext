var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('Probando Modulos Externos', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log("Mensaje Encriptado con cifrado AES:" + ciphertext); // 'Mensaje encriptado'
console.log("Mensaje Desencriptado: " + originalText); // 'Mensaje Desencriptado'

//Nota: El tercer modulo es nodemon.
