import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './menu.scss'
import {createBrowserHistory} from "history";
import instagram from "../../images/white-instagram.svg";
import telegram from "../../images/white-telegram.svg";
import phone from "../../images/phone icon.svg";
import location from "../../images/location icon.svg";
import closeButton from '../../images/close-button.svg'

const Menu = ({active,setActive,changeLan}) => {
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
    return (
        <>
            <div className={active ? "menu-navbar activeTab" : "menu-navbar" }>
                <div className="collapse menu-collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <button className={`btn close-button`} type='button' onClick={() => setActive(false)}><img src={closeButton} alt=""/></button>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ГЛАВНАЯ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/aboutCompany" className={` nav-link ${history.location.pathname === "/aboutCompany" ? "active" : ""}`}>О КОМПАНИИ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/ourPartners" className={` nav-link ${history.location.pathname === "/ourPartners" ? "active" : ""}`}>ПАРТНЕРЫ</Link></li>
                        <li className="nav-item"><Link to="/order" className={`nav-link ${history.location.pathname === "/order" ? "active" : ""}`}>НАШИ ПРЕИМУЩЕСТВА</Link></li>
                        <li className="nav-item"><Link to="/catalog" className={`nav-link ${history.location.pathname === "/catalog" ? "active" : ""}`}>КАТАЛОГ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/vacancies" className={` nav-link ${history.location.pathname === "/vacancies" ? "active" : ""}`}>ВАКАНСИИ</Link></li>
                        <li className="nav-item" href="#"><Link onClick={() => {
                            scrollToFooter();
                            setActive(false)
                        }}  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>КОНТАКТЫ</Link></li>

                    </ul>
                    <div className="changeLanguage">
                        <div className={activeButton === null ? "rus active" : "rus"} onClick={() => {
                            handleClick(null)
                            moveRight(0)
                            changeLan("ru")
                        }}>rus</div>
                        <div className={activeButton === 1 ? "uzb active" : "uzb"} onClick={() => {
                            handleClick(1)
                            moveRight(20)
                        }}>uzb</div>
                        <div
                            className={activeButton === 2 ? "eng active" : "eng"}
                            onClick={() =>  {
                                handleClick(2)
                                moveRight(45)
                            }}
                        >eng</div>
                        <span className={"language-button"} style={{left:position}}>

                        </span>
                    </div>
                    <div className="contact">
                        <div className="footer-socials">
                            <img src={instagram} alt=""/>
                            <img src={telegram} alt=""/>
                        </div>
                        <div className="footer-contacts">
                            <p className="phone-number">
                                <img src={phone} alt=""/>
                                +998 71 209 33 35
                            </p>
                            <p className="address">
                                <img src={location} alt=""/>
                                г. Ташкент, Кичик Халка Йули 4
                            </p>
                        </div>
                    </div>
                    <h6>©2024 Nobel Trade. All rights reserved.</h6>
                </div>
            </div>
        </>
    );
};

export default Menu;