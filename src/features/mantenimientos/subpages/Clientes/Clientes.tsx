import React from "react";
import { useNavigate } from "react-router-dom";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const Clientes = () => {
	const navigate = useNavigate();

	const handleClientRedirect = () => {
		navigate("/seguimiento-cliente");
	};

	return (
		<>
			<MainContentStructure titleText="Clientes">
				<DataTable columns={columns} data={data} onEye={handleClientRedirect} isSearch={true} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "Apellido Paterno", campo: "fatherSurname" },
	{ nombre: "Número de documento", campo: "documentNumber" },
	{ nombre: "Fecha de inicio", campo: "date" },
	{ nombre: "Estado", campo: "status" },
];

const data = [
	{
		name: "Nombre",
		fatherSurname: "Apellido Paterno",
		documentNumber: "20999999999",
		date: "27/11/23",
		status: "Pendiente de documentos",
	},
];
