import React from "react";
import { StyleMainTickets } from "./styles.jsx";
import { useEffect, useState, useRef } from "react";
import { GetAll } from "../../services/Api.jsx";


export const MainTickets = ()=> {

  //const [tickets, setTickets] = useState([])
  //useEffect(() => getPlans, [])

  //async function getPlans() {
   // try {
    //  const response = await GetAll("tickets")
    //  console.log(response)
   //   setTickets(tickets)
  //  } catch (e) {
      //console.log(e)
   // }
 // } 

  const [data, setData] = useState([]);

  useEffect(() => { GetAll("movies").then(response => setData(response)) }, []);
  console.log(data)

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
          <h2 className="titleM">Homem Aranha:<br/> Sem Volta Para Casa</h2>
          <div className="org">
            <p>12</p> <p>2:30 h</p> <p>AÇÃO / AVENTURA</p>
          </div>
        </div>
      </div>
      <div className="grid-item separa4">
        <h2 className="titleS">Leia a Sinopse</h2>
        <p className="pF">
        "Após o enorme sucesso nos cinemas, em 2021, Homem-Aranha: Sem Volta Para Casa retorna aos cinemas com mais 11 minutos de cenas adicionais inéditas. A vida de Peter Parker (Tom Holland) tornou-se um verdadeiro caos depois que sua identidade foi revelada para o mundo pelo vilão Mysterio. A inseparável Mary Jane (Zendaya) tenta ajudá-lo a encarar o fato como algo positivo, mas o jovem super-herói não se conforma e busca uma solução. Parker procura o parceiro Doutor Estranho (Benedict Cumberbatch) e pergunta se ele não conseguiria retirar essa informação da memória das pessoas. O arriscado feitiço foi colocado em prática, mas ao alterar a realidade eles criaram uma situação ainda mais perigosa. "
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
