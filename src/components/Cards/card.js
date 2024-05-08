import './card.css';
// import brownie from "./../../assets/img/brownie.jpg";
import { Loader } from '../Loader/Loader';

export function Card( {receitas} ) {
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
              <img src={receita.imagem} className="Logo-imagem" alt="Logo" />
                {console.log(receita.imagem)}
                <button>Clique aqui!</button>
              </div>
            </article>
          </div>
        ))
      )}
    </>
  );
}
