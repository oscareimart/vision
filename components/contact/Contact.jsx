import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styles from './../../scss/style.module.scss'

const Contact = (props) => {
    const { modal, modalFunc } = props
    const [contactForm, setContactForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (contactForm.email && contactForm.fullname && contactForm.message) {
            try {
                console.log(contactForm)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Rellene el formulario")
        }

    }

    const onChange = ({ name, value }) => {
        setContactForm({ ...contactForm, [name]: value })
    }

    const cancelForm = () => {
        setContactForm({
            fullname: "",
            phone: "",
            email: "",
            message: ""
        })
        modalFunc()
    }

    return (
        <>
            <Modal isOpen={modal} toggle={cancelForm} backdrop="static" className={styles.dataDetailsRealStateModal}>
                <ModalHeader className={styles.modalheaderRE}>Contáctanos</ModalHeader>
                <form onSubmit={(e) => onSubmit(e)}>
                    <ModalBody className={styles.modalBodyRE}>

                        <div className="row mx-3">
                            <div className="col-md-12 mb-3">
                                <label className='col-form-label'>Nombre Completo*</label>
                                <input
                                    className={`form-control ${styles.inputCustom}`}
                                    type="text"
                                    name='fullname'
                                    placeholder='Nombres y Apellidos'
                                    onChange={(e) => onChange(e.target)}
                                    value={contactForm.fullname}
                                    required
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className='col-form-label'>Teléfono</label>
                                <input
                                    className={`form-control ${styles.inputCustom}`}
                                    type="number"
                                    name='phone'
                                    placeholder='Teléfono'
                                    onChange={(e) => onChange(e.target)}
                                    value={contactForm.phone}
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className='col-form-label'>Correo Electrónico*</label>
                                <input
                                    className={`form-control ${styles.inputCustom}`}
                                    type="email"
                                    name='email'
                                    placeholder='Correo Electrónico'
                                    onChange={(e) => onChange(e.target)}
                                    value={contactForm.email}
                                    required
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className='col-form-label'>Mensaje*</label>
                                <textarea
                                    className={`form-control ${styles.inputCustom}`}
                                    name='message'
                                    placeholder='Escriba su mensaje'
                                    rows={1}
                                    onChange={(e) => onChange(e.target)}
                                    value={contactForm.message}
                                    required
                                />
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter className={styles.modalFooterRE}>
                        <button
                            className='btn btn-dark'
                            onClick={cancelForm}
                            type='button'
                        >
                            Cancelar
                        </button>
                        <button
                            className='btn btn-dark'
                            type='submit'
                        >
                            Enviar
                        </button>
                    </ModalFooter>
                </form>
            </Modal >
        </>
    )
}

export default Contact