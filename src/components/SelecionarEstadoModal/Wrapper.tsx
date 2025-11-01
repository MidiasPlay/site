import React, { useState } from 'react';
import { SelecionarEstadoModal } from './index';

// Wrapper do modal para uso em páginas Astro
export const SelecionarEstadoModalWrapper: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');

    // Função para abrir o modal
    const openModal = (planName: string, productName: string) => {
        setSelectedPlan(planName);
        setSelectedProduct(productName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan('');
    };

    // Efeito para escutar eventos globais dos botões
    React.useEffect(() => {
        const handleButtonClick = (event: Event) => {
            const target = event.target as HTMLButtonElement;

            const planName = target.getAttribute('data-plan');
            if (planName && (target.id === 'btn-promo-box' || target.id === 'btn-promo-box-fila' || target.id === 'btn-promo-box-custom')) {
                event.preventDefault();
                openModal(planName, '');
                return;
            }

            const productName = target.getAttribute('data-product');
            if (productName && (target.id === 'btn-escolher-padrao' || target.id === 'btn-escolher-fila')) {
                event.preventDefault();
                openModal('', productName);
                return;
            }

            if (target.id === 'btn-whatsapp') {
                console.log('Botão WhatsApp clicado!');
                event.preventDefault();
                openModal('', '');
                return;
            }
        };

        // Adiciona event listeners aos botões
        document.addEventListener('click', handleButtonClick);

        return () => {
            document.removeEventListener('click', handleButtonClick);
        };
    }, []);

    return (
        <SelecionarEstadoModal 
            isOpen={isModalOpen}
            onClose={closeModal}
            selectedPlan={selectedPlan}
        />
    );
};

export default SelecionarEstadoModalWrapper;