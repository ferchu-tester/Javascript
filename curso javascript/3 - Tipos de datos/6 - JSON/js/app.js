"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON)

/* con stringify para hacerlo cadena de texto 
con parse lo podemos utilizar para anidar 
esto sirve para intercambiar datos sea en nuestra aplicacion o 
con servicios externos
