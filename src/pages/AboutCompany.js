import React from "react";
import Navbar from "../components/navbar/Navbar";
import headerArrow from "../images/aboutCompany-header-arrow.svg";
import "../sass/aboutCompany.scss";
import carouselCard1 from "../images/carousel-about-card1.png";
import carouselCard2 from "../images/carousel-about-card2.png";
import carouselCard3 from "../images/carousel-about-card3.png";
import carouselCard4 from "../images/carousel-about-card4.png";
import Flickity from "react-flickity-component";
import capsuleMini from "../images/header-capsule-text-mini.svg";
import charityImg from "../images/charity-img.png";
import keyValues1 from "../images/key-values-img1.png";
import keyValues2 from "../images/key-values-img2.png";
import keyValues3 from "../images/key-values-img3.png";
import keyValues4 from "../images/key-values-img4.png";
import Application from "../components/application/Application";
import Footer from "../components/footer/Footer";

const AboutCompany = () => {
  const flickityOtions = {
    initialIndex: 1,
  };
  return (
    <>
      <div className="aboutCompany">
        <header className="header">
          <Navbar />
          <h1>
            <span className="title">
              NOBEL <span className="about-company-info">О КОМПАНИИ</span>
            </span>
            <span className="bottom-title">
              <img src={headerArrow} alt="" /> TRADE
            </span>
          </h1>
          <p className="subtitle">О КОМПАНИИ</p>
        </header>
        <section className="slider-item">
          <p className="slider-subtitle">
            NOBEL TRADE – это ведущая компания, основанная в 2009 году,
            специализирующаяся в поставке разнообразных продуктов на рынок
            Узбекистана. Она стала ключевым поставщиком сухого молока,
            сыворотки, крахмала, кукурузного и картофельного крахмала, какао,
            различных круп, а также патоки кукурузы. Несмотря на свое молодое
            направление в бизнесе, NOBEL TRADE уже успела заслужить доверие
            многих клиентов в Узбекистане, благодаря стратегическому подходу к
            качеству и надежности предоставляемых продуктов.
          </p>
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOtions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            <img className={`carded me-5`} src={carouselCard1} alt="" />
            <img className={`carded me-5`} src={carouselCard2} alt="" />
            <img className={`carded me-5`} src={carouselCard3} alt="" />
            <img className={`carded me-5`} src={carouselCard4} alt="" />
          </Flickity>
        </section>
        <main className="main">
          <div className="about-command">
            <h2 className="title">
              БОЛЬШАЯ КОМАНДА СПЕЦИАЛИСТОВ
              <img src={capsuleMini} alt="" />
            </h2>
            <p className="subtitle">
              В настоящее время в компании активно трудятся более 150
              высококвалифицированных специалистов, создавая эффективное и
              профессиональное рабочее сообщество. Компания стремится привлекать
              талантливых и преданных сотрудников, которые разделяют ее
              ценности и стремятся к общей миссии – предоставление качественных
              продуктов, соответствующих потребностям рынка.
            </p>
            <p className="subtitle">
              Основной актив NOBEL TRADE – это разветвленная дистрибуционная
              сеть, включающая 12 филиалов с офисами и складами, охватывающих
              все 12 областей страны. Эта обширная инфраструктура позволяет
              компании обеспечивать оперативные и своевременные поставки своей
              продукции по всей территории Узбекистана, эффективно удовлетворяя
              потребности клиентов.
            </p>
            <div className="map">
              <p className="experience">15 ЛЕТ ОПЫТА</p>
              <p className="branches">12 ФИЛИАЛОВ</p>
              <p className="areas">В 12 ОБЛАСТЯХ</p>
              <p className="retail-points">8000 ТОРГОВЫХ ТОЧЕК</p>
            </div>
            <div className="charity">
              <h2 className="title">
                ПОДДЕРЖКА БЛАГОТВОРИТЕЛЬНЫХПРОЕКТОВ
                <img src={capsuleMini} alt="" />
              </h2>
              <div className="subtitle">
                NOBEL TRADE не только ориентирована на коммерческий успех, но и
                вкладывает усилия в социальную ответственность. Компания
                активно участвует в инициативах по устойчивому развитию,
                поддерживает благотворительные проекты и содействует развитию
                местных сообществ.
              </div>
              <img src={charityImg} alt="" />
            </div>
            <div className="key-values">
              <h2 className="title">
                КЛЮЧЕВЫЕ ЦЕННОСТИ
                <img src={capsuleMini} alt="" />
              </h2>
              <p className="subtitle">
                Ключевые ценности NOBEL TRADE включают в себя стремление к
                постоянному совершенствованию, инновационный подход к бизнесу,
                ответственность перед клиентами и обязательства перед обществом.
                Компания активно внедряет передовые технологии и методы, чтобы
                быть в лидирующем положении на рынке и предлагать своим
                клиентам современные и конкурентоспособные продукты.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <img src={keyValues1} alt="" />
                </div>
                <div className="col-lg-6">
                  <img src={keyValues2} alt="" />
                </div>
                <div className="col-lg-6">
                  <img src={keyValues3} alt="" />
                </div>
                <div className="col-lg-12">
                  <img src={keyValues4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <Application />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutCompany;
