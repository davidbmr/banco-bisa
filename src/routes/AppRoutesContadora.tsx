import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { AppStructure } from "../components/AppStructure/AppStructure";

import { Mantenimientos } from "../features/mantenimientos/pages/Mantenimientos";
import { Dashboard } from "@/features/mantenimientos/subpages/Dashboard/Dashboard";

// Contadora
import { Clientes } from "@/features/mantenimientos/subpages/Clientes/Clientes";
import { SeguimientoCliente } from "@/features/mantenimientos/subpages/SeguimientoCliente/SeguimientoCliente";
import { appRoutesContadora } from "@/data/Rutas";

export const AppRoutesContadora = () => {
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
				<Sidebar appRoutes={appRoutesContadora} isResponsiveMenu={isResponsiveMenu} />
				<MainHeader additionalClassName={style.mainHeaderContainer} setMenuResize={setMenuResize} />
				<div className={style.routesContainer}>
					<Routes>
						<Route path="/" element={<Mantenimientos />} />

						{/* Contadora */}
						<Route path="/dashboard-contadora" element={<Dashboard />} />
						<Route path="/lista-clientes" element={<Clientes />} />
						<Route path="/seguimiento-cliente" element={<SeguimientoCliente />} />
					</Routes>
				</div>
			</div>
		</AppStructure>
	);
};
