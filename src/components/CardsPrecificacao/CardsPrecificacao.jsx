import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './cardsPrecificacao.css';
import { Loader } from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function CardsPrecificacao({ receitas, custos }) {
  const navigate = useNavigate();
  const [ingredientes, setIngredientes ] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);

  useEffect(() => {
    if (ingredientes) {
    }
  }, [ingredientes]);

  const handleClick = (index) => {
    setSelectedRecipeIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecipeIndex(null);
    navigate("/");
  };

  const handleUpdateModal = () => {
    setShowModal(false);
    setSelectedRecipeIndex(null);
    navigate("/ingredientes");
  };

  const handleConfirmUpdate = () => {
    if (selectedRecipeIndex !== null) {
      const tipo = receitas[selectedRecipeIndex].tipo;
      const id = receitas[selectedRecipeIndex]._id;
      setIngredientes({ tipo, id });
  
      axios.get(`http://localhost:3001/${tipo}/ingredientes/${id}`)
        .then((responseIngredientes) => {
          console.log(responseIngredientes.data);
          console.log(tipo);
  
          // Calcular a soma dos valores dos ingredientes
          let somaIngredientes = 0;
          const ingredientes = responseIngredientes.data;
          for (let key in ingredientes) {
            if (ingredientes.hasOwnProperty(key)) {
              const valor = parseFloat(ingredientes[key]);
              if (!isNaN(valor)) {
                somaIngredientes += valor;
              }
            }
          }
  
          let quantiaReceita;
          switch (tipo) {
            case 'mousse':
              quantiaReceita = 7;
              break;
            case 'brownie':
              quantiaReceita = 10;
              break;
            case 'paodemel':
              quantiaReceita = 20;
              break;
            default:
              console.log('Tipo de receita não reconhecido');
              return;
          }
  
          axios.get(`http://localhost:3001/custos/calculados/664a532ca0f3f3c984ece916`)
            .then((responseCustos) => {
              console.log(responseCustos.data);
  

              const custos = responseCustos.data;
              const cobertura = parseFloat(custos.cobertura);
              const recheio = parseFloat(custos.recheio);
              const custoFixo = parseFloat(custos.custoFixo);
              const custoVariaveis = parseFloat(custos.custoVariaveis);
              const sacosPlasticos = parseFloat(custos.sacosPlasticos);
              const fita = parseFloat(custos.fita);
              const etiqueta = parseFloat(custos.etiqueta);
              let somaCustos = 0;
  
              
              if (tipo === 'mousse') {
                somaCustos += (sacosPlasticos * 7) + (fita * 7) + (etiqueta * 7) + custoFixo + custoVariaveis;
              } else if ( tipo === 'brownie'){
                somaCustos += (sacosPlasticos * 10) + (fita * 10) + (etiqueta * 10) + custoFixo + custoVariaveis;
              } else if (tipo === 'paodemel'){
                somaCustos += (sacosPlasticos * 20) + (fita * 20) + (etiqueta * 20) + custoFixo + custoVariaveis + cobertura + recheio;
              }
              
    
              const custoTotal = parseFloat(((somaIngredientes + somaCustos) / quantiaReceita) * 2).toFixed(2);
              console.log('Custo total da receita:', custoTotal);
  
  
              axios.put(`http://localhost:3001/${tipo}/preco/${id}`, {
                preco: custoTotal
              })
                .then((response) => {
                  console.log('Custo total da receita salvo com sucesso:', response.data);
                  window.location.reload();
                })
                .catch((error) => {
                  console.error('Erro ao salvar custo total da receita:', error);
                });
  
              setShowModal(false);
              setSelectedRecipeIndex(null);
            })
            .catch((error) => {
              console.error('Erro ao obter custos calculados:', error);
            });
  
        })
        .catch((error) => {
          console.error('Erro ao obter ingredientes:', error);
        });
    }
  };
  
  
  
  
  
  

  return (
    <>
      {receitas === null ? (
        <Loader />
      ) : (
        receitas.map((receita, index) => (
          <div key={index} className="container-precificacao">
            <article>
              <div className="header-precificacao">
                <h1>{receita.nome}</h1>
              </div>
              <div className="body-precificacao">
                <img src={receita.imagemUrl} className='card-imagem' alt="Logo" />
                <p className='card-precificacao'>R$ {parseFloat(receita.preco).toFixed(2)}</p>
                <button onClick={() => handleClick(index)}>Precifique Aqui!</button>
              </div>
            </article>
          </div>
        ))
      )}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Atualização</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja atualizar os ingredientes e custos?
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-ingredientes' onClick={handleUpdateModal}>
            Atualizar
          </Button>
          <Button className='button-ingredientes' onClick={handleConfirmUpdate}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};