import "./Footer.scss";
import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client.js";

function Footer() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	//const { name, email, message } = formData;

	function handleChangeInput(e) {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value
		});
	}

	function handleSubmit() {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: formData.name,
			email: formData.email,
			message: formData.message
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	}

	//prettier-ignore
	return (
		<>
			{!isFormSubmitted ? (
				<>
					<h2 className="head-text">Comunícate conmigo 😃</h2>

					<div className="app__footer-cards">
						<div className="app__footer-card">
							<img src={images.email} alt="email" />
							<a href="mailto:peterjbone41@gmail.com" className="p-text">
								peterjbone41@gmail.com
							</a>
						</div>
						<div className="app__footer-card">
							<img src={images.mobile} alt="mobile" />
							<a href="tel:+593964061622" className="p-text">
								+593 964061622
							</a>
						</div>
					</div>

					<div className="app__footer-form app__flex">
						<div className="app__flex">
							<input
								type="text"
								placeholder="Tu nombre"
								name="name"
								value={formData.name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className="app__flex">
							<input
								type="email"
								placeholder="Tu email"
								name="email"
								value={formData.email}
								onChange={handleChangeInput}
							/>
						</div>
						<div>
							<textarea
								placeholder="Tu mensaje"
								value={formData.message}
								name="message"
								onChange={handleChangeInput}
							/>
						</div>
						<button type="button" className="p-text" onClick={handleSubmit}>
							{!loading ? "Send Message" : "Sending..."}
						</button>
					</div>
				</>
			) : (
				<div className="message-sent">
					<h3>Gracias por ponerte en contacto conmigo!</h3>
					<p>Te responderé en la brevedad posible.</p>
				</div>
			)}
		</>
	);
}

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__primarybg"
);
