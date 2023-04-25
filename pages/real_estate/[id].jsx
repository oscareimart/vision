import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import PresentationImg from '../../components/Detail/PresentationImg'
import DataDetail from '../../components/Detail/DataDetail'

import { AppSettings } from "./../../settings/app-settings"

import * as consult from './../../services/ConsultServices'

import styles from './../../scss/style.module.scss'
import LoadingDiv from '../../components/loading/LoadingDiv'

import { remark } from 'remark'
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkHtml from 'remark-html'

const RealEstateDetail = (props) => {
    const appSettings = useContext(AppSettings)
    const router = useRouter()
    const arrayRouter = router.pathname.split("/")
    const strRouter = arrayRouter[1]
    const { id } = router.query

    const [dataRealEstate, setDataRealEstate] = useState({})
    const [loadDataRealEstate, setloadDataRealEstate] = useState(true)

    const [dataDescription, setDataDescription] = useState({})


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
        const getDataRealEstate = async () => {
            try {
                const res = await consult.getSingleData('realties', id, {
                    populate: "deep,3"
                })
                console.log(res)
                if (res.status === 200) {
                    console.log(res.data?.data?.attributes?.description)
                    const str_html = await transformToHtml(res.data?.data?.attributes?.description)
                    // console.log(str_html)
                    res.data.data.attributes.description = str_html
                    let arrayTemp = []
                    if (res.data?.data?.attributes?.departments?.data?.length > 0) {
                        setDataDescription(res.data?.data?.attributes?.departments?.data[0])

                        for (let department of res.data?.data?.attributes?.departments?.data) {
                            // console.log(department)
                            const str_html_desc = await transformToHtml(department.attributes.description)
                            department.attributes.description = str_html_desc
                            if (department.attributes?.images?.data.length > 0) {
                                for (let image of department.attributes?.images?.data) {
                                    // console.log(image)
                                    arrayTemp.push({
                                        img: image,
                                        _id: department.id
                                    })
                                }
                            }
                        }
                    }
                    console.log(arrayTemp)
                    res.data.data.attributes.array_img = arrayTemp

                    setDataRealEstate(res.data?.data)
                }
            } catch (error) {
                console.log(error.response)
            }
            setloadDataRealEstate(false)
        }

        if (id) {
            setloadDataRealEstate(true)
            getDataRealEstate()
        }
    }, [id])

    const transformToHtml = async (str) => {
        let str_html = ''
        if (str) {
            str_html = await remark()
                .use(remarkPresetLintMarkdownStyleGuide)
                .use(remarkHtml)
                .process(str)
        }
        return str_html.value
    }

    return (
        <>
            <div className={`${styles.appContent} ${styles.disableScrollY}`}>
                <div className={styles.lineSidebarDiv} />
                {
                    loadDataRealEstate ? <LoadingDiv /> : <div className="row">
                        <div className="col-md-8">
                            <PresentationImg
                                type={strRouter}
                                dataShow={dataRealEstate}
                                dataDescription={{ state: dataDescription, func: (dat) => setDataDescription(dat) }}
                            />
                        </div>
                        <div className="col-md-4">
                            <DataDetail
                                type={strRouter}
                                dataShow={dataRealEstate}
                                dataDescription={{ state: dataDescription, func: (dat) => setDataDescription(dat) }}
                            />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default RealEstateDetail