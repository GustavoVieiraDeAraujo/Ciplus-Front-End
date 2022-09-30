import React, { useEffect, useState } from "react";
import { StyleMainTickets } from "./styles.jsx";
import { GetAll, GetOne, CreateOne } from "../../services/Api.jsx";
import { posterIndisponivel } from "../../utils/posterFallback.js";

export const MainTickets = ({ movieId }) => {

  const [movie, setMovie] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [session, setSession] = useState(null);
  const [ticketId, setTicketId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mensagem, setMensagem] = useState(null);

  useEffect(() => {
    if (movieId) {
      GetOne("movies", movieId).then(response => setMovie(response));
    } else {
      GetAll("movies").then(response => setMovie(response && response[0]));
    }
    GetAll("tickets").then(response => setTickets(response || []));
  }, [movieId]);

  const handleComprar = async () => {
    if (!movie || !session || !ticketId) {
      setMensagem({ tipo: "erro", texto: "Escolha um horário e um tipo de ingresso" });
      return;
    }
    // se o usuario estiver logado, a API identifica quem comprou pelo token de autenticacao
    const resposta = await CreateOne("purchases", {
      movie_id: movie.id,
      ticket_id: ticketId,
      session,
      quantity,
    });
    if (resposta) {
      setMensagem({ tipo: "sucesso", texto: `Compra confirmada! ${quantity}x ingresso para a sessão de ${session}.` });
    } else {
      setMensagem({ tipo: "erro", texto: "Não foi possível concluir a compra, tente novamente" });
    }
  }

  if (!movie) {
    return null;
  }

  const sessoes = movie.movie_sessions ? movie.movie_sessions.split("/") : [];
  const horas = Math.floor(movie.duration_minutes / 60);
  const minutos = movie.duration_minutes % 60;

  return (
    <StyleMainTickets>
      <div className="grid-item fPrincipal">
        {" "}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rt-2cxAiPJk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="grid-item separa2">
        <img
          className="imgEdit"
          src={movie.movie_image_link}
          onError={(e) => { e.target.onerror = null; e.target.src = posterIndisponivel; }}
        />
        <div className="separa3">
          <h2 className="titleM">{movie.name}</h2>
          <div className="org">
            <p>{movie.classification.replace("CLASSIFICAÇÃO-", "")}</p> <p>{horas}:{String(minutos).padStart(2, "0")} h</p> <p>{movie.genre}</p>
          </div>
        </div>
      </div>
      <div className="grid-item separa4">
        <h2 className="titleS">Leia a Sinopse</h2>
        <p className="pF">
        {movie.synopsis}
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
          {sessoes.map((horario) => (
            <button
              key={horario}
              className={`estBotoes ${session === horario ? "selecionado" : ""}`}
              onClick={() => setSession(horario)}
            >
              {horario}
            </button>
          ))}
        </nav>
        <h2 className="titleDay">Tipo de Ingresso</h2>
        <nav className="navBotoes">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              className={`estBotoes ${ticketId === ticket.id ? "selecionado" : ""}`}
              onClick={() => setTicketId(ticket.id)}
            >
              {ticket.type} - R${(ticket.price / 100).toFixed(2)}
            </button>
          ))}
        </nav>
        <div className="compraArea">
          <label>
            Quantidade:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </label>
          <button className="estBotoes confirmar" onClick={handleComprar}>Confirmar Compra</button>
        </div>
        {mensagem && <p className={`mensagem ${mensagem.tipo}`}>{mensagem.texto}</p>}
      </div>
    </StyleMainTickets>
  )
}
