import React, { useState, useEffect } from "react";
import "../sass/katalog.scss";
import Navbar from "../components/navbar/Navbar";
import capsule from "../images/header-capsule-text.svg";
import capsuleMini from "../images/header-capsule-text-mini.svg";
import headerCard1 from "../images/header-catalog-card-img1.png";
import headerCard2 from "../images/header-catalog-card-img2.png";
import catalogTopCol7 from "../images/catalog-col-7-left.png";
import catalogTopCol5 from "../images/catalog-col-5-right.png";
import catalogTopCol12Left from "../images/catalog-col-12-top1.png";
import catalogTopCol12Right from "../images/catalog-col-12-top2.png";
import catalogBottomCol7 from "../images/catalog-col-7-bottom.png";
import catalogBottomCol5 from "../images/catalog-col-5-bottom.png";
import catalogBottomCol12Left from "../images/catalog-col-12-bottom1.png";
import catalogBottomCol12Right from "../images/catalog-col-12-bottom2.png";
import arrow from "../images/arrow-top-right-large.svg";
import korzino from "../images/card-korzina.svg";
import Application from "../components/application/Application";
import Footer from "../components/footer/Footer";
import catalog3Col7 from "../images/catalog3-col-7.png";
import catalog3Col5 from "../images/catalog3-col-5.png";
import catalog3Col6Left from "../images/catalog3-col-6left.png";
import catalog3Col6Right from "../images/catalog3-col-6right.png";
import catalog4Col7 from "../images/catalog4-col-7.png";
import catalog4Col5Top from "../images/catalog4-col-5-top.png";
import catalog4Col5Bottom from "../images/catalog4-col-5-bottom.png";
import catalogBgVideo from "../images/catalog-video.mp4";
import CatalogModal from "../components/modals/catalogModal/CatalogModal";
import BasketModal from "../components/modals/basketModal/BasketModal";
import OrderFormModal from "../components/modals/orderFormModal/OrderFormModal";
import { CatalogProductCard } from "../components/CatalogProductCard";
import axios from "axios";

