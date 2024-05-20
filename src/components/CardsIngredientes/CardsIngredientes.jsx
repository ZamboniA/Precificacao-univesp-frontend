import './cardsIngredientes.css';
import { Loader } from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import brownieImg from './../../assets/img/brownie.jpg';
import mousseImg from './../../assets/img/mousse.jpg';
import paodemelImg from './../../assets/img/paodemel.jpg';

export function CardsIngredientes({ receitas }) {
  const navigate = useNavigate();

  const handleClick = (tipo) => {
    navigate(tipo);
  };

  const validacaoVariaveis = (tipo) => {
    switch (tipo) {
      case 'mousse':
        return mousseImg;
      case 'brownie':
        return brownieImg;
      case 'paodemel':
        return paodemelImg;
      default:
        return '';
    }
  };

  return (
    <>
      {receitas === null ? (
        <Loader />
      ) : (
        receitas.map((receita, index) => (
          <div key={index} className="container-card">
            <article>
              <div className="header-card">
                <h1>{receita.nome}</h1>
              </div>
              <div className="body-card">
                <img src={validacaoVariaveis(receita.tipo)} className="card-imagem" alt={receita.nome} />
                <button onClick={() => handleClick(receita.tipo)}>Ingredientes aqui!</button>
              </div>
            </article>
          </div>
        ))
      )}
    </>
  );
}
