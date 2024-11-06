import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import { logoutUser } from "../../store/slices/auth/thunks";
import { Toast } from "primereact/toast";
import { IoPerson } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import style from "./MainHeader.module.css";

import { useAppDispatch } from "@/store/hooks";

interface MainHeaderProps {
	additionalClassName?: string;
	setMenuResize?: any;
}

export const MainHeader = ({ additionalClassName, setMenuResize }: MainHeaderProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const toast = useRef(null);
	const [menuActive, setMenuActive] = useState(false);

	const handleNavigate = (path: string) => {
		navigate(`/${path}`);
		setMenuActive(false);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login");
	};

	const containerClassName = `${style.mainHeader__container} ${additionalClassName || ""}`;

	return (
		<header className={containerClassName}>
			<Toast ref={toast} />
			<div>
				{/* <div onClick={setMenuResize}> */}
				<HiOutlineMenuAlt2 size={30} />
			</div>

			<div className={style.mainHeader__navbar__container}>
				<div style={{ position: "relative" }}>
					{/* <div className={style.mainHeader__profile} onClick={() => setMenuActive((prev) => !prev)}>
						<IoPerson />
					</div> */}
					<div className={style.mainHeader__profile}>
						<IoPerson />
					</div>
					{/* {menuActive && (
						<div className={style.profileMenu}>
							<ul className={style.profileMenu__list}>
								<li className={style.profileMenu__item} onClick={() => handleNavigate("/")}>
									<IoPersonOutline size={20} /> Mis Datos
								</li>
								<li className={style.profileMenu__item} onClick={handleLogout}>
									<IoLogOutOutline size={20} /> Cerrar Sesión
								</li>
							</ul>
						</div>
					)} */}
				</div>
			</div>
		</header>
	);
};
