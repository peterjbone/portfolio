import "./Work.scss";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client.js";
import { useLanguageStore } from "../../stores/languageStore.js";
import { useTranslation } from "react-i18next";

function Work() {
	const { t } = useTranslation();

	const [activeFilter, setActiveFilter] = useState("Todos");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const language = useLanguageStore((state) => state.language); //*global state

	//? Cada vez que se carga la pagina trae todo los proyectos
	//? y todos los proyectos estan en el filtro
	useEffect(() => {
		if (language === "es") {
			const query = '*[_type == "trabajos"]';

			client.fetch(query).then((data) => {
				//console.log("es", data);
				setWorks(data);
				setFilterWork(data);
			});
		}

		if (language === "en") {
			const query = '*[_type == "works"]';

			client.fetch(query).then((data) => {
				//console.log("en", data);
				setWorks(data);
				setFilterWork(data);
			});
		}
	}, [language]);

	//? Cada vez que se filtra
	//? anima las cards cada vez q se filtra
	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (language === "es") {
				if (item === "Todos los proyectos") {
					setFilterWork(works);
				} else {
					setFilterWork(works.filter((work) => work.tags.includes(item)));
				}
			}

			if (language === "en") {
				if (item === "All projects") {
					setFilterWork(works);
				} else {
					setFilterWork(works.filter((work) => work.tags.includes(item)));
				}
			}
		}, 500);
	};

	//************************************* COMPONENT WORK
	//prettier-ignore
	return (
		<>
			{/* TITLES */}
			<h2 className="head-text">{t("projects")}</h2>

			{/* FILTER BUTTONS */}
			{language === "es" ? (
				<div className="app__work-filter">
					{["Todos los proyectos", "Principales", "Secundarios"].map(
						(item, index) => (
							<div
								key={index}
								onClick={() => handleWorkFilter(item)}
								className={`app__work-filter-item app__flex p-text ${
									activeFilter === item ? "item-active" : ""
								}`}>
								{item}
							</div>
						)
					)}
				</div>
			) : (
				<div className="app__work-filter">
					{["All projects", "Main", "Secondary"].map((item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${
								activeFilter === item ? "item-active" : ""
							}`}>
							{item}
						</div>
					))}
				</div>
			)}

			{/* GRID OF PROJECTS */}
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio">
        
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						{/* image */}
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />
						  {/* layer */}
							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5
								}}
								className="app__work-hover app__flex">
								{/* production link*/}
								<a href={work.projectLink} target="_blank" rel="noopener noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillEye />
									</motion.div>
								</a>
								{/* github link*/}
								<a href={work.codeLink} target="_blank" rel="noopener noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						{/* content of the card*/}
						<div className="app__work-content app__flex">
							{/* title and description*/}
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>
							{/* Tag (with position absolute) */}
							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
}

export default AppWrap(MotionWrap(Work, "app__works"), "work", "primarybg");
