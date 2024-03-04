import React, {useEffect, useState} from "react";
import './applicationModal.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import exitBtn from "../../../images/exit-btn.svg"

const ApplicationModal = ({active, setActive}) => {

    const closeModal = () => {
        setActive(false)

        document.body.style.overflow = "auto"
    }


    return (
        <>
            <div className={ active ?  "active modal" : "modal"} onClick={() => closeModal()}>
                <div className="application-dialog modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5 className={`form-modal-title`}>ВВЕДИТЕ ВАШИ ДАННЫЕ ДЛЯ ОБРАТНОЙ СВЯЗИ</h5>
                            <img className='exit-btn' src={exitBtn} alt="" onClick={() => closeModal()}/>
                            <form action="">
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Категория сотрудничества
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="firstCheckbox"/>
                                                    <label className="form-check-label" htmlFor="firstCheckbox">Масло</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="secondCheckbox"/>
                                                    <label className="form-check-label" htmlFor="secondCheckbox">Жир</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="thirdCheckbox"/>
                                                    <label className="form-check-label" htmlFor="thirdCheckbox">Сухое молоко</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="thirdCheckbox"/>
                                                <label className="form-check-label" htmlFor="thirdCheckbox">Крахмал</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="thirdCheckbox"/>
                                                <label className="form-check-label" htmlFor="thirdCheckbox">Гречка, рис</label>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>

                                <input className={`modal-form-info modal-absolute form-control`} type="text" placeholder='ФИО'/>
                                <input className={`modal-form-phoneNumber modal-form-info form-control`} type="tel" placeholder='Номер телефона'/>
                                <input className={`modal-form-company modal-form-info form-control`} type="text" placeholder='Название вашей компании'/>
                                <input className={`modal-form-email modal-form-info form-control`} type="email" placeholder='E-mail'/>
                                <textarea className={`modal-form-textarea modal-form-info form-control`} name="" id="" cols="30" rows="10" placeholder='Ваш комментарий'></textarea>
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

export default ApplicationModal ;
