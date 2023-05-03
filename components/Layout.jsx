import React, { useContext, useEffect, useState } from 'react'
import Head from "next/head"
import { AppSettings } from "../settings/app-settings"
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'

import * as consult from './../services/ConsultServices'

const Layout = ({ children }) => {
    const appSettings = useContext(AppSettings)

    const [dataCompany, setDataCompany] = useState({})
    const [loadDataCompany, setLoadDataCompany] = useState(true)

    useEffect(() => {
        let isSubscribed = true

        const getDataCompany = async () => {
            try {
                const res = await consult.getAllData('company')
                console.log(res.data)
                if (res.status === 200) {
                    setDataCompany(res.data?.data?.attributes)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataCompany(false)
        }

        if (isSubscribed) {
            setLoadDataCompany(true)
            getDataCompany()
        }

        return () => {
            isSubscribed = false
        }
    }, []);

    return (
        <>
            <Head>
                <title>Visión Moderna</title>
                <meta
                    name="description"
                    content="Visión Moderna"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {appSettings.appSidebar && <Sidebar dataCompany={{ state: dataCompany }} />}
            {appSettings.appSidebar && <Header dataCompany={{ state: dataCompany }} />}
            {{ ...children, props: { ...children.props, dataCompany } }}
            {appSettings.appFooter && <Footer dataCompany={{ state: dataCompany }} />}
        </>
    )
}

export default Layout
