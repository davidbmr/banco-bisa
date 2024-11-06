import React, { useState } from "react";
import style from "./SeguimientoCliente.module.css";

import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { LineaTiempo } from "./components/LineaTiempo/LineaTiempo";
import { ContenidoSeguimiento } from "./components/ContenidoSeguimiento/ContenidoSeguimiento";

export const SeguimientoCliente = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleStepClick = (step: number) => {
		setCurrentStep(step);
	};
	return (
		<MainContentStructure titleText="Seguimiento de cliente">
			<div className={style.seguimientoServicio__container}>
				<LineaTiempo steps={steps} currentStep={currentStep} onClickStep={handleStepClick} />

				<ContenidoSeguimiento currentStep={currentStep} />
			</div>
		</MainContentStructure>
	);
};

const steps = [
	{ id: 1, label: "Reunión con tu cliente" },
	{ id: 2, label: "Solicitar documentos" },
	{ id: 3, label: "Envio de resultados" },
];
