import React, { useState, useEffect, useContext } from 'react'
import ListItemLeft from '../components/List/ListItemLeft'
import ListItemRight from '../components/List/ListItemRight'
import styles from './../scss/style.module.scss'
import { AppSettings } from "../settings/app-settings"
import * as consult from "./../services/ConsultServices"
import LoadingDiv from '../components/loading/LoadingDiv'

const building = (props) => {
    const appSettings = useContext(AppSettings)
    const [dataBuildings, setDataBuildings] = useState([])
    const [loadDataBuildings, setLoadDataBuildings] = useState(true)

    const [percentageDiv, setPercentageDiv] = useState(0)

    useEffect(() => {
        let isSubscribed = true
        const initBuilding = () => {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
        }

        const getDataBuilding = async () => {
            try {
                const res = await consult.getAllData('constructions')
                // console.log(res)
                if (res.status === 200) {
                    setDataBuildings(res.data?.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataBuildings(false)
        }

        if (isSubscribed) {
            initBuilding()
            setLoadDataBuildings(true)
            getDataBuilding()
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    const onScroll = (e) => {
        // console.log(e)
        let div = document.getElementsByClassName(styles.appContent)
        let currentTop = div[0].scrollTop
        let offsetHeigthDiv = div[0].offsetHeight
        let heightTotalScroll = div[0].scrollHeight
        let percentage = 100 * currentTop / (heightTotalScroll - offsetHeigthDiv)
        // console.log(percentage + "%")
        setPercentageDiv(percentage)
    }

    return (
        <>
            <div className={styles.appContent} onScroll={(e) => onScroll(e)}>
                <div className={styles.lineSidebarDiv} />
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-white">
                        {
                            loadDataBuildings ? <LoadingDiv /> : <div className={styles.buildingHome}>
                                <div className={styles.barContainer}>
                                    <div
                                        className={styles.bar}
                                        style={{ height: `${percentageDiv}%` }}
                                    ></div>
                                </div>
                                {
                                    dataBuildings.length > 0 ? <>
                                        {
                                            dataBuildings?.map((row, i) => {
                                                if (i % 2 === 0) {
                                                    return (
                                                        <ListItemLeft
                                                            key={i}
                                                            rowData={row}
                                                            pathnameCust="building"
                                                        />
                                                    )
                                                } else {
                                                    return (
                                                        <ListItemRight
                                                            key={i}
                                                            rowData={row}
                                                            pathnameCust="building"
                                                        />
                                                    )
                                                }
                                            })
                                        }
                                    </> : <div>
                                        <label className='fs-3 text-center'>No se encontraron datos</label>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default building