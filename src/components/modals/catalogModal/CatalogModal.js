import React, {useEffect, useState} from 'react';
import catalogModal from '../../../images/catalog-modal-img.png'
import arrow from "../../../images/arrow-top-right-large.svg";
import './catalogModal.scss'
import OrderForm from "../orderFormModal/OrderFormModal";
import exitBtn from "../../../images/exit-btn.svg";
import axios from "axios";
const CatalogModal = ({active,setActive, title,id, selectedItemIndex,languages}) => {
    const [categoriesData, setCategoriesData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [orderModal,setOrderModal] = useState(false)
    const [language, setLanguage] = useState('ru')

    const closeModal = () => {
        setActive(false)

        document.body.style.overflow = "auto"
    }

    const openModal = () => {
        setActive(true)

        document.body.style.overflow = "hidden"
    }



    useEffect(() => {

        const fetchData = async () => {
            try {
                // Выполняем GET запрос к API
                const response = await axios.get(`https://agrodemo.uz/ru/products/api/v1/categories/`, {
                    headers: {
                        'Accept-Language': language
                    }
                });
                // Обновляем состояние с полученными данными
                setCategoriesData(response.data);
                // Устанавливаем состояние загрузки в false
                setLoading(false);
            } catch (error) {
                // Обрабатываем ошибку, если запрос не удался
                setError(error);
                // Устанавливаем состояние загрузки в false
                setLoading(false);
            }
        };


        fetchData()

    }, []);

    // console.log(categoriesData)



    useEffect(() => {
        const url = "https://agrodemo.uz/en/products/api/v1/products/";

        axios
            .get(url)
            .then((response) => setProductsData(response.data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);
    return (
        <>
            <div className={active ? "catalog-modal modal activeCatalog" : "catalog-modal modal"} onClick={() => closeModal()}>
                <div className="catalog-modal-dialog modal-dialog modal-xl" onClick={e => e.stopPropagation()}>
                    <div className="catalog-modal-content modal-content">
                        <div className="catalog-modal-body modal-body">
                            <img className='exit-btn' src={exitBtn} alt="" onClick={() => closeModal()}/>
                            <div className="catalog-body-img">
                                <img src={productsData[selectedItemIndex]?.image} alt=""/>
                            </div>
                            <div className="catalog-body-about text-white">
                                <div className="catalog-body-info">
                                    <h4 className="catalog-body-title">
                                        {categoriesData[selectedItemIndex]?.title}
                                    </h4>

                                    <div className="catalog-body-subtitle">
                                        {categoriesData[selectedItemIndex]?.description}
                                    </div>
                                </div>
                                <div className="catalog-body-btn">
                                    <button className="catalog-body-button btn" onClick={() => {
                                        setActive(false);
                                        setOrderModal(true);
                                    }}>ОФОРМИТЬ <br/>ЗАКАЗ <img src={arrow} alt=""/></button>
                                    <div className="catalog-body-term">
                                        <p className="catalog-body-term-title">Срок хранения: 12 месяцев</p>
                                        <div className="catalog-body-term-block">
                                            <p className="catalog-body-term-title d-flex">Без ГМО</p>
                                            <p className="catalog-body-term-title">Без холестерина</p>
                                        </div>
                                    </div>
                                </div>
                                <OrderForm active={orderModal} setActive={setOrderModal} title={title} id={id}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogModal;