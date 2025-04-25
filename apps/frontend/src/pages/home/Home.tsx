import React from "react";
import "./Home.css";
import Recycle from "../../assets/recycle.svg";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="logo-area">
        <img
          src={Recycle}
          alt="Símbolo de reciclagem"
          className="recycle-icon"
        />
        <div className="logo-text">
          <h1>SER RECICLA</h1>
        </div>
      </div>
      
        <p>TRANSFORMANDO NOSSA UNIVERSIDADE EM UM EXEMPLO DE SUSTENTABILIDADE. <br />
          LOCALIZE PONTOS DE COLETA, REGISTRE SUAS CONTRIBUIÇÕES E ACOMPANHE O IMPACTO COLETIVO
        </p>

      <button
        className="btn-map"
        onClick={() => {
          window.location.href = "/mapa";
        }}
      >
        Entrar no Mapa
      </button>
    </div>
  );
};

export default Home;
