import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { saveAs } from "file-saver";
import curriculumESP from "./resume_v3_ESP.pdf";
import resumeENG from "./resume_v3_ENG.pdf";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../stores/languageStore";

function About() {
	const language = useLanguageStore((state) => state.language);
	const { t } = useTranslation();

	function descargarCurriculum() {
		const url = curriculumESP;
		const nombreArchivo = "Curriculum_BoneJoao";
		saveAs(url, nombreArchivo);
	}

	function downloadResume() {
		const url = resumeENG;
		const nombreArchivo = "Resume_BoneJoao";
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
						<br />
						<br />
						{t("introParagraphTwo")}
						<br />
						<br />
						{t("introParagraphThree")}
          </p>
          {/* DOWNLOAD BUTTONS */}
					<div>
						<button onClick={descargarCurriculum}>
							Curriculum ESP
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
						<button onClick={downloadResume}>
							Resume ENG
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
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.5, type: "tween" }}
					className="app__profile-item information"
          key="introduction">
          {
            language === "en" ? (
              <h2>Personal <span>information</span> 📄</h2>
            ) : (
              <h2>Información <span>personal</span> 📄</h2>
            )
          }
					<p>
            <span>{t("full name")}</span> Joao Peter Bone Peña
					</p>
					<p>
            <span>{t("age")}</span> 23 {t("years")} (05/06/2001)
					</p>
					<p>
            <span>{t("nacionality")}</span> {t("ecuadorian")}
					</p>
					<p>
            <span>{t("residence")}</span> Ecuador, Guayaquil, Durán
					</p>
					<p>
            <span>{t("availability")}</span> {t("immediate")} / Full time
					</p>
					<p>
            <span>{t("timeZone")}</span> GMT-5
					</p>
				</motion.div>
			</div>
		</>
	);
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
