import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  
  // Similaire à "componentDidMount" et "componentDidUpdate";

  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      )
      setData(result.data)
      console.log('updated');
    };
    fetchData();
    console.log('mounted');
  },[]) 
  /* [] important sinon boucle infini sur la requete,[] array vide === componentDidMount c'est a dire executer seulement au chargement du component,
  on peut placer une ou plusieurs variable à surveiller dans l'array et à chaque changement de valeur de la variable 
  il éxecutera la fonction de callback de useEffect() */
  return (
    <Fragment>
      <ul>
        {data.map(item=>(
          <li key= {item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
