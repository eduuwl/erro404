import React from 'react';
import './Footer.css';
import { FooterProps } from './interface/footer.interface';

const labels = ['Lixo 1', 'Lixo 2', 'Lixo 3'];

const Footer: React.FC<FooterProps> = ({ onStepClick }) => (
  <footer className="footer-nav">
    {labels.map((label, i) => (
      <button
        key={i}
        className="footer-item"
        onClick={() => onStepClick(i)}
      >
        {label}
      </button>
    ))}
  </footer>
);

export default Footer;
