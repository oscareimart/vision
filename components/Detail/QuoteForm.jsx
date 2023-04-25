import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styles from './../../scss/style.module.scss'

const QuoteForm = (props) => {
    const { modal, modalFunc } = props
    return (
        <>
            <Modal isOpen={modal} toggle={modalFunc} backdrop="static" className={styles.dataDetailsRealStateModal}>
                <ModalHeader className={styles.modalheaderRE}>Cotización</ModalHeader>
                <ModalBody className={styles.modalBodyRE}>
                    <div className="row mx-3">
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label'>Nombre:</label>
                            <input
                                className={`form-control ${styles.inputCustom}`}
                                type="text"
                                name='name'
                                placeholder='Nombre'
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label'>Telefono:</label>
                            <input
                                className={`form-control ${styles.inputCustom}`}
                                type="text"
                                name='name'
                                placeholder='Telefono'
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className='col-form-label'>Correo Electrónico:</label>
                            <input
                                className={`form-control ${styles.inputCustom}`}
                                type="text"
                                name='name'
                                placeholder='Correo Electrónico'
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className={styles.modalFooterRE}>
                    <button
                        className='btn btn-dark'
                        onClick={modalFunc}
                    >
                        Cancelar
                    </button>
                    <button
                        className='btn btn-dark'
                    >
                        Enviar
                    </button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default QuoteForm