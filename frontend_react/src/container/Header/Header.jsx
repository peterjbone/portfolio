import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../../stores/languageStore";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut"
		}
	}
};

function Header() {
	const language = useLanguageStore((state) => state.language);
	const { t } = useTranslation();

	//**************************************** HEADER COMPONENT
	return (
		<div className="app__header app__flex">
			{/* INTRODUCTION */}
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info">
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">{t("greeting")}</p>
							<h1 className="head-text">Joao</h1>
						</div>
					</div>

					{language === "es" ? (
						<div className="tag-cmp app__flex">
							<p className="p-text">Desarrollador web</p>
							<p className="p-text">Frontend</p>
						</div>
					) : (
						<div className="tag-cmp app__flex">
							<p className="p-text">Frontend</p>
							<p className="p-text">Web Developer</p>
						</div>
					)}
				</div>
			</motion.div>

			{/* PROFILE PICTURE */}
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img">
				<img src={images.pfp} alt="profile-bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile circle"
					className="overlay_circle"></motion.img>
			</motion.div>

			{/* TECH SKILLS */}
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles">
				{[images.javascript, images.typescript, images.react].map(
					(circle, index) => (
						<div className="circle-cmp app__flex" key={`circle-${index}`}>
							<img src={circle} alt="circle" />
						</div>
					)
				)}
			</motion.div>
		</div>
	);
}

export default AppWrap(Header, "home");
