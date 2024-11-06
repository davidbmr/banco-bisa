import React, { useState, useEffect } from "react";
import style from "./SeleccionarContadora.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { CalendlyEmbed } from "./CalendlyButton/CalendlyEmbed";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { FichaContadora } from "./FichaContadora/FichaContadora";

export const SeleccionarContadora = () => {
	const [contadoraSeleccionada, setContadoraSeleccionada] = useState<any>(null);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [agendarReunion, setagendarReunion] = useState(false);

	const agendarReunionContador = () => {
		setagendarReunion(true);
	};

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * contadoras.length);
		setContadoraSeleccionada(contadoras[randomIndex]);
		setIsButtonDisabled(true);
	}, []);

	return (
		<>
			<MainContentStructure titleText="Contadora asignada">
				{contadoraSeleccionada && (
					<>
						<div>
							<FichaContadora {...contadoraSeleccionada} />
						</div>

						{/* <div className={style.fichaContadora}>
							<h3 className={style.fichaTitulo}>Ficha de la Contadora</h3>
							<p className={style.fichaDetalle}>Nombre: {contadoraSeleccionada.nombre}</p>
							<p className={style.fichaDetalle}>Edad: {contadoraSeleccionada.edad}</p>
							<p className={style.fichaDetalle}>
								Especialidad: {contadoraSeleccionada.especialidad}
							</p>
							<p className={style.fichaDetalle}>Experiencia: {contadoraSeleccionada.experiencia}</p>
							<p className={style.fichaDetalle}>
								calendlyCode: {contadoraSeleccionada.calendlyCode}
							</p>
						</div> */}

						<br />

						<CustomButton
							text="Agendar Reunión"
							backgroundButton="var(--primary-color-app)"
							colorP="#fff"
							onClick={() => agendarReunionContador()}
						/>
					</>
				)}

				{agendarReunion && <CalendlyEmbed url={`https://calendly.com/cprado-9gc`} />}
			</MainContentStructure>
		</>
	);
};

const contadoras = [
	{
		nombre: "Laura G. Martínez",
		edad: 35,
		especialidad: "Auditoría Financiera",
		experiencia: "5 años en Deloitte",
		calendlyCode: "carlosluisprad2",
		imgUrl:
			"https://www.eluniversal.com.co/binrepository/951x700/0c0/0d0/none/13704/QVUV/09contador-publico_2002697_20190808154706.jpg",
	},
	{
		nombre: "Ana L. Rodríguez",
		edad: 33,
		especialidad: "Contabilidad Fiscal",
		experiencia: "7 años en PwC",
		calendlyCode: "cprado-9gc",
		imgUrl:
			"http://www.tuproyectodevida.pe/wp-content/uploads/2020/08/Quiero-ser-contador...%C2%BFqu%C3%A9-habilidades-debo-tener-1200x628.jpg",
	},
	{
		nombre: "Carmen S. Ruiz",
		edad: 38,
		especialidad: "Gestión Financiera",
		experiencia: "6 años en Ernst & Young",
		calendlyCode: "cprado-9gc",
		imgUrl:
			"https://clickbalance.com/wp-content/uploads/2015/07/las-cosas-que-tu-jefe-queire-saber.jpg",
	},
];
