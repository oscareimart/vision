import React from 'react'
import styles from './../../scss/style.module.scss'
import SidebarHeader from './SidebarHeader'
import SidebarNav from './SidebarNav'
import SidebarFooter from './SidebarFooter'

const Sidebar = (props) => {
    const { dataCompany } = props
    return (
        <>
            <div className={styles.appSidebar}>
                <div className={styles.menu}>
                    <SidebarHeader />
                    <SidebarNav />
                    <SidebarFooter dataCompany={dataCompany} />
                </div>
            </div>
        </>
    )
}

export default Sidebar
