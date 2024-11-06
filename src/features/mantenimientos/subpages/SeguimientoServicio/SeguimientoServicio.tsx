import React, { useState } from "react";
import style from "./SeguimientoServicio.module.css";

import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { LineaTiempo } from "./components/LineaTiempo/LineaTiempo";
import { ContenidoSeguimiento } from "./components/ContenidoSeguimiento/ContenidoSeguimiento";

export const SeguimientoServicio = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleStepClick = (step: number) => {
		setCurrentStep(step);
	};

	const handleNextStep = () => {
		setCurrentStep(prev => prev + 1)
	}
	return (
		<MainContentStructure titleText="Seguimiento de servicio">
			<div className={style.seguimientoServicio__container}>
				<LineaTiempo steps={steps} currentStep={currentStep} onClickStep={handleStepClick} />

				<ContenidoSeguimiento currentStep={currentStep} handleNextStep={handleNextStep} />
			</div>
		</MainContentStructure>
	);
};

const steps = [
	{ id: 1, label: "Reunión con tu contadora" },
	{ id: 2, label: "Subir documentos" },
	{ id: 3, label: "Resultados del servicio" },
	{ id: 4, label: "Encuesta de satisfacción" },
];
