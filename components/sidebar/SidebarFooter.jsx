import Link from 'next/link'
import React from 'react'
import styles from './../../scss/style.module.scss'

const SidebarFooter = (props) => {
    const { dataCompany } = props
    return (
        <>
            <div className={styles.menuFooter}>
                {
                    dataCompany?.state?.social_networks?.data?.map((row, i) => (
                        <Link
                            key={i}
                            href={row.attributes?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={row.attributes?.icon}></i>
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
                    href="https://www.facebook.com/visionmoderna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-facebook-f"></i>
                </Link> */}
            </div>
        </>
    )
}

export default SidebarFooter
