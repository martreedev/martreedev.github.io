import React from "react";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<div>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
