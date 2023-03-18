import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/icons/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__logo">
            <Link to="#">
              <img src={Logo} alt="logo" className="nav__logo" />
            </Link>
          </div>

          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="#" className="nav__link">
                  NavItem1
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#" className="nav__link">
                  NavItem2
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#" className="nav__link">
                  NavItem3
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__cta cta">
          <Link to="#">Button</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
