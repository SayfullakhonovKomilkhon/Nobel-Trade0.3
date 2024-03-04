import React, { useEffect, useRef, useState } from "react";
import "../sass/header.scss";
import headerLogoOil from "../images/header-logo.svg";
import capsule from "../images/header-capsule-text.svg";
import aboutImg from "../images/header-capsule-text-mini.svg";
import rectengleImg from "../images/squre-elemrnt.svg";
import videoPlayer from "../images/videoplayer.png";
import oilCard from "../images/oil-col-4-card.png";
import bottom5Card from "../images/bottom-col-5-card.png";
import top5Card from "../images/top-col-5-card.png";
import top3CardMain from "../images/top-col-3-card.png";
import bottom3CardMini from "../images/bottom-col-3-card.png";
import arrow from "../images/arrow-top-right-large.svg";
import years15 from "../images/15years-truck picture.png";
import uzbekistanMap from "../images/Uzbekistan map.png";
import oil8000 from "../images/8000-oil.png";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Application from "../components/application/Application";
import sunFlower from "../images/sunflower.png";
import blackSeeds from "../images/black seeds.png";
import headerOilDropLeft from "../images/header oil drop left.svg";
import headerOilDropCenter from "../images/header oil drop centre.svg";
import headerOilDropRight from "../images/header oil drop right.svg";
import Flickity from "react-flickity-component";
import "../sass/flickitySlider.scss";
import carouselCard1 from "../images/carousel-card1.png";
import carouselCard2 from "../images/carousel-card2.png";
import carouselCard3 from "../images/carousel-card3.png";
import carouselCard4 from "../images/carousel-card4.png";
import carouselCard5 from "../images/carousel-card5.png";
import ReactPlayer from "react-player";
import logo1 from "../partnersImg/алтай эко сорт.png";
import logo2 from "../partnersImg/amylco logo.png";
import logo3 from "../partnersImg/гудвилл.png";
import logo4 from "../partnersImg/cargill.png";
import logo5 from "../partnersImg/бабушкина крынка.png";
import logo6 from "../partnersImg/молочный 1м.png";
import part2Logo1 from "../partnersImg/рустарк.png";
import part2Logo2 from "../partnersImg/агроплюс.png";
import part2Logo3 from "../partnersImg/русагро.png";
import part2Logo4 from "../partnersImg/май.png";
import part2Logo5 from "../partnersImg/ресурс.png";
import part2Logo6 from "../partnersImg/савушкин.png";
import part3Logo1 from "../partnersImg/эфко.png";
import part3Logo2 from "../partnersImg/ppz.png";
import part3Logo3 from "../partnersImg/юг руси.png";
import part3Logo4 from "../partnersImg/нью био.png";
import part3Logo5 from "../partnersImg/шымкентmau.png";
import cardImg1 from "../partnersImg/ecoborn 1.png";
import cardImg2 from "../partnersImg/bukhara 1.png";
import VideoPlayer from "../components/videoplayer/VideoPlayer";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay to trigger the animation
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeoutId);

    const main = document.querySelector(".main");

    main.addEventListener("scroll", () => {
      document.querySelector(".title").classList.add("show");
    });
  });

  const flickityOtions = {
    initialIndex: 0,
  };




  return (
    <>
      <div className="home text-white">
        <header className={`header ${isVisible ? "animatedHeader" : ""}`}>
          <Navbar active={menuActive} setActive={setMenuActive} />
          <section className="header-info">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <h1>
                  NOBEL
                  <span className="header-capsule d-flex align-items-center">
                    <img
                      className={`animatedBox ${isVisible ? "appear" : ""}`}
                      src={capsule}
                      alt=""
                    />
                    <span className="header-text_style">TRADE</span>
                  </span>
                </h1>
                <p
                  className={`subtitle animatedBox ${
                    isVisible ? "appear" : ""
                  }`}
                >
                  Компания NOBEL TRADE - крупнейший импортёр подсолнечного масла
                  и пальмового жира в Республику Узбекистан
                </p>
              </div>
              <div className="col-lg-5 col-md-12">
                <img
                  className={`imgLeft ${isVisible ? "animatedImgLeft" : ""}`}
                  src={headerOilDropLeft}
                  alt=""
                />
                <img
                  className={`imgCenter ${
                    isVisible ? "animatedImgCenter" : ""
                  }`}
                  src={headerOilDropCenter}
                  alt=""
                />
                <img
                  className={`imgRight ${isVisible ? "animatedImgRight" : ""}`}
                  src={headerOilDropRight}
                  alt=""
                />
              </div>
            </div>
          </section>
        </header>
        <div className="about">
          <section className={`main`}>
            <h3 className={`title`}>
              <span className="about-capsule" data-aos="fade-up">
                О КОМПАНИИ
              </span>
              <img
                className="about-img d-flex align-items-center"
                src={aboutImg}
                alt=""
              />
            </h3>
            <p className="subtitle" data-aos="fade-up">
              NOBEL TRADE является ключевым поставщиком Сухого Молока,
              Сыворотки,
              <br />
              Крахмала,Кукурузного и Картофельного крахмала, какао, различные
              крупы а также Патоки кукуруза на рынок Узбекистана. <br /> Это
              молодое направление в бизнесе Компании, но за короткое время мы
              уже успели завоевать доверие многих клиентов в Узбекистане.
            </p>
            <div className="row">
              <div
                className="col-lg-4 col-md-12"
                data-aos="zoom-out-right"
                data-aos-anchor-placement="left-bottom"
                data-aos-duration="500"
              >
                <img className="card1 carded" src={oilCard} alt="" />
              </div>
              <div className="col-lg-5" data-aos="zoom-out-right">
                <div className="col-12">
                  <img className="card2 carded" src={top5Card} alt="" />
                </div>
                <div className="col-12">
                  <img
                    className="card2 card3 carded"
                    src={bottom5Card}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3" data-aos="zoom-out-right">
                <div className="col-12">
                  <img className="card4 carded" src={top3CardMain} alt="" />
                </div>
                <div className="col-12">
                  <img className="card5 carded" src={bottom3CardMini} alt="" />
                </div>
              </div>
            </div>
            <Flickity
              className={"carousel"}
              elementType={"div"}
              options={flickityOtions}
              disableImagesLoaded={false}
              reloadOnUpdate
              static
            >
              <img className={`carded me-4`} src={carouselCard1} alt="" />
              <img className={`carded me-4`} src={carouselCard2} alt="" />
              <img className={`carded me-4`} src={carouselCard3} alt="" />
              <img className={`carded me-4`} src={carouselCard4} alt="" />
              <img className={`carded me-4`} src={carouselCard5} alt="" />
            </Flickity>
            <h2>
              <span className="rectengle-img">
                <img
                  src={rectengleImg}
                  alt=""
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                />
              </span>
              NOBEL TRADE
            </h2>
            <p className="subtitle">
              Основана в 2009 году и в настоящее время в компании работают 150
              человек.
              <br />
              Дистрибуционная сеть компании NOBEL TRADE состоит из 12 филиалов,
              со своими офисами
              <br />и складами, в 12 областях страны.
            </p>
            <VideoPlayer/>
          </section>
          <section className="about-us">
            <div className="row">
              <div className="col-lg-4" data-aos="zoom-in">
                <div className="card-about">
                  <h3>15 лет</h3>
                  <p className="subtitle">
                    успешного опыта
                    <br /> на мировом рынке
                  </p>
                  <img src={years15} alt="" />
                </div>
              </div>
              <div className="col-lg-4" data-aos="zoom-in">
                <div className="card-about">
                  <h4>12 филиалов</h4>
                  <p className="subtitle">
                    со своими складамии <br /> офисами в 12 областях страны
                  </p>
                  <img src={uzbekistanMap} alt="" />
                </div>
              </div>
              <div className="col-lg-4" data-aos="zoom-in">
                <div className="card-about">
                  <h3>8000</h3>
                  <p className="subtitle">
                    торговых точек
                    <br /> достигает активная клиентская база
                  </p>
                  <img src={oil8000} alt="" />
                </div>
              </div>
              <div className="col-lg-12 " data-aos="zoom-in">
                <div className="card-about d-flex justify-content-between py-4">
                  <div className="col-lg-6 col-md-12">
                    <img className="h-100" src={sunFlower} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <img className={`blackSeed`} src={blackSeeds} alt="" />
                    <p className="subtitle">
                      суммарная производственная мощностьпредприятий компаний
                    </p>
                    <h3 className="title">365 000 тонн в год</h3>
                    <p className="subtitle">переработки семян подсолнуха</p>
                    <img
                      className={`blackSeed-media`}
                      src={blackSeeds}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="partners">
            <div className="partners-page">
              <h2>
                <span className="rectengle-img" data-aos="fade-right">
                  НАШИ ПАРТНЕРЫ
                </span>
                <img src={rectengleImg} alt="" data-aos="fade-right" />
              </h2>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-about d-flex justify-content-between align-items-center flex-wrap">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={part2Logo1} alt="" />
                    <img src={part2Logo2} alt="" />
                    <img src={part2Logo3} alt="" />
                    <img src={part2Logo4} alt="" />
                    <img src={part3Logo2} alt="" />
                    <img src={part2Logo5} alt="" />
                    <img src={part2Logo6} alt="" />
                    <img src={part3Logo1} alt="" />
                    <img src={part3Logo3} alt="" />
                    <img src={part3Logo4} alt="" />
                    <img src={part3Logo5} alt="" />
                  </div>
                </div>
              </div>
              <h3>ДОЧЕРНИЕ КОМПАНИИ</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="partners-card d-flex justify-content-center align-items-center">
                    <img src={cardImg1} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                  <div className="partners-card d-flex justify-content-center align-items-center">
                    <img src={cardImg2} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="partners-card"></div>
                </div>
              </div>
              <Application />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

