import "./Footer.scss";
import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client.js";
import { useTranslation } from "react-i18next";

function Footer() {
	const { t } = useTranslation();

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

		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}

	//prettier-ignore
	return (
		<>
			{!isFormSubmitted ? (
				<>
					<h2 className="head-text">{t("contact")} 😃</h2>

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
								placeholder={`${t("yourName")}`}
								name="name"
								value={formData.name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className="app__flex">
							<input
								type="email"
								placeholder={`${t("yourEmail")}`}
								name="email"
								value={formData.email}
								onChange={handleChangeInput}
							/>
						</div>
						<div>
							<textarea
								placeholder={`${t("yourMessage")}`}
								value={formData.message}
								name="message"
								onChange={handleChangeInput}
							/>
						</div>
						<button type="button" className="p-text" onClick={handleSubmit}>
							{!loading ? `${t("sendMessage")}` : "Sending..."}
						</button>
					</div>
				</>
			) : (
				<div className="message-sent">
            <h3>{t("thanks")}</h3>
            <p>{t("response")}</p>
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
