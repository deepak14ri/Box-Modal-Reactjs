// BoxModal.js
import React, { useState } from 'react';
import './style.css'; // We will create this CSS file in the next step.

const BoxModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="box-modal-overlay">
          <div className="box-modal">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Box Modal Content</h2>
            <p>This is the content of the box modal.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxModal;
