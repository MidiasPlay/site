import { useState } from "react";
import SelecionarEstadoModal from "../SelecionarEstadoModal";
import { EstadoEnum } from "../SelecionarEstadoModal/estado.enum";
import PlanosComodato from "./PlanosComodato";
import PlanosApk from "./PlanosApk";

const Planos: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [selectedEstado, setSelectedEstado] = useState<EstadoEnum>();

    const handleSelecionarEstadoModalClose = () => {
        if (!selectedEstado) {
            return;
        }
        setIsModalOpen(false);
    }

    return (
        <>
        <SelecionarEstadoModal
            isOpen={isModalOpen}
            onClose={handleSelecionarEstadoModalClose}
            onSelectEstado={estado => {
                setSelectedEstado(estado);
                setIsModalOpen(false);
            }}
        />

        {!isModalOpen && (selectedEstado === EstadoEnum.MG || selectedEstado === EstadoEnum.PR) && (
            <PlanosComodato />
        )}

        {!isModalOpen && (selectedEstado !== EstadoEnum.MG && selectedEstado !== EstadoEnum.PR) && (
            <PlanosApk />
        )}
        </>
    );
};

export default Planos;