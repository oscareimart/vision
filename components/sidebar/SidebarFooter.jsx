import Link from 'next/link'
import React from 'react'
import styles from './../../scss/style.module.scss'

const SidebarFooter = (props) => {
    return (
        <>
            <div className={styles.menuFooter}>
                <Link href="https://www.instagram.com/visionmoderna_vm/">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link href="https://web.whatsapp.com/">
                    <i className="fa-brands fa-whatsapp"></i>
                </Link>
                <Link href="https://www.facebook.com/visionmoderna">
                    <i className="fa-brands fa-facebook-f"></i>
                </Link>
            </div>
        </>
    )
}

export default SidebarFooter