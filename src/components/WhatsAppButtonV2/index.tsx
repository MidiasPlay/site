import React, { useEffect, useState } from 'react';
import './style.css';

export const WhatsAppButtonV2: React.FC = () => {
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
            <a
                className="whatsapp-button"
                // href={}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* <span className="whatsapp-icon">☏</span> */}
                <i className="fab fa-whatsapp whatsapp-icon"></i>
                <span>Chamar no WhatsApp</span>
            </a>
        </>
    );
};