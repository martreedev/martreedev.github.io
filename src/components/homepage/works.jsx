import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./celeb-voice-logo.png"
								alt="celeb-voice.com"
								className="work-image"
							/>
							<div className="work-title">Celeb-Voice</div>
							<div className="work-subtitle">
								React Developer
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./onlyworx.png"
								alt="onlyworx"
								className="work-image"
							/>
							<div className="work-title">OnlyWorx</div>
							<div className="work-subtitle">
								Game Developer
							</div>
							<div className="work-duration">2021</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
