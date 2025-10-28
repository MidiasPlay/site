import React, { useState } from 'react';
import { EstadoEnum, estadoOptionsList } from './estado.enum';
import './style.css';

type SelecionarEstadoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    phoneNumber?: string; // Número do WhatsApp da empresa
    selectedPlan?: string; // Nome do plano selecionado
}

export const SelecionarEstadoModal: React.FC<SelecionarEstadoModalProps> = ({
    isOpen,
    onClose,
    phoneNumber = '5511999999999', // Número padrão, pode ser passado como prop
    selectedPlan = ''
}) => {
    const [selectedEstado, setSelectedEstado] = useState<EstadoEnum | ''>('');

    const handleEstadoChange = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEstado(evento.target.value as EstadoEnum);
    };

    const handleWhatsAppClick = () => {
        if (!selectedEstado) {
            alert('Por favor, selecione um estado antes de entrar em contato.');
            return;
        }

        const estadoLabel = estadoOptionsList.find(estado => estado.value === selectedEstado)?.label;
        let message = `Olá! Tenho interesse nos serviços do MidiasPlay para o estado: ${estadoLabel} (${selectedEstado})`;
        
        if (selectedPlan) {
            message += `\n\nPlano de interesse: ${selectedPlan}`;
        }
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleModalClick = (e: React.MouseEvent) => {
    // Impede o fechamento do modal quando clicar dentro do conteúdo
    e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={handleModalClick}>
                <div className="modal-header">
                    <h2>{selectedPlan ? `${selectedPlan} - Selecione seu Estado` : 'Selecione seu Estado'}</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <div className="modal-body">
                    <p>Escolha o estado onde você está localizado para que possamos oferecer o melhor atendimento:</p>

                    <div className="select-container">
                        <label htmlFor="estado-select">Estado:</label>
                        <select
                            id="estado-select"
                            value={selectedEstado}
                            onChange={handleEstadoChange}
                            className="estado-select"
                        >
                            <option value="">Selecione um estado...</option>
                            {estadoOptionsList.map((estado) => (
                                <option key={estado.value} value={estado.value}>
                                    {estado.label} ({estado.value})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="modal-footer">
                    <button 
                        className="whatsapp-button"
                        onClick={handleWhatsAppClick}
                        disabled={!selectedEstado}
                    >
                        <span className="whatsapp-icon">📱</span>
                        Falar no WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelecionarEstadoModal;
