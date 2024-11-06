import React from "react";
import style from "./ContenidoSeguimiento.module.css";

import { ReunionProgramada } from "../RenunionProgramada/ReunionProgramada";
import { SolicitudDocumentos } from "../SolicitudDocumentos/SolicitudDocumentos";
import { Resultados } from "../Resultados/Resultados";

interface ContenidoSeguimientoProps {
	currentStep: number;
}

export const ContenidoSeguimiento = ({ currentStep }: ContenidoSeguimientoProps) => {
	return (
		<div>
			{currentStep === 1 && <ReunionProgramada />}
			{currentStep === 2 && <SolicitudDocumentos />}
			{currentStep === 3 && <Resultados />}
		</div>
	);
};
