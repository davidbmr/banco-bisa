import { AppThunk } from "../../store";
import { authApi } from "../../../connections";
import { isLoading, setLogin, setRole } from "./authSlice";

// export const getUser = (payload: string): AppThunk => {
// 	return async (dispatch) => {
// 		try {
// 			const { data } = await authApi.post("/login", payload);
// 			localStorage.setItem("rt__eva", data.jwt);

// 			dispatch(setLogin(data));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

export const getUser = (payload: any): AppThunk => {
	return async (dispatch) => {
		try {
			if (payload?.email === "oficial@gmail.com") {
				dispatch(setRole("oficial"));
			}

			if (payload?.email === "cliente@gmail.com") {
				dispatch(setRole("cliente"));
			}

			if (payload?.email === "contadora@gmail.com") {
				dispatch(setRole("contadora"));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

// export const refreshToken = (payload: string): AppThunk => {
// 	return async (dispatch) => {
// 		try {
// 			const { data } = await authApi.post(`/refresh-token`, { jwt: payload });
// 			// -- Devolver todo el login cuando se haga refresh token.
// 			localStorage.setItem("rt__grifosBackoffice", data.jwt);
// 			dispatch(setLogin(data));
// 		} catch (error) {
// 			console.log(error);
// 			localStorage.removeItem("rt__grifosBackoffice");
// 			dispatch(isLoading());
// 		}
// 	};
// };

export const logoutUser = (): AppThunk => {
	return (dispatch) => {
		localStorage.removeItem("rt__eva");
		dispatch(setLogin(null));
	};
};
