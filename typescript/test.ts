// TS apporte une syntaxe qui permet d'ajouter des informations
// sur le type des variables

// voici la sytaxe de declaration d'une variable en typescript
// let maVariable: type; 

const monEntier: number = 0
const maChaine: string = 'Une chaine de caracteres'

// on peut creer ses propres types
// const unEtudiant: Etudiant = new Etudiant();

// typescript supporte aussi ce qu'on appelle la genericite
const pleinDetudiants: Array<string> = [maChaine];

// ceci est une union de type
let iCanChangeType : number | boolean = 4;

iCanChangeType = false;


// Typescript propose le type enum
enum StudentStatus {
    Asleep,
    Focused,
    Missing
}

// les interfaces
// on peut comparer une interface a un contrat, implementer une interface c'est s'engager a posseder 
// touttes les proprietes presentees dans l'interface
interface Student {
    firstname: string,
    lastname: string,
    age: number,
    status: StudentStatus,
    followInClass(cours: string): void // on peut aussi passer des fonctions en proprietes
}

const Angelo: Student = {
    firstname: 'Angelo',
    lastname: "MACAIRE",
    age: 22,
    status: StudentStatus.Focused,
    followInClass: function(cours: string) { console.log('je suis en ' + cours)}
}





// Les fonctions en typescript
// un parametre de fontion peut etre optionnel il suffit d'ajouter `?` apres son nom
// function createStudent(firstname: string , lastname: string, age: number, status: StudentStatus): Student {
//     const newStudent : Student = {
//         age: age,
//         firstname: firstname,
//         lastname: lastname,
//         status:status
//     }

//      return newStudent
// }
//function createStudent(firstname: string , lastname: string, age: number, status: StudentStatus): Student {
    //     const newStudent : Student = {
    //         age: age,
    //         firstname: firstname,
    //         lastname: lastname,
    //         status:status
    //     }
    
    //      return newStudent
    // }
//}
    
    class Vehicule {
        brand: string;
        color: string;
        speed: number;

        deplacer(): void {
            console.log('je me deplace');
            
        }

        constructor() {
            console.log('nouveau vehicule cree')
        }
    }

