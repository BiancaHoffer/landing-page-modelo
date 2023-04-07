import { useState } from 'react';

import './App.scss';

import { AboutUs } from './components/AboutUs';
import { Banner } from './components/Banner';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { FormEmail } from './components/FormEmail';
import { Header } from './components/Header';
import { PartnerCompanies } from './components/PartnerCompanies';
import { Products } from './components/Products';
import { Services } from './components/Services';

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Products />
				<Services />
				<FormEmail />
				<AboutUs />
				<Blog />
				<PartnerCompanies />
			</main>
			<Footer />
		</>
	);
}

export default App;
