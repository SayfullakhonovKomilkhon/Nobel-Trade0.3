import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar";
import "../sass/ourPartners.scss";
import capsuleMini from "../images/header-capsule-text-mini.svg";
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
import part4Logo1 from "../partnersImg/амари 1.png";
import part4Logo2 from "../partnersImg/готовим дома 1.png";
import part4Logo3 from "../partnersImg/донола 1.png";
import part4Logo4 from "../partnersImg/дончанка 1.png";
import part4Logo5 from "../partnersImg/злато 1.png";
import cardImg1 from "../partnersImg/ecoborn 1.png";
import cardImg2 from "../partnersImg/bukhara 1.png";
import Application from "../components/application/Application";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { Link } from 'react-router-dom';

const OurPartners = () => {

  const [partnersData, setPartnersData] = useState([]);

  useEffect(() => {
    const url = "https://agrodemo.uz/en/others/api/v1/partners/";
    axios
        .get(url)
        .then((response) => setPartnersData(response.data))
        .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [linkUrl, setLinkUrl] = useState('');
  const handleLinkClick = () => {
    window.location.href = linkUrl; // Переход по новому URL-адресу
  };
  return (
    <>
      <div className="partners">
        <div className="header">
          <Navbar />
          <h1>
            НАШИ ПАРТНЕРЫ <img src={capsuleMini} alt="" />
          </h1>
          <div className="partners-logo d-flex justify-content-between align-items-center flex-wrap">
            {partnersData.map((item, index) => (
                <Link to={`//${item.link}`} target="_blank"><img src={item.image} alt=""/></Link>
            ))}

            <Link target="_blank" to={"//nobeltrade.uz"} >
              <img src={logo1} alt="" />
            </Link>
            {/*<img src={logo2} alt="" />*/}
            {/*<img src={logo3} alt="" />*/}
            {/*<img src={logo4} alt="" />*/}
            {/*<img src={logo5} alt="" />*/}
            {/*<img src={logo6} alt="" />*/}
            {/*<img src={part2Logo1} alt="" />*/}
            {/*<img src={part2Logo2} alt="" />*/}
            {/*<img src={part2Logo3} alt="" />*/}
            {/*<img src={part2Logo4} alt="" />*/}
            {/*<img src={part2Logo5} alt="" />*/}
            {/*<img src={part2Logo6} alt="" />*/}
            {/*<img src={part3Logo1} alt="" />*/}
            {/*<img src={part3Logo2} alt="" />*/}
            {/*<img src={part3Logo3} alt="" />*/}
            {/*<img src={part3Logo4} alt="" />*/}
            {/*<img src={part3Logo5} alt="" />*/}
            {/*<img src={part4Logo1} alt="" />*/}
            {/*<img src={part4Logo2} alt="" />*/}
            {/*<img src={part4Logo3} alt="" />*/}
            {/*<img src={part4Logo4} alt="" />*/}
            {/*<img src={part4Logo5} alt="" />*/}
          </div>
          <h2 className="title">ДОЧЕРНИЕ КОМПАНИИ</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 my-2">
              <div className="partners-card">
                <img src={cardImg1} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 my-2">
              <div className="partners-card">
                <img src={cardImg2} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 my-2">
              <div className="partners-card"></div>
            </div>
          </div>
        </div>
        <section className="partners-application">
          <Application />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default OurPartners;
