import React, {useEffect, useState} from "react";
import '../applicationModal/applicationModal.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import './aboutModal.scss'
import '../applicationModal/applicationModal.scss'
import exitBtn from "../../../images/exit-btn.svg";

const AboutModal = ({modalActive,setModalActive}) =>{
    const [accordionActive, setAccordionActive] = useState(false)
    const [accordionTitle, setAccordionTitle] = useState("Тип вакансии")
    const [acc, setAcc] = useState(document.querySelector("#firstCheckbox"))


    const closeModal = () => {
        setModalActive(false)

        document.body.style.overflow = "auto"
    }

    const dataToggle = () => {
        document.querySelector('#firstCheckbox').classList.add("activate")
    }


    return (
        <>
            <div className={ modalActive ?  "active modal" : "modal"} onClick={() => closeModal()}>
                <div className="modal-dialog nodal-info" onClick={e => e.stopPropagation()}>
                    <div className="modal-content modal-height">
                        <div className="modal-body">
                            <h5 className={`form-modal-title`}>ВВЕДИТЕ ВАШИ ДАННЫЕ ДЛЯ ОТКЛИКА НА ВАКАНСИЮ </h5>
                            <img className='exit-btn' src={exitBtn} alt="" onClick={() => closeModal()}/>
                            <form action="">
                                <Accordion className="accordion-position">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        {accordionTitle}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="firstCheckbox"
                                                    // if ((accordionActive == false && accordionTitle == "Тип вакансии") || (accordionActive == true && accordionTitle == "Тип вакансии")) {
                                                    //     setAccordionTitle("Финансист")
                                                    // }else if(accordionTitle == "Бухгалтер" || accordionTitle == "Оператор колл-центра") {
                                                    //     setAccordionTitle('Финансист')
                                                    // }else {
                                                    //     setAccordionTitle("Тип вакансии")
                                                    // }
                                                />
                                                <label className="form-check-label" htmlFor="firstCheckbox">Финансист</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="secondCheckbox"/>
                                                <label className="form-check-label" htmlFor="secondCheckbox">Бухгалтер</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="thirdCheckbox"/>
                                                <label className="form-check-label" htmlFor="thirdCheckbox">Оператор колл-центра</label>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>

                                <input className={`modal-form-info modal-absolute form-control`} type="text" placeholder='ФИО'/>
                                <input className={`modal-form-phoneNumber modal-form-info form-control`} type="tel" placeholder='Номер телефона'/>
                                <textarea className={`modal-form-textarea form-control`} name="" id="" cols="30" rows="10" placeholder='Ваш комментарий'></textarea>
                                <div className="d-grid">
                                    <button className={`modal-form-btn btn`}>ОТПРАВИТЬ ЗАЯВКУ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutModal;
