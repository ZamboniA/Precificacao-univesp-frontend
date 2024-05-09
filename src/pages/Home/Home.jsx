import { Card } from "../../components/Cards/card"
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export function Home(){
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
              <Card
                receitas={receita}
              />
        </div>
    )
}