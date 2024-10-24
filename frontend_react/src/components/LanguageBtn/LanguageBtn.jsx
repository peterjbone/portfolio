//import React from "react";
import styles from "./LanguageBtn.module.css";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

const LanguageBtns = () => {
	const { i18n } = useTranslation();
	const [isSpanishLng, setIsSpanishLng] = useState(true);
	console.log(isSpanishLng);

	function changeLanguage(lng) {
		i18n.changeLanguage(lng);
		if (lng === "es") {
			setIsSpanishLng(true);
		} else {
			setIsSpanishLng(false);
		}
	}

	//? para cambiar a idioma que quedo guardado en el localstorage
	useEffect(() => {}, []);

	return (
		<div className={styles.languageBtns}>
			<button
				type="button"
				onClick={() => changeLanguage("en")}
				className={!isSpanishLng ? `${styles.active}` : undefined}>
				English
			</button>
			<button
				type="button"
				onClick={() => changeLanguage("es")}
				className={isSpanishLng ? `${styles.active}` : undefined}>
				Español
			</button>
		</div>
	);
};

export default LanguageBtns;
