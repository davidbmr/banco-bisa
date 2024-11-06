import React from "react";
import style from "./FichaContadora.module.css";
import { ContentBox } from "@/components/ContentBox/ContentBox";

interface Props {
	nombre: string;
	edad: number;
	especialidad: string;
	experiencia: string;
	calendlyCode: string;
	imgUrl: string;
}

export const FichaContadora = ({
	nombre,
	edad,
	especialidad,
	experiencia,
	calendlyCode,
	imgUrl,
}: Props) => {
	return (
		<ContentBox additionalClassName={style.fichaContadora__container}>
			<div className={style.fichaContadora__img__container}>
				<img className={style.fichaContadora__img} src={imgUrl} alt="" />
			</div>
			<div className={style.fichaContadora__data}>
				<p className={style.fichaContadora__title}>Ficha de contadora</p>
				<div className={style.fichaContadora__fields__container}>
					<div className={style.fichaContadora__field}>
						<p className={style.fichaContadora__label}>Nombre:</p>
						<p className={style.fichaContadora__text}>{nombre}</p>
					</div>
					<div className={style.fichaContadora__field}>
						<p className={style.fichaContadora__label}>Experiencia:</p>
						<p className={style.fichaContadora__text}>{experiencia}</p>
					</div>
					<div className={style.fichaContadora__field}>
						<p className={style.fichaContadora__label}>Edad:</p>
						<p className={style.fichaContadora__text}>{edad}</p>
					</div>
					<div className={style.fichaContadora__field}>
						<p className={style.fichaContadora__label}>Especialidad:</p>
						<p className={style.fichaContadora__text}>{especialidad}</p>
					</div>
					<div className={style.fichaContadora__field}>
						<p className={style.fichaContadora__label}>Cód. de calendly:</p>
						<p className={style.fichaContadora__text}>{calendlyCode}</p>
					</div>
				</div>
			</div>
		</ContentBox>
	);
};
