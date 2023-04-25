import React, { useState, useEffect, useContext } from 'react'
import ListItemLeft from '../components/List/ListItemLeft'
import ListItemRight from '../components/List/ListItemRight'
import styles from './../scss/style.module.scss'
import { AppSettings } from "../settings/app-settings"
import * as consult from "./../services/ConsultServices"
import LoadingDiv from '../components/loading/LoadingDiv'

const Design = (props) => {
    const appSettings = useContext(AppSettings)
    const [dataDesigns, setDataDesigns] = useState([])
    const [loadDataDesings, setLoadDataDesings] = useState(true)

    const [percentageDiv, setPercentageDiv] = useState(0)

    useEffect(() => {
        let isSubscribed = true
        const initDesign = () => {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
        }

        const getDataDesign = async () => {
            try {
                const res = await consult.getAllData('designs')
                // console.log(res)
                if (res.status === 200) {
                    setDataDesigns(res.data?.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataDesings(false)
        }

        if (isSubscribed) {
            initDesign()
            setLoadDataDesings(true)
            getDataDesign()
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    const onScroll = (e) => {
        let div = document.getElementsByClassName(styles.appContent)
        let currentTop = div[0].scrollTop
        let offsetHeigthDiv = div[0].offsetHeight
        let heightTotalScroll = div[0].scrollHeight
        let percentage = 100 * currentTop / (heightTotalScroll - offsetHeigthDiv)
        setPercentageDiv(percentage)
    }

    return (
        <>
            <div className={styles.appContent} onScroll={(e) => onScroll(e)}>
                <div className={styles.lineSidebarDiv} />
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-white">
                        {
                            loadDataDesings ? <LoadingDiv /> : <div className={styles.buildingHome}>
                                <div className={styles.barContainer}>
                                    <div
                                        className={styles.bar}
                                        style={{ height: `${percentageDiv}%` }}
                                    ></div>
                                </div>
                                {
                                    dataDesigns.length > 0 ? <>
                                        {
                                            dataDesigns?.map((row, i) => {
                                                if (i % 2 === 0) {
                                                    return (
                                                        <ListItemLeft
                                                            key={i}
                                                            rowData={row}
                                                            pathnameCust="design"
                                                        />
                                                    )
                                                } else {
                                                    return (
                                                        <ListItemRight
                                                            key={i}
                                                            rowData={row}
                                                            pathnameCust="design"
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

export default Design