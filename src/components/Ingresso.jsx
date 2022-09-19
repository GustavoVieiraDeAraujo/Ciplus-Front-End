import React from "react";
import App from "../App";
import style from "../components/style.css";

function Ingresso() {
  return (
    <main className="grid-container">
      <div className="grid-item fPrincipal"></div>
      <div className="grid-item separa2">
        <img
          className="imgEdit"
          src="https://i0.wp.com/www.themoviedb.org/t/p/w600_and_h900_bestv2/utAMIYnHweINM2jiMJYII9ILCw2.jpg?resize=250%2C350&ssl=1"
        />
        <div className="separa3">
          <h2>Homem Aranha: Sem Volta Para Casa</h2>
          <div className="org">
            <p>LOGO IDADE</p> <p>duração</p> <p>Ação</p>
          </div>
        </div>
      </div>
      <div className="grid-item separa4">
        <h2>Leia a Sinopse</h2>
        <p className="pF">
          Pela primeira vez na história cinematográfica do Homem-Aranha, nosso
          herói amigo da vizinhança é desmascarado e não consegue mais separar
          sua vida normal dos grandes riscos de ser um super-herói. Quando ele
          pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais
          perigosos, e o forçam a descobrir o que realmente significa ser o
          Homem-Aranha.
        </p>
      </div>
      <div className="grid-item separa5">
        <p>Elenco</p>
        <p>Diretor</p>
        <p>Distribuidora</p>
      </div>
      <div className="grid-item separa6">
        <h2 className="inTittle">Ingressos</h2>
        <nav className="navA">
          <a>Sessões</a>
          <a>Assentos</a>
          <a>Tipos de sala</a>
          <a>Cine Lanche</a>
          <a>Carrinho</a>
          <a>Pagamento</a>
          <a>Confirmação</a>
        </nav>
        <h2 className="titleDay">Hoje</h2>
        <nav className="navBotoes">
          <button className="estBotoes">12:00</button>
          <button className="estBotoes">15:30</button>
          <button className="estBotoes">17:40</button>
          <button className="estBotoes">19:00</button>
          <button className="estBotoes">21:30</button>
          <button className="estBotoes">23:00</button>
        </nav>
      </div>
    </main>
  );
}

export default Ingresso;
