import React, { useState, FormEvent } from "react";
import "./ModalForm.css";
import { ModalFormProps } from "./interface/modalForm.interface";

const ModalForm: React.FC<ModalFormProps> = ({ tipo: initialTipo, onClose, onSubmit }) => {
  const [tipo, setTipo] = useState(initialTipo || "");
  const [quantidade, setQuantidade] = useState("");
  const [turma, setTurma] = useState("");
  const [curso, setCurso] = useState("");
  const [semestre, setSemestre] = useState("");
  const [turno, setTurno] = useState("");
  const [unidade, setUnidade] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      tipo,
      quantidadeKg: parseFloat(quantidade),
      turma,
      curso,
      semestre,
      turno,
      unidade
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Registrar entrega{tipo ? `: ${tipo}` : ""}</h3>
        <form onSubmit={handleSubmit}>
          <select value={tipo} onChange={e => setTipo(e.target.value)} required>
            <option value="" disabled>Tipo de lixo</option>
            <option value="Alumínio">Alumínio</option>
            <option value="Vidro">Vidro</option>
            <option value="Pano">Pano</option>
            <option value="PET">PET</option>
          </select>

          <input
            type="number"
            min="0"
            step="0.01"
            value={quantidade}
            onChange={e => setQuantidade(e.target.value)}
            placeholder="Quantidade (Kg)"
            required
          />

          <input
            type="text"
            value={turma}
            onChange={e => setTurma(e.target.value)}
            placeholder="Turma"
            required
          />

          <input
            type="text"
            value={curso}
            onChange={e => setCurso(e.target.value)}
            placeholder="Curso"
            required
          />

          <input
            type="text"
            value={semestre}
            onChange={e => setSemestre(e.target.value)}
            placeholder="Semestre"
            required
          />

          <select value={turno} onChange={e => setTurno(e.target.value)} required>
            <option value="" disabled>Selecione o turno</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>

          <input
            type="text"
            value={unidade}
            onChange={e => setUnidade(e.target.value)}
            placeholder="Unidade (ex: Unama Alcindo Cacela)"
            required
          />

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
