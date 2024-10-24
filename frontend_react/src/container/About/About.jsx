import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { saveAs } from "file-saver";
import resume from "./resume.pdf";
import { useTranslation } from "react-i18next";

function About() {
	const { t } = useTranslation();

	function descargarPDF() {
		const url = resume;
		const nombreArchivo = "joao_bone.pdf";
		saveAs(url, nombreArchivo);
	}

	//prettier-ignore
	return (
		<>
			<h2 className="head-text">
				{t("about")} <span>{t("me")}</span>
			</h2>
			<div className="app__profiles">
				<motion.div
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.5, type: "tween" }}
					className="app__profile-item introduction"
					key="introduction">
					<h2>
						{t("titleIntroduction")} <span>Joao</span> 🧑🏽
					</h2>
					<p>
            {t("introParagraphOne")}
            <br /><br />
            {t("introParagraphTwo")}
            <br /><br />
            {t("introParagraphThree")}
					</p>
					<button onClick={descargarPDF}>
						Descargar CV
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-box-arrow-down"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
							/>
							<path
								fill-rule="evenodd"
								d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
							/>
						</svg>
					</button>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.5, type: "tween" }}
					className="app__profile-item information"
					key="introduction">
					<h2>
						Información <span>personal</span> 📄
					</h2>
					<p>
						<span>Nombre completo:</span> Joao Peter Bone Peña
					</p>
					<p>
						<span>Edad:</span> 23 años (05/06/2001)
					</p>
					<p>
						<span>Nacionalidad:</span> Ecuatoriano
					</p>
					<p>
						<span>Residencia:</span> Ecuador, Guayaquil, Durán
					</p>
					<p>
						<span>Disponibilidad:</span> Inmediata / Full time
					</p>
					<p>
						<span>Zona horaria:</span> UTC-5
					</p>
				</motion.div>
			</div>
		</>
	);
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
