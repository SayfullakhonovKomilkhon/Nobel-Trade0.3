import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "../sass/vacancies.scss";
import capsuleImg from "../images/header-capsule-text-mini.svg";
import arrowImg from "../images/arrow-top-right-large.svg";
import rectangleImg from "../images/squre-elemrnt.svg";
import cardImg1 from "../images/vacancies-img1.png";
import cardImg2 from "../images/vacancies-img2.png";
import cardImg3 from "../images/vacancies-img3.png";
import Footer from "../components/footer/Footer";
import AboutModal from "../components/modals/aboutModal/AboutModal";
const Vacancies = () => {
  const [aboutModal, setAboutModal] = useState(false);
  return (
    <>
      <div className="vacancies">
        <header className="header">
          <Navbar />
          <div className="header-title">
            <h1>
              <span>NOBEL</span>{" "}
              <span className="justify-content-end">TRADE</span>
            </h1>
            <p>ВАШ ШАНС НА УСПЕШНУЮ КАРЬЕРУ!</p>
          </div>
          <p className="header-subtitle">
            NOBEL TRADE — надежный поставщик сухого молока, сыворотки, крахмала
            и других продуктов в Узбекистане. Наш успех - результат работы нашей
            высококвалифицированной команды, и сейчас у нас есть возможность
            расширить эту команду!
          </p>
        </header>
        <section className="vacancies-type">
          <div className="vacancies-marketing">
            <div className="marketing-title">
              <h2>
                <span>
                  СПЕЦИАЛИСТ <img src={capsuleImg} alt="" />
                </span>
                <span>ПО МАРКЕТИНГУ</span>
              </h2>
            </div>
            <div className="marketing-subtitle">
              <p>
                Присоединяйтесь к нашей команде маркетологов, чтобы
                разрабатывать и внедрять эффективные стратегии продвижения
                продукции NOBEL TRADE. Опыт и знание рынка приветствуются.
              </p>
            </div>
            <div className="marketing-vacancy">
              <div className="marketing-info">
                <p>График работы: 9:00-18:00</p>
                <p>ЗП: от 3 000 000 сум</p>
              </div>
              <div
                className="marketing-btn"
                onClick={() => setAboutModal(true)}
              >
                <span>
                  ОТПРАВИТЬ <br />
                  СВОИ ДАННЫЕ
                  <img src={arrowImg} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="vacancies-finance vacancies-marketing">
            <div className="marketing-title">
              <h2>
                <span>
                  ФИНАНСИСТ <img src={capsuleImg} alt="" />
                </span>
              </h2>
            </div>
            <div className="marketing-subtitle">
              <p>
                Ждём вас в нашей команде финансистов Nobel Trade , чтобы
                заниматься анализом финансовых аспектов компании,принятием
                правильных решений в области инвестиций, управления рисками и
                улучшения показателей.
              </p>
            </div>
            <div className="finance-vacancy marketing-vacancy">
              <div className="marketing-info">
                <p>График работы: 9:00-18:00</p>
                <p>ЗП: от 3 000 000 сум</p>
              </div>
              <div
                className="marketing-btn"
                onClick={() => setAboutModal(true)}
              >
                <span>
                  ОТПРАВИТЬ <br />
                  СВОИ ДАННЫЕ
                  <img src={arrowImg} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
        <main className="main">
          <div className="vacancies-accountant vacancies-marketing">
            <div className="marketing-title">
              <h2>
                <span>
                  БУХГАЛТЕР <img src={capsuleImg} alt="" />
                </span>
              </h2>
            </div>
            <div className="marketing-subtitle">
              <p>
                Присоединяйтесь к нашей команде маркетологов, чтобы
                разрабатывать и внедрять эффективные стратегии продвижения
                продукции NOBEL TRADE. Опыт и знание рынка приветствуются.
              </p>
            </div>
            <div className="accountant-vacancy marketing-vacancy">
              <div className="marketing-info">
                <p>График работы: 9:00-18:00</p>
                <p>ЗП: от 3 000 000 сум</p>
              </div>
              <div
                className="marketing-btn"
                onClick={() => setAboutModal(true)}
              >
                <span>
                  ОТПРАВИТЬ <br />
                  СВОИ ДАННЫЕ
                  <img src={arrowImg} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="main-title">
            <p>
              ПОЧЕМУ ВЫБИРАЮТ <img src={rectangleImg} alt="" />
            </p>
            <h2>NOBEL TRADE?</h2>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <img src={cardImg1} alt="" />
            </div>
            <div className="col-lg-4">
              <div className="col-lg-12">
                <img src={cardImg2} alt="" />
              </div>
              <div className="col-lg-12 mt-4">
                <img src={cardImg3} alt="" />
              </div>
            </div>
          </div>
          <div className="main-about">
            <p>
              Инновационная среда и перспективы роста. Конкурентоспособная
              зарплата и бонусы. Стабильность и динамичное рабочее окружение.
              Присоединяйтесь к NOBEL TRADE и станьте частью нашей успешной
              команды, создавая будущее вместе с нами!
            </p>
          </div>
        </main>
        <AboutModal modalActive={aboutModal} setModalActive={setAboutModal} />
        <Footer />
      </div>
    </>
  );
};

export default Vacancies;
