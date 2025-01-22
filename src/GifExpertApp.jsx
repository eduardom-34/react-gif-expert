import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = (  ) =>{
    // categories.push("Valorant");
    setCategories([ "Valorant", ...categories ]);
    // setCategories( cat => [ ...cat, 'Valorant'] );


  };


  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory />

      {/* Listado de Gifs */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        })}
        {/* <li>ABC</li> */}
        
      </ol>
        {/* Gif Item */}

        
    </>
  )
}
