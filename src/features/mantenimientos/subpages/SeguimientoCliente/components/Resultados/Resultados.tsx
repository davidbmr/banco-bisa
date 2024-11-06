import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Resultados.module.css";

import { ContentBox } from "@/components/ContentBox/ContentBox";
import { UploadField } from "@/components/UploadField/UploadField";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

export const Resultados = () => {
	const navigate = useNavigate();

	const handleClientsRedirect = () => {
		navigate("/lista-clientes");
	};

	return (
		<div className={style.entregaDocumentos__container}>
			<p className={style.entregaDocumentos__title}>Carga los resultados del servicio:</p>
			<p className={style.entregaDocumentos__text}>
				Es importante que se suba los resultados en las fechas pactadas.
			</p>
			<div className={style.entregaDocumentos__form}>
				<TextBoxField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Título:"
					direction="row"
					labelWidth="90px"
				/>
				<TextBoxField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Descripción:"
					direction="row"
					labelWidth="90px"
				/>
				<TextBoxField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Campo 3:"
					direction="row"
					labelWidth="90px"
				/>
				<TextBoxField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Campo 4:"
					direction="row"
					labelWidth="90px"
				/>
				<TextBoxField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Campo 5:"
					direction="row"
					labelWidth="90px"
				/>
				<TextBoxField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Campo 6:"
					direction="row"
					labelWidth="90px"
				/>
			</div>

			<ContentBox additionalClassName={style.entregaDocumentos__lista}>
				<UploadField textLabel="" direction="row" labelWidth="150px" />
			</ContentBox>
			<div>
				<p className={style.entregaDocumentos__text__limite}>
					• Recuerda cargar el archivo comprimido (zip o rar)
				</p>
				<p className={style.entregaDocumentos__text__limite}>
					• El tamaño de carga está limitado a 10 MB.
				</p>
			</div>

			<div>
				<CustomButton
					text="Enviar"
					backgroundButton="var(--primary-color-app)"
					colorP="#fff"
					onClick={handleClientsRedirect}
				/>
			</div>
		</div>
	);
};
