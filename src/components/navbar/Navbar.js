import React, {useState} from "react";
import './navbar.scss'
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import {createBrowserHistory} from "history";
import burgerMenu from '../../images/burger-menu.svg'
import Menu from "../menu/Menu";
import CatalogModal from "../modals/catalogModal/CatalogModal";


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)
    const history = createBrowserHistory({window});
    const [activeButton, setActiveButton] = useState(null)
    const [position, setPosition] = useState(0)


    const scrollToFooter = () => {
        // Получаем высоту страницы
        const pageHeight = document.documentElement.scrollHeight;
        // Прокручиваем страницу до нижней части
        window.scrollTo({
            top: pageHeight,
            behavior: 'smooth' // Добавляем плавную анимацию скролла
        });
    }

    const handleClick = (buttonId) => {
        setActiveButton(buttonId)
    }
    const moveRight = (offset) => {
        setPosition(offset); // Увеличиваем текущее положение на смещение
    };

    const [language, setLanguage] = useState('ru')
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    console.log(language)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand"><img className="headerImg" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setMenuActive(true)}>
                    <img src={burgerMenu} alt=""/>
                </button>
                <Menu active={menuActive} setActive={setMenuActive}/>
                <div className="collapse nav-collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ГЛАВНАЯ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/aboutCompany" className={` nav-link ${history.location.pathname === "/aboutCompany" ? "active" : ""}`}>О КОМПАНИИ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/ourPartners" className={` nav-link ${history.location.pathname === "/ourPartners" ? "active" : ""}`}>ПАРТНЕРЫ</Link></li>
                        <li className="nav-item" href="#"><Link to="/order" className={`nav-link ${history.location.pathname === "/order" ? "active" : ""}`}>НАШИ ПРЕИМУЩЕСТВА</Link></li>
                        <li className="nav-item" href="#"><Link to="/catalog" className={`nav-link ${history.location.pathname === "/catalog" ? "active" : ""}`}>КАТАЛОГ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/vacancies" className={` nav-link ${history.location.pathname === "/vacancies" ? "active" : ""}`}>ВАКАНСИИ</Link></li>
                        <li className="nav-item" href="#" onClick={() => scrollToFooter()}><Link  className={` nav-link `}>КОНТАКТЫ</Link></li>

                    </ul>
                    <div className="changeLanguage">
                        <Link style={{textDecoration: "none"}} className={activeButton === null ? "rus active" : "rus"} onClick={() => {
                            handleClick(null)
                            moveRight(0)
                            changeLanguage('ru')
                        }}>rus</Link>
                        <Link  style={{textDecoration: "none"}} className={activeButton === 1 ? "uzb active" : "uzb"} onClick={() => {
                            handleClick(1)
                            moveRight(39)
                            changeLanguage('uz')
                        }}>uzb</Link>
                        <Link  style={{textDecoration: "none"}} className={activeButton === 2 ? "eng active" : "eng"}
                            onClick={() =>  {
                                handleClick(2)
                                moveRight(77)
                                changeLanguage('en')
                            }}
                        >eng</Link>
                        <span className={"language-button"} style={{left:position}}>

                        </span>
                        <CatalogModal languages={language}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;