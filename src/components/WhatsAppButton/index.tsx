import React, { useEffect, useState } from 'react';
import SelecionarEstadoModal from '../SelecionarEstadoModal';
import './style.css';

type WhatsAppButtonProps = {
    planName?: string;
    productName?: string;
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ planName, productName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');

    const openModal = (planName: string, productName: string) => {
        setSelectedPlan(planName);
        setSelectedProduct(productName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan('');
    };

    return (
        <>
            <SelecionarEstadoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedPlan={selectedPlan}
            />
            <button
                id="btn-whatsapp"
                className="whatsapp-button"
                aria-label="Abrir modal do WhatsApp"
                onClick={(e) => {
                    e.preventDefault();
                    openModal(planName || '', productName || '');
                }}
            >
                <i className="fab fa-whatsapp"></i>
            </button>
        </>
    );
};

export default WhatsAppButton;