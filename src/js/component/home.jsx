import React from "react";

//include images into your bundle

//create your first component
export const NavBar = () => {
	return ( 
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container-fluid">
			<a className="navbar-brand" href="#">Start BootStrap</a>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav ms-auto me-0">
				<a className="nav-link active" aria-current="page" href="#">Home</a>
				<a className="nav-link" href="#">About</a>
				<a className="nav-link" href="#">Services</a>
				<a className="nav-link" href="#">Contact</a>
			</div>
			</div>
		</div>
		</nav>

		);
};
export const Footer = () => {
	return (
	<footer class="bg-dark text-light py-3">
		<p>Copywrite @ Your Website 2023</p>
	</footer>
		);
};
const Jumbutron = () => {
	return (
		<div class="jumbotron">
  			<h1 class="display-4">A Warm Welcome!</h1>
			<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<hr class="my-4"/>
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<p class="lead">
				<a class="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
			</p>
		</div>
		);
};
const Card = ({ image, title, text, button, link }) => {
	return (
	<div className="card" style={{width:"18rem"}}>
		<img src={image} className="card-img-top"/>
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{text}</p>
			<div className="d-flex justify-content-center border-top pt-3">
      			<a href={link} className="btn btn-primary">{button}</a>
    		</div>
		</div>
  	</div>
		);
};

export const ContainerDiv = () => {
	const cardData = [
		{
			image: "https://picsum.photos/500/325",
			title: "Morning News",
			text: "The news for this morning is nothing but the truth, the world is still *@&£$*",
			button: "Is it true?",
			link: "https://ourworldindata.org/much-better-awful-can-be-better"
		},
		{
			image: "https://picsum.photos/500/325",
			title: "Evening News",
			text: "The news for this evening is all about the weather, it's going to rain *@&£$*",
			button: "What's the forecast?",
			link: "https://ourworldindata.org/weather-forecast"
		},
		{
			image: "https://picsum.photos/500/325",
			title: "Night News",
			text: "Late-breaking news for the night: *@&£$*",
			button: "Read more",
			link: "https://ourworldindata.org/late-breaking-news"
		  },
		{
			image: "https://picsum.photos/500/325",
			title: "Feature Story",
			text: "Discover the captivating story behind *@&£$*",
			button: "Explore",
			link: "https://ourworldindata.org/feature-story"
		}
	];
	return (
		<div>
      		<div className="container" id="containerDiv">
       			 <Jumbutron />
				<div className="row" id="cards">
					{cardData.map((data, index) => (
					<div className="col" key={index}>
						<Card {...data} />
					</div>
					))}
				</div>
      		</div>
    	</div>
		);
};

