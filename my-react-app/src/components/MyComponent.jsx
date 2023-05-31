// Les props sont un parametre optionnel qu'on 
// peut passer a un composant React
// Elles constituent un objet qui contient notamment
// des proprietes que l'on peut choisir

// Les props sont passees au composant enfant 
// en utilisant des attributs JSX

function MyComponent (props) {
  console.log(props.uneProp)
  return (
    <div>{props.uneProp}</div>
  )
}


export default MyComponent;