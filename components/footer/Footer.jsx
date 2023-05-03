import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './../../scss/style.module.scss'
import Contact from '../contact/Contact'

const Footer = (props) => {
    const [modalContact, setModalContact] = useState(false)

    const { dataCompany = {} } = props

    return (
        <>
            <div className={styles.appFooter}>
                <div className={styles.contactFooter}>
                    <span
                        role="button"
                        onClick={() => setModalContact(!modalContact)}
                    >
                        Contáctanos <i className="fa-solid fa-envelope"></i>
                    </span>
                </div>
                <div className={styles.footerMobile}>
                    <span
                        role="button"
                        onClick={() => setModalContact(!modalContact)}
                    ><i className="fa-solid fa-envelope"></i></span>

                    {
                        dataCompany?.state?.social_networks?.data?.map((row, i) => (
                            <Link
                                key={i}
                                href={row.attributes?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={row.attributes.icon}></i>
                            </Link>
                        ))
                    }

                    {/* <Link
                        href="https://web.whatsapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                    <Link
                        href="https://www.instagram.com/visionmoderna_vm/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </Link> */}
                </div>
            </div>
            <Contact
                modal={modalContact}
                modalFunc={() => setModalContact(!modalContact)}
            />
        </>
    )
}

export default Footer
