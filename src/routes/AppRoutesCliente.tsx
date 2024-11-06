import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { AppStructure } from "../components/AppStructure/AppStructure";
import { appRoutesCliente } from "@/data/Rutas";

import { Mantenimientos } from "../features/mantenimientos/pages/Mantenimientos";
import { Dashboard } from "@/features/mantenimientos/subpages/Dashboard/Dashboard";
import { SeleccionarContadora } from "@/features/mantenimientos/subpages/SeleccionarContadora/SeleccionarContadora";
import { SeguimientoServicio } from "@/features/mantenimientos/subpages/SeguimientoServicio/SeguimientoServicio";

export const AppRoutesCliente = () => {
	const [isResponsiveMenu, setIsResponsiveMenu] = useState(false);
	const containerClassName = isResponsiveMenu
		? `${style.mainContent__container} ${style.containerWithMenu}`
		: style.mainContent__container;

	const setMenuResize = () => {
		setIsResponsiveMenu((prev) => !prev);
	};

	return (
		<AppStructure>
			<div className={containerClassName}>
				<Sidebar appRoutes={appRoutesCliente} isResponsiveMenu={isResponsiveMenu} />
				<MainHeader additionalClassName={style.mainHeaderContainer} setMenuResize={setMenuResize} />
				<div className={style.routesContainer}>
					<Routes>
						<Route path="/" element={<Mantenimientos />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/contadora-asignada" element={<SeleccionarContadora />} />
						<Route path="/seguimiento-servicio" element={<SeguimientoServicio />} />
					</Routes>
				</div>
			</div>
		</AppStructure>
	);
};
