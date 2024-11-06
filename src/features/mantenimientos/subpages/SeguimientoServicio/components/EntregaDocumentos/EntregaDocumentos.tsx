import React from "react";
import style from "./EntregaDocumentos.module.css";

import { ContentBox } from "@/components/ContentBox/ContentBox";
import { UploadField } from "@/components/UploadField/UploadField";

export const EntregaDocumentos = () => {
	return (
		<div className={style.entregaDocumentos__container}>
			<p className={style.entregaDocumentos__title}>Carga los siguientes documentos:</p>
			<p className={style.entregaDocumentos__text}>
				Es importante que se suba los documentos en las fechas pactadas. Recuerda que es importante
				para el proceso del servicio.
			</p>
			<ContentBox additionalClassName={style.entregaDocumentos__lista}>
				<UploadField textLabel="Documento Tipo 1:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 2:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 3:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 4:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 5:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 6:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 7:" direction="row" labelWidth="150px" />
				<UploadField textLabel="Documento Tipo 8:" direction="row" labelWidth="150px" />
			</ContentBox>

			<p className={style.entregaDocumentos__text__limite}>
				El tamaño de carga está limitado a 10 MB por archivo.
			</p>
		</div>
	);
};
