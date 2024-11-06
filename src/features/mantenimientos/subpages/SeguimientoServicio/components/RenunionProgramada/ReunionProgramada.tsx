import React, { useState } from "react";
import style from "./ReunionProgramada.module.css";
import { MeetingStatusBox } from "@/components/MeetingStatusBox/MeetingStatusBox";
import { CalendlyEmbed } from "../../../SeleccionarContadora/CalendlyButton/CalendlyEmbed";
import { CustomButton } from "@/components/CustomButton/CustomButton";

export const ReunionProgramada = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [agendarReunion, setagendarReunion] = useState(false);

	const agendarReunionContador = () => {
		setagendarReunion(true);
	};
	return (
		<>
			{/* <MeetingStatusBox status="pendiente" /> */}
			{/* <br /> */}
			<MeetingStatusBox status="activa" />
			{/* <br /> */}
			{/* <MeetingStatusBox status="cancelada" /> */}

			<br />
			<CustomButton
				text="Reagendar Reunión"
				backgroundButton="var(--primary-color-app)"
				colorP="#fff"
				onClick={() => agendarReunionContador()}
			/>

			{agendarReunion && <CalendlyEmbed url={`https://calendly.com/cprado-9gc`} />}
		</>
	);
};
