import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
	isLoading: boolean;
	login: boolean | null;
	role: string;
}

const initialState: AuthState = {
	isLoading: true,
	login: null,
	role: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		isLoading: (state) => {
			state.isLoading = !state.isLoading;
		},

		setLogin: (state, action) => {
			state.login = action.payload;
			state.isLoading = false;
		},

		setRole: (state, action) => {
			state.role = action.payload;
		},
		logout: (state) => {
			state.role = "";
		},
	},
});

export const { isLoading, setLogin, setRole, logout } = authSlice.actions;
