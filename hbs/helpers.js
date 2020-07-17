const hbs = require('hbs');

//helpers
hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
});


hbs.registerHelper('capitalizar', (texto ) => {
    
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
