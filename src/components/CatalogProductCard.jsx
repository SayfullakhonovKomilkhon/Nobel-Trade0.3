import React, {useState} from "react";
import korzino from "../images/card-korzina.svg";
import arrow from "../images/arrow-top-right-large.svg";
import card1 from '../images/catalog-card-1.png'
import CatalogModal from "./modals/catalogModal/CatalogModal";
import BasketModal from "../components/modals/basketModal/BasketModal";

export const CatalogProductCard = ({data1,}) => {

  const [activeModal, setActiveModal] = useState(false);
  const [activeBasket, setActiveBasket] = useState(false);

  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

    const openBasketModal = () => {
        setActiveBasket(true)

        document.body.style.overflow = "hidden"
    }


    const openModal = () => {
        setActiveModal(true)

        document.body.style.overflow = "hidden"
    }


  const handleClick = (event) => {
    const clickedElementId = event.target.id;
  };



  return (
      <>
          {data1.map((item,index) => (
              <div className="col-lg-3 col-sm-6 mt-3">
                  <div className="catalog-card p-3">
                      <div className="card-img">
                          <img className="main-img" src={item.image} alt=""/>
                          <img
                              className="card-korzino"
                              src={korzino}
                              alt=""
                              onClick={() => openBasketModal()}
                          />
                      </div>
                      <h3 className="text-center mt-3">{item.title}</h3>
                      <div className="card-button d-flex align-items-center">
                          <button
                              className="btn text-white"
                              id={index}
                              type={"button"}
                              onClick={(event) => {
                                  openModal()
                                  handleClick(event)
                                  setSelectedItemIndex(index)
                                  console.log(item.id)
                              }}

                          >
                              подробнее
                          </button>
                          <img className="" src={arrow} alt="" />
                      </div>
                  </div>
                  <BasketModal active={activeBasket} setActive={setActiveBasket}/>
                  <CatalogModal active={activeModal} setActive={setActiveModal} selectedItemIndex={selectedItemIndex} imageUrl={item.image} />
              </div>
          ))}
      </>
  );



};
