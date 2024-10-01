import React, { useState, useEffect } from 'react';
import './styles.css';

const AdviceCard = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    // Fetch advice when the component mounts
    fetchAdvice();
  }, []);

  return (
    <div className="advice-card">
      <h2>ADVICE #{adviceId}</h2>
      <p id="advice-text">"{advice}"</p>
      <button id="dice-button" onClick={fetchAdvice}>
        <img src="/dice-icon.png" alt="Generate new advice" />
      </button>
    </div>
  );
};

export default AdviceCard;
