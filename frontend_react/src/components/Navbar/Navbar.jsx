import "./Navbar.scss";
//import { useState } from "react";
//import { HiMenuAlt4, HiX } from "react-icons/hi";
//import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import LanguageBtns from "../LanguageBtn/LanguageBtn.jsx";
import { useLanguageStore } from "../../stores/languageStore.js";

const Navbar = () => {
	const language = useLanguageStore((state) => state.language);
	//const [toggle, setToggle] = useState(false);

	const sectionsESP = [
		{ name: "Inicio", link: "home" },
		{ name: "Sobre mí", link: "about" },
		{ name: "Proyectos", link: "work" },
		{ name: "Habilidades", link: "skills" },
		{ name: "Contacto", link: "contact" }
	];

	const sectionsENG = [
		{ name: "Home", link: "home" },
		{ name: "About", link: "about" },
		{ name: "Projects", link: "work" },
		{ name: "Skills", link: "skills" },
		{ name: "Contact", link: "contact" }
	];

	return (
		<nav className="app__navbar">
			<div
				className="logo-text"
				style={{
					position: "relative",
					top: "-3px",
					left: "3px",
					textAlign: "center",
					fontWeight: 800,
					fontSize: "2rem"
				}}>
				<a href="/" style={{ color: "initial", textDecoration: "none" }}>
					J<span className="secondary-clr">B</span>
				</a>
			</div>

			{language === "es" ? (
				<ul className="app__navbar-links">
					{sectionsESP.map((item) => (
						<li key={uuidv4()} className="app__flex p-text">
							<a href={`#${item.link}`}>{item.name}</a>
						</li>
					))}
				</ul>
			) : (
				<ul className="app__navbar-links">
					{sectionsENG.map((item) => (
						<li key={uuidv4()} className="app__flex p-text">
							<a href={`#${item.link}`}>{item.name}</a>
						</li>
					))}
				</ul>
			)}

			{<LanguageBtns />}
		</nav>
	);
};

export default Navbar;
