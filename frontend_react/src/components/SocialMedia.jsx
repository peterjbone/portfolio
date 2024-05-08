import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialMedia() {
	//prettier-ignore
	return (
		<div className="app__social">
			<a href="https://github.com/peterjbone" target="_blank" rel="noreferrer">
				<div>
					<FaGithub />
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/joao-bone-b8a7a3293/"
				target="_blank"
				rel="noreferrer">
				<div>
					<FaLinkedin />
				</div>
			</a>
		</div>
	);
}

export default SocialMedia;
