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
        axios.get(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/todositens`)
            .then((response) =>{
                setReceita(response.data);
            })
            .catch((error) =>{
                console.log(error);
            })
        axios.get(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/todositens`)
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