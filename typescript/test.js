// TS apporte une syntaxe qui permet d'ajouter des informations
// sur le type des variables
// voici la sytaxe de declaration d'une variable en typescript
// let maVariable: type; 
var monEntier = 0;
var maChaine = 'Une chaine de caracteres';
// on peut creer ses propres types
// const unEtudiant: Etudiant = new Etudiant();
// typescript supporte aussi ce qu'on appelle la genericite
var pleinDetudiants = [maChaine];
// ceci est une union de type
var iCanChangeType = 4;
iCanChangeType = false;
// Typescript propose le type enum
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Asleep"] = 0] = "Asleep";
    StudentStatus[StudentStatus["Focused"] = 1] = "Focused";
    StudentStatus[StudentStatus["Missing"] = 2] = "Missing";
})(StudentStatus || (StudentStatus = {}));
var Angelo = {
    firstname: 'Angelo',
    lastname: "MACAIRE",
    age: 22,
    status: StudentStatus.Focused,
    followInClass: function (cours) { console.log('je suis en ' + cours); }
};
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
var Vehicule = /** @class */ (function () {
    function Vehicule() {
        console.log('nouveau vehicule cree');
    }
    Vehicule.prototype.deplacer = function () {
        console.log('je me deplace');
    };
    return Vehicule;
}());
