import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { withRouter } from "next/router"

import styles from './../../scss/style.module.scss'
import Menu from './../../settings/menu'

const Header = (props) => {
    const { dataCompany, router } = props

    const arrayRouter = router?.pathname?.split("/")
    const strRouter = arrayRouter[1]

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.appHeader}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href="/home">Visión Moderna</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            {
                                Menu?.map((row, i) => (
                                    <li
                                        className="nav-item"
                                        key={i}
                                    >
                                        <Link
                                            className={`nav-link ${`/${strRouter}` === row.path ? styles.linkActive : ""}`}
                                            href={row.path}
                                        >
                                            {row.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Header)