import React from "react";
import style from "./ContenidoSeguimiento.module.css";

import { ReunionProgramada } from "../RenunionProgramada/ReunionProgramada";
import { EntregaDocumentos } from "../EntregaDocumentos/EntregaDocumentos";
import { Resultados } from "../Resultados/Resultados";
import { FormularioEncuesta } from "../FormularioEncuesta/FormularioEncuesta";

interface ContenidoSeguimientoProps {
	currentStep: number;
	handleNextStep: () => void;
}

export const ContenidoSeguimiento = ({
	currentStep,
	handleNextStep,
}: ContenidoSeguimientoProps) => {
	return (
		<div>
			{currentStep === 1 && <ReunionProgramada />}
			{currentStep === 2 && <EntregaDocumentos />}
			{currentStep === 3 && <Resultados handleNextStep={handleNextStep}/>}
			{currentStep === 4 && <FormularioEncuesta />}
		</div>
	);
};
