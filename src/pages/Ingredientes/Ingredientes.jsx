import { CardsIngredientes } from "../../components/CardsIngredientes/CardsIngredientes"
import './Ingredientes.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export function Ingredientes(){
    const [ receita, setReceita] = useState([]);

    useEffect(() => {
        initializeTable();
        
    }, []);


    function initializeTable(){
        axios.get(`http://localhost:3001/todos-itens`)
            .then((response) =>{
                setReceita(response.data);
            })
            .catch((error) =>{
                console.log(error);
            })
    }



    return(
        <div className="cards-home">
              <CardsIngredientes
                receitas={receita}
              />
        </div>
    )
}