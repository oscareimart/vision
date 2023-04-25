import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import styles from './../scss/style.module.scss'
import { AppSettings } from "../settings/app-settings"
import LoadingDiv from '../components/loading/LoadingDiv'
import DetailTeam from '../components/team/DetailTeam'
import * as consult from './../services/ConsultServices'
import { env_values } from './../settings/env'

const Team = (props) => {
    const appSettings = useContext(AppSettings)
    const [dataTeams, setDataTeams] = useState([])
    const [loadDataTeams, setLoadDataTeams] = useState(true)

    const [modalDetail, setModalDetail] = useState(false)
    const [dataModal, setDataModal] = useState({})

    const [percentageDiv, setPercentageDiv] = useState(0)

    useEffect(() => {
        let isSubscribed = true
        const initTeam = () => {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
        }

        const getDataTeams = async () => {
            try {
                const res = await consult.getAllData("teams")
                console.log(res)
                if (res.status === 200) {
                    setDataTeams(res.data?.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataTeams(false)
        }

        if (isSubscribed) {
            initTeam()
            setLoadDataTeams(true)
            getDataTeams()
        }

        return () => {
            isSubscribed = false
        }
    }, []);

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
                    <div className="col-md-10">
                        <div className={styles.barContainer}>
                            <div
                                className={styles.bar}
                                style={{ height: `${percentageDiv}%` }}
                            ></div>
                        </div>
                        {
                            loadDataTeams ? <LoadingDiv /> : <div className="row">
                                {
                                    dataTeams?.map((row, i) => (
                                        <div
                                            className="col-xl-4 col-lg-5 col-md-6 col-sm-6"
                                            role="button"
                                            onClick={() => {
                                                setDataModal(row)
                                                setModalDetail(!modalDetail)
                                            }}
                                            key={i}
                                        >
                                            <div className={`row ${styles.teamCard}`}>
                                                <div className={`col-md-6 col-sm-6 col-6 ${styles.teamCardImg}`}>
                                                    {
                                                        row.attributes?.image?.data?.attributes?.url &&
                                                        <Image
                                                            src={`${env_values.API_URL}${row.attributes?.image?.data?.attributes?.url}`}
                                                            alt={row.attributes?.image?.data?.attributes?.alternativeText || "S/N"}
                                                            fill
                                                        />
                                                    }
                                                </div>
                                                <div className={`col-md-6 col-sm-6 col-6 ${styles.teamCardInfo}`}>
                                                    <label>{row.attributes?.name || ""}</label>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <DetailTeam
                modal={modalDetail}
                modalFunc={() => setModalDetail(!modalDetail)}
                modalData={dataModal}
            />
        </>
    )
}

export default Team