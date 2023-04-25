import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { withRouter } from "next/router"
import styles from './../../scss/style.module.scss'
const SidebarNavList = (props) => {
    const { data, router } = props
    // console.log(router)
    const arrayRouter = router.pathname.split("/")
    const strRouter = arrayRouter[1]
    // console.log(strRouter)
    return (
        <>
            <div className={`${styles.menuItem} ${`/${strRouter}` === data.path ? styles.active : ""}`}>
                <Link
                    href={data.path}
                    className={styles.menuLink}
                >
                    <div className={styles.menuIcon}>
                        {
                            data?.img_ico ? <Image
                                src={data?.img_ico}
                                alt={"Icono"}
                            /> : <i className={data.icon ? data.icon : `fa-regular fa-square`}></i>
                        }
                    </div> {data.title}
                </Link>
            </div>
        </>
    )
}

export default withRouter(SidebarNavList)