import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../sass/advantages.scss";
import capsuleMini from "../images/header-capsule-text-mini.svg";
import headerFactory from "../images/Factory.png";
import headerTruck from "../images/header-Trucks.png";
import headerOil from "../images/header-Oil.png";
import callCenter from "../images/call-center-img.png";
import partners from "../images/partners.png";
import advantagesSectionTruck from "../images/advantages-section-truck.png";
import advantagesRectangle from "../images/squre-elemrnt.svg";
import nobelTradeVideo from "../images/nobel trade video screen.png";

import Footer from "../components/footer/Footer";
import Application from "../components/application/Application";

const Advantages = () => {
  return (
    <>
      <div className="advantages">
        <header className="header">
          <Navbar />
          <h1>
            <span data-aos="zoom-in">НАШИ </span>
            <img data-aos="fade-right" src={capsuleMini} alt="" /> <br />
            <span data-aos="zoom-in">ПРЕИМУЩЕСТВА</span>
          </h1>
          <p className="subtitle" data-aos="zoom-in">
            Нам доверяют ведущие производители таких стран, как: Россия,
            Украина, Беларусь, Казахстан, Китай, Иран, Афганистан,
            <br />
            Пакистан, Индия, Малайзия, Индонезия, Испания, Корт-де-Вуар
          </p>
          <div className="row">
            <div className="col-lg-12" data-aos="zoom-in-up">
              <img src={headerFactory} alt="" />
            </div>
            <div className="col-lg-6" data-aos="zoom-in-up">
              <img src={headerTruck} alt="" />
            </div>
            <div className="col-lg-6" data-aos="zoom-in-up">
              <img src={headerOil} alt="" />
            </div>
          </div>
        </header>
        <main>
          <p className="subtitle">
            По данным таможенной статистике Узбекистана, РФ и стран
            Юго-Восточной Азии, <br />
            компания Nobel Trade является крупнейшим импортёром Масла
            Подсолнечного - причем, как как фасованного, так и наливного -
            Пальмового Жира и Соевого шрота
          </p>
          <div className="companies-info" data-aos="zoom-in">
            <h2 className="title">NOBEL TRADE</h2>
            <p className="companies-subtitle">компания сочетающая в себе</p>
            <h3>СКОРОСТЬ И КАЧЕСТВО</h3>
          </div>
          <div className="row">
            <div className="col-lg-6 text-left" data-aos="zoom-out-left">
              <h4>
                СОБСТВЕННЫЙ <br />
                CALL-CENTER <img src={capsuleMini} alt="" />
              </h4>
              <p className="subtitle">
                позволяет компании осуществлять качественный сервиссвоим
                клиентам и конечным потребителям.
              </p>
            </div>
            <div className="col-lg-6" data-aos="zoom-out-right">
              <img className="half-img" src={callCenter} alt="" />
            </div>
            <div
              className="col-lg-6 title-show text-right mt-5 "
              data-aos="zoom-out-right"
            >
              <h4 className="">
                У НАШЕЙ
                <br />
                <img src={capsuleMini} alt="" />
                КОМПАНИИ
              </h4>
              <p className="subtitle">
                организован свой дистрибьюторский бизнес в Афганистане, куда
                привлечены свои собственные специалисты из Узбекистана.
              </p>
            </div>
            <div className="col-lg-6 mt-5" data-aos="zoom-out-left">
              <img className="half-img" src={partners} alt="" />
            </div>
            <div
              className="col-lg-6 title-hide text-right mt-5 "
              data-aos="zoom-out-right"
            >
              <h4 className="">
                У НАШЕЙ
                <br />
                <img src={capsuleMini} alt="" />
                КОМПАНИИ
              </h4>
              <p className="subtitle">
                организован свой дистрибьюторский бизнес в Афганистане, куда
                привлечены свои собственные специалисты из Узбекистана.
              </p>
            </div>
          </div>
        </main>
        <section>
          <h3>
            <span data-aos="zoom-in">КОМПАНИЯ </span>
            <img src={capsuleMini} alt="" data-aos="fade-right" />
            <br />
            <span data-aos="zoom-in">NOBEL LOGISTIC</span>
          </h3>
          <p className="subtitle">
            Которая входит в состав группы компаний Nobel, осуществляет
            международные перевозки в разные направления. Она одна из немногих
            компаний, которая имеет транспортный коридор в Афганистане.
          </p>
          <img
            className="advantages-truck"
            src={advantagesSectionTruck}
            alt=""
            data-aos="zoom-in-up"
          />
          <h3 className="workers">
            <span data-aos="zoom-in">
              СОТРУДНИКИ КОМПАНИИ <br />
              NOBEL TRADE{" "}
            </span>
            <img
              className="rectangle"
              src={advantagesRectangle}
              alt=""
              data-aos="fade-right"
            />
          </h3>
          <p className="subtitle" data-aos="zoom-in">
            в сплочённой командной работе, эффективно решают любые задачи, вне
            зависимости от сложности
          </p>
          <img
            className="w-100 mb-3"
            src={nobelTradeVideo}
            alt=""
            data-aos="zoom-in-up"
          />
        </section>
        <div className="application-part">
          <Application />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Advantages;
