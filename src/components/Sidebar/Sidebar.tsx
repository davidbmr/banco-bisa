import React from "react";
import style from "./Sidebar.module.css";
import sidebarItemStyle from "./SidebarItem.module.css";
import { SidebarItem } from "./SidebarItem";

import imgLogo from "@/assets/LogoDefault.png";
import { Button } from "primereact/button";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/auth";

export const Sidebar = ({ appRoutes, isResponsiveMenu }: any) => {
	const dispatch = useAppDispatch();
	const containerClassName = isResponsiveMenu
		? `${style.container__drawer} ${style.responsiveMenu}`
		: style.container__drawer;

	return (
		<div className={containerClassName}>
			<div className={style.logo__container}>
				<img src={imgLogo} className={style.logo__item} />
			</div>

			<div className={style.list__container}>
				{appRoutes.map((route: any, index: any) => {
					if (route.group) {
						return (
							<React.Fragment key={index}>
								{index > 0 && <div className={style.whiteDivider} />}
								<div className={style.group}>{route.groupName}</div>
								{route.routes.map((childRoute: any, childIndex: any) => (
									<React.Fragment key={childIndex}>
										<SidebarItem item={childRoute} styles={sidebarItemStyle} />
									</React.Fragment>
								))}
							</React.Fragment>
						);
					} else {
						return (
							<React.Fragment key={index}>
								<SidebarItem item={route} styles={sidebarItemStyle} />
							</React.Fragment>
						);
					}
				})}
			</div>

			<div style={{ padding: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
				<button
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						padding: "10px 20px",
						border: "none",
						borderRadius: "5px",
						width: "100%",
						cursor: "pointer",
					}}
					onClick={() => dispatch(logout())}
				>
					Cerrar sesión
				</button>
			</div>
		</div>
	);
};
