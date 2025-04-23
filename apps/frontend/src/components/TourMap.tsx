import React from "react";
import './TourMap.css'

const TourMap: React.FC = () => {
  const handleClick = (material: string) => {
    alert(`Você clicou no ícone de ${material}!`);
  };

  return (
    <div className="tour-wrapper">
      <iframe
        src="https://www.sphere360.com.br/tour/unama-alcindo/tour.html"
        title="Tour Virtual UNAMA"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="icon-overlay">
        <button
          className="recycle-icon aluminio"
          style={{ top: "100px", left: "200px" }}
          onClick={() => handleClick("aluminio")}
        />
        <button
          className="recycle-icon vidro"
          style={{ top: "250px", left: "300px" }}
          onClick={() => handleClick("vidro")}
        />
      </div>
    </div>
  );
};

export default TourMap;
