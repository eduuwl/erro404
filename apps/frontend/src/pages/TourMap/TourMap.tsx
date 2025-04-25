import React, { useState } from "react";
import "./TourMap.css";
import ModalForm from "../../components/ModalForm/ModalForm";

const TourMap: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [currentTipo, setCurrentTipo] = useState<string>("");

  const openForm = (tipo: string) => {
    setCurrentTipo(tipo);
    setFormOpen(true);
  };
  const closeForm = () => setFormOpen(false);

  const handleSubmit = (data: any) => {
    console.log("Dados enviados:", data);
    // aqui você chama sua API POST /register
    closeForm();
  };

  return (
    <div className="tour-wrapper">
      <iframe
        src="https://www.sphere360.com.br/tour/unama-alcindo/tour.html"
        title="Tour Virtual UNAMA"
        frameBorder="0"
        allowFullScreen
      />
      {/* <div className="icon-overlay">
        <button
          className="recycle-icon aluminio"
          style={{ top: "100px", left: "200px" }}
          onClick={() => openForm("Alumínio")}
        />
        <button
          className="recycle-icon vidro"
          style={{ top: "250px", left: "300px" }}
          onClick={() => openForm("Vidro")}
        />
      </div> */}

      {formOpen && (
        <ModalForm
          tipo={currentTipo}
          onClose={closeForm}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TourMap;
