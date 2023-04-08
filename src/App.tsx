import { useState } from 'react';

import './App.scss';

import { AboutUs } from './components/AboutUs';
import { Banner } from './components/Banner';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { FormEmail } from './components/FormEmail';

import { PartnerCompanies } from './components/PartnerCompanies';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Header } from './components/Header';
import { Drawer } from './components/Header/Drawer';
import { NavLink } from './components/NavLink';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div>
				<Header setIsOpen={setIsOpen} />

				<Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
					<nav className='flex-col h-[100%] justify-center items-center gap-[60px] flex'>
						<NavLink href='#' title='Sobre' />
						<NavLink href='#' title='Produtos' />
						<NavLink href='#' title='Serviços' />
						<NavLink href='#' title='Equipe' />
						<NavLink href='#' title='Contato' />
					</nav>
				</Drawer>

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
			</div>
		</>
	);
}

export default App;
