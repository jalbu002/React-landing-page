import React from "react";

//include images into your bundle
import Jumbo from "./jumbotron.jsx";
import Nav from "./navbar.jsx";
import Card from "./card.jsx";
import Foot from "./footer.jsx";

//create your first component
const Home = () => {
	return (<div className="p-3">
		<Nav/> 
		<Jumbo/>
		 <div className="row row-cols-1 row-cols-lg-4 mx-1">
			<Card title="Lizard" img="https://plus.unsplash.com/premium_photo-1667667846319-87e1a0858b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi a beatae voluptate corporis, repellat voluptatibus adipisci eius doloremque totam?"/> 
			<Card title="T-rex Head" img="https://images.unsplash.com/photo-1570482606740-a0b0baa0e58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi a beatae voluptate corporis, repellat voluptatibus adipisci eius doloremque totam?"/> 
			<Card title="T-rex Body" img="https://images.unsplash.com/photo-1601182207230-1b165dea2212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi a beatae voluptate corporis, repellat voluptatibus adipisci eius doloremque totam?"/> 
			<Card title="Komodo Dragon" img="https://images.unsplash.com/photo-1590691563977-97e10916647b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi a beatae voluptate corporis, repellat voluptatibus adipisci eius doloremque totam?"/>
			</div>
			<Foot/>
			 </div>
		
	);
};

export default Home;
