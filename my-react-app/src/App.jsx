import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Alert from './components/Alert'

//importer le nouveau composant et l'afficher 
// dans le template du composant App

function App() {
  // useState est un hook d'etat qui fournit une variable d'etat
  // et une fonction pour la mettre a jour 
  // const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0)
  let test = 'bonjour'


  // handleClick clickHandler
  const handleClick = () => {
    setCount(count + 1)
    console.log('valeur de test: ', test)
    test = 'quelque chose'
    console.log('valeur de test: ', test)
  }

  return (
    <>
     <h1>Compteur</h1>
     {count}
      {/* <Alert message={'test'} type={'Warning'} />
      <Alert message={'j\'utilise des balises ouvrante/fermantes'} type={'Not Warning'} >
        <p>Contenu</p>
      </Alert> */}
      <br/>
      <button onClick={handleClick} >Plus un </button>
      <br />
      {test}
    </>
  )
}

export default App
