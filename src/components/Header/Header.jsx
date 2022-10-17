import React from 'react';
import './Header.css';
import { ReactComponent as LogoImage } from '../../images/header__logo.svg';

function Header() {
  return (
    <div className="section section_type_promo header__panel">
			<LogoImage />
		<div className='header__btns'>
			<button type='button' className='header__btn header__signup-btn'>Регистрация</button>
			<button type='button' className='header__btn header__signin-btn'>Войти</button>
		</div>
	</div>
  );
}

export default Header;