import React from 'react'

// on peut utiliser la destructuration du parametre props
// afin de d'extraire et declcarer uniquement les props
// d'interet

// On peut inserer du code (contenu de variables) directement dans
// dans le template en utilisant {} 

// La prop children est commune a tous les composants React

// elle permet d afficher dans le template des composant(s) enfant(s)
// a l'interieur de la balise exportee 

export default function Alert({message, type, children}) {



  return (
    <>
        {/* Ceci est un commentaire! <div className={type === warning ? 'alert' : null} >{message}</div> */}
        <div >{message}</div>
        {
            /* ci-dessous un exemple d'affichage conditionnel */
            type === 'Warning' && <div>Attention</div>
        }
        {children}
    </>
    

  )
}
