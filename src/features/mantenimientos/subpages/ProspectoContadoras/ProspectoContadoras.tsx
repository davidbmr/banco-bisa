import React from "react";
import { useNavigate } from "react-router-dom";

import { DataTable } from "@/components/DataTable/DataTable";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useGetFetch } from "@/hooks/useGetFetch";

export const ProspectoContadoras = () => {
	const navigate = useNavigate();

	const { data } = useGetFetch("/usuarios_roles/4");

	const handleClientRedirect = () => {
		navigate("/prospecto-contadoras/perfil");
	};

	console.log(data);

	return (
		<>
			<MainContentStructure titleText="Prospectos de contadoras">
				<DataTable columns={columns} data={data} onEye={handleClientRedirect} isSearch={true} />
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Nombre", campo: "nombre" },
	{ nombre: "Apellido Paterno", campo: "apellido_paterno" },
	{ nombre: "Apellido Paterno", campo: "apellido_materno" },
	{ nombre: "Correo", campo: "email" },
	{ nombre: "Celular", campo: "celular" },
	{ nombre: "DNI", campo: "dni" },
	{ nombre: "Fecha de solicitud", campo: "created_at" },
	// { nombre: "Estado", campo: "status" },
];
