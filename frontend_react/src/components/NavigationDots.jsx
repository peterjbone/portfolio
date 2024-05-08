function NavigationDots({ active }) {
	const sections = [
		{ name: "Inicio", link: "home" },
		{ name: "Sobre mí", link: "about" },
		{ name: "Proyectos", link: "work" },
		{ name: "Habilidades", link: "skills" },
		{ name: "Contacto", link: "contact" }
	];

	//prettier-ignore
	return (
		<div className="app__navigation">
			{sections.map((item, index) => (
				<a
					aria-label="Navigation dots"
					key={item.name + index}
					href={`#${item.link}`}
					className="app__navigation-dot"
					style={active === item ? { backgroundColor: "#313BAC" } : {}}
				/>
			))}
		</div>
	);
}

export default NavigationDots;
