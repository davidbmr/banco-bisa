import React, { useState } from "react";
import style from "./Segmentador.module.css";

import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { SelectField } from "@/components/SelectField/SelectField";
import { SwitchField } from "@/components/SwitchField/SwitchField";

import { IoAddOutline } from "react-icons/io5";
import { DataTable } from "@/components/DataTable/DataTable";
import { handleChangeInput } from "@/helpers/handleTextBox";
import { NumberBoxField } from "@/components/NumberBoxField/NumberBoxField";

export const Segmentador = () => {
	const [switchStatus, setSwitchStatus] = useState(false);

	const handleSwitchStatus = () => {
		setSwitchStatus((prev: any) => !prev);
	};

	// --- Información del prospecto
	const [informacionProspecto, setInformacionProspecto] = useState<any>({
		tipoIdentificacion: "",
		numeroIdentificacion: "",
		nombres: "",
		apellidos: "",
		ocupacion: "",
		ingresos: "",
		otrosIngresos: "",
		gastosFinancieros: "",
		gastosManutencion: "",
	});

	// --- Producto Financiero
	const [productoFinancierosList, setProductoFinancierosList] = useState<any>([]);

	const [nuevoProducto, setNuevoProducto] = useState({
		entidad: "",
		producto: "",
	});

	const handleNuevoProducto = () => {
		setProductoFinancierosList((prev: any) => [...prev, nuevoProducto]);
		setNuevoProducto({
			entidad: "",
			producto: "",
		});
	};

	return (
		<>
			<MainContentStructure titleText="Segmentación de prospectos">
				<div>
					<h3>Datos personales</h3>

					<div className={style.segmentadorGroup__container}>
						<SelectField
							textLabel="Tipo de identificación:"
							value={informacionProspecto.tipoIdentificacion}
							name={"tipoIdentificacion"}
							onChange={(e) => handleChangeInput(e, setInformacionProspecto)}
							options={[
								{ id: 1, name: "Carnet de identidad", value: "carnet" },
								{ id: 2, name: "Pasaporte", value: "pasaporte" },
								{ id: 3, name: "Carnet de extranjería", value: "extranjeria" },
							]}
							direction="row"
							labelWidth="200px"
						/>
						<TextBoxField
							textLabel="Número de identificación:"
							value={informacionProspecto.numeroIdentificacion}
							name={"numeroIdentificacion"}
							onChange={(e) => handleChangeInput(e, setInformacionProspecto)}
							direction="row"
							labelWidth="200px"
						/>
						<TextBoxField
							textLabel="Nombres:"
							value={informacionProspecto.nombres}
							name={"nombres"}
							onChange={(e) => handleChangeInput(e, setInformacionProspecto)}
							direction="row"
							labelWidth="200px"
						/>
						<TextBoxField
							textLabel="Apellidos:"
							value={informacionProspecto.apellidos}
							name={"apellidos"}
							onChange={(e) => handleChangeInput(e, setInformacionProspecto)}
							direction="row"
							labelWidth="200px"
						/>
						<SelectField
							textLabel="Ocupación:"
							value={informacionProspecto.ocupacion}
							name={"ocupacion"}
							onChange={(e) => handleChangeInput(e, setInformacionProspecto)}
							options={[
								{ id: 1, name: "Empleado", value: "empleado" },
								{ id: 2, name: "Empleado con otros ingresos", value: "empleadoIngresos" },
								{ id: 3, name: "Independiente", value: "independiente" },
							]}
							direction="row"
							labelWidth="200px"
						/>
					</div>
				</div>

				<Divider />

				<div>
					<h3>Información financiera</h3>

					<div className={style.segmentadorGroup__container}>
						<NumberBoxField
							textLabel="Ingresos:"
							value={informacionProspecto.ingresos}
							name={"ingresos"}
							direction="row"
							onChange={(e: any) => handleChangeInput(e, setInformacionProspecto)}
							labelWidth="200px"
						/>
						<NumberBoxField
							textLabel="Otros ingresos:"
							value={informacionProspecto.otrosIngresos}
							name={"otrosIngresos"}
							direction="row"
							onChange={(e: any) => handleChangeInput(e, setInformacionProspecto)}
							labelWidth="200px"
						/>
						<NumberBoxField
							textLabel="Gastos financieros:"
							value={informacionProspecto.gastosFinancieros}
							name={"gastosFinancieros"}
							direction="row"
							onChange={(e: any) => handleChangeInput(e, setInformacionProspecto)}
							labelWidth="200px"
						/>
						<NumberBoxField
							textLabel="Gastos de manutención:"
							value={informacionProspecto.gastosManutencion}
							name={"gastosManutencion"}
							direction="row"
							onChange={(e: any) => handleChangeInput(e, setInformacionProspecto)}
							labelWidth="200px"
						/>
					</div>
				</div>

				<Divider />

				<div>
					<h3>Productos financieros</h3>

					<div className={style.segmentadorGroup__container__entidadFinanciera}>
						<SwitchField
							value={switchStatus}
							name={""}
							onChange={handleSwitchStatus}
							textLabel="¿Cuenta con productos financieros de otros bancos?"
							direction="row"
							labelWidth="400px"
						/>

						{/* <SelectField
							textLabel="Cuenta con productos financieros de otros bancos:"
							value={undefined}
							name={""}
							direction="row"
							onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
								throw new Error("Function not implemented.");
							}}
							labelWidth="400px"
							options={[
								{ id: 1, name: "Si", value: "si" },
								{ id: 2, name: "No", value: "no" },
							]}
						/> */}

						{switchStatus ? (
							<>
								<div className={style.segmentadorGroup__container__productosFinancieros}>
									<SelectField
										textLabel="Entidad financiera:"
										value={nuevoProducto.entidad}
										name={"entidad"}
										direction="row"
										onChange={(e) => handleChangeInput(e, setNuevoProducto)}
										labelWidth="160px"
										options={[
											{
												id: 1,
												name: "Banco Mercantil de Santa Cruz",
												value: "Banco Mercantil de Santa Cruz",
											},
											{ id: 2, name: "BCP", value: "BCP" },
											{ id: 3, name: "BNB", value: "BNB" },
											{ id: 4, name: "Banco Económico", value: "Banco Económico" },
										]}
									/>
									<SelectField
										textLabel="Producto financiero:"
										value={nuevoProducto.producto}
										name={"producto"}
										direction="row"
										onChange={(e) => handleChangeInput(e, setNuevoProducto)}
										labelWidth="160px"
										options={[
											{ id: 1, name: "Tarjeta de crédito", value: "Tarjeta de crédito" },
											{ id: 2, name: "Crédito de consumo", value: "Crédito de consumo" },
											{ id: 3, name: "Crédito de vehiculo", value: "Crédito de vehiculo" },
											{ id: 4, name: "Crédito hipotecario", value: "Crédito hipotecario" },
											{ id: 5, name: "Cuenta de ahorros", value: "Cuenta de ahorros" },
											{ id: 6, name: "Cuenta de corriente", value: "Cuenta de corriente" },
											{ id: 7, name: "DPF", value: "DPF" },
										]}
									/>

									<div className={style.addButton__container} onClick={handleNuevoProducto}>
										<p>Agregar</p>
										<IoAddOutline />
									</div>
								</div>
								<DataTable
									columns={columns}
									data={productoFinancierosList}
									isHeaderActive={false}
								/>
							</>
						) : (
							<></>
						)}
					</div>
				</div>

				<br />

				<div style={{ display: "flex", gap: "10px" }}>
					<Button className="p-button-sm p-button-info mr-2" onClick={() => {}}>
						Segmentar
					</Button>

					<Button className="p-button-sm p-button mr-2" onClick={() => {}}>
						Cancelar
					</Button>
				</div>
			</MainContentStructure>
		</>
	);
};

const columns = [
	{ nombre: "Entidad Financiera", campo: "entidad" },
	{ nombre: "Producto Financiero", campo: "producto" },
];
