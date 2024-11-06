import React from "react";
import style from "./PerfilContadora.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { FichaContadora } from "../../../SeleccionarContadora/FichaContadora/FichaContadora";

export const PerfilContadora = () => {
	return (
		<MainContentStructure titleText="Perfil de contadora">
			<div className={style.seguimientoServicio__container}>
				<FichaContadora {...contadora} />
				<div className={style.perfilContadora__clientes__container}>
					<h2>Clientes:</h2>
					<ContentBox backgroundActive>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Nombres y apellidos:</p>
							<p>Usuario completo</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Estado del servicio:</p>
							<p>Activo</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Fecha de inicio:</p>
							<p>01/12/23</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Tipo de servicio:</p>
							<p>Plan adquirido</p>
						</div>
					</ContentBox>
					<ContentBox backgroundActive>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Nombres y apellidos:</p>
							<p>Usuario completo</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Estado del servicio:</p>
							<p>Activo</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Fecha de inicio:</p>
							<p>01/12/23</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Tipo de servicio:</p>
							<p>Plan adquirido</p>
						</div>
					</ContentBox>
					<ContentBox backgroundActive>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Nombres y apellidos:</p>
							<p>Usuario completo</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Estado del servicio:</p>
							<p>Activo</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Fecha de inicio:</p>
							<p>01/12/23</p>
						</div>
						<div className={style.perfilContadora__cliente__field}>
							<p className={style.perfilContadora__label}>Tipo de servicio:</p>
							<p>Plan adquirido</p>
						</div>
					</ContentBox>
				</div>
			</div>
		</MainContentStructure>
	);
};

const contadora = {
	nombre: "Laura G. Martínez",
	edad: 35,
	especialidad: "Auditoría Financiera",
	experiencia: "5 años en Deloitte",
	calendlyCode: "carlosluisprad2",
	imgUrl:
		"https://www.eluniversal.com.co/binrepository/951x700/0c0/0d0/none/13704/QVUV/09contador-publico_2002697_20190808154706.jpg",
};
