import React, { useState, useEffect } from "react";
import style from "./Dashboard.module.css";
import { Chart } from "primereact/chart";

import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { ContentBox } from "@/components/ContentBox/ContentBox";

export function Dashboard() {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const data = {
			labels: ["Q1", "Q2", "Q3", "Q4"],
			datasets: [
				{
					label: "Team",
					data: [540, 325, 702, 620],
					backgroundColor: [
						"rgba(255, 159, 64, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(153, 102, 255, 0.2)",
					],
					borderColor: [
						"rgb(255, 159, 64)",
						"rgb(75, 192, 192)",
						"rgb(54, 162, 235)",
						"rgb(153, 102, 255)",
					],
					borderWidth: 1,
				},
			],
		};
		const options = {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		};

		setChartData(data);
		setChartOptions(options);
	}, []);
	return (
		<MainContentStructure titleText="Dashboard">
			<div className={style.dashboard__container}>
				<div className={style.item}>
					<p className={style.item__title}>Prospectos creados en el día</p>
					<p className={style.item__text}>12</p>
				</div>
				<div className={style.item}>
					<p className={style.item__title}>Prospectos creados en el mes</p>
					<p className={style.item__text}>321</p>
				</div>
				{/* <div className={style.item}>
					<p className={style.item__title}>Registros realizados</p>
					<p className={style.item__text}>55</p>
				</div> */}
			</div>
			<br />
			<div className={style.dashboard__graficos}>
				<ContentBox>
					<Chart type="bar" data={chartData} options={chartOptions} />
				</ContentBox>

				<ContentBox>
					<Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
				</ContentBox>
			</div>
		</MainContentStructure>
	);
}
