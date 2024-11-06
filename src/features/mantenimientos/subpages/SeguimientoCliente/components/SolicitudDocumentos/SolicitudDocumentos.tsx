import React, { useState } from "react";
import style from "./SolicitudDocumentos.module.css";

import { ContentBox } from "@/components/ContentBox/ContentBox";
import { SwitchField } from "@/components/SwitchField/SwitchField";

import excelIcon from "/icons/excel-icon.png";
import pdfIcon from "/icons/pdf-icon.png";
import wordIcon from "/icons/word-icon.png";

export const SolicitudDocumentos = () => {
	const [resultados, setResultados] = useState([
		{
			id: 1,
			title: "Documento tipo 1",
			icons: [pdfIcon, excelIcon, wordIcon],
		},
		{
			id: 2,
			title: "Documento tipo 2",
			icons: [pdfIcon, excelIcon, wordIcon],
		},
		{
			id: 3,
			title: "Documento tipo 3",
			icons: [pdfIcon, excelIcon, wordIcon],
		},
	]);

	return (
		<div className={style.entregaDocumentos__container}>
			<p className={style.entregaDocumentos__title}>Habilita los siguientes documentos:</p>
			<p className={style.entregaDocumentos__text}>
				Es importante identificar que documentos son necesarios para continuar con el servicio.
				Recuerda que si no activas un documento, el cliente no podrá tener la opción de cargar su
				archivo.
			</p>
			<ContentBox additionalClassName={style.entregaDocumentos__lista}>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 1:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 2:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 3:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 4:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 5:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 6:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 7:"
					direction="row"
					labelWidth="150px"
				/>
				<SwitchField
					name="name"
					value={false}
					onChange={() => {}}
					textLabel="Documento tipo 8:"
					direction="row"
					labelWidth="150px"
				/>
			</ContentBox>

			<p className={style.entregaDocumentos__text__limite}>
				Asegurate de activar los documentos correctos.
			</p>

			<p className={style.entregaDocumentos__title}>Documentos recibidos:</p>

			<div className={style.resultados__box__container}>
				{resultados.map((resultado) => (
					<ContentBox key={resultado.id} additionalClassName={style.resultados__item}>
						<p className={style.resultados__box__title}>{resultado.title}</p>
						<div className={style.resultados__box__buttons}>
							{resultado.icons.map((icon, index) => (
								<div key={index} className={style.resultados__box__buttons__item}>
									<img
										className={style.resultados__box__button__icon}
										src={icon}
										alt={`icono ${index}`}
									/>
								</div>
							))}
						</div>
					</ContentBox>
				))}
			</div>
		</div>
	);
};
