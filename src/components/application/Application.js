import React, {useState} from "react";
import arrow from "../../images/arrow-top-right-large.svg";
import './application.scss'
import ApplicationModal from "../modals/applicationModal/ApplicationModal";


const Application = () => {
    const [applicationModalActive , setApplicationModal] = useState(false)

    const openModal = () => {
        setApplicationModal(true)

        document.body.style.overflow = "hidden"
    }


    return(
        <>
            <div className="application">
                <div className="be-partners">
                    <p className="subtitle">
                        CТАНОВИТЕСЬ ПАРТНЕРАМИ И<br/> РАЗВИВАЙТЕСЬ ВМЕСТЕ С
                    </p>
                    <button className='button-lg btn open-btn' onClick={() => openModal()}>ОТПРАВИТЬ ЗАЯВКУ <img src={arrow} alt=""/></button>
                </div>
                <p className='main-text'>NOBEL TRADE</p>
                <button className='button-md btn open-btn' onClick={() => openModal()}>ОТПРАВИТЬ ЗАЯВКУ <img src={arrow} alt=""/></button>
                <div className="pb-5"></div>
            </div>
            <ApplicationModal active={applicationModalActive} setActive={setApplicationModal}/>
        </>
    )
}
export default Application