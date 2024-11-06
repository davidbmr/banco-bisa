import React from "react";
import { useNavigate } from "react-router-dom";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";

export const ListaContadoras = () => {
	const handleClientRedirect = () => {
		console.log("");
	};

	return (
		<>
			<MainContentStructure titleText="Lista prospectos segmentados">
				<DataTable columns={columns} data={data} isSearch={true} onEye={handleClientRedirect} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "name" },
	{ nombre: "Apellido Paterno", campo: "fatherSurname" },
	{ nombre: "DNI", campo: "documentNumber" },
	{ nombre: "Fecha de ingreso", campo: "date" },
];

const data = [
	{
		name: "Janeth",
		fatherSurname: "Peves Ramirez",
		documentNumber: "67777777",
		date: "01/11/24",
	},
];
