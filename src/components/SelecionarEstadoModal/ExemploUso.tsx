import React, { useState } from 'react';
import { SelecionarEstadoModal } from './index';

// Exemplo de como usar o modal em um componente pai
export const ExemploUsoModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={openModal} className="open-modal-button">
                Selecionar Estado
            </button>

            <SelecionarEstadoModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                phoneNumber="5511999999999" // Substitua pelo número real do WhatsApp
            />
        </div>
    );
};

export default ExemploUsoModal;