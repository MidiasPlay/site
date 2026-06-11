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

    const handleWhatsAppClick = () => {
        let message = `Olá! Tenho interesse nos serviços do MidiasPlay`;
        if (selectedPlan) {
            message += `\n\nPlano de interesse: ${selectedPlan}`;
        }

        const phoneNumber = '554497409710'; // Número de WhatsApp para contato
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <SelecionarEstadoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedPlan={selectedPlan}
            />
            {/* <button
                id="btn-whatsapp"
                className="whatsapp-button"
                aria-label="Abrir modal do WhatsApp"
                onClick={(e) => {
                    e.preventDefault();
                    // openModal(planName || '', productName || '');
                    handleWhatsAppClick();
                }}
            >
                <i className="fab fa-whatsapp"></i>
            </button> */}

            <button
                id="btn-whatsapp"
                className="whatsapp-button"
                aria-label="Abrir modal do WhatsApp"
                onClick={(e) => {
                    e.preventDefault();
                    // openModal(planName || '', productName || '');
                    handleWhatsAppClick();
                }}
            >
                <i className="fab fa-whatsapp"></i>
                {/* <span className="whatsapp-text">Fale conosco</span> */}
            </button>
        </>
    );
};

export default WhatsAppButton;