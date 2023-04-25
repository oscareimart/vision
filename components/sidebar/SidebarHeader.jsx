import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './../../scss/style.module.scss'
import logoVision from './../../public/logo_vision.png'

const SidebarHeader = (props) => {
    const router = useRouter()
    return (
        <>
            <div className={styles.menuHeader}>
                <Image
                    src={logoVision}
                    alt="Logo Vision Moderna"
                    className={styles.logoHeader}
                    onClick={() => router.push("/home")}
                />
                <br />
                <Link href="/home">Visión Moderna</Link>
            </div>
        </>
    )
}

export default SidebarHeader