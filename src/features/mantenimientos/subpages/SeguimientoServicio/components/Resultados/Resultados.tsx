import React, { useState } from "react";
import style from "./Resultados.module.css";

import { ContentBox } from "@/components/ContentBox/ContentBox";
import excelIcon from "/icons/excel-icon.png";
import pdfIcon from "/icons/pdf-icon.png";
import wordIcon from "/icons/word-icon.png";
import { CustomButton } from "@/components/CustomButton/CustomButton";

interface Props {
	handleNextStep: () => void;
}

export const Resultados = ({ handleNextStep }: Props) => {
	const [resultados, setResultados] = useState([
		{
			id: 1,
			title: "Titulo del primer documento de resultado",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores quas, delectus iusto nisi, voluptates praesentium totam officia rerum illo, vitae debitis reiciendis! Voluptatibus minus, pariatur illum qui rem veniam.",
			icons: [pdfIcon, excelIcon, wordIcon],
		},
	]);

	return (
		<div className={style.resultados__container}>
			<p className={style.resultados__title}>Resumen del servicio:</p>

			<div className={style.resultados__box__container}>
				{resultados.map((resultado) => (
					<ContentBox key={resultado.id} additionalClassName={style.resultados__item}>
						<div>
							<p className={style.resultados__box__title}>{resultado.title}</p>
						</div>

						<p className={style.resultados__box__description}>{resultado.description}</p>

						<div className={style.button__container}>
							<CustomButton
								text="Descargar documentos"
								backgroundButton="var(--primary-color-app)"
								colorP="#fff"
							/>
						</div>
					</ContentBox>
				))}
			</div>

			<CustomButton
				text="Ya tengo toda la información"
				backgroundButton="var(--primary-color-app)"
				colorP="#fff"
				onClick={handleNextStep}
			/>
		</div>
	);
};
