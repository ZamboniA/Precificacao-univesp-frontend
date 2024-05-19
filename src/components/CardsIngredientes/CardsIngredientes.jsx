import './cardsIngredientes.css';
import { Loader } from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

export function CardsIngredientes( {receitas} ) {
  const navigate = useNavigate();

  const handleClick = (tipo) => {
    navigate(tipo);
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
                <img src={receita.imagemUrl} className='card-imagem' alt="Logo" />
                <button onClick={() => handleClick(receita.tipo)}>Ingredientes aqui!</button>
              </div>
            </article>
          </div>
        ))
      )}
    </>
  );
}
