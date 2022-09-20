import React from "react";
import { StyleMainTickets } from "./styles.jsx";

export const MainTickets = ()=> {
  return (
    <StyleMainTickets>
      <div className="grid-item fPrincipal">
        {" "}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rt-2cxAiPJk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="grid-item separa2">
        <img
          className="imgEdit"
          src="https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG"
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
    </StyleMainTickets>
  )
}
