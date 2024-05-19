import { CardsPrecificacao } from "../../components/CardsPrecificacao/CardsPrecificacao"
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export function Home(){
    const [ receita, setReceita] = useState([]);
    const [custo, setCustos] = useState([]);

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
        axios.get(`http://localhost:3001/custos/6646b49692134d6baeaa8681`)
        .then((response) => {
            setCustos(response.data);
        })
        .catch((error) => {
            console.log(error);
        });    
    }



    return(
        <div className="cards-home">
            <CardsPrecificacao
                receitas={receita}
                custos = {custo}
            />
        </div>
    )
}