import React from 'react'
import styles from './../../scss/style.module.scss'
import SidebarHeader from './SidebarHeader'
import SidebarNav from './SidebarNav'
import SidebarFooter from './SidebarFooter'

const Sidebar = (props) => {
    return (
        <>
            <div className={styles.appSidebar}>
                <div className={styles.menu}>
                    <SidebarHeader />
                    <SidebarNav />
                    <SidebarFooter />
                </div>
            </div>
        </>
    )
}

export default Sidebar