const Katalog = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [activeBasket, setActiveBasket] = useState(false);

  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);


  useEffect(() => {
    const url = "https://agrodemo.uz/ru/products/api/v1/categories/";
    axios
      .get(url)
      .then((response) => setCategoriesData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const url = "https://agrodemo.uz/en/products/api/v1/products/";

    axios
      .get(url)
      .then((response) => setProductsData(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // console.log("CATEGORIES: ", categoriesData.title);
  // console.log("PRODUCTS: ", productsData);

  // const [description, setDescription] = useState("")


  // const getDescription = categoriesData.forEach((category) => {
  //   setDescription(category.description)
  // });

  const [language, setLanguage] = useState('ru');

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  return (
    <>
      <div className="catalog text-white">
        <header className="header">
          <div className="video">
            <video
              src={catalogBgVideo}
              autoPlay
              muted
              loop
              className="video-bg"
            />
          </div>
          <Navbar onChangeLanguage={handleChangeLanguage}/>
          <CatalogModal active={activeModal} setActive={setActiveModal} language={language}/>
          <div className="header-title">
            <h1>
              NOBEL{" "}
              <span>
                <img className="capsule" src={capsule} alt="" />
                TRADE
              </span>
            </h1>
            <p className="subtitle">
              <img src={capsule} alt="" />
              работает с более 25 надежными и проверенными поставщиками <br />{" "}
              из России и Казахстана, предоставляя от 30 видов торговых марок.
            </p>
          </div>
          <div
            className="row d-flex
                    justify-content-between"
          >
            <div className="col-lg-6 col-sm-12">
              <div className="catalog-card d-flex justify-content-between align-items-center my-lg-5 p-lg-3">
                <p className="subtitle text-white text-left">
                  Осуществляется и собственное производство на базе
                  маслоэкстракционного завода “Ecoborn”. Выпускается 3 вида
                  подсолнечного масла высшего сорта и кормовая продукция с
                  высокой энергетической ценностью.
                </p>
                <img src={headerCard1} alt="" />
              </div>
            </div>
            <div className="col-lg-6  col-sm-12">
              <div className="catalog-card change-catalog-card d-flex justify-content-between align-items-center my-lg-5 p-lg-3">
                <p className="subtitle text-white text-left">
                  По сей день “Nobel Trade” активно развивается и растет,
                  открывая новые направления. Исследует рынок, совершенствует
                  внутреннюю часть компании и предоставляет только проверенный
                  продукт.
                </p>
                <img src={headerCard2} alt="" />
              </div>
            </div>
          </div>
        </header>
        <section className="catalog-info-section">
          <div className="catalog-info-section-top">
            <h2 className="title pt-5 pb-3">
              <span data-aos="zoom-in">
                РАСТИТЕЛЬНОЕ <br />
              </span>
              <span data-aos="zoom-in">МАСЛО</span>
              <img
                className="pl-2 mb-1"
                src={capsuleMini}
                alt=""
                data-aos="fade-right"
              />
            </h2>
            <p className="subtitle pb-3" data-aos="zoom-in">
              Растительное масло создается из натуральных продуктов и обладает
              высокой пищевой ценностью. Его изготавливают из различных
              растительных пищевых продуктов, таких как подсолнечник, хлопок,
              оливки, соя и другие. Для приема в пищу используют рафинированное
              и нерафинированное масло.
            </p>
            <p className="subtitle" data-aos="fade-right">
              Нерафинированное масло обладает выраженным вкусом и запахом, а
              также может обладать небольшим осадком. Рафинированное масло не
              обладает ярким цветом и запахом, в нем не бывает осадков. Такое
              масло проходит больше этапов очистки, чем рафинированное масло.
            </p>
            <div className="row mt-5 d-flex justify-content-between">
              <div
                className="col-lg-7 col-md-12 col-sm-12"
                data-aos="zoom-out-right"
              >
                <img src={catalogTopCol7} alt="" />
              </div>
              <div
                className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column"
                data-aos="zoom-out-right"
              >
                <img src={catalogTopCol5} alt="" />
                <div
                  className="row p-0 d-flex
                                justify-content-between
                                align-items-center"
                >
                  <div className="col-lg-6 col-md-6 col-sm-6 pt-2">
                    <img className="" src={catalogTopCol12Left} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 pt-2 d-flex ">
                    <div className="me-2"></div>
                    <img className="" src={catalogTopCol12Right} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-info-section-bottom">
            <h2 className="title pt-5 pb-3">
              <span data-aos="zoom-in">ПОДСОЛНЕЧНОЕ</span>
              <br />
              <span data-aos="zoom-in">МАСЛО</span>
              <img
                className="pl-2 mb-1"
                src={capsuleMini}
                alt=""
                data-aos="fade-right"
              />
            </h2>
            <p className="subtitle pb-3" data-aos="zoom-in">
              Подсолнечное масло изготавливается из особых сортов семян
              подсолнечника. Оно содержит в себе большое количество витамина Е,
              который обладает полезнымидля организма свойствами. Оно удобно в
              приготовлении тем, что имеет низкую температуру застывания и не
              имеет неприятного запаха или осадка.
            </p>
            <p className="subtitle" data-aos="zoom-in">
              Подсолнечное масло подходит для приготовления любых задуманных
              блюд! Оно подходит для жарки, приготовления супов, заправления
              салатов, а также добавления в выпечку. Подсолнечное масло не
              содержит холестерина, поэтому не приносит вреда орзганизму.
            </p>
            <div className="row mt-5 d-flex justify-content-between">
              <div
                className="col-lg-7 mobile-edition"
                data-aos="zoom-out-right"
              >
                <img src={catalogBottomCol7} alt="" />
              </div>
              <div className="col-lg-5 d-flex flex-column">
                <div
                  className="row p-0 d-flex
                                justify-content-between
                                align-items-center"
                >
                  <div className="col-lg-6 pb-2" data-aos="zoom-out-right">
                    <img className="" src={catalogBottomCol12Left} alt="" />
                  </div>
                  <div
                    className="col-lg-6 pb-2 d-flex"
                    data-aos="zoom-out-right"
                  >
                    <div className="me-2"></div>
                    <img className="" src={catalogBottomCol12Right} alt="" />
                  </div>
                </div>
                <img src={catalogBottomCol5} alt="" />
              </div>
              <div className="col-lg-7 mobile-hide" data-aos="zoom-out-right">
                <img src={catalogBottomCol7} alt="" />
              </div>
            </div>
          </div>
          <div className="main-catalog">
            <h2 className="title text-center py-5">
              <img className="pl-2 mb-1" src={capsuleMini} alt="" />
              КАТАЛОГ ПРОДУКЦИИ
            </h2>
            <div className="row">
              <CatalogProductCard data1={productsData} />
            </div>

            <div className="row">
              {/*<CatalogProductCard/>*/}
            </div>
            <div className="row  pb-5">
              {/*<CatalogProductCard/>*/}
            </div>
          </div>
        </section>
        <main>
          <div className="catalog-info-section-top">
            <h2 className="title pt-5 pb-3">
              <span data-aos="zoom-in">ХЛОПКОВОЕ</span>
              <br />
              <span data-aos="zoom-in">МАСЛО</span>
              <img
                className="pl-2 mb-1"
                src={capsuleMini}
                alt=""
                data-aos="fade-right"
              />
            </h2>
            <p className="subtitle pb-3" data-aos="zoom-in">
              Хлопковое масло - это особое масло, которое широко распространено
              в Азиатских странах. Оно обладает особенным вкусом и большим
              количеством полезных веществ и элементов.
            </p>
            <p className="subtitle" data-aos="zoom-in">
              Такое масло используется при приготовлении восточных блюд и
              сладостей.Обладает коричневатым оттенком.
            </p>
            <div className="row mt-5 d-flex justify-content-between">
              <div className="col-lg-7" data-aos="zoom-out-right">
                <img src={catalog3Col7} alt="" />
              </div>
              <div
                className="col-lg-5 d-flex flex-column"
                data-aos="zoom-out-right"
              >
                <img className="mobile-hide" src={catalog3Col5} alt="" />
                <div
                  className="row p-0 d-flex
                                justify-content-between
                                align-items-center"
                >
                  <div className="col-lg-6 pt-2">
                    <img className="pr-1" src={catalog3Col6Left} alt="" />
                  </div>
                  <div className="col-lg-6 pt-2 d-flex">
                    <div className="me-2"></div>
                    <img className="pl-1" src={catalog3Col6Right} alt="" />
                  </div>
                </div>
                <img className="mobile-show" src={catalog3Col5} alt="" />
              </div>
            </div>
          </div>
          <BasketModal active={activeBasket} setActive={setActiveBasket} />
          {/*<div className="row d-flex justify-content-around my-5">*/}
          {/*  <div className="col-lg-3 mt-3" data-aos="zoom-out-right">*/}
          {/*    <div className="catalog-card p-3">*/}
          {/*      <div className="card-img" onClick={() => openBasketModal()}>*/}
          {/*        <img className="card-korzino" src={korzino} alt="" />*/}
          {/*      </div>*/}
          {/*      <h3 className="text-center mt-3">Rimado</h3>*/}
          {/*      <div className="card-button d-flex align-items-center">*/}
          {/*        <button*/}
          {/*          className="btn text-white"*/}
          {/*          type={"button"}*/}
          {/*          onClick={() => openModal()}*/}
          {/*        >*/}
          {/*          подробнее*/}
          {/*        </button>*/}
          {/*        <img className="" src={arrow} alt="" />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-lg-3 mt-3" data-aos="zoom-out-right">*/}
          {/*    <div className="catalog-card p-3">*/}
          {/*      <div className="card-img">*/}
          {/*        <img className="card-korzino" src={korzino} alt="" />*/}
          {/*      </div>*/}
          {/*      <h3 className="text-center mt-3">Rimado</h3>*/}
          {/*      <div className="card-button d-flex align-items-center">*/}
          {/*        <button className="btn text-white" type={"button"}>*/}
          {/*          подробнее*/}
          {/*        </button>*/}
          {/*        <img className="" src={arrow} alt="" />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="catalog-info-section-top">
            <h2 className="title pt-5 pb-3">
              <span data-aos="zoom-in">ПОДСОЛНЕЧНЫЙ</span>
              <br />
              <span data-aos="zoom-in">ШРОТ</span>
              <img
                className="pl-2 mb-1"
                src={capsuleMini}
                alt=""
                data-aos="fade-right"
              />
            </h2>
            <p className="subtitle pb-3" data-aos="zoom-in">
              Шрот - это продукт, получаемый после прессования и экстракции
              семян масличных культур при получении реального масла. Шрот
              незаменим в качестве высокопротеиновой добавки при производстве
              комбикормов для животных потому что он содержит клечатку, белки,
              витамины B,D, Калий и другие полезные вещества.
            </p>
            <p className="subtitle" data-aos="zoom-in">
              Шрот полезен 45%-ым содержанием протеина, а также аминокислотами,
              которые благотворно влияют на развитие молодняка. У шрота
              наименьшее содержание жира, но высокое содержание протеина.
            </p>
            <div className="row mt-5 d-flex justify-content-between">
              <div className="col-lg-7" data-aos="zoom-out-right">
                <img src={catalog4Col7} alt="" />
              </div>
              <div
                className="col-lg-5 d-flex flex-column"
                data-aos="zoom-out-right"
              >
                <div className="row p-0 ">
                  <div className="col-lg-12 col-sm-12 p-0 ">
                    <img src={catalog4Col5Top} alt="" />
                  </div>
                  <div className="col-lg-12 col-sm-12 mobile-border p-0 pt-2">
                    <img src={catalog4Col5Bottom} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around py-5">
            <div className="col-lg-3 pt-3" data-aos="zoom-out-right">
              <div className="catalog-card p-3">
                <div className="card-img">
                  <img className="card-korzino" src={korzino} alt="" />
                </div>
                <h3 className="text-center mt-3">Rimado</h3>
                <div className="card-button d-flex align-items-center">
                  <button className="btn text-white" type={"button"}>
                    подробнее
                  </button>
                  <img className="" src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-3" data-aos="zoom-out-right">
              <div className="catalog-card p-3">
                <div className="card-img">
                  <img className="card-korzino" src={korzino} alt="" />
                </div>
                <h3 className="text-center mt-3">Rimado</h3>
                <div className="card-button d-flex align-items-center">
                  <button className="btn text-white" type={"button"}>
                    подробнее
                  </button>
                  <img className="" src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-3" data-aos="zoom-out-right">
              <div className="catalog-card p-3">
                <div className="card-img">
                  <img className="card-korzino" src={korzino} alt="" />
                </div>
                <h3 className="text-center mt-3">Rimado</h3>
                <div className="card-button d-flex align-items-center">
                  <button className="btn text-white" type={"button"}>
                    подробнее
                  </button>
                  <img className="" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="catalog-application pt-3">
          <Application />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Katalog;
