import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styles from './../../scss/style.module.scss'
import { env_values } from './../../settings/env'

const DetailTeam = (props) => {
    const { modal, modalFunc, modalData = {} } = props
    return (
        <>
            <Modal className={styles.teamModal} isOpen={modal} toggle={modalFunc} centered>
                {/* <ModalHeader></ModalHeader> */}
                <ModalBody className={styles.teamModalBody}>
                    <div className="row d-flex justify-content-center">
                        <div className={`col-md-7 col-sm-9 col-10 ${styles.teamModalImg}`}>
                            {
                                modalData.attributes?.image?.data?.attributes?.url &&
                                <Image
                                    src={`${env_values.API_URL}${modalData.attributes?.image?.data?.attributes?.url}`}
                                    alt={modalData.attributes?.image?.data?.attributes?.alternativeText || "S/N"}
                                    fill
                                />
                            }
                        </div>
                        <div className={`col-md-5 col-sm-12 ${styles.teamModalInfo}`}>
                            <div className="row ms-1 me-3 my-2">
                                <label className='fw-bold'>{modalData.attributes?.position || ""}</label>
                                <p>{modalData.attributes?.description || ""}</p>
                                <Link href="/">ver bio</Link>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default DetailTeam