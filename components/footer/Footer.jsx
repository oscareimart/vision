import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './../../scss/style.module.scss'
import Contact from '../contact/Contact'

const Footer = (props) => {
    const [modalContact, setModalContact] = useState(false)

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
                    <Link href="/"><i className="fa-solid fa-envelope"></i></Link>
                    <Link
                        href="https://www.facebook.com/visionmoderna"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
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
                    </Link>
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