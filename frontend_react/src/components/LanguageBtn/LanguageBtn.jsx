//import React from "react";
import styles from "./LanguageBtn.module.css";
import { useTranslation } from "react-i18next";

const LanguageBtns = () => {
	const { i18n } = useTranslation();

	function changeLanguage(lng) {
		i18n.changeLanguage(lng);
	}

	return (
		<div className={styles.languageBtns}>
			<button type="buton" onClick={() => changeLanguage("en")}>
				English
			</button>
			<button type="buton" onClick={() => changeLanguage("es")}>
				Español
			</button>
		</div>
	);
};

export default LanguageBtns;
