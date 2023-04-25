import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AppSettings } from "./../../settings/app-settings"

import PresentationImg from '../../components/Detail/PresentationImg'
import DataDetail from '../../components/Detail/DataDetail'

import * as consult from './../../services/ConsultServices'
import LoadingDiv from '../../components/loading/LoadingDiv'

import styles from './../../scss/style.module.scss'

const DesignDetail = (props) => {
    const appSettings = useContext(AppSettings)
    const router = useRouter()
    const arrayRouter = router.pathname.split("/")
    const strRouter = arrayRouter[1]
    const { id } = router.query

    const [dataDesign, setdataDesign] = useState({})
    const [loadDataDesign, setLoadDataDesign] = useState(true)

    useEffect(() => {
        let isSubscribed = true
        const initDesign = () => {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
            appSettings.disableScrollY()
        }

        if (isSubscribed) {
            initDesign()
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    useEffect(() => {
        const getDataDesign = async () => {
            try {
                console.log(id)
                const res = await consult.getSingleData('designs', id)
                // console.log(res)
                if (res.status === 200) {
                    setdataDesign(res.data?.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataDesign(false)
        }

        if (id) {
            setLoadDataDesign(true)
            getDataDesign()
        }
    }, [id]);

    return (
        <>
            <div className={`${styles.appContent} ${styles.disableScrollY}`}>
                <div className={styles.lineSidebarDiv} />
                {
                    loadDataDesign ? <LoadingDiv /> : <div className="row ms-lg-5">
                        <div className="col-lg-8 col-md-8">
                            <PresentationImg
                                dataShow={dataDesign}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <DataDetail
                                type={strRouter}
                                dataShow={dataDesign}
                            />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default DesignDetail