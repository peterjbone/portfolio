import { create } from "zustand";

export const useLanguageStore = create((set, get) => ({
	//* initial states
	language: "es",
	changeLng: (value) => {
		set((state) => ({
			...state,
			language: value
		}));
	}
}));
