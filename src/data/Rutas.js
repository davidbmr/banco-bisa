export const appRoutesAdmin = [
	{
		group: true,
		groupName: "SEGMENTADOR",
		routes: [
			{
				path: "/dashboard",
				sidebarProps: {
					displayText: "Dashboard",
				},
			},
			{
				path: "/segmentador",
				sidebarProps: {
					displayText: "Segmentador",
				},
			},
			{
				path: "/lista-segmentada",
				sidebarProps: {
					displayText: "Lista de prospectos",
				},
			},
			// {
			// 	path: "/prospecto-contadoras",
			// 	sidebarProps: {
			// 		displayText: "Prospectos de contadoras",
			// 	},
			// },
		],
	},
];

export const appRoutesCliente = [
	{
		group: true,
		groupName: "APP CLIENTE",
		routes: [
			{
				path: "/dashboard",
				sidebarProps: {
					displayText: "Dashboard",
				},
			},
			{
				path: "/contadora-asignada",
				sidebarProps: {
					displayText: "Contadora asignada",
				},
			},
			{
				path: "/seguimiento-servicio",
				sidebarProps: {
					displayText: "Seguimiento del servicio",
				},
			},
		],
	},
];

export const appRoutesContadora = [
	{
		group: true,
		groupName: "APP CONTADORA",
		routes: [
			{
				path: "/dashboard-contadora",
				sidebarProps: {
					displayText: "Dashboard",
				},
			},
			{
				path: "/lista-clientes",
				sidebarProps: {
					displayText: "Lista de clientes",
				},
			},
		],
	},
];
