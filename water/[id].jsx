import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AppSettings } from "./../../settings/app-settings"

import PresentationImg from '../../components/Detail/PresentationImg'
import DataDetail from '../../components/Detail/DataDetail'

import * as consult from './../../services/ConsultServices'
import LoadingDiv from '../../components/loading/LoadingDiv'

import styles from './../../scss/style.module.scss'

const WaterDetail = (props) => {
    const appSettings = useContext(AppSettings)
    const router = useRouter()
    const arrayRouter = router.pathname.split("/")
    const strRouter = arrayRouter[1]
    const { id } = router.query

    const [dataWater, setDataWater] = useState({})
    const [loadDataWater, setLoadDataWater] = useState(true)

    useEffect(() => {
        let isSubscribed = true
        const initBuilding = () => {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
            appSettings.disableScrollY()
        }

        if (isSubscribed) {
            initBuilding()
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    useEffect(() => {
        const getDataWater = async () => {
            try {
                const res = await consult.getSingleData('waters', id)
                // console.log(res)
                if (res.status === 200) {
                    setDataWater(res.data?.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataWater(false)
        }

        if (id) {
            setLoadDataWater(true)
            getDataWater()
        }
    }, [id]);

    return (
        <>
            <div className={`${styles.appContent} ${styles.disableScrollY}`}>
                <div className={styles.lineSidebarDiv} />
                {
                    loadDataWater ? <LoadingDiv /> : <div className="row ms-lg-5">
                        <div className="col-lg-8 col-md-8">
                            <PresentationImg
                                dataShow={dataWater}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <DataDetail
                                type={strRouter}
                                dataShow={dataWater}
                            />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default WaterDetail