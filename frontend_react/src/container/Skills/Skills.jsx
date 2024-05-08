import "./Skills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client.js";
//import { Tooltip as ReactToolTip } from "react-tooltip";

function Skills() {
	const [skills, setSkills] = useState([]);
	const [skillsBack, setSkillsBack] = useState([]);

	useEffect(() => {
		const skillsQuery = '*[_type == "skills"]';
		const skillsBackQuery = '*[_type == "skillsBack"]';

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});

		client.fetch(skillsBackQuery).then((data) => {
			setSkillsBack(data);
		});
	}, []);

	//prettier-ignore
	return (
		<>
			<h2 className="head-text">Habilidades</h2>

      <div className="app__skills-supcontainer">
        
				<div className="app__skills-container">
					<h3 style={{ fontSize: "1.75rem" }}>Frontend</h3>
					<motion.div className="app__skills-list">
						{skills?.map((skill) => (
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__skills-item app__flex"
								key={skill.name}>
								<div
									className="app__flex"
									style={{ backgroundColor: skill.bgColor }}>
									<img src={urlFor(skill.icon)} alt={skill.name} />
								</div>
								<p className="p-text">{skill.name}</p>
							</motion.div>
						))}
					</motion.div>
        </div>
        
				<div className="app__skills-container">
					<h3 style={{ fontSize: "1.75rem" }}>Backend</h3>
					<motion.div className="app__skills-list">
						{skillsBack?.map((skill) => (
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__skills-item app__flex"
								key={skill.name}>
								<div
									className="app__flex"
									style={{ backgroundColor: skill.bgColor }}>
									<img src={urlFor(skill.icon)} alt={skill.name} />
								</div>
								<p className="p-text">{skill.name}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
