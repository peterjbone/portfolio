import React, { useState, useEffect } from "react";
import styles from "./LanguageBtn.module.css";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../stores/languageStore";

const LanguageBtns = () => {
	//* global action
	const changeLng = useLanguageStore((state) => state.changeLng);

	const { i18n } = useTranslation();
	const [isSpanishLng, setIsSpanishLng] = useState(true);

	function changeLanguageFn(lng) {
		i18n.changeLanguage(lng);
		if (lng === "es") {
			setIsSpanishLng(true);
			changeLng("es");
		} else {
			setIsSpanishLng(false);
			changeLng("en");
		}
	}

	//? para cambiar a idioma que quedo guardado en el localstorage
	useEffect(() => {}, []);

	//************************************** LANGUAGEBTN COMPONENT
	return (
		<div className={styles.languageBtns}>
			<button
				type="button"
				onClick={() => changeLanguageFn("en")}
				className={!isSpanishLng ? `${styles.active}` : undefined}>
				English
			</button>
			<button
				type="button"
				onClick={() => changeLanguageFn("es")}
				className={isSpanishLng ? `${styles.active}` : undefined}>
				Español
			</button>
		</div>
	);
};

export default LanguageBtns;
