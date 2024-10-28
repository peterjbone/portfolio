import { v4 as uuidv4 } from "uuid";

function NavigationDots({ active }) {
	const sections = [
		{ link: "home" },
		{ link: "about" },
		{ link: "work" },
		{ link: "skills" },
		{ link: "contact" }
	];

	//prettier-ignore
	return (
		<div className="app__navigation">
			{sections.map((item) => (
				<a
					aria-label="Navigation dots"
					key={uuidv4()}
					href={`#${item.link}`}
					className="app__navigation-dot"
					style={active === item ? { backgroundColor: "#313BAC" } : {}}
				/>
			))}
		</div>
	);
}

export default NavigationDots;
