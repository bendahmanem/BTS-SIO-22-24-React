// Les imports et les exports permettent de strucutrer les fichiers js en modules

// Par defaut Javascript execute ce qu'on appelle la 'global scope'. Le contenu du code
// provenant d'un fichier est automatiquement disponible au sein d'un autre fichier
//  

// .js .ts .jsx .tsx

// On peut considerer qu'un fichier js est un module des lors qu'il contient
// un 'export'

function myFuncA () {
    console.log('A')
}

export function myFuncB () {
    console.log('B')
}

function myFuncC () {
    console.log('C')
}

export {myFuncA, myFuncC}; // Syntaxe des l'export nomme


export default myFuncA;

