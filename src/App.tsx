import { useEffect, useState } from 'react';
import './App.scss';

/*Aplication*/
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

/*Others Components*/
import { Modal } from './OthersComponents/Modal';
import { ReviewSlide } from './OthersComponents/ReviewSlide';
import { Slide } from './OthersComponents/Slide';
import { Tabs } from './OthersComponents/TabsExample';
import { Switch } from './OthersComponents/Switch';

import { RadioGroup } from './OthersComponents/RadioGroup';
import { ProgressBar } from './OthersComponents/Progress';
import { TabsCircle } from './OthersComponents/TabsCircle';
import { TabsLine } from './OthersComponents/TabsLine';
import { Dropdown } from './OthersComponents/Dropdown';
import { Pagination } from './OthersComponents/Pagination';
import { Button } from './components/Button';
import { Input } from './OthersComponents/Input';
import { ButtonsArrow } from './OthersComponents/ButtonsArrow';
import { Checkbox } from './OthersComponents/CheckbBox';


function App() {
	const [isOpenDrawer, setIsOpenDrawer] = useState(false);
	const [scrollActive, setScrollAtvite] = useState(false);

	useEffect(() => {
		function scrollPosition() {
			if (window.scrollY > 20) {
				setScrollAtvite(true)
			} else (
				setScrollAtvite(false)
			)
		}

		window.addEventListener('scroll', scrollPosition)
	}, [])

	return (
		<>
			<Header setIsOpen={setIsOpenDrawer} scrollActive={scrollActive} />
			<Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer}>
				<nav className='flex-col h-[100%] justify-center items-center gap-[60px] flex'>
					<NavLink href='#' title='Sobre' onClick={() => setIsOpenDrawer(false)} />
					<NavLink href='products' title='Produtos' onClick={() => setIsOpenDrawer(false)} />
					<NavLink href='services' title='Serviços' onClick={() => setIsOpenDrawer(false)} />
					<NavLink href='aboutUs' title='Equipe' onClick={() => setIsOpenDrawer(false)} />
					<NavLink href='contact' title='Contato' onClick={() => setIsOpenDrawer(false)} />
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

			{/*Others components*/}
			<div>
				<h2 className='w-[100%] text-center text-[40px] text-orange500 font-[900] py-[80px] px-[40px]'>Others Components</h2>
				<Modal />
				<ReviewSlide />
				<Slide />

				<div className='flex xl:flex-col'>
					<div className='bg-gray150 w-[100%] flex flex-col items-center gap-[40px] p-[40px]'>
						<Input type='text' placeholder='Your placeholder' />
						<Button name='Button' />
						<Button name='Button' disabled={true} />
						<Pagination />
						<TabsLine />
						<Checkbox />
						<TabsCircle />
						<Tabs />
						<ProgressBar progressPercentage={40} />
						<Switch />
						<Dropdown />
						<RadioGroup />
						<ButtonsArrow />
					</div>

					<div className='bg-white w-[100%] flex flex-col items-center gap-[40px] p-[40px]'>
						<Input type='text' placeholder='Your placeholder' buttonColor='blue500' />
						<Button name='Button' bgColor='blue500' hoverColor='white' disabledColor='blue200' borderColor='blue500' textHoverColor='blue500' />
						<Button name='Button' bgColor='blue500' hoverColor='white' disabledColor='blue200' disabled={true} />
						<Pagination textColor='blue500' />
						<TabsLine activeColor='blue500' />
						<TabsCircle activeColor='blue500' />
						<Tabs borderColorActive='blue500' textColorActive='blue500' />
						<ProgressBar progressPercentage={40} progressColor='blue500' />
						<Switch bgColor='gray50' ableSwitchColor='blue500' />
						<Checkbox variantCheckboxColor='blue500' />
						<Dropdown hoverColor='blue500' iconColor='blue500' />
						<RadioGroup radioColor='blue500' />
						<ButtonsArrow borderColor='blue500' />
					</div>

					<div className='bg-blue750 w-[100%] flex flex-col items-center gap-[40px] p-[40px]'>
						<Input type='text' placeholder='Your placeholder' bgInput='blue980' buttonColor='orange500' textColor='white' />
						<Button name='Button' bgColor='orange500' hoverColor='blue750' borderColor='orange500' disabledColor='orange200' textHoverColor='white' />
						<Button name='Button' disabled={true} disabledColor='orange200' />
						<Pagination textColor='white' />
						<TabsLine activeColor='orange500' bgColor='blue980' />
						<TabsCircle activeColor='orange500' bgColor='gray200' />
						<Tabs borderColor='blue980' borderColorActive='orange500' textColorActive='orange500' />
						<ProgressBar progressPercentage={40} bgColor='blue980' progressColor='orange500' />
						<Switch bgColor='blue900' ableSwitchColor='orange500' disabledSwitchColor='blue980' />
						<Checkbox variantBgCheckboxColor='blue980' variantCheckboxColor='orange500' variantIconColor='blue980' />
						<Dropdown textColor='white' bgDropdown='blue800' hoverColor='blue980' hoverText='orange500' iconColor='orange500' />
						<RadioGroup bgColor='blue980' radioColor='white' />
						<ButtonsArrow borderColor='orange500' iconColor='white' />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
