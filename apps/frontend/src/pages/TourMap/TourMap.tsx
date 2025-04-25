import React, { useRef, useState } from 'react';
import ModalForm from '../../components/ModalForm/ModalForm';
import FooterNav from '../../components/Footer/Footer';
import './TourMap.css';

const TourMap: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [step, setStep] = useState(0);

  const openForm = (i: number) => {
    setStep(i);
    setFormOpen(true);
  };
  const closeForm = () => setFormOpen(false);

  const handleSubmit = (data: any) => {
    console.log('Dados enviados:', data);
    closeForm();
  };

  return (
    <div className="tour-map-container">
      <div ref={wrapperRef} className="tour-wrapper">
        <iframe
          src="https://www.sphere360.com.br/tour/unama-alcindo/tour.html"
          title="Tour Virtual UNAMA"
          frameBorder="0"
          allowFullScreen
        />
      </div>

    <FooterNav onStepClick={openForm} />

      {formOpen && (
        <ModalForm
          tipo={`Lixo ${step + 1}`}
          onClose={closeForm}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TourMap;
