import React, { useState, useEffect } from 'react'
import SidebarNavList from './SidebarNavList'
import Menu from '../../settings/menu'

const SidebarNav = (props) => {
    return (
        <>
            <div className="menu">
                {
                    Menu.map((row, i) => (
                        <SidebarNavList
                            key={i}
                            data={row}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default SidebarNav