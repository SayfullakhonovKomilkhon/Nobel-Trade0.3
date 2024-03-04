import React , {useEffect, useState} from "react";
import arrow from "../../images/arrow-top-right-large.svg";
import footerLogo from "../../images/footer-logo.svg";
import instagram from "../../images/white-instagram.svg";
import telegram from "../../images/white-telegram.svg";
import phone from "../../images/phone icon.svg";
import location from "../../images/location icon.svg";
import './footer.scss'
import AboutModal from "../modals/aboutModal/AboutModal";
import {Link} from "react-router-dom";
import {createBrowserHistory} from "history";



const Footer = () => {
    const [aboutModal, setAboutModal] = useState(false)
    const history = createBrowserHistory({window});

    const openModal = () => {
        setAboutModal(true)

        document.body.style.overflow = "hidden"
    }


    return (
        <>
            <footer className='footer'>
                <div className="footer-components">
                    <div className="footer-form">
                        <p className={`subtitle`}>АКТУАЛЬНЫЕ ВАКАНСИИ В<br/> НАШЕЙ КОМПАНИИ</p>
                        <button className='btn' onClick={() => openModal()}>ОТПРАВИТЬ<br/> СВОИ ДАННЫЕ <img src={arrow} alt=""/></button>
                    </div>
                    <div className="footer-navigate">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <img src={footerLogo} alt=""/>
                                <ul className='navbar'>
                                    <li className="nav-item"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ГЛАВНАЯ</Link></li>
                                    <li className="nav-item" href="#"><Link  to="/aboutCompany" className={` nav-link ${history.location.pathname === "/aboutCompany" ? "active" : ""}`}>О КОМПАНИИ</Link></li>
                                    <li className="nav-item" href="#"><Link  to="/ourPartners" className={` nav-link ${history.location.pathname === "/ourPartners" ? "active" : ""}`}>ПАРТНЕРЫ</Link></li>
                                    <li className="nav-item"><Link to="/order" className={`nav-link ${history.location.pathname === "/order" ? "active" : ""}`}>НАШИ ПРЕИМУЩЕСТВА</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 main-part">
                                <ul className='navbar'>
                                    <li className="nav-item"><Link to="/catalog" className={`nav-link ${history.location.pathname === "/catalog" ? "active" : ""}`}>КАТАЛОГ</Link></li>
                                    <li className="nav-item" href="#"><Link  to="/vacancies" className={` nav-link ${history.location.pathname === "/vacancies" ? "active" : ""}`}>ВАКАНСИИ</Link></li>
                                    <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>КОНТАКТЫ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="footer-socials">
                                    <Link to='https://www.instagram.com/nobeltrade?igsh=OGh0ZDc1anl4M3Iz'>
                                        <img src={instagram} alt=""/>
                                    </Link>
                                    <Link to='https://t.me/nobeltradeuz'>
                                        <img src={telegram} alt=""/>
                                    </Link>
                                </div>
                                <div className="footer-contacts">
                                    <p className="phone-number" >
                                        <img src={phone} alt=""/>
                                        <a className="text-white text-decoration-none" href="tel:998 71 209 33 35">+998 71 209 33 35</a>
                                    </p>
                                    <Link className="address text-white text-decoration-none mb-3" target="_blank" to="https://yandex.ru/maps/?um=constructor%3Aa6d13edbb38b22e4c446f8712bf01729428a23a560aab6b90796c6c27bf05b58&source=constructorLink">
                                        <img src={location} alt=""/>
                                        г. Ташкент, Кичик Халка Йули 4
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <h6>©2024 Nobel Trade. All rights reserved.</h6>
                            </div>
                            <AboutModal modalActive={aboutModal} setModalActive={setAboutModal}/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;