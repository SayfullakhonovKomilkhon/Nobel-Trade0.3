import React, {useEffect, useState} from 'react';
import './basketModal.scss'
import arrowImg from "../../../images/arrow-top-right-large.svg";
import catalogCard from '../../../images/catalog-card-1.png'
import CatalogModal from "../catalogModal/CatalogModal";
import exitBtn from "../../../images/exit-btn.svg";

const BasketModal = ({active,setActive, title, imageUrl,id}) => {
    const [count, setCount] = useState(1)
    const [activeModalInfo, setActiveModalInfo] = useState(false)

    const closeModal = () => {
        setActive(false)

        document.body.style.overflow = "auto"
    }

    return (
        <>
              <div className={active ? "basket-modal modal active-basket " : "basket-modal modal"} onClick={() => closeModal()}>
                  <div className="basket-dialog modal-dialog" onClick={e => e.stopPropagation()}>
                      <div className="basket-content modal-content">
                          <div className="basket-body modal-body">
                              <div className="row">
                                  <div className="col-lg-5">
                                      <div className="basket-img">
                                          <img src={imageUrl} alt=""/>
                                          <div className="marketing-btn">
                                            <span onClick={() => {
                                                setActiveModalInfo(true);
                                                setActive(false)
                                            }}>
                                                ВСЯ ИНФОРМАЦИЯ <br/>О ПРОДУКТЕ
                                                <img src={arrowImg} alt=""/>
                                            </span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-7">
                                      <img className='exit-btn' src={exitBtn} alt="" onClick={() => closeModal()}/>
                                      <div className="basket-about">
                                          <h3 className="basket-title">
                                              {title}
                                          </h3>
                                          <p className="basket-subtitle">
                                              Рафинированное вымороженное  подсолнечное масло
                                          </p>
                                          <div className="value">
                                              Объём (л): <span>4,5</span>
                                          </div>
                                          <div className="amount d-flex">
                                              <h3>Количество:</h3>
                                              <div className="amount-btn d-flex">
                                                  <span onClick={() => {if (count > 1) {
                                                      setCount(count -1)
                                                  }}}>-</span>
                                                  <p className="result">{count}</p>
                                                  <span  onClick={() => setCount(count + 1)}>+</span>
                                              </div>
                                          </div>
                                          <input className="input-name form-control" type="text" placeholder="ФИО"/>
                                          <input className="input-number form-control" type="tel" placeholder="Номер телефона"/>
                                          <input className="input-email form-control" type="email" placeholder="E-mail"/>
                                          <div className="d-grid">
                                              <button className="basket-btn btn">ОФОРМИТЬ ЗАКАЗ</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <CatalogModal active={activeModalInfo} setActive={setActiveModalInfo} title={title} id={id} imageUrl={imageUrl} />
        </>
    );
};

export default BasketModal;