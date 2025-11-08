import React, { useState } from 'react';
import { EstadoEnum, estadoEnumLabel, estadoOptionsList } from './estado.enum';
import './style.css';

type SelecionarEstadoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedPlan?: string;
    onSelectEstado?: (estado: EstadoEnum) => void;
}

export const SelecionarEstadoModal: React.FC<SelecionarEstadoModalProps> = ({ isOpen, onClose, selectedPlan = '', onSelectEstado }) => {
    const [selectedEstado, setSelectedEstado] = useState<EstadoEnum | ''>('');

    const handleEstadoChange = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEstado(evento.target.value as EstadoEnum);
        console.log('Estado selecionado:', evento.target.value);
    };

    function getPhoneNumber(estado: EstadoEnum): string {
        // Mapeamento de estados para números de WhatsApp específicos
        const NUMERO_WILLIAN = '5541996903121';
        const NUMERO_SAMUEL = '553181018181';

        const estadoPhoneMap: Record<EstadoEnum, string> = {
            [EstadoEnum.AC]: NUMERO_SAMUEL,
            [EstadoEnum.AL]: NUMERO_SAMUEL,
            [EstadoEnum.AM]: NUMERO_SAMUEL,
            [EstadoEnum.AP]: NUMERO_SAMUEL,
            [EstadoEnum.BA]: NUMERO_SAMUEL,
            [EstadoEnum.CE]: NUMERO_SAMUEL,
            [EstadoEnum.DF]: NUMERO_WILLIAN,
            [EstadoEnum.ES]: NUMERO_SAMUEL,
            [EstadoEnum.GO]: NUMERO_WILLIAN,
            [EstadoEnum.MA]: NUMERO_SAMUEL,
            [EstadoEnum.MG]: NUMERO_SAMUEL,
            [EstadoEnum.MS]: NUMERO_WILLIAN,
            [EstadoEnum.MT]: NUMERO_WILLIAN,
            [EstadoEnum.PA]: NUMERO_SAMUEL,
            [EstadoEnum.PB]: NUMERO_SAMUEL,
            [EstadoEnum.PE]: NUMERO_SAMUEL,
            [EstadoEnum.PI]: NUMERO_SAMUEL,
            [EstadoEnum.PR]: NUMERO_WILLIAN,
            [EstadoEnum.RJ]: NUMERO_WILLIAN,
            [EstadoEnum.RN]: NUMERO_SAMUEL,
            [EstadoEnum.RO]: NUMERO_SAMUEL,
            [EstadoEnum.RR]: NUMERO_SAMUEL,
            [EstadoEnum.RS]: NUMERO_WILLIAN,
            [EstadoEnum.SC]: NUMERO_WILLIAN,
            [EstadoEnum.SE]: NUMERO_SAMUEL,
            [EstadoEnum.SP]: NUMERO_WILLIAN,
            [EstadoEnum.TO]: NUMERO_WILLIAN,
        };

        return estadoPhoneMap[estado];
    }

    const handleWhatsAppClick = () => {
        if (!selectedEstado) {
            alert('Por favor, selecione um estado antes de entrar em contato.');
            return;
        }

        let message = `Olá! Tenho interesse nos serviços do MidiasPlay para o estado: ${estadoEnumLabel[selectedEstado]} (${selectedEstado})`;
        if (selectedPlan) {
            message += `\n\nPlano de interesse: ${selectedPlan}`;
        }

        const phoneNumber = getPhoneNumber(selectedEstado);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleModalClick = (e: React.MouseEvent) => {
        // Impede o fechamento do modal quando clicar dentro do conteúdo
        e.stopPropagation();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={handleModalClick}>
                <div className="modal-header">
                    <h2>{selectedPlan ? `${selectedPlan} - Selecione seu Estado` : 'Selecione seu Estado'}</h2>
                    {!onSelectEstado &&
                        <button className="close-button" onClick={onClose}>×</button>
                    }
                </div>

                <div className="modal-body">
                    <p>Escolha o estado onde você está localizado para que possamos oferecer o melhor atendimento:</p>

                    <div className="select-container">
                        <label htmlFor="estado-select">Estado:</label>
                        <select
                            id="estado-select"
                            value={selectedEstado || ''}
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
                    {onSelectEstado ? (
                        <button
                            className="confirm-button"
                            onClick={() => {
                                if (selectedEstado) {
                                    onSelectEstado(selectedEstado);
                                }
                            }}
                            disabled={!selectedEstado}
                        >
                            Confirmar
                        </button>
                    ) : (
                        <button
                            className="whatsapp-button-modal"
                            onClick={handleWhatsAppClick}
                            disabled={!selectedEstado}
                        >
                            <span className="whatsapp-icon">📱</span>
                            Falar no WhatsApp
                        </button>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default SelecionarEstadoModal;
