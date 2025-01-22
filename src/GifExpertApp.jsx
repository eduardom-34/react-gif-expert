import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) =>{
    // categories.push(newCategory);

    setCategories([ newCategory, ...categories ]);
    // setCategories( cat => [ ...cat, 'Valorant'] );


  };


  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        // setCategories= { setCategories } 
        onNewCategory={ (value) => onAddCategory( value )}
      />

      {/* Listado de Gifs */}
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
