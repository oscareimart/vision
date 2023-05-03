import React, { useState, useEffect, useContext } from 'react'
import ListItemLeft from '../components/List/ListItemLeft'
import ListItemRight from '../components/List/ListItemRight'
import styles from './../scss/style.module.scss'
import { AppSettings } from "../settings/app-settings"
import * as consult from "./../services/ConsultServices"
import LoadingDiv from '../components/loading/LoadingDiv'
import Pagination from "@mui/material/Pagination"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
})

const Water = (props) => {
    const appSettings = useContext(AppSettings)
    const [dataWaters, setDataWaters] = useState([])
    const [loadDataWaters, setLoadDataWaters] = useState(true)

    const [percentageDiv, setPercentageDiv] = useState(0)

    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        let isSubscribed = true
        const initBuilding = () => {
            appSettings.appSidebarFunc(true)
            appSettings.appFooterFunc(true)
        }

        if (isSubscribed) {
            initBuilding()
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    useEffect(() => {
        let isSubscribed = true

        const getDataWaters = async () => {
            try {
                const res = await consult.getAllData('waters')
                // console.log(res)
                if (res.status === 200) {
                    setDataWaters(res.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setLoadDataWaters(false)
        }

        if (isSubscribed) {
            setLoadDataWaters(true)
            getDataWaters()
        }

        return () => {
            isSubscribed = false
        }
    }, [currentPage]);

    const onChangePaginate = (e, page) => {
        if (page) setCurrentPage(page)
    }

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
        <ThemeProvider theme={theme}>
            <div className={styles.appContent} onScroll={(e) => onScroll(e)}>
                <div className={styles.lineSidebarDiv} />
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-white">
                        {
                            loadDataWaters ? <LoadingDiv /> : <div className={styles.buildingHome}>
                                <div className={styles.barContainer}>
                                    <div
                                        className={styles.bar}
                                        style={{ height: `${percentageDiv}%` }}
                                    ></div>
                                </div>
                                {
                                    dataWaters?.data?.length > 0 ? <>
                                        {
                                            dataWaters?.data?.map((row, i) => {
                                                if (i % 2 === 0) {
                                                    return (
                                                        <ListItemLeft
                                                            key={i}
                                                            rowData={row}
                                                            pathnameCust="building"
                                                            number={i}
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
                    {
                        dataWaters?.data?.length > 0 && <>
                            <div className="row my-5">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center text-light"
                                    style={{ zIndex: 100, color: "white" }}
                                >
                                    <Pagination
                                        count={dataWaters.meta?.pagination?.pageCount || 10}
                                        page={currentPage}
                                        defaultPage={1}
                                        size="large"
                                        onChange={(e, page) => onChangePaginate(e, page)}
                                    />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Water